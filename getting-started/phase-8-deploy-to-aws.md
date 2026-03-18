# 🚀 Phase 8 — Deploy to the Internet (AWS)

> **Read time: ~10 minutes** | **Do time: ~30-60 minutes**

---

> **🏁 Ready Check — Can I skip this section?**
>
> ✅ Skip if: You've deployed to AWS before and know how Amplify or App Runner works
> 📖 Read if: You've never put a website on the internet before
>
> Not sure? If "deployment" is a new word for you, read the first section, then decide.

---

## What Does "Deploy" Mean?

![Deploying your app to the world](/images/lessons/p8-deploy.png)

Up until now, everything you've built has been on **localhost** — visible only on your computer. **Deploying** means putting it on the internet so other people can access it with a URL like `myapp.com`.

Think of it like this:
- **Localhost** = a private dress rehearsal in your living room
- **Deployed** = the show is live and the audience can watch

---

## Where We're Deploying: AWS

**AWS (Amazon Web Services)** is where most professional websites and apps are hosted. It's what Netflix, Airbnb, and thousands of businesses use.

Why AWS?
- ✅ **Free tier** for 12 months (covers most small projects)
- ✅ **Professional grade** — your app runs on the same infrastructure as Fortune 500 companies
- ✅ **Scales automatically** — handles 10 users or 10,000 users without changes
- ✅ **Secure by default** — built-in SSL certificates (the padlock icon in your browser)

---

## The Two Approaches

We teach deployment in two steps — **manual first, automated later**:

### Approach 1: Manual Console (Learn How It Works)

For your first deployment, we'll use the **AWS Management Console** — a visual dashboard where you can see exactly what's happening.

**Why manual first?** Because understanding what's happening makes you a better boss. When the AI handles deployment later, you'll know what it's doing.

### Approach 2: Automated CLI (Let AI Handle It)

Once you understand the basics, we'll use Antigravity's `/courier` workflow to automate the entire process. You'll go from code changes to live deployment in one command.

---

## Step 1: Create an AWS Account

1. Go to **[aws.amazon.com](https://aws.amazon.com)**
2. Click **Create an AWS Account**
3. Enter your email, create a password, and choose an account name
4. Enter payment information (required, but **you won't be charged** for free tier usage)
5. Choose the **Free** support plan
6. Verify your phone number

> **About the credit card:** AWS requires a credit card to create an account, but the Free Tier is genuinely free for most small projects for 12 months. Set up billing alerts so you're never surprised.

### Set Up a Billing Alert

1. Go to **Billing Dashboard** → **Budgets**
2. Click **Create Budget**
3. Choose **Zero spend budget**
4. Name it "Coach Gravity Alert"
5. Add your email

This sends you an email if anything would cost money.

---

## Step 2: Deploy with AWS Amplify (Manual)

**AWS Amplify** is the simplest way to deploy a web application. It connects to your GitHub repository and automatically deploys every time you push changes.

### The Process

1. Go to **[console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)**
2. Click **Create new app** → **Host web app**
3. Choose **GitHub** as the source
4. Authorize AWS to access your GitHub account
5. Select your repository and branch (usually `main`)
6. Review the build settings (Amplify usually auto-detects these correctly)
7. Click **Save and deploy**

**That's it.** Amplify will:
- Pull your code from GitHub
- Build your application
- Host it on a URL like `https://main.d1abc2def3.amplifyapp.com`
- Set up SSL (the secure padlock)
- Automatically redeploy when you push new code

### After Deployment

You'll get a URL like `https://main.d1abc2def3.amplifyapp.com`. Share this with anyone — they can now see your app in their browser.

If you have your own domain (like `myapp.com`), Amplify can connect to that too. Tell Antigravity:

```
Help me connect my custom domain myapp.com to my Amplify deployment.
```

---

## Step 3: Automate with `/courier` (Later)

Once you've done a manual deployment and understand the process, you can automate everything:

```
/courier
```

This single command:
1. ✅ Runs `/preflight` (quality checks)
2. ✅ Commits your changes to Git
3. ✅ Pushes to GitHub
4. ✅ Amplify automatically deploys

Your deployment process becomes: **make changes → `/courier` → done.**

---

## Cost Expectations

| What | Monthly Cost |
|---|---|
| AWS Amplify Hosting (small project) | $0 (free tier) → ~$5-15/month after |
| Custom domain name | ~$12/year |
| SSL certificate | Free (included with Amplify) |
| DynamoDB (database, light usage) | $0 (free tier) → ~$1-5/month |

For most learning projects and prototypes, **you'll stay within the free tier.**

---

## Checkpoint ✅

At this point, you should:

- [x] Understand what deployment means
- [x] Have an AWS account with a billing alert
- [x] Have deployed your app via Amplify (or know how to)
- [x] Know that `/courier` automates the process

---

## 🎉 Congratulations!

![Congratulations on completing the course!](/images/lessons/p8-congratulations.png)

You've completed the entire Coach Gravity guide. Here's what you've accomplished:

| Phase | What You Learned |
|---|---|
| 0 | Set up your computer and installed safety rules |
| 1 | Built your first app — the Expense Tracker — in minutes |
| 2 | Understood what happened behind the scenes |
| 3 | How to communicate effectively with AI |
| 4 | How to plan a project before building |
| 5 | How to build YOUR project and iterate on it |
| 6 | How to use quality workflows for professional-grade code |
| 7 | How to save and share your work with Git |
| 8 | How to deploy your app to the internet |

**You went from zero to a deployed web application — without writing a single line of code.**

What's next? Build something real. The best way to learn is to build something you actually need. Open a new folder, type `/start`, and create your next project.

---

> *This guide is part of the Coach Gravity Starter Kit — built to help anyone, regardless of technical background, build real software with Antigravity AI.*
