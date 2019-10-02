import React from 'react';
import { MetaformField, MetaformFieldOption } from './models/api';
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
  onFocus: () => void
}

/**
 * Component state
 */
interface State {

}

/**
 * Component for Metaform select field
 */
export class MetaformChecklistFieldComponent extends React.Component<Props, State> {

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
      <div>
        {this.renderChecklist()}
      </div>
    )
  }

  /**
   * Checklist render method
   */
  private renderChecklist = () => {
    return (
      (this.props.field.options || []).map(option => {
        return (
          <form key={option.name}>
            <input
              type="checkbox"
              checked={option.checked}
              value={option.name}
              onChange={event => option.checked = event.target.checked}>
            </input>
            <label>{option.text}</label>
          </form>
        )
      })
    )
  }
}