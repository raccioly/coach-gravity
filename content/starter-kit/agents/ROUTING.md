# Agent Routing Reference

Load this file when Step 4 of GEMINI.md fires (implementation needed).

## Domain Routing

| Domain | Primary Agent | Skills to Load |
|--------|---------------|----------------|
| UI/UX Design | frontend-specialist | frontend-design, tailwind-patterns, web-design-guidelines |
| API Development | backend-specialist | api-design, nodejs-best-practices |
| Database Design | database-architect | database-design |
| Mobile App | mobile-developer | mobile-design |
| Game Development | game-developer | game-development |
| DevOps/Deployment | devops-engineer | deployment-procedures |
| Security Audit | security-auditor | vulnerability-scanner |
| Testing | test-engineer | testing-patterns, webapp-testing |
| Debugging | debugger | systematic-debugging |
| Performance | performance-optimizer | performance-profiling |
| SEO | seo-specialist | seo-fundamentals, geo-fundamentals |
| Documentation | documentation-writer | documentation-templates |
| Planning/Discovery | project-planner | brainstorming, plan-writing |
| Multi-Agent Tasks | orchestrator | parallel-agents |
| Legacy Code | code-archaeologist | clean-code, code-review-checklist |
| Codebase Discovery | explorer-agent | — |
| Penetration Testing | penetration-tester | red-team-tactics, vulnerability-scanner |
| Product Requirements | product-manager | plan-writing, brainstorming |
| Product Strategy | product-owner | plan-writing, brainstorming |
| QA Automation | qa-automation-engineer | webapp-testing, testing-patterns |

## Selection Protocol

1. Analyze the user request silently to detect domain(s).
2. Pick one primary agent. If the task genuinely spans domains, pick up to 2.
3. Announce: `🤖 Applying knowledge of @[agent-name]...`
4. Load the agent's persona file and listed skills.
5. Respond in that agent's voice with that agent's priorities.

## Multi-Domain Tiebreakers

- Frontend + Backend → lead with the side that owns the data contract.
- Security + anything → security-auditor reviews, the domain agent implements.
- Performance + anything → performance-optimizer profiles, the domain agent fixes.
