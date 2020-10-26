import React, { ReactNode } from 'react';
import { FieldValue, IconName } from './types';
import VisibileIfEvaluator from './VisibleIfEvaluator';
import { MetaformMemoComponent } from './MetaformMemoComponent';
import { MetaformField, MetaformFieldType } from './generated/client/models';
import { MetaformTextFieldComponent } from './MetaformTextFieldComponent';
import { MetaformRadioFieldComponent } from './MetaformRadioFieldComponent';
import { MetaformSubmitFieldComponent } from './MetaformSubmitFieldComponent';
import { MetaformSelectFieldComponent } from './MetaformSelectFieldComponent';
import { MetaformBooleanFieldComponent } from './MetaformBooleanFieldComponent';
import { MetaformHtmlComponent } from './MetaformHtmlComponent';
import { MetaformEmailFieldComponent } from './MetaformEmailComponent';
import { MetaformUrlFieldComponent } from './MetaformUrlField';
import { MetaformAutocompleteFieldComponent, MetaformAutocompleteItem } from './MetaformAutocompleteField';
import { MetaformHiddenFieldComponent } from './MetaformHiddenFieldComponent';
import { MetaformFilesFieldComponent } from './MetaformFilesFieldComponent';
import { MetaformDateFieldComponent } from './MetaformDateFieldComponent';
import { MetaformDateTimeFieldComponent } from './MetaformDateTimeFieldComponent';

/**
 * Component props
 */
interface Props {
  formReadOnly: boolean,
  metaformId: string,
  field: MetaformField,
  renderBeforeField?: (fieldName?: string) => JSX.Element | void,
  contexts?: string[],
  getFieldValue: (fieldName: string) => FieldValue,
  setFieldValue: (fieldName: string, fieldValue: FieldValue) => void,
  datePicker: (fieldName: string, onChange: (date: Date) => void) => JSX.Element,
  datetimePicker: (fieldName: string, onChange: (date: Date) => void) => JSX.Element,
  uploadFile: (fieldName: string, file: FileList | File, path: string) => void,
  setAutocompleteOptions: (path: string, input?: string) => Promise<string[] | MetaformAutocompleteItem[]>,
  renderIcon: (icon: IconName, key: string) => ReactNode,
  onSubmit: (source: MetaformField) => void
}

/**
 * Component state
 */
interface State {
  pristine: boolean
}

/**
 * Component for metaform field
 */
export class MetaformFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      pristine: true
    };
  }

  /**
   * Component render method
   */
  public render() {
    if (!this.isEnabledContext()) {
      return null;
    }

    if (!VisibileIfEvaluator.isVisible(this.props.field.visibleIf, this.props.getFieldValue)) {
      return null;
    }

    const classNames = [ "metaform-field" ];

    if (this.state.pristine) {
      classNames.push("pristine");
    }

    return (
      <div className={ classNames.join(" ") } key={ this.getFieldId() }>
        { this.props.renderBeforeField && this.props.renderBeforeField(this.props.field.name) }
        { this.renderTitle() }
        { this.renderInput() }
        { this.renderHelp() }
      </div>
    );
  }

  /**
   * Renders field title
   */
  private renderTitle = () => {
    if (!this.props.field.title) {
      return null;
    }

    const title = `${this.props.field.title}` + (this.props.field.required ? " *" : "");

    return (
      <div className="metaform-field-label-container"> 
        <label className="metaform-field-label"> { title } </label> 
      </div>
    ) 
  }

  /**
   * Renders field's input
   */
  private renderInput = () => {
    switch (this.props.field.type) {
      case MetaformFieldType.Text:
        return <MetaformTextFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } getFieldValue={ this.getFieldValue } />;
      case MetaformFieldType.Memo:
        return <MetaformMemoComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } getFieldValue={ this.getFieldValue } />;
      case MetaformFieldType.Radio:
        return <MetaformRadioFieldComponent renderIcon={ this.props.renderIcon } formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Select:
        return <MetaformSelectFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Submit:
        return <MetaformSubmitFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onClick={ this.props.onSubmit } value={ this.getFieldValue() } />;
      case MetaformFieldType.Boolean:
        return <MetaformBooleanFieldComponent renderIcon={ this.props.renderIcon }  formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Html:
        return <MetaformHtmlComponent fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } getFieldValue={ this.getFieldValue } />;
      case MetaformFieldType.Email:
        return <MetaformEmailFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Url:
        return <MetaformUrlFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Autocomplete:
        return <MetaformAutocompleteFieldComponent setAutocompleteOptions={ this.props.setAutocompleteOptions } formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Hidden:
        return <MetaformHiddenFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Files:
        return <MetaformFilesFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onFileUpload={ this.onFileUpload } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } />;
      case MetaformFieldType.Date:
        return <MetaformDateFieldComponent datePicker={ this.props.datePicker } formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } getFieldValue={ this.getFieldValue } />;
      case MetaformFieldType.DateTime:
        return <MetaformDateTimeFieldComponent datetimePicker={ this.props.datetimePicker } formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus } getFieldValue={ this.getFieldValue } />;
      default:
        return <div style={{ color: "red" }}> Unknown field type { this.props.field.type } </div>;
    }
  }

  /**
   * Renders field help
   */
  private renderHelp = () => {
    if (!this.props.field.help) {
      return null;
    }

    return (
      <div className="metaform-field-help-container"> 
        <small className="metaform-field-help"> { this.props.field.help } </small> 
      </div>
    ) 
  }

  /**
   * Returns field's id
   */
  private getFieldId = () => {
    return `${this.props.metaformId}-field-${this.props.field.name}`;
  }

  /**
   * Returns field label's id
   */
  private getFieldLabelId = () => {
    return `${this.getFieldId()}-label`;
  }

  /**
   * Returns field's value
   * 
   * @returns field's value
   */
  private getFieldValue = (): FieldValue => {
    if (!this.props.field.name) {
      return null;
    }

    return this.props.getFieldValue( this.props.field.name );
  }

  /**
   * Returns whether field context is within enabled contexts
   * 
   * @returns whether field context is within enabled contexts
   */
  private isEnabledContext = () => {
    const fieldContexts = this.props.field.contexts || [];
    const enabledContexts = this.props.contexts || [];

    if (enabledContexts.length === 0 || fieldContexts.length === 0) {
      return true;
    }

    return !!enabledContexts.find(context => fieldContexts.includes(context));
  }

  /**
   * Event handler for field value change
   */
  private onValueChange = (value: FieldValue) => {
    if (!this.props.field.name) {
      return null;
    }

    this.props.setFieldValue(this.props.field.name, value);
  }

  /**
   * Event handler for file upload
   * 
   * @param files file list
   * @param path string
   * @param maxFileSize number
   * @param uploadSingle boolean
   */
  private onFileUpload = (fieldName: string, files: FileList, path: string, maxFileSize?: number, uploadSingle?: boolean) => {
    if (uploadSingle) {
      const file = files[0];
      if (maxFileSize && file.size > maxFileSize) {
        throw new Error(`Couldn't upload the file because it exceeded the maximum file size of ${ maxFileSize }`);
      }
      return this.props.uploadFile(fieldName, file, path);
    } else {
      for (let i = 0; i < files.length; i++) {
        if (maxFileSize && files[i].size > maxFileSize) {
          throw new Error(`Couldn't upload the files because one of them exceeded the maximum file size of ${ maxFileSize }`);
        }
      }
      this.props.uploadFile(fieldName, files, path);
    }
  }


  /**
   * Event handler for field value change
   */
  private onFocus = () => {
    this.setState({
      pristine: false
    });
  }
}