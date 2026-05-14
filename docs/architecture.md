# Frontend Architecture

Pulseer Dashboard is built with Next.js (App Router), TypeScript, and Tailwind CSS. It follows a modular architecture that separates data fetching, state management, and UI presentation.

## Tech Stack

- **Framework**: Next.js 14
- **State Management**: Zustand (App preferences)
- **Data Fetching**: TanStack Query (Server state)
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts

## Component Structure

- `src/app`: Application routes and layouts.
- `src/components`: Reusable UI components and feature-specific components.
- `src/components/ui`: Primitive UI components (shadcn/ui style).
- `src/hooks`: Custom React hooks for data fetching and app logic.
- `src/lib`: Utilities, formatting, and the Pulseer client abstraction.
- `src/store`: Client-side state management.
- `src/types`: Standardised TypeScript interfaces.

## Data Flow

1.  **UI Components** use **Custom Hooks** to fetch data.
2.  **Custom Hooks** use the **PulseerClient** to interact with blockchain data (or mock fallback).
3.  **TanStack Query** manages the cache and polling lifecycle.
4.  **Zustand** manages global UI state (sidebar, selected network).
