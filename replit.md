# Derek Osik Portfolio Website

## Overview

This is a full-stack web application built as a personal portfolio website for Derek Osik, showcasing his dual expertise in professional hockey and artificial intelligence. The application features a modern React frontend with a Node.js/Express backend, PostgreSQL database integration, and a comprehensive coaching program management system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-backed sessions
- **API Design**: RESTful API with proper error handling

### Database Schema
The application uses PostgreSQL with the following main entities:
- **Users**: Authentication and basic user information
- **Client Profiles**: Extended profile information for coaching clients
- **Coaching Programs**: Different types of coaching services offered
- **Coaching Sessions**: Individual coaching session records

## Key Components

### 1. Frontend Components
- **Home Page**: Multi-section portfolio showcasing about, projects, coaching, and contact information
- **Hero Section**: Dynamic title rotation and professional introduction
- **Projects Section**: Filterable portfolio of AI, hockey, and programming projects
- **Coaching Section**: Dynamic coaching program display with real-time pricing
- **Contact Form**: Form handling with validation and API integration

### 2. Backend Services
- **Storage Layer**: Database abstraction with TypeScript interfaces
- **API Routes**: RESTful endpoints for coaching programs and contact forms
- **Database Migrations**: Drizzle Kit for schema management
- **Scripts**: Utility scripts for seeding and updating data

### 3. Database Design
- **Normalized Schema**: Proper relationships between users, profiles, programs, and sessions
- **Type Safety**: Full TypeScript integration with Drizzle ORM
- **Enum Support**: PostgreSQL enums for coaching program types
- **Audit Fields**: Created/updated timestamps for data tracking

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **State Management**: React Query handles API requests and caching
3. **API Layer**: Express routes process requests with validation
4. **Database Operations**: Drizzle ORM executes type-safe database queries
5. **Response**: JSON responses sent back through the API layer
6. **UI Updates**: React components re-render with new data

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query for frontend
- **Node.js Backend**: Express, TypeScript, various middleware
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **UI Library**: Radix UI components, Tailwind CSS
- **Build Tools**: Vite, esbuild for production builds

### Development Dependencies
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code formatting and linting
- **Drizzle Kit**: Database schema management and migrations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations apply schema changes
4. **Asset Optimization**: Static assets processed and optimized

### Environment Configuration
- **Development**: Hot reload with Vite dev server
- **Production**: Optimized builds with proper error handling
- **Database**: Environment-based connection strings
- **Security**: Proper session management and CORS handling

### Scripts Available
- `npm run dev`: Development with hot reload
- `npm run build`: Production build
- `npm start`: Production server
- `npm run db:push`: Apply database schema changes

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```