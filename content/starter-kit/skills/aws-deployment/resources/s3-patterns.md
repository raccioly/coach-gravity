# S3 Patterns

## Usage Rules

1. **Never serve files directly from S3 buckets** — use presigned URLs or CloudFront
2. **Always set appropriate ACLs** — default to private
3. **Use presigned URLs for uploads** with short expiry (15 min max)
4. **Set content-type headers** on upload

## Presigned URL Pattern

```typescript
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Upload URL (15 min expiry)
const uploadUrl = await getSignedUrl(s3Client, new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `uploads/${userId}/${filename}`,
    ContentType: contentType,
}), { expiresIn: 900 });

// Download URL (1 hour expiry)
const downloadUrl = await getSignedUrl(s3Client, new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
}), { expiresIn: 3600 });
```

## Bucket Structure

```
project-bucket/
├── uploads/          # User-uploaded files (private)
├── assets/           # Static assets (CloudFront)
├── exports/          # Generated reports (private, TTL)
└── backups/          # Automated backups (lifecycle policy)
```
