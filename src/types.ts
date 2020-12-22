/**
 * Type for single table cell value
 */
export type TableFieldCellValue = string | number | null;

/**
 * Interface for values in single row
 */
export interface TableFieldRowValue { 
  [key: string]: TableFieldCellValue
}

/**
 * Type for table field value
 */
export type TableFieldValue = TableFieldRowValue[];

/**
 * Type for field value
 */
export type FieldValue = string | number | TableFieldValue | null;

/**
 * Type for icon name
 */
export type IconName = "dot-circle-o" | "circle-o" | "check-square-o" | "square-o" | "add";

/**
 * Interface describing localized strings
 */
export interface Strings {

  tableField: {
    addNewRow: string;
  };

}

/**
 * Field validation status
 */
export type ValidationStatus = "missing-required" | "invalid-email";

/**
 * Field validation error map
 */
export type ValidationErrors = { [fieldName: string]: ValidationStatus };