/// <reference types="cypress"/>

describe("Todo application", () => {
  beforeEach(() => {
    cy.visit("http://todomvc.com/examples/react");
    cy.injectAxe();
  });

  it("1️⃣ should log any accessibility failures", () => {
    cy.checkA11y();
  });

  it("2️⃣ should EXCLUDE specific elements from the page", () => {
    cy.checkA11y({ exclude: [".learn"] });
  });

  it("3️⃣ should ONLY TEST specific elements from the page", () => {
    cy.checkA11y(".learn");
  });

  it("4️⃣ should ONLY include Serious and Critical impact issues", () => {
    cy.checkA11y(null, { includedImpacts: ["critical", "serious"] });
  });

  it("5️⃣ should exclude specific Accessibility rules", () => {
    cy.checkA11y(null, {
      rules: {
        "color-contrast": { enabled: false },
      },
    });
  });
});
