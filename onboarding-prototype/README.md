# Airbridge Onboarding Prototype

A modern, interactive onboarding flow prototype built with React, TypeScript, and Vite. This project demonstrates a multi-step onboarding experience inspired by Airbridge's tech stack.

## Features

- ✨ Multi-step onboarding flow with progress tracking
- 🎨 Beautiful UI with Emotion CSS-in-JS
- 🔄 State management with Recoil
- 🚀 Built with Vite for lightning-fast development
- 📱 Fully responsive design
- 🎯 Type-safe with TypeScript

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: TypeScript 5.9.3
- **Styling**: Emotion (CSS-in-JS)
- **State Management**: Recoil 0.7.7
- **Server State**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM 7.10.1

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── ProgressBar.tsx
│   └── OnboardingLayout.tsx
├── pages/              # Page components
│   ├── WelcomePage.tsx
│   ├── Step1Page.tsx
│   ├── Step2Page.tsx
│   ├── Step3Page.tsx
│   ├── Step4Page.tsx
│   └── CompletePage.tsx
├── store/              # Recoil state management
│   └── onboardingState.ts
├── styles/             # Theme and global styles
│   └── theme.ts
├── features/           # Feature-specific modules
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onboarding-prototype
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Onboarding Flow

The onboarding process consists of 5 steps:

1. **Welcome Page**: Introduction and feature highlights
2. **Step 1**: Company information
3. **Step 2**: Email address
4. **Step 3**: User role selection
5. **Step 4**: Primary use case
6. **Complete**: Summary and next steps

## Development

### Adding New Components

Create new components in the `src/components` directory:

```tsx
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const MyComponent = styled.div`
  color: ${theme.colors.primary};
`;
```

### State Management

Use Recoil for global state management:

```tsx
import { atom, useRecoilState } from 'recoil';

const myState = atom({
  key: 'myState',
  default: initialValue,
});
```

### Styling

This project uses Emotion for CSS-in-JS. The theme is defined in `src/styles/theme.ts`:

- Colors
- Spacing
- Typography
- Border radius
- Shadows
- Transitions

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
