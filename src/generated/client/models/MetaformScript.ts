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
/**
 * 
 * @export
 * @interface MetaformScript
 */
export interface MetaformScript {
    /**
     * 
     * @type {string}
     * @memberof MetaformScript
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MetaformScript
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof MetaformScript
     */
    content: string;
}

export function MetaformScriptFromJSON(json: any): MetaformScript {
    return MetaformScriptFromJSONTyped(json, false);
}

export function MetaformScriptFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaformScript {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'language': json['language'],
        'content': json['content'],
    };
}

export function MetaformScriptToJSON(value?: MetaformScript | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'language': value.language,
        'content': value.content,
    };
}

