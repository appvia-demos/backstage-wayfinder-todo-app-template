# Development Guide

This guide covers local development, testing, and debugging for the Todo application.

## Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development without Docker)
- Git

## Quick Start

The fastest way to get started is using Docker Compose:

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-repo-name>

# Start the application with MySQL
docker compose up --build

# The app will be available at http://localhost:3000
```

## Development Setup

### Using Docker (Recommended)

```bash
# Run in development mode with auto-reload
docker compose up --build

# Run in detached mode
docker compose up -d

# View logs
docker compose logs -f app

# Stop the application
docker compose down

# Stop and remove volumes (clean slate)
docker compose down -v
```

### Local Development (Without Docker)

```bash
# Install dependencies
cd app
npm install

# Start MySQL using Docker
docker run -d \
  --name mysql-dev \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todos \
  -p 3306:3306 \
  mysql:5.7.33

# Set environment variables
export MYSQL_HOST=localhost
export MYSQL_USER=root
export MYSQL_PASSWORD=secret
export MYSQL_DB=todos

# Run the application
npm start
```

## Testing

### Running Tests

```bash
# Run unit tests
cd app
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode (for development)
npm run test:watch
```

### Manual Testing

The application provides a simple web interface for testing:

1. **Create a todo**: Enter text and click "Add"
2. **Toggle completion**: Click the checkbox next to a todo
3. **Delete a todo**: Click the "×" button
4. **API testing**: Use the Swagger UI at http://localhost:3000/docs

## Environment Variables

The application uses the following environment variables:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `MYSQL_HOST` | MySQL server hostname | `localhost` | Yes |
| `MYSQL_USER` | MySQL username | `root` | Yes |
| `MYSQL_PASSWORD` | MySQL password | - | Yes |
| `MYSQL_DB` | MySQL database name | `todos` | Yes |
| `PORT` | Application port | `3000` | No |

## Project Structure

```
.
├── app/                    # Application source code
│   ├── index.js           # Main application file
│   ├── package.json       # Node.js dependencies
│   ├── openapi.yaml       # API specification
│   └── src/
│       └── static/        # Frontend files
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile            # Application Docker image
└── docs/                 # Documentation
```

## Common Tasks

### Debugging Database Issues

```bash
# Connect to MySQL container
docker compose exec mysql mysql -uroot -psecret

# Check database
USE todos;
SHOW TABLES;
SELECT * FROM items;
```

### Viewing Application Logs

```bash
# All services
docker compose logs -f

# Application only
docker compose logs -f app

# MySQL only
docker compose logs -f mysql
```

### Rebuilding After Changes

```bash
# Rebuild and restart
docker compose up --build

# Force rebuild without cache
docker compose build --no-cache
docker compose up
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# Find process using port 3000
lsof -i :3000

# Or use a different port
PORT=3001 docker compose up
```

### Database Connection Failed

1. Ensure MySQL is running: `docker compose ps`
2. Check environment variables are set correctly
3. Verify MySQL is ready: `docker compose logs mysql | grep "ready for connections"`
4. Try restarting: `docker compose restart`

### Changes Not Reflected

1. Make sure to rebuild: `docker compose up --build`
2. Clear browser cache
3. Check that volume mounts are correct in docker-compose.yml

## Next Steps

- See [API Documentation](api.md) for endpoint details
- Configure [JFrog Artifactory](artifactory-setup.md) for CI/CD
- Review the main [documentation index](index.md)