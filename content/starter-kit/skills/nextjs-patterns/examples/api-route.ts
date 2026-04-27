// API Route Example — Next.js App Router
// Always validate inputs with Zod, return structured responses

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// 1. Define schema FIRST
const CreateFeedbackSchema = z.object({
    type: z.enum(["bug", "content", "feature", "rating"]),
    message: z.string().min(10, "Message must be at least 10 characters"),
    rating: z.number().min(1).max(5).optional(),
    lessonRef: z.string().optional(),
});

// 2. POST handler
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 3. Validate input
        const parsed = CreateFeedbackSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Validation failed", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        // 4. Process (save to database, etc.)
        const feedback = parsed.data;
        // await saveFeedback(feedback);

        // 5. Return structured response
        return NextResponse.json(
            { success: true, data: feedback },
            { status: 201 }
        );
    } catch (error) {
        // 6. Never expose internal errors
        console.error("Feedback API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// 3. GET handler
export async function GET() {
    try {
        // const feedback = await listFeedback();
        return NextResponse.json({ success: true, data: [] });
    } catch (error) {
        console.error("Feedback GET error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
