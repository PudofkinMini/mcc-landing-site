# MCC Landing Site

A React-based landing site built with Vite, TypeScript, and Tailwind CSS.

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. The build process creates production files in the `dist` folder, which is used as the source for GitHub Pages.

### Setup Instructions

1. **Build the Project**: Run `npm run build` to generate the production files in the `dist` folder.

2. **Configure GitHub Pages**: 
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Set the source to "Deploy from a branch"
   - Select the branch containing your code (usually `main`)
   - Set the folder to `/ (root)` and ensure the `dist` folder is committed to your repository
   
   Alternatively, for GitHub Actions deployment:
   - Set the source to "GitHub Actions"
   - The build artifacts from the `dist` folder will be automatically deployed
   - The included workflow `.github/workflows/deploy.yml` builds the site and
     publishes the `dist` directory to the `gh-pages` branch.

3. **Important Files**:
   - `.nojekyll`: Included in the `dist` folder to prevent GitHub Pages from processing the site with Jekyll
   - The `dist` folder contains all the production-ready files for deployment

### Deployment Workflow

1. Make your changes to the source code
2. Run `npm run build` to generate updated production files
3. Commit and push the changes including the updated `dist` folder
4. GitHub Pages will automatically deploy the updated site

### Local Testing

Before deploying, you can test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the built files from the `dist` folder on a local development server.

## Technologies Used

- React 19.1.0
- TypeScript 5.8.3
- Vite 7.0.4
- Tailwind CSS 4.1.11
- React Router DOM 7.7.0

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```