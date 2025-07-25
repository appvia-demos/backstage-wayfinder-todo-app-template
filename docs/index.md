# ${{ values.name }}

${{ values.description }}

## Overview

A simple todo application demonstrating Backstage integrations with:
- RESTful API for todo operations
- MySQL database for persistence
- JFrog Artifactory for Docker image publishing
- GitHub Actions for CI/CD
- SonarQube for code quality analysis

## Documentation

### Getting Started
- [Development Guide](development.md) - Quick start, local development, and testing

### Integration Guides
- [API Documentation](api.md) - REST API endpoints and OpenAPI specification
- [Artifactory Setup](artifactory-setup.md) - Docker registry configuration and GitHub Actions integration
- [SonarQube Setup](sonarqube-setup.md) - Code quality analysis configuration

### Architecture
This application follows a simple client-server architecture with:
- **Frontend**: Static HTML/JS served from the app container
- **Backend**: Node.js REST API
- **Database**: MySQL for data persistence
- **CI/CD**: GitHub Actions workflow for testing and publishing