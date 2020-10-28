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
  onValueChange: (value: FieldValue) => void,
  onFocus: () => void
}

/**
 * Component state
 */
interface State {
  selectedOption: string | undefined;
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
      selectedOption: options.length > 0 ? options[0].name : undefined,
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
        <div>
          <select onChange={ this.onChange } value={ this.state.selectedOption } autoFocus={ false } >
            { (this.props.field.options || []).map((option) => <option key={ option.name } value={ option.name } { ...option.selected = this.state.selectedOption === option.name }>{ option.text }</option>) }
          </select>
        </div>
        { this.renderRequiredFieldMissingError() }
      </>
    );
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