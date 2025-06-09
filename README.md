# Personal Website

This is a personal portfolio website built with Next.js, React, ShadCN UI, and Tailwind CSS
It was initialized using Firebase Studio.

## Getting Started

To run the project locally:

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

## Key Features

- Responsive design
- Light and Dark mode support
- Customizable theme via `src/app/globals.css`
- Project showcase page
- Resume page (PDF embed)
- Built with modern web technologies

## Customization

- Update your personal information in `src/data/portfolio-data.ts`.
- Add your projects to `src/data/projects-data.ts`.
- Replace `/public/PortfolioAce_Resume.pdf` with your actual resume.
- Customize styles in `src/app/globals.css` and Tailwind configuration in `tailwind.config.ts`.

## Hosting

This project is hosted on firebase. To redeploy after making changes, do the following:
- npm run build
- firebase deploy

If needed, check the firebase.json, package.json, or start with firebase init command.
