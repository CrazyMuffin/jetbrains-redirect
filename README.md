# jetbrains-redirect
Simple Express.js app that redirects localhost URLs to jetbrains:// protocol (for use with WSL)

## Usage
1. Checkout this repository
2. `docker-compose up`
3. Put the following into your phpstan configuration
```
parameters:
    editorUrl: 'http://localhost:8069/?project=<YOUR_PROJECT_NAME>&path=%%relFile%%:%%line%%'
    editorUrlTitle: 'http://localhost:8069/?project=<YOUR_PROJECT_NAME>&path=%%relFile%%:%%line%%'
```
