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
  requiredFieldsMissingError?: string,
  showRequiredFieldsMissingError?: boolean,
  onClick: (source: MetaformField) => void
}

/**
 * Component state
 */
interface State {
  
}

/**
 * Component for Metaform submit field
 */
export class MetaformSubmitFieldComponent extends React.Component<Props, State> {

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
      <>
        <input
          type="submit"
          disabled={ this.props.formReadOnly || this.props.field.readonly }
          value={ this.props.field.text }
          onClick={ this.onClick }
        />
        { this.renderRequiredFieldMissingError() }
      </>
    );
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
  private onClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    this.props.onClick(this.props.field);
  }

}