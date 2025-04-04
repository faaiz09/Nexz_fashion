# Nexz Fashion - Gothic Clothing E-commerce

A modern e-commerce platform for gothic fashion, built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Product catalog with filtering
- Shopping cart functionality
- Product details page
- Category browsing
- Newsletter subscription

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `public` directory and add the following images:
   - `hero-image.jpg` - Main hero image for the homepage
   - `brand-story.jpg` - Image for the brand story section
   - `category-dresses.jpg` - Category image for dresses
   - `category-accessories.jpg` - Category image for accessories
   - `category-outerwear.jpg` - Category image for outerwear
   - `product-1.jpg` - Product image
   - `product-1-2.jpg` - Product image variant
   - `product-1-3.jpg` - Product image variant
   - `product-1-4.jpg` - Product image variant
   - `instagram-1.jpg` through `instagram-6.jpg` - Instagram feed images

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/store/` - State management
- `src/types/` - TypeScript type definitions
- `public/` - Static assets

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Zustand (State Management)
- Vite (Build Tool)

## Development

- Run the development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview production build:
  ```bash
  npm run preview
  ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
