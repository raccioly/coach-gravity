"use client";

/**
 * Error Boundary Component — Catches and displays React rendering errors.
 *
 * Usage in app/error.tsx:
 *   export default ErrorBoundary;
 *
 * Or wrap specific sections:
 *   <ErrorBoundary><RiskyComponent /></ErrorBoundary>
 */

import { useEffect } from "react";

interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    useEffect(() => {
        // Log to monitoring service in production
        console.error("Uncaught error:", error);
    }, [error]);

    return (
        <div className="min-h-dvh flex items-center justify-center px-6">
            <div className="text-center animate-fade-in max-w-md">
                <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold mb-6"
                    style={{
                        background: "oklch(0.63 0.22 25 / 0.12)",
                        color: "oklch(0.63 0.22 25)",
                    }}
                >
                    !
                </div>
                <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                <p
                    className="text-sm mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    An unexpected error occurred. Please try again.
                </p>
                <button onClick={reset} className="btn-primary">
                    Try Again
                </button>
            </div>
        </div>
    );
}
