describe('Login animal platform', ()=>{

    it('adding valid credientials to login supplies module', ()=>{

        cy.visit('https://supplies.dev.dierplatform.nl/') //the second parameter will handle all the uncatch errors
        cy.get('#loginId').type('zeeshan.ali@degrosol.nl')
        cy.get('#password').type('1AhHoG6GgOl1R7I55Wpb')
        cy.get('button.btn').click(true).wait(5000)
    })

    it('Click on warehouse module', ()=>{
        cy.get('.submenu-items > :nth-child(2) > .nav-link > .ms-2').click(true)
    })

    it('Assertions and verification of URl and Page title', ()=>{
        cy.url().should('contain', '/voorraad/magazijnen') //it will check the URL for the required key word

        cy.get('.dp-title').should('be.visible')          //it will check that the prodcuten is visable or not and the compare the values
        .should('contain', 'Magazijnen')
        cy.wait(5000)
        //cy.get('.dp-header-right > .button-container > .btn').click()  // it will click on To Add button (Add product button)

    })
        
    it('Searching warehouse', ()=>{
        cy.get('#search').type('test by Zeeshan').wait(5000)
        cy.get('div.icon.right').click(true).wait(5000)

    })

    it('Verify filters functionality', ()=>{
        cy.get('button.btn.btn-secondary.justify-content-center.normal.full-width-container').click(true)
        cy.get('div.dpappbar-container.dpappbar-border-bottom').within(()=>{
            cy.get('div.dpappbar-center').should('be.visible').should('contain','Filter').wait(5000)
        })
        
        cy.get('options-container.options-container-mobile').find('filter-option.filter-option-unselected').contains('Warehouse 1').click()
        // cy.get(':nth-child(1) > .options-container > :nth-child(1)').click()
        // cy.get(':nth-child(1) > .options-container > :nth-child(2)').click()
        // cy.get('.filter-category > .button-container > .btn').click()
        // cy.wait(5000)
        // cy.get(':nth-child(3) > .filter-selected > .filter-selected-button > .svg-inline--fa > path').click(true)
        // cy.wait(5000)
        // cy.get('.filter-selected-button > .svg-inline--fa').click(true)
    })
})


