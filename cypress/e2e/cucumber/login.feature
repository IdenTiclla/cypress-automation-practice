Feature: Login en la aplicacion


    Scenario: Login exitoso
        Given El usuario esta en la pagina de login
        When El usuario ingresa su nombre de usuario y contrasenia correctos
        Then El usuario es redirigido a la pagina de inicio

    Scenario: Login no exitoso
        Given El usuario esta en la pagina de login
        When El usuario ingresa su nombre de usuario y contrasenia incorrectos
        Then Un mensaje de error es mostrado en la pagina de login

    Scenario: Login exitoso con usuarios dinamicos
        Given El usuario esta en la pagina de login
        When El usuario ingresa el nombre de usuario "standard_user" y contrasenia "secret_sauce"
        Then El usuario es redirigido a la pagina de inicio