import React, { ReactNode } from 'react';
import { Metaform, MetaformField, MetaformFieldType } from './generated/client/models';
import { MetaformSectionComponent } from './MetaformSectionComponent';
import { FieldValue, FileFieldValueItem, IconName, Strings, ValidationErrors, ValidationStatus } from './types';
import { MetaformAutocompleteItem } from './MetaformAutocompleteField';
import * as EmailValidator from 'email-validator';
import VisibileIfEvaluator from './VisibleIfEvaluator';
import ContextUtils from './context-utils';

/**
 * Component props
 */
interface Props {
  form: Metaform;
  formReadOnly: boolean;
  renderBeforeField?: (fieldName?: string) => JSX.Element | void;
  contexts?: string[];
  strings: Strings;
  requiredFieldsMissingError?: string;
  showRequiredFieldsMissingError?: boolean;
  getFieldValue: (fieldName: string) => FieldValue
  setFieldValue: (fieldName: string, fieldValue: FieldValue) => void;
  datePicker: (fieldName: string, onChange: (date: Date) => void) => JSX.Element;
  datetimePicker: (fieldName: string, onChange: (date: Date) => void) => JSX.Element;
  uploadFile: (fieldName: string, file: FileList | File, path: string) => void;
  setAutocompleteOptions: (path: string, input?: string) => Promise<string[] | MetaformAutocompleteItem[]>;
  renderIcon: (icon: IconName, key: string) => ReactNode;
  renderSlider?: (fieldName: string) => JSX.Element | null;
  onSubmit: (source: MetaformField) => void;
  onFileShow: (fieldName: string, value: FileFieldValueItem) => void;
  onFileDelete: (fieldName: string, value: FileFieldValueItem) => void;
}

/**
 * Component state
 */
interface State {
  metaformId: string;
  validationErrors: ValidationErrors;
}

/**
 * Component for metaform
 */
export class MetaformComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      metaformId: "metaform-" + (this.props.form.id ? `${this.props.form.id}-`: "") + this.getUniqueId(),
      validationErrors: {}
    };
  }

  /**
   * Component did mount life-cycle method
   */
  public componentDidMount = () => {
    this.validateFields();
  }

  /**
   * Component render method
   */
  public render() {
    const sections = this.props.form.sections || [];

    return (
      <div className="metaform">
        {
          this.renderTitle()
        }
        {
          sections.map((section, i) => {
            const sectionId = `section-${i}`;

            return (
              <MetaformSectionComponent 
                key={`${this.state.metaformId }-${sectionId}`}
                validationErrors={ this.state.validationErrors }
                strings={ this.props.strings }
                renderBeforeField={this.props.renderBeforeField}
                datePicker={ this.props.datePicker } 
                datetimePicker={ this.props.datetimePicker } 
                setAutocompleteOptions={ this.props.setAutocompleteOptions } 
                uploadFile={ this.props.uploadFile }
                renderIcon={ this.props.renderIcon } 
                renderSlider={ this.props.renderSlider }
                getFieldValue={ this.props.getFieldValue } 
                setFieldValue={ this.setFieldValue } 
                metaformId={ this.state.metaformId } 
                sectionId={ sectionId } 
                formReadOnly={ this.props.formReadOnly } 
                section={ section }
                contexts={ this.props.contexts }
                onSubmit={ this.props.onSubmit }
                requiredFieldsMissingError={ this.props.requiredFieldsMissingError }
                showRequiredFieldsMissingError={ this.props.showRequiredFieldsMissingError }
                onFileShow={ this.props.onFileShow }
                onFileDelete={ this.props.onFileDelete }
                fileShowButtonText={ this.props.strings.fileField.showFileButton }
                fileDeleteButtonText={ this.props.strings.fileField.deleteFileButton }
              />
            )
          })
        }
      </div>
    );
  }

  /**
   * Renders form title
   */
  private renderTitle = () => {
    if (!this.props.form.title) {
      return null;
    }
    
    return (
      <h1> { this.props.form.title } </h1>
    );
  }

  /**
   * Validates all visible form fields
   */
  private validateFields = () => {
    const { form, contexts, getFieldValue } = this.props;
    const validationErrors: ValidationErrors = {};
    
    (form.sections || [])
      .filter(section => {
        return VisibileIfEvaluator.isVisible(section.visibleIf, getFieldValue);
      })
      .forEach(section => {
        (section.fields || [])
          .filter(field => !!field.name)
          .filter(field => ContextUtils.isEnabledContext(contexts, field.contexts))
          .filter(field => {
            return VisibileIfEvaluator.isVisible(field.visibleIf, getFieldValue);
          })
          .forEach(field => {
            const fieldName = field.name || "";
            const validationError = this.validateFieldValue(field, getFieldValue(fieldName!));
            if (validationError) {
              validationErrors[fieldName] = validationError;  
            }
          });
      });

    this.setState({
      validationErrors: validationErrors
    });
  }

  /**
   * Validates field value
   * 
   * @param field field
   * @param value value
   * @returns validation result
   */
  private validateFieldValue = (field: MetaformField, value: FieldValue): ValidationStatus | null => {
    if (field.required && !value) {
      return "missing-required";
    } 
    
    if (field.type === MetaformFieldType.Email && value && !EmailValidator.validate(value as string)) {
      return "invalid-email";
    }
    
    return null;
  }

  /**
   * Returns unique id
   * 
   * @returns unique id
   */
  private getUniqueId = () => {
    return Math.random().toString(36).substr(2);
  }

  /**
   * Sets field value
   * 
   * @param fieldName field name
   * @param fieldValue field value
   */
  private setFieldValue = (fieldName: string, fieldValue: FieldValue) => {
    const { setFieldValue } = this.props;
    setFieldValue(fieldName, fieldValue);
    this.validateFields();
  }

}
