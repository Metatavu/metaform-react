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
    Draft,
    DraftFromJSON,
    DraftToJSON,
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

export interface CreateDraftRequest {
    draft: Draft;
    metaformId: string;
}

export interface DeleteDraftRequest {
    metaformId: string;
    draftId: string;
}

export interface FindDraftRequest {
    metaformId: string;
    draftId: string;
}

export interface UpdateDraftRequest {
    draft: Draft;
    metaformId: string;
    draftId: string;
}

/**
 * 
 */
export class DraftsApi extends runtime.BaseAPI {

    /**
     * Creates new reply draft
     * create new reply draft
     */
    async createDraftRaw(requestParameters: CreateDraftRequest): Promise<runtime.ApiResponse<Draft>> {
        if (requestParameters.draft === null || requestParameters.draft === undefined) {
            throw new runtime.RequiredError('draft','Required parameter requestParameters.draft was null or undefined when calling createDraft.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling createDraft.');
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
            path: `/v1/metaforms/{metaformId}/drafts`.replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DraftToJSON(requestParameters.draft),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftFromJSON(jsonValue));
    }

    /**
     * Creates new reply draft
     * create new reply draft
     */
    async createDraft(requestParameters: CreateDraftRequest): Promise<Draft> {
        const response = await this.createDraftRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an draft
     * Deletes an draft
     */
    async deleteDraftRaw(requestParameters: DeleteDraftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling deleteDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling deleteDraft.');
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
            path: `/v1/metaforms/{metaformId}/drafts/{draftId}`.replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an draft
     * Deletes an draft
     */
    async deleteDraft(requestParameters: DeleteDraftRequest): Promise<void> {
        await this.deleteDraftRaw(requestParameters);
    }

    /**
     * Finds single draft
     * Finds single draft
     */
    async findDraftRaw(requestParameters: FindDraftRequest): Promise<runtime.ApiResponse<Draft>> {
        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling findDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling findDraft.');
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
            path: `/v1/metaforms/{metaformId}/drafts/{draftId}`.replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftFromJSON(jsonValue));
    }

    /**
     * Finds single draft
     * Finds single draft
     */
    async findDraft(requestParameters: FindDraftRequest): Promise<Draft> {
        const response = await this.findDraftRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates draft
     * Updates draft
     */
    async updateDraftRaw(requestParameters: UpdateDraftRequest): Promise<runtime.ApiResponse<Draft>> {
        if (requestParameters.draft === null || requestParameters.draft === undefined) {
            throw new runtime.RequiredError('draft','Required parameter requestParameters.draft was null or undefined when calling updateDraft.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling updateDraft.');
        }

        if (requestParameters.draftId === null || requestParameters.draftId === undefined) {
            throw new runtime.RequiredError('draftId','Required parameter requestParameters.draftId was null or undefined when calling updateDraft.');
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
            path: `/v1/metaforms/{metaformId}/drafts/{draftId}`.replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"draftId"}}`, encodeURIComponent(String(requestParameters.draftId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DraftToJSON(requestParameters.draft),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftFromJSON(jsonValue));
    }

    /**
     * Updates draft
     * Updates draft
     */
    async updateDraft(requestParameters: UpdateDraftRequest): Promise<Draft> {
        const response = await this.updateDraftRaw(requestParameters);
        return await response.value();
    }

}
