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
    EmailNotification,
    EmailNotificationFromJSON,
    EmailNotificationToJSON,
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

export interface CreateEmailNotificationRequest {
    emailNotification: EmailNotification;
    realmId: string;
    metaformId: string;
}

export interface DeleteEmailNotificationRequest {
    realmId: string;
    metaformId: string;
    emailNotificationId: string;
}

export interface FindEmailNotificationRequest {
    realmId: string;
    metaformId: string;
    emailNotificationId: string;
}

export interface ListEmailNotificationsRequest {
    realmId: string;
    metaformId: string;
}

export interface UpdateEmailNotificationRequest {
    emailNotification: EmailNotification;
    realmId: string;
    metaformId: string;
    emailNotificationId: string;
}

/**
 * 
 */
export class EmailNotificationsApi extends runtime.BaseAPI {

    /**
     * Creates new form email notification
     * create new form email notification
     */
    async createEmailNotificationRaw(requestParameters: CreateEmailNotificationRequest): Promise<runtime.ApiResponse<EmailNotification>> {
        if (requestParameters.emailNotification === null || requestParameters.emailNotification === undefined) {
            throw new runtime.RequiredError('emailNotification','Required parameter requestParameters.emailNotification was null or undefined when calling createEmailNotification.');
        }

        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling createEmailNotification.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling createEmailNotification.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/metaforms/{metaformId}/emailNotifications`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmailNotificationToJSON(requestParameters.emailNotification),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmailNotificationFromJSON(jsonValue));
    }

    /**
     * Creates new form email notification
     * create new form email notification
     */
    async createEmailNotification(requestParameters: CreateEmailNotificationRequest): Promise<EmailNotification> {
        const response = await this.createEmailNotificationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an email notification
     * Deletes an email notification
     */
    async deleteEmailNotificationRaw(requestParameters: DeleteEmailNotificationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling deleteEmailNotification.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling deleteEmailNotification.');
        }

        if (requestParameters.emailNotificationId === null || requestParameters.emailNotificationId === undefined) {
            throw new runtime.RequiredError('emailNotificationId','Required parameter requestParameters.emailNotificationId was null or undefined when calling deleteEmailNotification.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/metaforms/{metaformId}/emailNotifications/{emailNotificationId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"emailNotificationId"}}`, encodeURIComponent(String(requestParameters.emailNotificationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an email notification
     * Deletes an email notification
     */
    async deleteEmailNotification(requestParameters: DeleteEmailNotificationRequest): Promise<void> {
        await this.deleteEmailNotificationRaw(requestParameters);
    }

    /**
     * Finds single email notification by id
     * Find a single emai notification
     */
    async findEmailNotificationRaw(requestParameters: FindEmailNotificationRequest): Promise<runtime.ApiResponse<EmailNotification>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling findEmailNotification.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling findEmailNotification.');
        }

        if (requestParameters.emailNotificationId === null || requestParameters.emailNotificationId === undefined) {
            throw new runtime.RequiredError('emailNotificationId','Required parameter requestParameters.emailNotificationId was null or undefined when calling findEmailNotification.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/metaforms/{metaformId}/emailNotifications/{emailNotificationId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"emailNotificationId"}}`, encodeURIComponent(String(requestParameters.emailNotificationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmailNotificationFromJSON(jsonValue));
    }

    /**
     * Finds single email notification by id
     * Find a single emai notification
     */
    async findEmailNotification(requestParameters: FindEmailNotificationRequest): Promise<EmailNotification> {
        const response = await this.findEmailNotificationRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists email notifications
     * Lists form email notifications
     */
    async listEmailNotificationsRaw(requestParameters: ListEmailNotificationsRequest): Promise<runtime.ApiResponse<Array<EmailNotification>>> {
        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling listEmailNotifications.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling listEmailNotifications.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/metaforms/{metaformId}/emailNotifications`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EmailNotificationFromJSON));
    }

    /**
     * Lists email notifications
     * Lists form email notifications
     */
    async listEmailNotifications(requestParameters: ListEmailNotificationsRequest): Promise<Array<EmailNotification>> {
        const response = await this.listEmailNotificationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates email notification
     * Updates email notification
     */
    async updateEmailNotificationRaw(requestParameters: UpdateEmailNotificationRequest): Promise<runtime.ApiResponse<EmailNotification>> {
        if (requestParameters.emailNotification === null || requestParameters.emailNotification === undefined) {
            throw new runtime.RequiredError('emailNotification','Required parameter requestParameters.emailNotification was null or undefined when calling updateEmailNotification.');
        }

        if (requestParameters.realmId === null || requestParameters.realmId === undefined) {
            throw new runtime.RequiredError('realmId','Required parameter requestParameters.realmId was null or undefined when calling updateEmailNotification.');
        }

        if (requestParameters.metaformId === null || requestParameters.metaformId === undefined) {
            throw new runtime.RequiredError('metaformId','Required parameter requestParameters.metaformId was null or undefined when calling updateEmailNotification.');
        }

        if (requestParameters.emailNotificationId === null || requestParameters.emailNotificationId === undefined) {
            throw new runtime.RequiredError('emailNotificationId','Required parameter requestParameters.emailNotificationId was null or undefined when calling updateEmailNotification.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=utf-8';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // bearer authentication
        }

        const response = await this.request({
            path: `/realms/{realmId}/metaforms/{metaformId}/emailNotifications/{emailNotificationId}`.replace(`{${"realmId"}}`, encodeURIComponent(String(requestParameters.realmId))).replace(`{${"metaformId"}}`, encodeURIComponent(String(requestParameters.metaformId))).replace(`{${"emailNotificationId"}}`, encodeURIComponent(String(requestParameters.emailNotificationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EmailNotificationToJSON(requestParameters.emailNotification),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmailNotificationFromJSON(jsonValue));
    }

    /**
     * Updates email notification
     * Updates email notification
     */
    async updateEmailNotification(requestParameters: UpdateEmailNotificationRequest): Promise<EmailNotification> {
        const response = await this.updateEmailNotificationRaw(requestParameters);
        return await response.value();
    }

}