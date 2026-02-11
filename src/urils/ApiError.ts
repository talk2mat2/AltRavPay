type ErrorResponse=any

export default class ApiError extends Error {
	public response: ErrorResponse;

	constructor(response: ErrorResponse) {
        super(response.Message); 
        this.name = 'ApiError';
        this.response = response;
    }
}