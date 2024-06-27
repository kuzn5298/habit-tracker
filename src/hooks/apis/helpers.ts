export interface APIResponse {
    success: boolean;
}

export const RESPONSE_SUCCESS: APIResponse = {
    success: true,
};

export const RESPONSE_ERROR: APIResponse = {
    success: false,
};
