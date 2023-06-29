/// <reference types="cypress"/>

class deleteRequest {

    deleteUser(urls,token){
     cy.fixture('users').then((users)=>{
         cy.request({
             method:'DELETE',
             url: urls.baseurl+urls.deleteUser,
             body:{
                "ids":users.data[0].employee.empNumber
             },
             headers:{
                'Cookie':`${token.name}=${token.value}`,
            }
        }).then((res)=>{
            cy.log(res.body)
            expect(res.status).to.eq(200);
        })
    })
    }

    deleteAllUser(urls,token){
        cy.fixture('users').then((users)=>{
            cy.request({
                method:'DELETE',
                url: urls.baseurl+urls.deleteUser,
                body:{
                   "ids":[users.data[1].employee.empNumber,users.data[2].employee.empNumber]
                // "ids":[192,193]

                },
                headers:{
                   'Cookie':`${token.name}=${token.value}`,
               }
           }).then((res)=>{
               cy.log(res.body)
               expect(res.status).to.eq(200);
           })
       })
       }
}

export default deleteRequest;