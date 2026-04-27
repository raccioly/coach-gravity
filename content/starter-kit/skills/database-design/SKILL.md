---
name: database-design
description: Database design principles, decision-making, and platform-specific patterns. Schema design, indexing strategy, ORM selection, serverless databases, DynamoDB single-table design, Drizzle ORM patterns.
tools: Read, Write, Edit, Glob, Grep
---

# Database Design

> **Learn to THINK, not copy SQL patterns.**

## 🎯 Selective Reading Rule

**Read ONLY files relevant to the request!** Check the content map, find what you need.

| File | Description | When to Read |
|------|-------------|--------------|
| `database-selection.md` | PostgreSQL vs Neon vs Turso vs SQLite | Choosing database |
| `orm-selection.md` | Drizzle vs Prisma vs Kysely | Choosing ORM |
| `schema-design.md` | Normalization, PKs, relationships | Designing schema |
| `indexing.md` | Index types, composite indexes | Performance tuning |
| `optimization.md` | N+1, EXPLAIN ANALYZE | Query optimization |
| `migrations.md` | Safe migrations, serverless DBs | Schema changes |

---

## ⚠️ Core Principle

- ASK user for database preferences when unclear
- Choose database/ORM based on CONTEXT
- Don't default to PostgreSQL for everything

---

## Decision Checklist

Before designing schema:

- [ ] Asked user about database preference?
- [ ] Chosen database for THIS context?
- [ ] Considered deployment environment?
- [ ] Planned index strategy?
- [ ] Defined relationship types?

---

## Anti-Patterns

❌ Default to PostgreSQL for simple apps (SQLite may suffice)
❌ Skip indexing
❌ Use SELECT * in production
❌ Store JSON when structured data is better
❌ Ignore N+1 queries

---

## Platform-Specific Patterns

Standard database design patterns for specific platforms. Read the relevant resource file for the database technology in use.

### Instructions

1. **Before designing any table**, define access patterns first (queries before schema)
2. **Read** `resources/dynamodb-design.md` for DynamoDB projects
3. **Read** `resources/drizzle-patterns.md` for PostgreSQL/Drizzle projects
4. **ALWAYS document which index a query uses** in code comments

### Universal Rules

1. **Never use database scans** in production code — always use indexed queries
2. **Use TTL** for temporary data (sessions, OTPs, cache entries)
3. **Parameterized queries only** — never concatenate user input
4. **Index-first design** — design indexes before writing queries
5. **Soft deletes** preferred over hard deletes for audit trails
6. **Timestamps on everything** — `createdAt`, `updatedAt` on every record

### Auto-Clone to Project

When you first detect this project uses a database:
1. Create `.agent/skills/database-design/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's schema files (`schema.ts`, table definitions, DynamoDB configs)
4. Append a `## Project-Specific` section listing:
   - Tables/entities and their keys
   - GSIs/indexes and their access patterns
   - Common query patterns with index annotations
5. Inform the user: "I've set up the local database-design skill with your project's schema details."
