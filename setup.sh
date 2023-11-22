#!/bin/bash

# Step 1: Create a new Next.js app with TypeScript
npx create-next-app my-next-app --example with-typescript
cd my-next-app

# Step 2: Install and configure Tailwind CSS
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
touch postcss.config.js
echo "module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };" > postcss.config.js
echo "@import 'tailwindcss/base'; @import 'tailwindcss/components'; @import 'tailwindcss/utilities';" > styles/globals.css

# Step 3: Install and configure Axios
npm install axios

# Step 4: Install and configure Jest with RTL
npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
npx ts-jest config:init
echo "import '@testing-library/jest-dom';" > setupTests.ts
echo "module.exports = { preset: 'ts-jest/presets/js-with-ts', testEnvironment: 'jsdom', setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], };" > jest.config.js

# Step 5: Update tsconfig.json
echo '{
  "compilerOptions": {
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "isolatedModules": true,
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"]
  }
}' > tsconfig.json

# Step 6: Create a simple component and test
echo "import React from 'react';\nconst ExampleComponent: React.FC = () => { return <div>Hello, World!</div>; };\nexport default ExampleComponent;" > components/ExampleComponent.tsx
echo "import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport ExampleComponent from './ExampleComponent';\ntest('renders hello world', () => { render(<ExampleComponent />); const textElement = screen.getByText(/hello, world/i); expect(textElement).toBeInTheDocument(); });" > components/ExampleComponent.test.tsx

# Step 7: Start the development server
npm run dev
