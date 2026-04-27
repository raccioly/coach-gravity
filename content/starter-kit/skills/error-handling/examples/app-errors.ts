/**
 * Enterprise Error Class Hierarchy
 *
 * USAGE:
 *   throw new ValidationError("Email is required");           // 400
 *   throw new NotFoundError("User not found");                // 404
 *   throw new ExternalServiceError("DynamoDB timeout");       // 502
 *
 * NEVER DO:
 *   throw new Error("something went wrong");                  // BAD — no status code
 */

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode = 500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// ── 400: Bad Request ──
export class BadRequestError extends AppError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}

// ── 400: Validation Error (with field details) ──
export class ValidationError extends AppError {
    public readonly fields?: Record<string, string>;

    constructor(message = "Validation failed", fields?: Record<string, string>) {
        super(message, 400);
        this.fields = fields;
    }
}

// ── 401: Unauthorized ──
export class UnauthorizedError extends AppError {
    constructor(message = "Authentication required") {
        super(message, 401);
    }
}

// ── 403: Forbidden ──
export class ForbiddenError extends AppError {
    constructor(message = "Access denied") {
        super(message, 403);
    }
}

// ── 404: Not Found ──
export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}

// ── 409: Conflict ──
export class ConflictError extends AppError {
    constructor(message = "Resource already exists") {
        super(message, 409);
    }
}

// ── 502: External Service Error ──
export class ExternalServiceError extends AppError {
    public readonly service: string;

    constructor(service: string, message?: string) {
        super(message || `External service failed: ${service}`, 502);
        this.service = service;
    }
}
