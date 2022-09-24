describe ('my first test', ()=>{

    it('Assertions and verification of URl and Page title', ()=>{
        cy.url().should('contain', '/stocks/magazijnen') //it will check the URL for the required key word

        cy.get('.dp-title').should('be.visible')          //it will check that the prodcuten is visable or not and the compare the values
        .should('contain', 'Magazijnen')
        cy.wait(5000)
        //cy.get('.dp-header-right > .button-container > .btn').click()  // it will click on To Add button (Add product button)

    })

})