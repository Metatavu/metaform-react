import React from 'react';
import { MetaformField, MetaformFieldOption } from './models/api';
import { FieldValue } from './types';
import { Form, Dropdown, DropdownProps } from "semantic-ui-react";

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

    this.state = {

    };
  }

  /**
   * Component render method
   */
  public render() {

    if (!this.props.field.name) {
      return null;
    }

    const defaultValue = "Please select an option...";
    const givenOptions = this.props.field.options || [];
    const options = givenOptions.map((option) => {

      if (this.state.selectedOption === option.name) {
        option.selected = true;
      } else {
        option.selected = false;
      }
      return {
        key: option.name,
        text: option.text,
        value: option.name,
        selected: option.selected,
      };
    }).concat([
      {
        key: defaultValue,
        text: defaultValue,
        value: defaultValue,
        selected: false,
      }
    ]);

    return (
      <div>
        <Form.Field>
          <Dropdown onChange={ this.onChange } defaultValue={ defaultValue } options={ options } />
        </Form.Field>

      </div>
    );
  }
  
  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    const selectedValue = data.value as string;
    if (data.value) {
      this.setState({
      selectedOption: selectedValue
      });
    this.props.onValueChange(selectedValue);
  }
  
}

}