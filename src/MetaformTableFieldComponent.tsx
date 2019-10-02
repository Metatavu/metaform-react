import React from 'react';
import { MetaformField, MetaformTableColumn } from './models/api';
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
    columnWidth: any[];
    values?: {name: string, value: any}[];
}

/**
 * Component for Metaform memo field
 */
export class MetaformTableFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
        columnWidth: Array.from({ length: 0})
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
        <table>
          <style>
            {"table, th, tr, td{border:1px solid black;}"}
          </style>
          {this.renderHeader()}
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
        <button onClick={this.onButtonPress}>New row</button>
      </div>
    );
  }

  /**
   * Renders table header
   */
  private renderHeader() {
    return (
      <thead>
        <tr>
          {(this.props.field.columns || []).map((column, index) => {
            return (<th key={index}>{column.title}</th>);
          })}
        </tr>
      </thead>
    )
  }

  /**
   * Renders table body
   */
  private renderTableData() {
    return (
      this.state.columnWidth.map((i, index) => {
        return (
          <tr key={index}>
            {(this.props.field.columns || []).map((column, index) => {
              column.values = { value: JSON.stringify(this.processValues(column)) }
              column.columnWidth = this.state.columnWidth.length;

              return (<td key={index}>{<input onBlur={(event => {
                const arrayOfValues = (this.state.values || []);
                var addValues = [{
                  "name": column.name,
                  "value": event.target.value
                }].filter(value => { if (value.value != "") { return true } });
                this.setState({ values: (this.state.values || []).concat(addValues) });
              })} />}</td>)
            })}
          </tr>
        )
      })
    )
  }

  /**
   * Returns processed values for each column
   */
  private processValues = (column: MetaformTableColumn) => {
    var processedValues = (this.state.values || []).filter(value => {if (value.name === column.name) {
      return true;
    }}).map(value => {
      return (value.value)
    });
    return processedValues;
  }

  /**
   * Inserts new table row for user data entry
   */
  private onButtonPress = () => {
      const width = this.state.columnWidth;
      this.setState({
        columnWidth: this.state.columnWidth.concat(undefined)
      });
  }
}