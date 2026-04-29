# AI-Augmented CI/CD Pipeline (React)

> Exploring how modern teams use CI/CD and AI to improve code quality, security, and delivery workflows.

## 📌 Overview

This project explores building a production-style CI/CD pipeline for a React application, with a focus on quality, automation, and reliability.

The goal is to progressively implement a workflow where, on every pull request, the pipeline will:

- Run automated tests, enforce code quality and best practices, and perform type checks   
- Build the application to ensure production readiness  
- Perform security and dependency checks  
- Generate an AI-assisted pull request review report    

After validation and approval, changes are merged into the main branch and deployed to production.

## ⚙️ Features

- 🔄 Automated testing *(in progress)*
- ✅ Code quality & best practices enforcement
- ✅ Type checking
- ✅ Build validation
- 🔄 Security checks (dependencies & code scanning) *(in progress)*
- 🔄 AI-assisted pull request review report *(in progress)*
- 🚀 Production deployment via Netlify

## 🧱 Tech Stack

- **Frontend:** React + Vite + TypeScript  
- **CI/CD:** GitHub Actions  
- **Hosting:** Netlify  

### 🤖 AI Assistance
- GitHub Copilot (AI-assisted development and PR insights/reports)

### 🧪 Testing
- Jest
- React Testing Library *(planned)*

### 🧹 Code Quality
- ESLint
- Prettier
- TypeScript (type safety)

### 🔐 Security
- Dependabot (dependency updates & alerts)
- GitHub CodeQL (static analysis & vulnerability detection)
- npm audit (dependency vulnerability scanning)

## 🔄 Workflow

```text
Feature Branch → Pull Request → CI Checks → Automated Report → Human Review → Merge → Production Deploy