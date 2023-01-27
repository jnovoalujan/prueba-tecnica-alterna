import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given(
  "se inicia sesion con usuario {string} y clave {string}",
  (user, password) => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type(user);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  }
);

When("el usuario agrega a la canasta el producto {string}", (productName) => {
  cy.contains(".inventory_item_name", productName).click();
  cy.contains("button", "Add to cart").click();
  cy.get("#shopping_cart_container").click();
  cy.get('[data-test="checkout"]').click();
});

When(
  "diligencia la informacion del checkout con nombre {string} apellido {string} y zip code {string}",
  (name, lasName, zipcode) => {
    cy.get('[placeholder="First Name"]').type(name);
    cy.get('[data-test="lastName"]').type(lasName);
    cy.get("#postal-code").type(zipcode);
    cy.get("#continue").click();
  }
);

Then("La orden es creada exitosamente", () => {
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should($element => {
        expect($element).to.have.text('THANK YOU FOR YOUR ORDER')
    })
})
