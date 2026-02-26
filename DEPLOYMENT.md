# How to Deploy Night Store

This project is built using React and Vite. Below are the steps to deploy your website to **Vercel** and **Netlify**.

---

## Deploying to Vercel (Recommended)

Vercel is an excellent platform for Vite projects. Here are the precise project settings and steps.

### Vercel Build and Output Settings
When importing your project into Vercel, ensure the settings match these exact details:
- **Application Preset**: `Vite`
- **Root Directory**: `./` (This tells Vercel the project is in the main folder)
- **Build Command**: `npm run build` or `vite build`
- **Output Directory**: `dist` (Vite creates this folder when building)
- **Install Command**: `npm install`, `pnpm install`, `yarn install`, or `bun install` (depending on your package manager)

### Method 1: Deploying via GitHub
This sets up continuous deployment, updating your site automatically when you push to GitHub.
1. Push your code to a GitHub repository.
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"`
   - Create a repo on GitHub and push.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New...** > **Project**.
4. Import your GitHub repository.
5. In the **Configure Project** section, make sure the settings match the **Vercel Build and Output Settings** listed above!
6. Click **Deploy** and wait for your live URL!

### Method 2: Vercel CLI (Manual Deployment)
You can deploy directly from your local terminal.
1. Install the Vercel CLI globally: `npm install -g vercel`
2. Run the deployment command in your project (`c:\Users\gaura\OneDrive\Desktop\Store\night-store`):
   ```bash
   vercel
   ```
3. Follow the CLI Prompts:
   - "Set up and deploy?" -> **Y**
   - "Link to existing project?" -> **N**
   - "What's your project's name?" -> `night-store`
   - "In which directory is your code located?" -> `./`
   - The CLI should detect Vite settings automatically. Confirm them.
4. Finalize production deployment: `vercel --prod`

*(Optional) Vercel handles Single Page Applications gracefully, but if you hit 404 errors on refresh, you can add a `vercel.json` file to route traffic to `index.html`: `{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}`.*

---

## Deploying to Netlify

### Method 1: Deploying via GitHub
1. Push your code to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/) and log in.
3. Click **Add new site** > **Import an existing project**.
4. Choose **GitHub** and authorize.
5. Select your repository.
6. Build Settings:
   - **Base directory**: *(leave empty)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **Deploy site**.

### Method 2: Manual Deploy (Drag & Drop)
1. Build your project locally in the terminal:
   ```bash
   npm run build
   ```
2. Go to your [Netlify Sites dashboard](https://app.netlify.com/teams/your-site/sites).
3. Look for **"Drag and drop your site output folder here"**.
4. Drag the newly created `dist` folder into the Netlify box.
5. Netlify will deploy it instantly!

*(Optional) For Netlify UI routing issues (404), create a `public/_redirects` file with this line: `/* /index.html 200`.*
