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

/**
 * Service that provides the autocomplete values
 * @export
 * @enum {string}
 */
export enum MetaformFieldAutocompleteService {
    CodeServerConceptCode = 'code-server-concept-code'
}

export function MetaformFieldAutocompleteServiceFromJSON(json: any): MetaformFieldAutocompleteService {
    return MetaformFieldAutocompleteServiceFromJSONTyped(json, false);
}

export function MetaformFieldAutocompleteServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaformFieldAutocompleteService {
    return json as MetaformFieldAutocompleteService;
}

export function MetaformFieldAutocompleteServiceToJSON(value?: MetaformFieldAutocompleteService | null): any {
    return value as any;
}

