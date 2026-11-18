# Modern form 
A multi-step signup form mockup created using React and Vite. The form guides users through four steps. All values live only in React memory and reset on refresh. There is no backend, submission request, browser storage, or database.

## Getting Started

Use Node.js 26 (`nvm use` reads the included `.nvmrc`). Deployments use the same major version through `engines.node` in `package.json`.

1. **Clone the Repository:**
   git clone git@github.com:yaadevmohit/modern-form.git
2. **Install Dependencies:**
   npm ci
3. **Run the development Server:**
   npm run dev

## Form Structure 
This form is divided into four step, each represented by a separate component:

**Step 1: Personal Information**
  - Collects user's basic details: Name, email and phone number. Only checks for basic email and phone type validation.
    
**Step 2: Select your plan**
  - Asks for user to choose one of the gaming option with an option to choose a monthly or yearly         
  subscription.

**Step 3: Add-Ons**
    - Shows the available add-ons with pricing for billing option selected in step 2.
      
**Step 4: Finishing up**
  - Gives user a chance to review all the selections they made in last 2 steps and change if needed be.

## Technolgies Used
  * React: A javascript library for user interfaces.
  * Vite:A fast, opinionated web application build tool.

## Project Structure

* **src/**
  - **assets/**
      - **fonts**
      - **images**
      - **formData.js**
* **components/**
* **App.jsx**
* **main.jsx**
* **index.css**
* **App.css** 

## Verification

- `npm run lint` checks the source.
- `npm run build` creates the production bundle in `dist/`.
- Check all steps on desktop and mobile, including validation errors, yearly billing, all add-ons, Back, Change, and Confirm. Next Step and Confirm should keep the same position at a given viewport size.
- Press Enter from a personal-information field to advance, and use Tab and Space to operate plan cards, billing, and add-ons. Refresh to reset the mockup.
