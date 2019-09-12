import React from 'react';
import { MetaformField, MetaformFieldOption } from './models/api';
import { FieldValue } from './types';

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
  onFocus: () => void
}

/**
 * Component state
 */
interface State {
  selectedOption?: string;
}

/**
 * Component for Metaform select field
 */
export class MetaformSelectFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);
    const options = (this.props.field.options || []);
    this.state = {
      selectedOption: options[0].name,
    };
  }

  /**
   * Component render method
   */
  public render() {
    if (!this.props.field.name) {
      return null;
    }

    (this.props.field.options || []).map((option) => {
      option.selected = this.state.selectedOption === option.name; 
    });
    
    return (
      <div>
          <select onChange={ this.onChange } value={ this.state.selectedOption } autoFocus={false} >
            { (this.props.field.options || []).map((option) => <option key={option.name} value={option.name}>{option.text}</option>) }
          </select>
      </div>
    );
  }

  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as string;

    if (event.target.value) {
      this.setState({
        selectedOption: selectedValue
      });
      this.props.onValueChange(selectedValue);
    }
  }

}