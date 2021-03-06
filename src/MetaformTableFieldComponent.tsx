import React, { ReactNode } from 'react';
import { MetaformField, MetaformTableColumn, MetaformTableColumnType } from './generated/client/models';
import { FieldValue, IconName, Strings, TableFieldValue, TableFieldRowValue, TableFieldCellValue } from './types';

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
  onFocus: () => void,
  renderIcon: (icon: IconName, key: string) => ReactNode;
  strings: Strings;
}

/**
 * Component state
 */
interface State {
  
}

/**
 * Component for table field
 */
export class MetaformTableFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = { };
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
        <table style={{ width: "100%" }}>
          { this.renderHeader() }
          { this.renderBody() }
        </table>
        <div>
          { this.renderAddRowButton() }
        </div>
      </div>
    );
  }

  /**
   * Renders table header
   */
  private renderHeader = () => {
    const columns = this.props.field.columns || [];
    
    return (
      <thead>
        <tr>
          { columns.map(this.renderHeaderColumn) }
        </tr>
      </thead>
    );
  }

  /**
   * Renders table header column
   * 
   * @param column column
   */
  private renderHeaderColumn = (column: MetaformTableColumn) => {
    return (
      <th style={{ textAlign: "left" }} key={ column.name }> { column.title || "" } </th>
    );
  }

  /**
   * Renders table body
   */
  private renderBody = () => {
    const rowValues = this.getRowValues();

    return (
      <tbody>
        {
          rowValues.map((rowValue: TableFieldRowValue, rowNumber: number) => this.renderRow(rowNumber, rowValue))
        }
      </tbody>
    );
  }

  /**
   * Renders an add row button
   */
  private renderAddRowButton = () => {
    if (this.props.field.addRows === false) {
      return null;
    }

    if (this.props.formReadOnly || this.props.field.readonly) {
      return null;
    }
    
    return (
      <a style={{ cursor: "pointer" }} onClick={ this.onAddRowButtonClick }>
        { this.props.renderIcon("add", "add") }
        <span style={{ verticalAlign: "super" }}>{ this.props.strings.tableField.addNewRow } </span>
      </a>
    );
  }

  /**
   * Renders row element
   * 
   * @param rowNumber row number
   * @param rowValue row value
   */
  private renderRow = (rowNumber: number, rowValue: TableFieldRowValue) => {
    const columns = this.props.field.columns || [];

    return (
      <tr key={ rowNumber }>
        {
          columns.map(column => {
            return this.renderCell(rowNumber, column, rowValue[column.name] || null);
          })
        }
      </tr>
    );
  }

  /**
   * Renders cell element
   * 
   * @param rowNumber row number
   * @param column column
   * @param value value
   */
  private renderCell = (rowNumber: number, column: MetaformTableColumn, value: TableFieldCellValue) => {
    return (
      <td key={ column.name }>
        {
          this.renderCellInput(rowNumber, column, value)
        }
      </td>
    );
  }

  /**
   * Renders cell input element
   * 
   * @param rowNumber row number
   * @param column column
   * @param value value
   */
  private renderCellInput = (rowNumber: number, column: MetaformTableColumn, value: TableFieldCellValue) => {
    switch (column.type) {
      case MetaformTableColumnType.Text:
        return this.renderCellInputText(rowNumber, column, value);
      case MetaformTableColumnType.Number:
        return this.renderCellInputNumber(rowNumber, column, value);
      default:
        return <div style={{ color: "red" }}> Unknown column type { column.type } </div>;
    }
  }

  /**
   * Renders text cell input element
   * 
   * @param rowNumber row number
   * @param column column
   * @param value value
   */
  private renderCellInputText = (rowNumber: number, column: MetaformTableColumn, value: TableFieldCellValue) => {
    return (
      <input 
        value={ value || "" } 
        key={ column.name } 
        style={{ width: "100%", padding: 5 }} 
        readOnly={ this.props.formReadOnly || this.props.field.readonly }
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => this.onCellInputTextChange(rowNumber, column, event.target.value) }
      />
    );
  }

  /**
   * Renders number cell input element
   * 
   * @param rowNumber row number
   * @param column column
   * @param value value
   */
  private renderCellInputNumber = (rowNumber: number, column: MetaformTableColumn, value: TableFieldCellValue) => {
    return (
      <input 
        value={ value || "" }
        type={ "number" } 
        key={ column.name } 
        style={{ width: "100%", padding: 5 }} 
        readOnly={ this.props.formReadOnly || this.props.field.readonly }
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => this.onCellInputNumberChange(rowNumber, column, event.target.value) }
      />
    );
  }

  /**
   * Sets cell value
   * 
   * @param rowNumber row number
   * @param column column
   * @param value new value
   */
  private setTableFieldCellValue = (rowNumber: number, column: MetaformTableColumn, value: TableFieldCellValue) => {
    const rowValues = this.getRowValues();
    const rowValue = { ...rowValues[rowNumber] || {} };
    rowValue[column.name] = value;
    rowValues[rowNumber] = rowValue;
    this.props.onValueChange(rowValues);
  }

  /**
   * Returns deserialized row values
   * 
   * @returns deserialized row values
   */
  private getRowValues = (): TableFieldValue => {
    const value = this.props.value;
    if (!value) {
      return this.props.formReadOnly ? [] : [{}];
    }

    if (typeof value === "string") {
      return JSON.parse(value as string);  
    }

    return value as TableFieldValue;
  }

  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onCellInputTextChange = (rowNumber: number, column: MetaformTableColumn, value: string) => {
    this.setTableFieldCellValue(rowNumber, column, value);
  }

  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onCellInputNumberChange = (rowNumber: number, column: MetaformTableColumn, value: string) => {
    this.setTableFieldCellValue(rowNumber, column, parseFloat(value));
  }

  /**
   * Event handler for add button click
   */
  private onAddRowButtonClick = () => {
    const rowValues = this.getRowValues();
    rowValues.push({});
    this.props.onValueChange(rowValues);
  }

}