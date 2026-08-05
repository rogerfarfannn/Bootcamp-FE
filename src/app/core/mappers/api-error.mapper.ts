import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../models/ApiError';

export function mapHttpError(error: HttpErrorResponse): ApiError {

    if (error.status === 0) {
        return new ApiError(
            'Network error.',
            0,
            'Unable to connect.',
            'Please verify your internet connection and try again.'
        );
    }

    if (
        error.status === 400 &&
        typeof error.error?.error === 'string' &&
        error.error.error.includes('No card matching')
    ) {
        return new ApiError(
            error.error.error,
            400,
            'Card was not found.',
            'Please verify the information you introduced and try again'
        );
    }

    if (error.status >= 500) {
        return new ApiError(
            error.error?.error ?? 'Internal server error.',
            error.status,
            'Server unavailable.',
            'Please try again in a few minutes.'
        );
    }

    // Default
    return new ApiError(
        error.error?.error ?? 'Unexpected error.',
        error.status,
        'Something went wrong.',
        'Please try again later.'
    );
}