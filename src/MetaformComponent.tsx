import React, { ReactNode } from 'react';
import { Metaform, MetaformField } from './models/api';
import { MetaformSectionComponent } from './MetaformSectionComponent';
import { FieldValue, IconName } from './types';
import { MetaformAutocompleteItem } from './MetaformAutocompleteField';

/**
 * Component props
 */
interface Props {
  form: Metaform,
  formReadOnly: boolean,
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
  metaformId: string
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
      metaformId: "metaform-" + (this.props.form.id ? `${this.props.form.id}-`: "") + this.getUniqueId()
    };
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
            return ( <MetaformSectionComponent key = {`${this.state.metaformId }-${sectionId}`} renderBeforeField={this.props.renderBeforeField} datePicker={ this.props.datePicker } datetimePicker={ this.props.datetimePicker } setAutocompleteOptions={ this.props.setAutocompleteOptions } uploadFile={ this.props.uploadFile } renderIcon={ this.props.renderIcon } getFieldValue={ this.props.getFieldValue } setFieldValue={ this.props.setFieldValue } metaformId={ this.state.metaformId } sectionId={ sectionId } formReadOnly={ this.props.formReadOnly } section={ section } onSubmit={ this.props.onSubmit }/> )
          })
        }
      </div>
    );
  }

  private renderTitle = () => {
    if (!this.props.form.title) {
      return null;
    }
    
    return (
      <h1> { this.props.form.title } </h1>
    );
  }

  /**
   * Returns unique id
   * 
   * @returns unique id
   */
  private getUniqueId = () => {
    return Math.random().toString(36).substr(2);
  }

  
}
