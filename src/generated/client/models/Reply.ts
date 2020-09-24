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
 * @interface Reply
 */
export interface Reply {
    /**
     * 
     * @type {string}
     * @memberof Reply
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Reply
     */
    userId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Reply
     */
    revision?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Reply
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Reply
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Reply
     */
    data?: { [key: string]: object; };
}

export function ReplyFromJSON(json: any): Reply {
    return ReplyFromJSONTyped(json, false);
}

export function ReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reply {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'revision': !exists(json, 'revision') ? undefined : (new Date(json['revision'])),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ReplyToJSON(value?: Reply | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'revision': value.revision === undefined ? undefined : (value.revision.toISOString()),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'data': value.data,
    };
}

