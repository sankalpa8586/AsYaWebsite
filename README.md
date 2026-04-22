# ASYA Web Project

## Overview
This is a monorepo project for the ASYA web application, built using **React**, **Vite**, and **Tailwind CSS**. It includes a modern frontend with reusable components and a scalable structure.

## Features
- **React**: Component-based architecture for building the UI.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Radix UI**: Accessible and customizable UI components.
- **ESLint**: Linting for consistent code quality.

## Folder Structure
```
ASYA/
├── web/                # Main web application
│   ├── src/            # Source code
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── assets/     # Static assets (optional)
│   ├── public/         # Public static files
│   ├── package.json    # Web app dependencies
│   ├── vite.config.js  # Vite configuration
├── package.json        # Monorepo dependencies
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
```

## Prerequisites
- **Node.js**: Ensure you have Node.js installed (v16 or higher).
- **npm**: Comes with Node.js.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd ASYA
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   cd web
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production build will be located in the `dist/` folder.

5. **Preview the Production Build**:
   ```bash
   npm run start
   ```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries, please contact **info@asyasolutions.com**.