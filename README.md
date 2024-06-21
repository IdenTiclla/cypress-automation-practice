# Cypress automation Practice

Este proyecto contiene pruebas automatizadas para una aplicación de comercio electrónico utilizando Cypress. Está diseñado para demostrar las capacidades de Cypress en la automatización de pruebas end-to-end.


## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contacto](#contacto)

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
CYPRESS_baseUrl=http://localhost:3000
CYPRESS_email=your-email
CYPRESS_password=your-password
```

## Ejecución de Pruebas

Para ejecutar las pruebas en modo interactivo (Cypress GUI):
```sh
npm run cypress:open
```
Debes utilizar la GUI para navegar sobre tus diferentes pruebas y seleccionar la que vas a ejecutar.

Para ejecutar todas las pruebas en modo headless (Sin interfaz de usuario):
```sh
npm run cypress:run 
```

Para ejecutar una prueba especifica debes agregar parametros:
```sh
npm run cypress:run --spec (ruta de la prueba)
```
eg:
```sh
npm run cypress:run --spec cypress/e2e/spec.cy.js
```



## Estructura del Proyecto
Describe la estructura del proyecto y los archivos más importantes.

```markdown
## Estructura del Proyecto

cypress-automation-practice/
├── cypress/
│ ├── e2e/
| | ├── components/ # aqui podemos encontrar todos los diferentes componentes que fueron reutilizados.
| | ├── pages/ #aqui puedes ver todas la pages del pom.
| | ├── tests/ #aqui puedes ver los archivos de pruebas. 
│ │ ├── spec.cy.js # Pruebas principales.
│ │ └── ...
│ ├── fixtures/ # Datos de prueba.
│ ├── support/ # Comandos y configuraciones.
├── .gitignore # Archivos ignorados por git.
├── cypress.config.js # Configuración de Cypress.
├── package.json # Dependencias del proyecto y scripts.
└── README.md # Este archivo.
```

## Contacto

Para preguntas o soporte, puedes contactar a [Iden Ticlla](mailto:iden.ticlla@gmail.com).
