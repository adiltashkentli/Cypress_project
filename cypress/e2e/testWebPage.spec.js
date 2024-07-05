describe('Web Page Test', () => {

    beforeEach(function () {
        cy.visit('https://www.takihan.com/kategori/erkek-gumus-yuzuk')
    })

    it('get tests', () => {
        
        //search items
        cy.get('.auto-complete').should('be.visible')
        cy.get('.auto-complete').type('Çift Kartal Başlı Okçu').type('{enter}')
        
        //assert expected item
        cy.get('.showcase-title').should('contain', '(Zihgir)')
        
        //navigated to results page
        cy.get('#results-page > div.showcase-container > div > div:nth-child(1) > div > div.showcase-image-container > div > a > img')
            .should('be.visible')
            .click()

        //assert expected result with actual        
        cy.get('.product-title > h1:nth-child(1)').should('contain', 'Çift Kartal Başlı Okçu (Zihgir) Model 2 Gümüş Yüzük')
        
        //click to add to card button
        cy.get('.product-buttons-row > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)')
            .should('be.visible')
            .click()
        
        //work on pop up window
        cy.get('.fa-plus')
            .should('be.visible')    
            .click();
        
        //increase item quantity to two
            cy.get('a.btn-block > span:nth-child(1)')
            .should('be.visible')    
            .click();
        
        //assert item quantity
        cy.get('.product-quantity > div:nth-child(2) > input:nth-child(1)')
        .should('have.value', '2');

        //checkout button
        cy.get('#checkout-complete-shopping')
        .should('be.visible')    
        .click();
        
        //second 'comlete without signing up' button
        cy.get('a.btn')
        .should('be.visible')    
        .click();
        
    })

})