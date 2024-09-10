
# Vote App - React Frontend

This is the React frontend of the Vote App, built using **Vite**. The frontend contains a button to cast a vote, which sends a request to the Flask API backend.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deploying to DigitalOcean](#deploying-to-digitalocean)
- [License](#license)

## Technologies Used
- **React** (with Vite)
- **JavaScript**
- **CSS**

## Local Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** and **npm**

### Steps

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/vote-app-frontend.git
   cd vote-app-frontend
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Create a \`.env\` file** in the root of the project:
   \`\`\`bash
   VITE_BACKEND_URL=http://127.0.0.1:5000
   \`\`\`

   This tells the frontend where to send the API requests. The backend URL should point to your local Flask backend.

## Environment Variables

| Variable           | Description                              | Example                     |
|--------------------|------------------------------------------|-----------------------------|
| \`VITE_BACKEND_URL\`  | The URL for the Flask backend            | \`http://127.0.0.1:5000\`      |

## Running Locally

### Start the Vite Development Server

1. After installing the dependencies, run:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Visit the React app at \`http://localhost:3000\` in your browser.

## Deploying to DigitalOcean

1. **Push your React project to GitHub**.
2. **Deploy using DigitalOcean App Platform**:
   - Create a new app in the DigitalOcean dashboard.
   - Select **Static Site** for the frontend.
   - Add the environment variable \`VITE_BACKEND_URL\` and set it to the URL where the Flask backend is hosted.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
