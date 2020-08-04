import React from 'react';
import { MetaformField } from './models/api';
import { FieldValue } from './types';
import { isNull } from 'util';

/**
 * Component props
 */
interface Props {
  field: MetaformField,
  fieldId: string,
  fieldLabelId: string,
  formReadOnly: boolean,
  value: FieldValue,
  onValueChange: (value: FieldValue) => void,
  setAutocompleteOptions: (path: string) => Promise<string[]>,
  onFocus: () => void
}

/**
 * Component state
 */
interface State {
  matchedItems: string[];
}

/**
 * Component for Metaform autocomplete field
 */
export class MetaformAutocompleteFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      matchedItems: []
    };
  }

  /**
   * Component render method
   */
  public render() {
    if (!this.props.field.name) {
      return null;
    }

    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <input 
          type="text"
          autoComplete="off"
          placeholder={ this.props.field.placeholder }
          id={ this.props.fieldId }  
          aria-labelledby={ this.props.fieldLabelId } 
          name={ this.props.field.name }
          title={ this.props.field.title }
          required={ this.props.field.required }
          readOnly={ this.props.formReadOnly || this.props.field.readonly }
          value={ this.props.value || "" }
          onChange={ this.onChange }
          onFocus={ this.props.onFocus }
        />
        { this.renderAutocompleteItems() }
      </div>
    );
  }

  /**
   * Render autocomplete items
   */
  private renderAutocompleteItems = () => {
    const { matchedItems } = this.state;
    return (
      <ul style={{ overflow: "hidden", whiteSpace: "nowrap", padding: 0, margin: 0, listStyleType: "none", textAlign: "left", textOverflow: "ellipsis", display: matchedItems.length > 0 ? "block" : "none", position: "absolute", backgroundColor: "#fff", border: "1px solid #000", zIndex: 99, top: "100%", left: 0, right: 0 }}>
        {
          matchedItems.map(item => {
            return <li style={{ paddingLeft: 5, paddingRight: 5, cursor: "pointer" }} onClick={ this.chooseItem(item) }>{ item }</li>
          })
        }
      </ul>
    );
  }

  /**
   * Sets field value to chosen item
   * 
   * @param item string
   */
  private chooseItem = (item: string) => () => {
    this.props.onValueChange(item);
    this.setState({
      matchedItems: []
    });
  }

  /**
   * Matches input to autocomplete items
   * 
   * @param input input string
   */
  private autocomplete = (input: string) => {
    if (!this.props.field.sourceUrl) {
      return;
    }
    const itemsPromise = this.props.setAutocompleteOptions(this.props.field.sourceUrl);
    itemsPromise.then(items => {
      if (input) {
        const matchedItems = items.filter(item => {
          return !isNull(item.match(input)) && item !== input;
        }).map(item => {
          return item;
        });
        this.setState({
          matchedItems: matchedItems
        });
      } else {
        this.setState({
          matchedItems: []
        });
      }
    });
  }

  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.autocomplete(event.target.value);
    this.props.onValueChange(event.target.value);
  }

}