# Admin CRM

A full-stack employee management CRM built with React and Express.

## Tech Stack

- **Frontend:** React, React Router, Axios
- **Backend:** Express, Sequelize ORM
- **Database:** MySQL

## Project Structure

```
app_client/    # React frontend (proxies to :3001 in dev)
app_api/       # Express API (controllers, models, routes)
config/        # Database configuration
app.js         # Server entry point
```

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Setup

1. Clone the repo:
   ```sh
   git clone https://github.com/jdarron/admincrm.git
   cd admin-crm
   ```

2. Install dependencies:
   ```sh
   npm install
   cd app_client && npm install
   ```

3. Create a MySQL database named `Employee` and update `config/config.json` if needed.

4. Start the API server:
   ```sh
   npm start
   ```

5. Start the React dev server (in a separate terminal):
   ```sh
   cd app_client && npm start
   ```

The API runs on `http://localhost:3001` and the React app on `http://localhost:3000`.
