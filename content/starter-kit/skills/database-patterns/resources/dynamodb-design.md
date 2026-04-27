# DynamoDB Single-Table Design

## Design Process

1. **List all access patterns** (e.g., "Get user by ID", "List feedback by type")
2. **Design composite keys** that support those patterns
3. **Create GSIs** only when the base table keys can't serve a pattern
4. **Document everything** — every query must reference its index

## Key Design Patterns

### Composite Keys for Multi-Entity

```
Entity: User
  PK: USER#<userId>
  SK: PROFILE

Entity: User Progress
  PK: USER#<userId>
  SK: PROGRESS#<phaseSlug>#<lessonSlug>

Entity: Feedback
  PK: FEEDBACK#<feedbackId>
  SK: META
```

### GSI for Alternate Access

```
GSI1 — Query by type/category:
  GSI1PK: TYPE#<type>
  GSI1SK: CREATED#<timestamp>

GSI2 — Query by status:
  GSI2PK: STATUS#<status>
  GSI2SK: UPDATED#<timestamp>
```

### Access Pattern → Query Mapping

| Access Pattern | Table/Index | Key Condition |
|---------------|-------------|---------------|
| Get user profile | Base table | PK = USER#id, SK = PROFILE |
| List user's progress | Base table | PK = USER#id, SK begins_with PROGRESS# |
| List feedback by type | GSI1 | GSI1PK = TYPE#bug |
| List recent feedback | GSI1 | GSI1PK = TYPE#all, GSI1SK > CREATED#timestamp |

## Anti-Patterns to Avoid

| Don't | Do Instead |
|-------|-----------|
| `Scan` the entire table | `Query` with proper key conditions |
| Store large blobs in items | Store in S3, reference by key |
| Use auto-incrementing IDs | Use UUIDs or composite natural keys |
| Create a GSI per query | Design composite keys to serve multiple patterns |
| Forget TTL on temp data | Set `expiresAt` attribute with DynamoDB TTL |
