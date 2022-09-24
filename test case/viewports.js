describe ('view port testing practice', ()=>{

    beforeEach (()=>{
        cy.visit('https://www.google.com') 
    })

    it ('Open in macbook-13', ()=>{

        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(5000)
    })

    it.only ('Open in macbook-15', ()=>{

        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(5000)
    })

    it.only ('Open in samsung-s10', ()=>{

        cy.viewport(360, 760)
        cy.screenshot()
        cy.wait(5000)
    })
})