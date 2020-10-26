import React from 'react';
import { MetaformField } from './generated/client/models';
import { FieldValue } from './types';
import { isNull } from 'util';

/**
 * Interface describing autocomplete item
 */
export interface MetaformAutocompleteItem {
  name: string;
  value: string;
}

/**
 * Component props
 */
interface Props {
  field: MetaformField,
  fieldId: string,
  fieldLabelId: string,
  formReadOnly: boolean,
  value: FieldValue,
  requiredFieldsMissingError?: string,
  showRequiredFieldsMissingError?: boolean,
  onValueChange: (value: FieldValue) => void,
  setAutocompleteOptions: (path: string) => Promise<string[] | MetaformAutocompleteItem[]>,
  onFocus: () => void
}

/**
 * Component state
 */
interface State {
  matchedItems: MetaformAutocompleteItem[];
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
      <>
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
        { this.renderRequiredFieldMissingError() }
      </>
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
            return <li style={{ paddingLeft: 5, paddingRight: 5, cursor: "pointer" }} onClick={ this.chooseItem(item.value) }>{ item.name }</li>
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
      if (input && items.length > 0) {
        const normalizedItems: MetaformAutocompleteItem[] = (items as any).map((item: string | MetaformAutocompleteItem) => {
          if (typeof item == "string") {
            return { name: item, value: item };
          }
          return item;
        });
        const matchedItems = normalizedItems.filter(item => {
          return !isNull(item.name.match(input)) && item.name !== input;
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
   * Renders required field missing error
   */
  private renderRequiredFieldMissingError = () => {
    const { showRequiredFieldsMissingError, requiredFieldsMissingError, field } = this.props;
    const { required } = field;

    if (!required || !showRequiredFieldsMissingError) {
      return;
    }

    return (
      <p className="metaform-field-missing-error">{ requiredFieldsMissingError }</p>
    );
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