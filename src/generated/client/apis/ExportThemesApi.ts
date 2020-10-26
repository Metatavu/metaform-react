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


import * as runtime from '../runtime';
import {
    BadRequest,
    BadRequestFromJSON,
    BadRequestToJSON,
    ExportTheme,
    ExportThemeFromJSON,
    ExportThemeToJSON,
    Forbidden,
    ForbiddenFromJSON,
    ForbiddenToJSON,
    InternalServerError,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    NotFound,
    NotFoundFromJSON,
    NotFoundToJSON,
} from '../models';

export interface CreateExportThemeRequest {
    exportTheme: ExportTheme;
    realmId: string;
}

export interface DeleteExportThemeRequest {
    realmId: string;
    exportThemeId: string;
}

export interface FindExportThemeRequest {
    realmId: string;
    exportThemeId: string;
}

export interface ListExportThemesRequest {
    realmId: string;
}

export interface UpdateExportThemeRequest {
    exportTheme: ExportTheme;
    realmId: string;
    exportThemeId: string;
}

/**
 * 
 */
export class ExportThemesApi extends runtime.BaseAPI {

    /**
     * Creates new form export theme
     * create new form export theme
     */
    async createExportThemeRaw(requestParameters: CreateExportThemeRequest): Promise<runtime.ApiResponse<ExportTheme>> {
        if (requestParameters.exportTheme === null || requestParameters.exportTheme === undefined) {
            throw new runtime.RequiredError('exportTheme','Required parameter requestParameters.exportTheme was null or undefined when calling createExportTheme.');
        }

        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling createExportTheme.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/exportThemes`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExportThemeToJSON(requestParameters.exportTheme),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFromJSON(jsonValue));
    }

    /**
     * Creates new form export theme
     * create new form export theme
     */
    async createExportTheme(requestParameters: CreateExportThemeRequest): Promise<ExportTheme> {
        const response = await this.createExportThemeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an export theme
     * Deletes an export theme
     */
    async deleteExportThemeRaw(requestParameters: DeleteExportThemeRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling deleteExportTheme.');
        }

        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling deleteExportTheme.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/exportThemes/{exportThemeId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an export theme
     * Deletes an export theme
     */
    async deleteExportTheme(requestParameters: DeleteExportThemeRequest): Promise<void> {
        await this.deleteExportThemeRaw(requestParameters);
    }

    /**
     * Finds single export theme
     * Finds single export theme
     */
    async findExportThemeRaw(requestParameters: FindExportThemeRequest): Promise<runtime.ApiResponse<ExportTheme>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling findExportTheme.');
        }

        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling findExportTheme.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/exportThemes/{exportThemeId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFromJSON(jsonValue));
    }

    /**
     * Finds single export theme
     * Finds single export theme
     */
    async findExportTheme(requestParameters: FindExportThemeRequest): Promise<ExportTheme> {
        const response = await this.findExportThemeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists export themes
     * Lists form export themes
     */
    async listExportThemesRaw(requestParameters: ListExportThemesRequest): Promise<runtime.ApiResponse<Array<ExportTheme>>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling listExportThemes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/exportThemes`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExportThemeFromJSON));
    }

    /**
     * Lists export themes
     * Lists form export themes
     */
    async listExportThemes(requestParameters: ListExportThemesRequest): Promise<Array<ExportTheme>> {
        const response = await this.listExportThemesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates export theme
     * Updates export theme
     */
    async updateExportThemeRaw(requestParameters: UpdateExportThemeRequest): Promise<runtime.ApiResponse<ExportTheme>> {
        if (requestParameters.exportTheme === null || requestParameters.exportTheme === undefined) {
            throw new runtime.RequiredError('exportTheme','Required parameter requestParameters.exportTheme was null or undefined when calling updateExportTheme.');
        }

        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling updateExportTheme.');
        }

        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling updateExportTheme.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/exportThemes/{exportThemeId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExportThemeToJSON(requestParameters.exportTheme),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFromJSON(jsonValue));
    }

    /**
     * Updates export theme
     * Updates export theme
     */
    async updateExportTheme(requestParameters: UpdateExportThemeRequest): Promise<ExportTheme> {
        const response = await this.updateExportThemeRaw(requestParameters);
        return await response.value();
    }

}
