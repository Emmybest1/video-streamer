/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/***************************************
 * home view to action view command
 ***************************************/
Cypress.Commands.add("homeViewTest", () => {
    it("should subscribe", () => {
        cy.get("[data-test='subscribeEmail']").type("emmajerry2016@gmail.com");
        cy.get("[data-test='subscribeForm']").submit();
    });

    it("should clicked the menu icon and select genre", () => {
        cy.get("[data-test='menuIconBtn']").click();
        cy.get("[data-test='actionMoviesLink']").click();
    });

    it("should close the menu items aside", () => {
        cy.get("[data-test='closeMenuItemsBtn']").click();
    });
});
