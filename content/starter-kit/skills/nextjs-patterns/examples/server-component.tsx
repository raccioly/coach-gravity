// Server Component Example — No "use client" directive needed
// Use for: data fetching, static rendering, no interactivity

import { loadPhases } from "@/lib/content";

export default async function PhasesPage() {
    // Directly access data — no useEffect needed
    const phases = await loadPhases();

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">
                Learning Phases
            </h1>
            {phases.map((phase) => (
                <div key={phase.slug} className="glass-card p-6 mb-4">
                    <h2 className="text-xl font-semibold">{phase.title}</h2>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                        {phase.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
