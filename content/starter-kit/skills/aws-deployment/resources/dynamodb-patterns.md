# DynamoDB Patterns

## Design Principles

1. **Single-Table Design**: Prefer one table per service with composite keys
2. **Access Patterns First**: Define queries before designing the schema
3. **Index-Aware Queries**: Every query MUST document which index it uses
4. **No Scans**: Never use `Scan` in production code — always use `Query` with an index

## Key Design Patterns

### Composite Keys
```
PK: USER#<userId>
SK: PROGRESS#<phaseSlug>#<lessonSlug>
```

### GSI for Alternate Access
```
GSI1PK: PHASE#<phaseSlug>
GSI1SK: USER#<userId>
```

### Common Patterns

| Pattern | PK | SK | Use Case |
|---------|----|----|----------|
| Get user progress | `USER#<id>` | `PROGRESS#<phase>#<lesson>` | Load specific lesson status |
| List all progress | `USER#<id>` | begins_with `PROGRESS#` | Dashboard overview |
| Get feedback | `FEEDBACK#<id>` | `META` | Single feedback item |
| List by type | GSI: `TYPE#bug` | `CREATED#<timestamp>` | Admin feedback filter |

## Capacity & Cost

- **On-Demand** for unpredictable workloads (default for new projects)
- **Provisioned** only when traffic patterns are well-understood
- **TTL** on session data, OTPs, temporary tokens

## SDK Reference

```typescript
// Always use DocumentClient, not raw DynamoDB
import { DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

// Query with index
const result = await docClient.send(new QueryCommand({
    TableName: TABLE_NAME,
    IndexName: "GSI1",  // ALWAYS document which index
    KeyConditionExpression: "GSI1PK = :pk AND begins_with(GSI1SK, :sk)",
    ExpressionAttributeValues: { ":pk": `TYPE#${type}`, ":sk": "CREATED#" },
}));
```
