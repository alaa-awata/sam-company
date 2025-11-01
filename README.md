# SAM Company Website

A bilingual (English/Arabic) corporate website with admin dashboard built using React and Laravel.

## Project Structure

```
SamCompany/
├── backend/     # Laravel API backend
└── frontend/    # React frontend
```

## Requirements

### Backend
- PHP >= 8.1
- Composer
- MySQL/MariaDB
- Laravel 10.x

### Frontend
- Node.js >= 16.x
- npm/yarn
- React 18.x
- Vite

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
composer install
```

3. Copy environment file and configure:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Configure database in .env file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sam_company
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

6. Run migrations and seeders:
```bash
php artisan migrate --seed
```

7. Start development server:
```bash
php artisan serve
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```
VITE_API_URL=http://localhost:8000
```

4. Start development server:
```bash
npm run dev
```

## Features

- 🌐 Bilingual support (English/Arabic)
- 🔐 Admin dashboard
- 📰 News management
- 👥 Team management
- ❓ FAQ management
- 💼 Service offerings
- 📱 Responsive design

## API Endpoints

### Public Routes
- `GET /api/offers` - List offers
- `GET /api/news` - List news articles
- `GET /api/faqs` - List FAQs
- `GET /api/team` - List team members

### Protected Routes (Requires Authentication)
- `POST /api/login` - Admin login
- `POST /api/logout` - Admin logout
- All CRUD operations for offers, news, FAQs, and team members

## Development

### Backend Testing
```bash
cd backend
php artisan test
```

### Frontend Testing
```bash
cd frontend
npm run test
```

## Deployment

1. Build frontend:
```bash
cd frontend
npm run build
```

2. Configure backend for production:
```bash
cd backend
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
```

## License

[MIT License](LICENSE)