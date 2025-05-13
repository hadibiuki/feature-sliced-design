# Feature-Sliced Design (FSD)

## Layer Overview

- **shared/** — Reusable UI and utilities
- **entities/** — Business domain logic and components (e.g., User)
- **features/** — Goal-oriented UI and logic (e.g., ProfileCard)
- **processes/** — UI + logic for full scenarios (e.g., ViewProfile)
- **pages/** — Route definitions

## How to Add a Feature

1. Add domain logic to `entities/`
2. Create UI logic in `features/[feature]/`
3. Compose logic in `processes/[scenario]/`
4. Show in `pages/`

> For example: a new “edit profile” feature.
