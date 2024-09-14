import Transport from './transport';
import { Optional } from './types';
/**
 * type defs
 */
export type OAuth2Config = {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    loginUrl?: string;
    authzServiceUrl?: string;
    tokenServiceUrl?: string;
    revokeServiceUrl?: string;
    proxyUrl?: string;
    httpProxy?: string;
    useVerifier?: boolean;
};
export type AuthzRequestParams = {
    scope?: string;
    state?: string;
    code_challenge?: string;
} & {
    [attr: string]: string;
};
export type TokenResponse = {
    token_type: 'Bearer';
    /**
     * Identity URL
     *
     * The format of the URL is https://login.salesforce.com/id/orgID/userID.
     */
    id: string;
    access_token: string;
    refresh_token?: string;
    signature: string;
    issued_at: string;
    instance_url: string;
    sfdc_community_url?: string;
    sfdc_community_id?: string;
};
/**
 * OAuth2 class
 */
export declare class OAuth2 {
    loginUrl: string;
    authzServiceUrl: string;
    tokenServiceUrl: string;
    revokeServiceUrl: string;
    clientId: Optional<string>;
    clientSecret: Optional<string>;
    redirectUri: Optional<string>;
    codeVerifier: Optional<string>;
    _transport: Transport;
    /**
     *
     */
    constructor(config: OAuth2Config);
    /**
     * Get Salesforce OAuth2 authorization page URL to redirect user agent.
     */
    getAuthorizationUrl(params?: AuthzRequestParams): string;
    /**
     * OAuth2 Refresh Token Flow
     */
    refreshToken(refreshToken: string): Promise<TokenResponse>;
    /**
     * Send access token request to the token endpoint.
     * When a code (string) is passed in first argument, it will use Web Server Authentication Flow (Authorization Code Grant).
     * Otherwise, it will use the specified `grant_type` and pass parameters to the endpoint.
     */
    requestToken(codeOrParams: string | {
        grant_type: string;
        [name: string]: string;
    }, params?: {
        [prop: string]: string;
    }): Promise<TokenResponse>;
    /**
     * OAuth2 Username-Password Flow (Resource Owner Password Credentials)
     */
    authenticate(username: string, password: string): Promise<TokenResponse>;
    /**
     * OAuth2 Revoke Session Token
     */
    revokeToken(token: string): Promise<void>;
    /**
     * @private
     */
    _postParams(params: {
        [name: string]: string;
    }): Promise<any>;
}
export default OAuth2;
