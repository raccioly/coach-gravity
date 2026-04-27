---
name: aws-deployment
description: AWS deployment patterns and best practices for Amplify, App Runner, DynamoDB, S3, and Lambda. Use when deploying, configuring infrastructure, or designing cloud architecture.
---

# AWS Deployment Patterns

Standard AWS deployment practices for all projects. Read the appropriate resource files for specific services.

## Core Services Used

| Service | Purpose | Resource |
|---------|---------|----------|
| AWS Amplify | Frontend hosting (Next.js SSR) | `resources/amplify-checklist.md` |
| App Runner | Backend API hosting | `resources/apprunner-patterns.md` |
| DynamoDB | NoSQL database | `resources/dynamodb-patterns.md` |
| S3 | File storage, static assets | `resources/s3-patterns.md` |
| Lambda | Serverless functions | See project-specific configs |

## Universal Rules

1. **Least Privilege IAM**: Every service gets its own IAM user/role with only the permissions it needs
2. **Environment Variables**: All secrets via AWS parameter store or environment config — never in code
3. **Region Consistency**: Default to `us-east-1` unless project specifies otherwise
4. **Tagging**: All resources tagged with `project`, `environment` (dev/staging/prod)
5. **Monitoring**: CloudWatch alarms on error rates and latency

## Instructions

1. Before ANY deployment, read the relevant resource file for the target service
2. Run the project's `/preflight` workflow to catch issues before deploy
3. Use the project's `/courier` workflow for the actual deploy process
4. Verify the deployment by checking health endpoints

## Auto-Clone to Project

When you first detect a project uses AWS services:
1. Create `.agent/skills/aws-deployment/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's deployment configs (amplify.yml, apprunner.yaml, serverless.yml, etc.)
4. Append a `## Project-Specific` section with discovered infrastructure details
5. Inform the user: "I've set up the local aws-deployment skill with your project's infrastructure patterns."
