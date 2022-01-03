# @lilRobat/elrond-fee-checker
This repository contains a create-react-app for the frontend and a fastapi backend.
live demo: https://www.egldfees.com

## Requirements

* Node.js version 12.16.2+
* Npm version 6.14.4+
* Python 3.9.6+

## Getting Started

The dapp is created using the Elrond dapp-template.

### Instalation and running

### Step 1. Install modules

From a terminal, navigate to the frontend folder and run:

```bash
npm install
```

### Step 2. Update Configs

Create a new file `frontend/src/config.tsx` and copy the content of `frontend/src/config.testnet.tsx`. If you want to develop against `devnet`, change all instances of `testnet` to `devnet`.

### Step 3. Running in development mode

In the frontend folder run:

```bash
npm run start
```

This will start the React app in development mode, using the configs found in the `config.tsx` file.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Step 4. Starting the backend server

Move to the `backend` folder and run:

```bash
uvicorn main:app --reload
```

### Step 5. Build for testing and production use

A build of the app is necessary to deploy for testing purposes or for production use.
To build the project run:

```bash
npm run build
```
