# Cypress E-Commerce Automation Framework

[![Cypress](https://img.shields.io/badge/Cypress-10.0.0-success)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Este proyecto contiene pruebas automatizadas para una aplicación de comercio electrónico utilizando Cypress. Está diseñado para demostrar las capacidades de Cypress en la automatización de pruebas end-to-end, incluyendo tanto pruebas tradicionales como pruebas BDD con Cucumber.

## Características

- Pruebas end-to-end para flujos de e-commerce
- Implementación del patrón Page Object Model (POM)
- Soporte para pruebas BDD con Cucumber
- Componentes reutilizables para elementos comunes
- Integración con Jenkins para CI/CD
- Soporte para múltiples navegadores (Chrome, Firefox)
- Manejo de variables de entorno para configuraciones seguras

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Enfoque de Pruebas](#enfoque-de-pruebas)
- [Integración Continua](#integración-continua)
- [Contribuir](#contribuir)
- [Contacto](#contacto)
- [Test Organization](#test-organization)

## Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Navegadores: Chrome y Firefox (últimas versiones)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/IdenTiclla/cypress-automation-practice.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd cypress-automation-practice
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

## Configuración

Asegúrate de configurar cualquier variable de entorno necesaria en un archivo `.env` o directamente en tu entorno de ejecución.

Ejemplo de archivo `.env`:
```sh
CYPRESS_email=your-email
CYPRESS_password=your-password
```

La configuración principal de Cypress se encuentra en `cypress.config.js`, donde se definen:
- URL base: https://ecommerce-playground.lambdatest.io/
- Patrones de especificación para pruebas tradicionales y Cucumber
- Configuraciones de preprocesadores

## Ejecución de Pruebas

Para ejecutar las pruebas en modo interactivo (Cypress GUI):
```sh
npm run test:open
```
Debes utilizar la GUI para navegar sobre tus diferentes pruebas y seleccionar la que vas a ejecutar.

Para ejecutar todas las pruebas en modo headless:
```sh
npm run test
```

Para ejecutar pruebas con interfaz gráfica visible:
```sh
npm run test:headed
```

Para ejecutar pruebas en navegadores específicos:
```sh
npm run test:chrome
npm run test:firefox
```

Para ejecutar una prueba específica:
```sh
npx cypress run --spec "cypress/e2e/spec.cy.js"
```

## Estructura del Proyecto

```
cypress-automation-practice/
├── cypress/
│   ├── e2e/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── cucumber/    # Archivos .feature y step definitions
│   │   ├── pages/       # Page Objects para POM
│   │   ├── Tests/       # Casos de prueba organizados
│   │   └── spec-*.cy.js # Archivos de pruebas individuales
│   ├── fixtures/        # Datos de prueba
│   ├── downloads/       # Archivos descargados durante pruebas
│   ├── report/          # Reportes generados
│   └── support/         # Comandos personalizados y configuraciones
├── .env                 # Variables de entorno (no incluir en git)
├── .gitignore           # Archivos ignorados por git
├── Jenkinsfile          # Configuración para CI/CD con Jenkins
├── cypress.config.js    # Configuración principal de Cypress
├── package.json         # Dependencias y scripts
└── README.md            # Documentación del proyecto
```

## Enfoque de Pruebas

Este proyecto implementa dos enfoques principales de pruebas:

1. **Pruebas Tradicionales**: Utilizando la sintaxis estándar de Cypress para crear pruebas end-to-end.

2. **Pruebas BDD con Cucumber**: Implementando escenarios en formato Gherkin que son más legibles para stakeholders no técnicos.

Además, se utiliza el patrón Page Object Model (POM) para mejorar la mantenibilidad y reutilización del código.

## Integración Continua

El proyecto incluye un `Jenkinsfile` para configurar pipelines de CI/CD. La integración con Jenkins permite:

- Ejecución automática de pruebas en cada commit
- Generación de reportes
- Notificaciones de fallos en las pruebas

## Test Organization

The tests in this project are organized using best practices:

### Directory Structure

- `cypress/e2e/Tests/` - Contains all test files organized by feature
  - `account/` - Tests related to user account functionality
  - `login/` - Tests for login functionality
  - `article/` - Tests for blog article functionality
  - `shopping-cart/` - Tests for shopping cart and checkout functionality
  - `api/` - Tests for API functionality

### Test File Naming

Files are named according to the feature they test, using the `.cy.js` extension.
Example: `login.cy.js`, `register.cy.js`, `shopping-cart.cy.js`

### Page Object Model

The project uses the Page Object Model pattern to organize test code:
- `cypress/e2e/pages/` - Contains page objects for different pages
- `cypress/e2e/components/` - Contains component objects for reusable UI components

This separation helps maintain clean, readable, and maintainable tests.

### Best Practices

1. Each test file focuses on a specific feature or functionality
2. Tests are independent and can run in isolation
3. Common setup is placed in `beforeEach()` hooks
4. Cleanup is performed in `afterEach()` hooks
5. Page objects are used to abstract element selectors and common actions
6. Tests are descriptive and follow a clear pattern

## Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Contacto

Para preguntas o soporte, puedes contactar a [Iden Ticlla](mailto:iden.ticlla@gmail.com).

---

 Desarrollado con pasión por [Iden Ticlla](https://github.com/IdenTiclla) 
