---
name: database-patterns
description: Database design patterns for DynamoDB single-table design and Drizzle ORM. Use when designing schemas, writing queries, or setting up database infrastructure.
---

# Database Patterns

Standard database design patterns across all projects. Read the relevant resource file for the database technology in use.

## Instructions

1. **Before designing any table**, define access patterns first (queries before schema)
2. **Read** `resources/dynamodb-design.md` for DynamoDB projects
3. **Read** `resources/drizzle-patterns.md` for PostgreSQL/Drizzle projects
4. **ALWAYS document which index a query uses** in code comments

## Universal Rules

1. **Never use database scans** in production code — always use indexed queries
2. **Use TTL** for temporary data (sessions, OTPs, cache entries)
3. **Parameterized queries only** — never concatenate user input
4. **Index-first design** — design indexes before writing queries
5. **Soft deletes** preferred over hard deletes for audit trails
6. **Timestamps on everything** — `createdAt`, `updatedAt` on every record

## Auto-Clone to Project

When you first detect this project uses a database:
1. Create `.agent/skills/database-patterns/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's schema files (`schema.ts`, table definitions, DynamoDB configs)
4. Append a `## Project-Specific` section listing:
   - Tables/entities and their keys
   - GSIs/indexes and their access patterns
   - Common query patterns with index annotations
5. Inform the user: "I've set up the local database-patterns skill with your project's schema details."
