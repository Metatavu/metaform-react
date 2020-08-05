import React, { ReactNode } from 'react';
import { MetaformSection, MetaformField } from './models/api';
import { MetaformFieldComponent } from './MetaformFieldComponent';
import { FieldValue, IconName } from './types';
import VisibileIfEvaluator from './VisibleIfEvaluator';

/**
 * Component props
 */
interface Props {
  section: MetaformSection,
  formReadOnly: boolean,
  metaformId: string,
  sectionId: string,
  getFieldValue: (fieldName: string) => FieldValue,
  setFieldValue: (fieldName: string, fieldValue: FieldValue) => void,
  uploadFile: (file: File, path: string) => void,
  setAutocompleteOptions: (path: string) => Promise<string[]>,
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
            return <MetaformFieldComponent key={ `${this.props.metaformId}-${this.props.sectionId}-field-${i}`  } setAutocompleteOptions={ this.props.setAutocompleteOptions } uploadFile={ this.props.uploadFile } renderIcon={ this.props.renderIcon } getFieldValue={ this.props.getFieldValue } setFieldValue={ this.props.setFieldValue } formReadOnly={ this.props.formReadOnly } field={ field } metaformId={ this.props.metaformId } onSubmit={ this.props.onSubmit }/>
          })
        }
      </fieldset>
    );
  }

}
