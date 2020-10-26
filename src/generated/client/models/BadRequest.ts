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
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     * 
     * @type {number}
     * @memberof BadRequest
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof BadRequest
     */
    message?: string;
}

export function BadRequestFromJSON(json: any): BadRequest {
    return BadRequestFromJSONTyped(json, false);
}

export function BadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function BadRequestToJSON(value?: BadRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
    };
}


