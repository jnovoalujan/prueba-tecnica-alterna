Feature: Compra KFC Colombia

    Compra exitosa por parte de un cliente de KFC Colombia

    Scenario: Compra exitosa
        Given se inicia sesion con usuario "standard_user" y clave "secret_sauce"
        When el usuario agrega a la canasta el producto "Sauce Labs Bike Light"
        And diligencia la informacion del checkout con nombre "Julian" apellido "Novoa" y zip code "00000"
        Then La orden es creada exitosamente