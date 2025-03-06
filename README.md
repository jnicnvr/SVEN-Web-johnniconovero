# Installation Guide

## Prerequisites

Before installing the application, ensure you have the following dependencies installed:

- PHP (>= 8.0)
- Composer
- Node.js (>= 16)
- npm or yarn
- MySQL or any supported database

## Backend Installation (Laravel)

1. **Clone the repository**
   ```sh
   git clone git@github.com:jnicnvr/SVEN-Web-johnniconovero.git
   cd SVEN-Web-johnniconovero
   ```

2. **Install PHP dependencies**
   ```sh
   composer install
   ```

3. **Set up environment variables**
   ```sh
   cp .env.example .env
   ```
   Update the `.env` file with your database credentials.

4. **Generate application key**
   ```sh
   php artisan key:generate
   ```

5. **Run database migrations**
   ```sh
   php artisan migrate --seed
   ```

6. **Start Laravel development server**
   ```sh
   php artisan serve
   ```

## Frontend Installation (React.js with Vite and Tailwind CSS)

1. **Navigate to frontend directory**
   ```sh
   cd SVEN-Web-johnniconovero/pet-booking-web
   ```

2. **Install frontend dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Run Vite development server**
   ```sh
   npm run dev  # or yarn dev
   ```

## Running the Application

- The backend will be running at `http://127.0.0.1:8000`
- The frontend will be running at `http://localhost:5173`

Ensure that API calls from the frontend point to the correct backend URL configured in the `.env` file.

## Building for Production

1. **Build the frontend**
   ```sh
   npm run build
   ```
   This will generate the production files inside `dist/`.

2. **Deploy the backend and frontend**
   - Move the contents of `dist/` to the Laravel `public/` directory or configure a separate hosting for the frontend.
   - Ensure environment variables are correctly set for production.

## Additional Commands

- Run tests: `php artisan test`
- Clear cache: `php artisan cache:clear`
- View logs: `tail -f storage/logs/laravel.log`

## Routes
- php artisan route:list
```
GET|HEAD   /api/appointments               # Fetch all appointments
POST       /api/appointments               # Create a new appointment
GET|HEAD   /api/appointments/{appointment} # Fetch a specific appointment
PUT|PATCH  /api/appointments/{appointment} # Update an appointment
DELETE     /api/appointments/{appointment} # Delete an appointment
```


For any issues, refer to the project documentation or raise an issue in the repository.
