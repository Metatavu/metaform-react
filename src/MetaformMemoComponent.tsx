import React from 'react';
import { MetaformField } from './generated/client/models';
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
  getFieldValue: (fieldName: string) => FieldValue,
  onFocus: () => void
}

/**
 * Component state
 */
interface State {

}

/**
 * Component for Metaform memo field
 */
export class MetaformMemoComponent extends React.Component<Props, State> {

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

    return (
      <textarea
        placeholder={ this.props.field.placeholder }
        id={ this.props.fieldId }
        aria-labelledby={ this.props.fieldLabelId }
        name={ this.props.field.name }
        title={ this.props.field.title }
        required={ this.props.field.required }
        readOnly={ this.props.formReadOnly || this.props.field.readonly }
        value={ this.props.value as string || "" }
        onChange={ this.onChange }
        onFocus={ this.props.onFocus }
      />
    );
  }

  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onValueChange(event.target.value);
  }

}