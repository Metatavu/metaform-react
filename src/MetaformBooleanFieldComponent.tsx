import React, { ReactNode } from 'react';
import { MetaformField } from './generated/client/models';
import { FieldValue, IconName } from './types';

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
  onFocus: () => void,
  renderIcon: (icon: IconName, key: string) => ReactNode
}

/**
 * Component state
 */
interface State {
  
}

/**
 * Component for radio field
 */
export class MetaformBooleanFieldComponent extends React.Component<Props, State> {

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

    const option = this.props.field;
    const value = this.props.value as string;

    return (
      <>
        <div>
          <label className="metaform-boolean-field-label" key={ `${this.props.fieldId}-${this.props.field.name}-label` } htmlFor={ `${this.props.fieldId}-${this.props.field.name}` }>
            { this.renderOptionValue(option, value) }
            <span> { option.text } </span>
          </label>
        </div>
        { this.renderRequiredFieldMissingError() }
      </>
    );
  }

  /**
   * Renders field option's value
   */
  private renderOptionValue = (option: MetaformField, value: string) => {
    const readOnly = this.props.formReadOnly || this.props.field.readonly;
    const checked: boolean = value ? true : false;

    if (readOnly) {
      if (checked) {
        return this.props.renderIcon("check-square-o", `${this.props.fieldId}-${option.name}-icon`);
      } else { 
        return this.props.renderIcon("square-o", `${this.props.fieldId}-${option.name}-icon-checked`);
      }
    } else {
      return <input 
        key={ `${this.props.fieldId}-${option.name}-input` }
        type="checkbox" 
        id={ `${this.props.fieldId}-${option.name}` }  
        aria-labelledby={ this.props.fieldLabelId } 
        name={ this.props.field.name }
        title={ this.props.field.title }
        required={ this.props.field.required }
        readOnly={ this.props.formReadOnly || this.props.field.readonly }
        value={ value }
        checked={ checked }
        onChange={ this.onChange }
        onFocus={ this.props.onFocus }
        />
    }
  }

  /**
   * Renders required field missing error
   */
  private renderRequiredFieldMissingError = () => {
    const { showRequiredFieldsMissingError, requiredFieldsMissingError, field, value } = this.props;
    const { required } = field;

    if (!required || !showRequiredFieldsMissingError || value) {
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
    this.props.onValueChange(event.target.value ? "" : "checked");
  }

}