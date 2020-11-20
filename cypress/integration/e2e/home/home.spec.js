/* eslint-disable no-undef */
///<reference types="cypress"/>

describe("home view testing", () => {
    before(() => cy.visit("/"));
    it("should subscribe", () => {
        cy.get("[data-test='subscribeEmail']").type("emmajerry2016@gmail.com");
        cy.get("[data-test='subscribeForm']").submit();
    });

    it("should clicked the menu icon and select genre", () => {
        cy.get("[data-test='menuIconBtn']").click();
        cy.get("[data-test='actionMoviesLink']").click();
    });

    it("should close the menu items aside", () => {
        cy.get("[data-test='menuIconBtn']").click();
    });

    it("should select a movie and expect a redirection", () => {
        cy.get("[data-test='moviePoster']").eq(0).click();
    });

    it("should click the go home button and expect to be redirect to home view", () => {
        cy.get("[data-test='goHomeBtn']").click();
    });
});
