describe('test with GREENKART web page', () => {

    it('brocoli product', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword[type="search"]').type("Brocolli");
        cy.get(".products").first().should("exist").and("be.visible");
        cy.get('input.quantity').should("have.value", "1");
        cy.get('a.increment').click();
        cy.get('a.increment').click();
        cy.get('input.quantity').should("have.value", "3");
        cy.get('.product-action button').first().click();
        cy.get('.added').first().should("exist").and("be.visible");
        cy.get('img[class =" "]').click();
        cy.get(".cart-item").first().should("exist").and("be.visible");
        cy.get('.cart-item div p').first().should("have.text", "Brocolli - 1 Kg");
        cy.get('.action-block button').first().click();
        cy.get('tbody tr td:nth-child(2)  p').should("exist").and("be.visible").and("have.text", "Brocolli - 1 Kg");
        cy.get('.promoCode').type("12345");
        cy.get('.promoBtn').click();
        cy.wait(2000);
        cy.get('.promoInfo').should("exist").and("be.visible");
        cy.contains("Place Order").click();
        cy.get("select").select("Armenia");
        cy.get(".chkAgree").check().should("be.checked");
        cy.contains("Proceed").click();
    })

})