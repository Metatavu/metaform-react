/* tslint:disable */
/* eslint-disable */
/**
 * Metaform REST API
 * REST API for Metaform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MetaformTableColumnType,
    MetaformTableColumnTypeFromJSON,
    MetaformTableColumnTypeFromJSONTyped,
    MetaformTableColumnTypeToJSON,
    MetaformTableColumnValues,
    MetaformTableColumnValuesFromJSON,
    MetaformTableColumnValuesFromJSONTyped,
    MetaformTableColumnValuesToJSON,
} from './';

/**
 * 
 * @export
 * @interface MetaformTableColumn
 */
export interface MetaformTableColumn {
    /**
     * 
     * @type {MetaformTableColumnType}
     * @memberof MetaformTableColumn
     */
    type: MetaformTableColumnType;
    /**
     * Column name
     * @type {string}
     * @memberof MetaformTableColumn
     */
    name: string;
    /**
     * Column title
     * @type {string}
     * @memberof MetaformTableColumn
     */
    title?: string;
    /**
     * Defines column should automatically calculate sum
     * @type {boolean}
     * @memberof MetaformTableColumn
     */
    calculateSum?: boolean;
    /**
     * Postfix for calculated sum
     * @type {string}
     * @memberof MetaformTableColumn
     */
    sumPostfix?: string;
    /**
     * Defines column width
     * @type {number}
     * @memberof MetaformTableColumn
     */
    columnWidth?: number;
    /**
     * Placeholder for column field
     * @type {string}
     * @memberof MetaformTableColumn
     */
    placeholder?: string;
    /**
     * Defines column as readonly
     * @type {boolean}
     * @memberof MetaformTableColumn
     */
    readonly?: boolean;
    /**
     * Defines column as requires
     * @type {boolean}
     * @memberof MetaformTableColumn
     */
    required?: boolean;
    /**
     * Defines source url for autocomplete columns
     * @type {string}
     * @memberof MetaformTableColumn
     */
    sourceUrl?: string;
    /**
     * Html code for html columns
     * @type {string}
     * @memberof MetaformTableColumn
     */
    html?: string;
    /**
     * Action for button columns
     * @type {string}
     * @memberof MetaformTableColumn
     */
    action?: string;
    /**
     * 
     * @type {MetaformTableColumnValues}
     * @memberof MetaformTableColumn
     */
    values?: MetaformTableColumnValues;
}

export function MetaformTableColumnFromJSON(json: any): MetaformTableColumn {
    return MetaformTableColumnFromJSONTyped(json, false);
}

export function MetaformTableColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaformTableColumn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': MetaformTableColumnTypeFromJSON(json['type']),
        'name': json['name'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'calculateSum': !exists(json, 'calculate-sum') ? undefined : json['calculate-sum'],
        'sumPostfix': !exists(json, 'sum-postfix') ? undefined : json['sum-postfix'],
        'columnWidth': !exists(json, 'column-width') ? undefined : json['column-width'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'readonly': !exists(json, 'readonly') ? undefined : json['readonly'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'sourceUrl': !exists(json, 'source-url') ? undefined : json['source-url'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'action': !exists(json, 'action') ? undefined : json['action'],
        'values': !exists(json, 'values') ? undefined : MetaformTableColumnValuesFromJSON(json['values']),
    };
}

export function MetaformTableColumnToJSON(value?: MetaformTableColumn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': MetaformTableColumnTypeToJSON(value.type),
        'name': value.name,
        'title': value.title,
        'calculate-sum': value.calculateSum,
        'sum-postfix': value.sumPostfix,
        'column-width': value.columnWidth,
        'placeholder': value.placeholder,
        'readonly': value.readonly,
        'required': value.required,
        'source-url': value.sourceUrl,
        'html': value.html,
        'action': value.action,
        'values': MetaformTableColumnValuesToJSON(value.values),
    };
}

