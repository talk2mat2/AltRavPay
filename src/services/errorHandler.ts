import ApiError from "@/urils/ApiError";
import { isAxiosError } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleApiError(err: any): never {
    console.error('err:', err);
    
    if (err instanceof ApiError) {
        throw err;
    }

    if (isAxiosError(err)) {
        if (err.response) {
            const apiResponse = err.response.data;
            console.error("API Error Response:", apiResponse);
            throw new ApiError({
                Success: false,
                Data: false,
                Message: apiResponse?.Message || err.response.statusText || "An error occurred",
                StatusCode: apiResponse?.StatusCode || err.response.status,
            });
        } else if (err.request) {
            throw new ApiError({
                Success: false,
                Data: false,
                Message: "Network Error: No response received from server.",
                StatusCode: 503, 
            });
        }
    }

    throw new ApiError({
        Success: false,
        Data: false,
        Message: err.Message || "An unexpected error occurred.",
        StatusCode: err.StatusCode || 500,
    });
}
