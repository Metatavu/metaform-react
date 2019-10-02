import React from 'react';
import { MetaformField } from './models/api';
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
  today: Date;
}

/**
 * Component for Metaform select field
 */
export class MetaformDateFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      today: new Date()
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
        <input type="date" onChange={this.onDateSelect} />
      </div>
    )
  }

  /**
   * Event handler for date field value change
   * 
   * @param event event
   */
  private onDateSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.valueAsDate) {
      return null;
    }
    var todayDate = this.state.today;
    todayDate.setFullYear(event.target.valueAsDate.getFullYear());
    todayDate.setMonth(event.target.valueAsDate.getMonth());
    todayDate.setDate(event.target.valueAsDate.getDate());

    this.setState({
      today: todayDate
    })
    this.props.onValueChange(this.state.today.toLocaleDateString());
  }

}