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
export class MetaformTimeFieldComponent extends React.Component<Props, State> {

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
                <input type="time" onChange={this.onTimeSelect} />
            </div>
        )
    }

    /**
     * Event handler for time field value change
     * 
     * @param event event
     */
    private onTimeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.valueAsDate) {
            return null;
        }

        var todayDate = this.state.today;
        todayDate.setHours(event.target.valueAsDate.getUTCHours(), event.target.valueAsDate.getUTCMinutes());
        this.setState({
            today: todayDate
        })
        this.props.onValueChange(this.state.today.toLocaleTimeString().substring(0, 5));
    }
}