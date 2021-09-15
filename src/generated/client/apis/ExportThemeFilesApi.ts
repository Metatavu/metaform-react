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


import * as runtime from '../runtime';
import {
    BadRequest,
    BadRequestFromJSON,
    BadRequestToJSON,
    ExportThemeFile,
    ExportThemeFileFromJSON,
    ExportThemeFileToJSON,
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

export interface CreateExportThemeFileRequest {
    exportThemeFile: ExportThemeFile;
    exportThemeId: string;
}

export interface DeleteExportThemeFileRequest {
    exportThemeId: string;
    exportThemeFileId: string;
}

export interface FindExportThemeFileRequest {
    exportThemeId: string;
    exportThemeFileId: string;
}

export interface ListExportThemeFilesRequest {
    exportThemeId: string;
}

export interface UpdateExportThemeFileRequest {
    exportThemeFile: ExportThemeFile;
    exportThemeId: string;
    exportThemeFileId: string;
}

/**
 * 
 */
export class ExportThemeFilesApi extends runtime.BaseAPI {

    /**
     * Creates new export theme file
     * create new export theme file
     */
    async createExportThemeFileRaw(requestParameters: CreateExportThemeFileRequest): Promise<runtime.ApiResponse<ExportThemeFile>> {
        if (requestParameters.exportThemeFile === null || requestParameters.exportThemeFile === undefined) {
            throw new runtime.RequiredError('exportThemeFile','Required parameter requestParameters.exportThemeFile was null or undefined when calling createExportThemeFile.');
        }

        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling createExportThemeFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/exportThemes/{exportThemeId}/files`.replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExportThemeFileToJSON(requestParameters.exportThemeFile),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFileFromJSON(jsonValue));
    }

    /**
     * Creates new export theme file
     * create new export theme file
     */
    async createExportThemeFile(requestParameters: CreateExportThemeFileRequest): Promise<ExportThemeFile> {
        const response = await this.createExportThemeFileRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an export theme file
     * Deletes an export theme file
     */
    async deleteExportThemeFileRaw(requestParameters: DeleteExportThemeFileRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling deleteExportThemeFile.');
        }

        if (requestParameters.exportThemeFileId === null || requestParameters.exportThemeFileId === undefined) {
            throw new runtime.RequiredError('exportThemeFileId','Required parameter requestParameters.exportThemeFileId was null or undefined when calling deleteExportThemeFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/exportThemes/{exportThemeId}/files/{exportThemeFileId}`.replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))).replace(`{${"exportThemeFileId"}}`, encodeURIComponent(String(requestParameters.exportThemeFileId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an export theme file
     * Deletes an export theme file
     */
    async deleteExportThemeFile(requestParameters: DeleteExportThemeFileRequest): Promise<void> {
        await this.deleteExportThemeFileRaw(requestParameters);
    }

    /**
     * Finds single export theme file
     * Finds single export theme file
     */
    async findExportThemeFileRaw(requestParameters: FindExportThemeFileRequest): Promise<runtime.ApiResponse<ExportThemeFile>> {
        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling findExportThemeFile.');
        }

        if (requestParameters.exportThemeFileId === null || requestParameters.exportThemeFileId === undefined) {
            throw new runtime.RequiredError('exportThemeFileId','Required parameter requestParameters.exportThemeFileId was null or undefined when calling findExportThemeFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/exportThemes/{exportThemeId}/files/{exportThemeFileId}`.replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))).replace(`{${"exportThemeFileId"}}`, encodeURIComponent(String(requestParameters.exportThemeFileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFileFromJSON(jsonValue));
    }

    /**
     * Finds single export theme file
     * Finds single export theme file
     */
    async findExportThemeFile(requestParameters: FindExportThemeFileRequest): Promise<ExportThemeFile> {
        const response = await this.findExportThemeFileRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists files of export theme
     * Lists files of export theme
     */
    async listExportThemeFilesRaw(requestParameters: ListExportThemeFilesRequest): Promise<runtime.ApiResponse<Array<ExportThemeFile>>> {
        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling listExportThemeFiles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/exportThemes/{exportThemeId}/files`.replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExportThemeFileFromJSON));
    }

    /**
     * Lists files of export theme
     * Lists files of export theme
     */
    async listExportThemeFiles(requestParameters: ListExportThemeFilesRequest): Promise<Array<ExportThemeFile>> {
        const response = await this.listExportThemeFilesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates export theme file
     * Updates export theme file
     */
    async updateExportThemeFileRaw(requestParameters: UpdateExportThemeFileRequest): Promise<runtime.ApiResponse<ExportThemeFile>> {
        if (requestParameters.exportThemeFile === null || requestParameters.exportThemeFile === undefined) {
            throw new runtime.RequiredError('exportThemeFile','Required parameter requestParameters.exportThemeFile was null or undefined when calling updateExportThemeFile.');
        }

        if (requestParameters.exportThemeId === null || requestParameters.exportThemeId === undefined) {
            throw new runtime.RequiredError('exportThemeId','Required parameter requestParameters.exportThemeId was null or undefined when calling updateExportThemeFile.');
        }

        if (requestParameters.exportThemeFileId === null || requestParameters.exportThemeFileId === undefined) {
            throw new runtime.RequiredError('exportThemeFileId','Required parameter requestParameters.exportThemeFileId was null or undefined when calling updateExportThemeFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/exportThemes/{exportThemeId}/files/{exportThemeFileId}`.replace(`{${"exportThemeId"}}`, encodeURIComponent(String(requestParameters.exportThemeId))).replace(`{${"exportThemeFileId"}}`, encodeURIComponent(String(requestParameters.exportThemeFileId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExportThemeFileToJSON(requestParameters.exportThemeFile),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportThemeFileFromJSON(jsonValue));
    }

    /**
     * Updates export theme file
     * Updates export theme file
     */
    async updateExportThemeFile(requestParameters: UpdateExportThemeFileRequest): Promise<ExportThemeFile> {
        const response = await this.updateExportThemeFileRaw(requestParameters);
        return await response.value();
    }

}
