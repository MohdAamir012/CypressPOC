/// <reference types="cypress"/>

class getRequest {
    getAllUser(urls,ck){
            cy.request({
                method:'GET',
                url:urls.baseurl+urls.getAllUser,
                headers:{'Cookie':`${ck.name}=${ck.value}`}
                // headers:{'Cookie':"orangehrm=bccc85b7172542f28d43eed924b9b0c1"}

            }).then((res)=>{
                expect(res.status).to.eq(200);
                cy.writeFile('cypress/fixtures/users.json', res.body)
        })
    }   

    searchUser(urls,token){
     cy.fixture('users').then((users)=>{
         cy.request({
             method:'GET',
             url: urls.baseurl+urls.searchUser,
             qs:{
                "limit":50,
                "offset":0,
                "username":users.data[0].userName,
                "userRoleId":users.data[0].userRole.id,
                "empNumber":users.data[0].employee.empNumber,
                "status":users.data[0].status,
                "sortField":"u.userName",
                "sortOrder":"ASC"
                },
             headers:{
                'Cookie':`${token.name}=${token.value}`,
            }
        }).then((res)=>{
            cy.log(res.body)
            expect(res.status).to.eq(200);
            expect(res.body.data[0].id).to.eq(users.data[0].id);
            expect(res.body.data[0].userName).to.eq(users.data[0].userName);
        })
    })
    }

    getAllEmp(urls,ck){
        cy.request({
            method:'GET',
            url:urls.getAllEmp,
            headers:{'Cookie':`${ck.name}=${ck.value}`}

        }).then((res)=>{
            expect(res.status).to.eq(200);
            cy.writeFile('cypress/fixtures/employee.json', res.body)
    })
}
searchEmp(urls,token){
    cy.fixture('employee').then((emp)=>{
        cy.request({
            method:'GET',
            url: urls.getAllEmp+`/${emp.data[0].empNumber}`,
            headers:{
               'Cookie':`${token.name}=${token.value}`,
           }
       }).then((res)=>{
        cy.log(res);
           expect(res.status).to.eq(200);
           expect(res.body.data.empNumber).to.eq(emp.data[0].empNumber);
           expect(res.body.data.firstName).to.eq(emp.data[0].firstName);
       })
   })
   }  
}

export default getRequest;