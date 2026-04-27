# Drizzle ORM Patterns

## When to Use Drizzle vs DynamoDB

| Use Drizzle (PostgreSQL) | Use DynamoDB |
|--------------------------|-------------|
| Complex relations (joins) | Simple key-value access |
| Transactions across entities | High-scale read/write |
| Full-text search | Predictable access patterns |
| Complex aggregations | Serverless / pay-per-request |

## Schema Definition

```typescript
import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    name: text("name"),
    role: text("role").default("user"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});

export const feedback = pgTable("feedback", {
    id: text("id").primaryKey(),
    userId: text("user_id").references(() => users.id),
    type: text("type").notNull(),  // "bug" | "feature" | "content"
    message: text("message").notNull(),
    rating: integer("rating"),
    createdAt: timestamp("created_at").defaultNow(),
});
```

## Query Patterns

```typescript
import { db } from "@/lib/db";
import { eq, desc, and } from "drizzle-orm";

// Get by ID
const user = await db.select().from(users).where(eq(users.id, userId));

// List with filter and sort
const items = await db.select()
    .from(feedback)
    .where(and(eq(feedback.type, "bug"), eq(feedback.userId, userId)))
    .orderBy(desc(feedback.createdAt))
    .limit(20);

// Insert
await db.insert(feedback).values({
    id: crypto.randomUUID(),
    userId,
    type: "bug",
    message: "Something broke",
});
```

## Migration Rules

1. ALWAYS create migration files — never modify the database directly
2. Test migrations locally before applying to production
3. Back up the database before running migrations
4. Use `drizzle-kit push` for development, `drizzle-kit migrate` for production
