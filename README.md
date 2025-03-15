# Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS.

## Technologies

This project is built with modern web technologies:

- **React** - Frontend library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn package manager

### Installation

```sh
# Clone the repository
git clone https://github.com/rohitsaluja1/personal-website.git

# Navigate to the project directory
cd personal-website

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:8080`.

## Development

### Project Structure

```
personal-website/
├── public/          # Static assets
├── src/             # Source code
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page components
│   ├── styles/      # Global styles
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

### Building for Production

```sh
npm run build
# or
yarn build
```

This will generate a `dist` directory with the production build.

## Deployment

This project is deployed on Vercel. You can also deploy it to:

- **Vercel** - Zero-configuration deployment
- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free hosting directly from your repository

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
