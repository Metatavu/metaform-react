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
    MetaformField,
    MetaformFieldFromJSON,
    MetaformFieldFromJSONTyped,
    MetaformFieldToJSON,
    MetaformVisibleIf,
    MetaformVisibleIfFromJSON,
    MetaformVisibleIfFromJSONTyped,
    MetaformVisibleIfToJSON,
} from './';

/**
 * 
 * @export
 * @interface MetaformSection
 */
export interface MetaformSection {
    /**
     * 
     * @type {string}
     * @memberof MetaformSection
     */
    title?: string;
    /**
     * 
     * @type {MetaformVisibleIf}
     * @memberof MetaformSection
     */
    visibleIf?: MetaformVisibleIf;
    /**
     * 
     * @type {Array<MetaformField>}
     * @memberof MetaformSection
     */
    fields?: Array<MetaformField>;
}

export function MetaformSectionFromJSON(json: any): MetaformSection {
    return MetaformSectionFromJSONTyped(json, false);
}

export function MetaformSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaformSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'visibleIf': !exists(json, 'visible-if') ? undefined : MetaformVisibleIfFromJSON(json['visible-if']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(MetaformFieldFromJSON)),
    };
}

export function MetaformSectionToJSON(value?: MetaformSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'visible-if': MetaformVisibleIfToJSON(value.visibleIf),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(MetaformFieldToJSON)),
    };
}


