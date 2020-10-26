import React, { ReactNode } from 'react';
import { MetaformSection, MetaformField } from './models/api';
import { MetaformFieldComponent } from './MetaformFieldComponent';
import { FieldValue, IconName } from './types';
import VisibileIfEvaluator from './VisibleIfEvaluator';
import { MetaformAutocompleteItem } from './MetaformAutocompleteField';

/**
 * Component props
 */
interface Props {
  section: MetaformSection,
  formReadOnly: boolean,
  metaformId: string,
  sectionId: string,
  renderBeforeField?: (fieldName?: string) => JSX.Element | void,
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
  
}

/**
 * Component for metaform section
 */
export class MetaformSectionComponent extends React.Component<Props, State> {

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
    if (!VisibileIfEvaluator.isVisible(this.props.section["visible-if"], this.props.getFieldValue)) {
      return null;
    }

    return (
      <section className="metaform-section">
        { this.renderTitle() }
        { this.renderFields() }
      </section>
    );
  }

  private renderTitle = () => {
    if (!this.props.section.title) {
      return null;
    }

    return <h2> { this.props.section.title } </h2>; 
  }

  private renderFields = () => {
    return (
      <fieldset>
        {
          (this.props.section.fields || []).map((field, i) => {
            return <MetaformFieldComponent key={ `${this.props.metaformId}-${this.props.sectionId}-field-${i}` } renderBeforeField={this.props.renderBeforeField} datePicker={ this.props.datePicker } datetimePicker={ this.props.datetimePicker } setAutocompleteOptions={ this.props.setAutocompleteOptions } uploadFile={ this.props.uploadFile } renderIcon={ this.props.renderIcon } getFieldValue={ this.props.getFieldValue } setFieldValue={ this.props.setFieldValue } formReadOnly={ this.props.formReadOnly } field={ field } metaformId={ this.props.metaformId } onSubmit={ this.props.onSubmit }/>
          })
        }
      </fieldset>
    );
  }

}
