/* tslint:disable */
/* eslint-disable */
/**
 * Metaform REST API
 * REST API for Metaform
 *
 * The version of the OpenAPI document: 2.1.0
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
 * @interface Draft
 */
export interface Draft {
    /**
     * 
     * @type {string}
     * @memberof Draft
     */
    readonly id?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Draft
     */
    data: { [key: string]: object; };
    /**
     * 
     * @type {Date}
     * @memberof Draft
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Draft
     */
    readonly modifiedAt?: Date;
}

export function DraftFromJSON(json: any): Draft {
    return DraftFromJSONTyped(json, false);
}

export function DraftFromJSONTyped(json: any, ignoreDiscriminator: boolean): Draft {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'data': json['data'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function DraftToJSON(value?: Draft | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
    };
}


