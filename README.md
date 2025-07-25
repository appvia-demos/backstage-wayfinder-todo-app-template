# Todo App

This is a simple demo nodejs todo app which depends on a MySQL database. It allows you to create, update, and delete tasks in a user-friendly interface.

## Features

- Add item to list
- Mark item as done
- Delete item from list

## Installation

1. Clone the repository: `git clone https://github.com/appvia/todo-app.git`

## 🔧 Required GitHub Secrets

When projects are created from this template, configure the following GitHub repository secrets for the CI/CD pipeline using the GitHub CLI:

### JFrog Artifactory Secrets (Required)

```bash
# Set JFrog Artifactory URL
gh secret set ARTIFACTORY_URL --body "https://your-artifactory-instance.jfrog.io"

# Set JFrog username
gh secret set ARTIFACTORY_USERNAME --body "your-username@example.com"

# Set JFrog access token
gh secret set ARTIFACTORY_ACCESS_TOKEN --body "your-artifactory-access-token"

# Set Docker repository name
gh secret set ARTIFACTORY_DOCKER_REPO --body "docker-repo-name"
```

### SonarQube Secrets (Optional)

```bash
# Set SonarQube authentication token
gh secret set SONAR_TOKEN --body "your-sonarqube-token"

# Set SonarQube server URL
gh secret set SONAR_HOST_URL --body "https://sonarcloud.io"
```

### List All Secrets

To verify all secrets have been added:

```bash
gh secret list
```

For detailed setup instructions, see:
- [Artifactory Setup Guide](docs/artifactory-setup.md)
- [SonarQube Setup Guide](docs/sonarqube-setup.md)

**Note**: The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

## Usage

1. Open the app in your browser: `http://localhost:3000` (may take a few seconds to start up)
2. Create a new task by entering a description and clicking "Add Item"
3. Update the status of a task by clicking the checkbox next to it
4. Delete a task by clicking the "Delete" button next to it

## API Documentation

This application provides a REST API with OpenAPI documentation:

### Viewing API Documentation

1. **Interactive Swagger UI**: Visit `http://localhost:3000/swagger-ui.html` for interactive API documentation
2. **OpenAPI Specification**: Access the raw OpenAPI spec at `http://localhost:3000/openapi.yaml`

### Backstage Integration

This application includes Backstage catalog entities for both the service component and its API:

- `catalog-info.yaml` - Defines the service component and database resource
- `api-info.yaml` - Defines the REST API entity with OpenAPI specification

When imported into Backstage, the API documentation will be available through the API docs plugin, showing:
- Interactive API documentation
- Request/response schemas
- API relationships with consuming/providing components

### API Endpoints

- `GET /items` - Get all todo items
- `POST /items` - Create a new todo item
- `PUT /items/{id}` - Update an existing todo item
- `DELETE /items/{id}` - Delete a todo item

## Published Images

The images are published on Github Container Registry: https://github.com/appvia/todo-app/pkgs/container/todo-app

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
