import React, { ReactNode } from 'react';
import { MetaformField, MetaformFieldType } from './models/api';
import { MetaformTextFieldComponent } from './MetaformTextFieldComponent';
import { FieldValue, IconName } from './types';
import VisibileIfEvaluator from './VisibleIfEvaluator';
import { MetaformRadioFieldComponent } from './MetaformRadioFieldComponent';
import { MetaformSubmitFieldComponent } from './MetaformSubmitFieldComponent';
import { MetaformMemoComponent } from './MetaformMemoComponent';

/**
 * Component props
 */
interface Props {
  formReadOnly: boolean,
  metaformId: string,
  field: MetaformField,
  getFieldValue: (fieldName: string) => FieldValue,
  setFieldValue: (fieldName: string, fieldValue: FieldValue) => void,
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
    if (!VisibileIfEvaluator.isVisible(this.props.field["visible-if"], this.props.getFieldValue)) {
      return null;
    }

    const classNames = [ "metaform-field" ];

    if (this.state.pristine) {
      classNames.push("pristine");
    }

    return (
      <div className={ classNames.join(" ") } key={ this.getFieldId() }>
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
        return <MetaformTextFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus }/>
      case MetaformFieldType.Memo:
        return <MetaformMemoComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus }/>
      case MetaformFieldType.Radio:
        return <MetaformRadioFieldComponent renderIcon={ this.props.renderIcon } formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onValueChange={ this.onValueChange } value={ this.getFieldValue() } onFocus={ this.onFocus }/>
      case MetaformFieldType.Submit:
        return <MetaformSubmitFieldComponent formReadOnly={ this.props.formReadOnly } fieldLabelId={ this.getFieldLabelId() } fieldId={ this.getFieldId() } field={ this.props.field } onClick={ this.props.onSubmit } value={ this.getFieldValue() } />
      default:
        return <div style={{ color: "red" }}> Unknown field type { this.props.field.type } </div>
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
   * Event handler for field value change
   */
  private onValueChange = (value: FieldValue) => {
    if (!this.props.field.name) {
      return null;
    }

    this.props.setFieldValue(this.props.field.name, value);
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