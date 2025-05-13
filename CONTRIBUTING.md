# Contributing Guide

Welcome! 👋  
This project follows the **Feature-Sliced Design (FSD)** architecture and is built using **Nuxt 3 + TypeScript**. This guide will help you understand the structure and how to contribute effectively.

---

## 🗂 Folder Structure (FSD Layers)

| Layer        | Purpose                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `shared/`    | Generic UI components, utils, and assets                                |
| `entities/`  | Domain models, UI + logic related to core business concepts (e.g. User) |
| `features/`  | Goal-oriented units (e.g. UpdateProfile, ProfileCard)                   |
| `processes/` | Orchestration of features/entities into flows                           |
| `pages/`     | Nuxt route definitions only — no logic                                  |

---

## 🛠 Local Setup

```bash
git clone https://github.com/hadibiuki/feature-sliced-design.git
cd feature-sliced-design
npm install
npm run dev
```
