# Sam Company Backend API

This is the backend API for Sam Company, built with Laravel.

## Project Structure

```
backend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── ApiController.php
│   └── Models/
├── config/
├── database/
│   └── migrations/
├── routes/
│   └── api.php
├── composer.json
└── README.md
```

## API Endpoints

### Company Information
- `GET /api/company-info` - Get company information

### Contact
- `GET /api/contact-info` - Get contact information
- `POST /api/contact-submit` - Submit contact form

## Installation

1. Install Composer dependencies:
```bash
composer install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Generate application key:
```bash
php artisan key:generate
```

4. Run migrations:
```bash
php artisan migrate
```

5. Start the development server:
```bash
php artisan serve
```

## Features

- RESTful API endpoints
- Contact form handling
- Company information management
- CORS support for frontend integration

## Frontend Integration

The frontend React application can consume these APIs to:
- Display company information
- Handle contact form submissions
- Manage dynamic content

## Development

This backend is designed to work with the React frontend located in the `../frontend` directory.

