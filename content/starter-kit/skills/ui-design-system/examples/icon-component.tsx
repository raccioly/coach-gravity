/**
 * Icon Component — Professional icon replacement for emojis.
 *
 * Usage:
 *   <Icon name="rocket" size="md" variant="primary" shape="circle" />
 *
 * NEVER use emoji characters in UI. Always use this component or
 * styled inline containers instead.
 */

import React from "react";

const ICON_GLYPHS: Record<string, string> = {
    rocket: "→",
    star: "★",
    check: "✓",
    warning: "⚠",
    lock: "⊘",
    gear: "⚙",
    chart: "◆",
    users: "◉",
    book: "▣",
    brain: "◈",
    target: "◎",
    code: "</>",
    chat: "◇",
    bug: "⚠",
    bulb: "◆",
    fire: "▲",
    success: "✓",
};

const SIZE = {
    xs: { container: "w-5 h-5 text-[10px]", icon: "text-[10px]" },
    sm: { container: "w-7 h-7 text-xs", icon: "text-xs" },
    md: { container: "w-9 h-9 text-sm", icon: "text-sm" },
    lg: { container: "w-11 h-11 text-base", icon: "text-base" },
    xl: { container: "w-14 h-14 text-lg", icon: "text-lg" },
};

const VARIANT_COLORS: Record<string, { bg: string; fg: string }> = {
    primary: { bg: "oklch(0.585 0.233 264 / 0.12)", fg: "oklch(0.7 0.2 264)" },
    success: { bg: "oklch(0.72 0.19 152 / 0.12)", fg: "oklch(0.72 0.19 152)" },
    warning: { bg: "oklch(0.78 0.16 75 / 0.12)", fg: "oklch(0.78 0.16 75)" },
    danger: { bg: "oklch(0.63 0.22 25 / 0.12)", fg: "oklch(0.63 0.22 25)" },
    muted: { bg: "oklch(0.3 0.02 264 / 0.3)", fg: "oklch(0.55 0.02 264)" },
};

interface IconProps {
    name: keyof typeof ICON_GLYPHS;
    size?: keyof typeof SIZE;
    variant?: keyof typeof VARIANT_COLORS;
    shape?: "circle" | "rounded" | "square";
}

export default function Icon({
    name,
    size = "md",
    variant = "primary",
    shape = "circle",
}: IconProps) {
    const glyph = ICON_GLYPHS[name] || "•";
    const { bg, fg } = VARIANT_COLORS[variant];
    const borderRadius = shape === "circle" ? "9999px" : shape === "rounded" ? "0.5rem" : "0.25rem";

    return (
        <span
            className={`inline-flex items-center justify-center font-bold flex-shrink-0 ${SIZE[size].container}`}
            style={{ background: bg, color: fg, borderRadius }}
            aria-hidden="true"
        >
            {glyph}
        </span>
    );
}
