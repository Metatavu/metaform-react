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
    MetaformScript,
    MetaformScriptFromJSON,
    MetaformScriptFromJSONTyped,
    MetaformScriptToJSON,
} from './';

/**
 * 
 * @export
 * @interface MetaformScripts
 */
export interface MetaformScripts {
    /**
     * List of scripts run after new reply is created
     * @type {Array<MetaformScript>}
     * @memberof MetaformScripts
     */
    afterCreateReply?: Array<MetaformScript>;
    /**
     * List of scripts run after a reply is updated
     * @type {Array<MetaformScript>}
     * @memberof MetaformScripts
     */
    afterUpdateReply?: Array<MetaformScript>;
}

export function MetaformScriptsFromJSON(json: any): MetaformScripts {
    return MetaformScriptsFromJSONTyped(json, false);
}

export function MetaformScriptsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaformScripts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'afterCreateReply': !exists(json, 'afterCreateReply') ? undefined : ((json['afterCreateReply'] as Array<any>).map(MetaformScriptFromJSON)),
        'afterUpdateReply': !exists(json, 'afterUpdateReply') ? undefined : ((json['afterUpdateReply'] as Array<any>).map(MetaformScriptFromJSON)),
    };
}

export function MetaformScriptsToJSON(value?: MetaformScripts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'afterCreateReply': value.afterCreateReply === undefined ? undefined : ((value.afterCreateReply as Array<any>).map(MetaformScriptToJSON)),
        'afterUpdateReply': value.afterUpdateReply === undefined ? undefined : ((value.afterUpdateReply as Array<any>).map(MetaformScriptToJSON)),
    };
}

