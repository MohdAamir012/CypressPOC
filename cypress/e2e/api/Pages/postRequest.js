class postRequest{
    validate(data,urls){
        cy.request({
            method:'POST',
            url:urls.baseurl, 
            body :data
        }).then((res)=>{
            expect(res.status).to.eq(200);
            cy.writeFile('cypress/fixtures/fragment.html', res.body)
            cy.getAllCookies().then((cookies)=>{
                cy.log(cookies);
                // cy.writeFile('cypress/fixtures/accessToken.json', cookies)

            })
})
    }
    logIn(){
                cy.visit('./cypress/fixtures/fragment.html')
                cy.get('title').should('have.text','OrangeHRM')
    }
}
export default postRequest;