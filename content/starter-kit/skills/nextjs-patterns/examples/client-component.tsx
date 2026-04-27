"use client";

// Client Component Example — Required for interactivity
// Use for: useState, useEffect, onClick, useSession, browser APIs

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function InteractiveCard() {
    const { data: session } = useSession();
    const [expanded, setExpanded] = useState(false);

    if (!session) {
        return <p>Please sign in.</p>;
    }

    return (
        <div className="glass-card p-6">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">
                    Welcome, {session.user?.name}
                </h2>
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                >
                    Sign Out
                </button>
            </div>

            <button
                onClick={() => setExpanded(!expanded)}
                className="btn-secondary mt-4"
            >
                {expanded ? "Show Less" : "Show More"}
            </button>

            {expanded && (
                <div className="mt-4 animate-fade-in">
                    <p style={{ color: "var(--color-text-secondary)" }}>
                        Additional content goes here.
                    </p>
                </div>
            )}
        </div>
    );
}
