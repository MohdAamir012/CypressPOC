/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>

import Login from "../validation/LoginModule/Login";
import PIMAddEmp from "../ui/EmpModule/Pages/PIMAddEmp";
import PIMSearchEmp from "../ui/EmpModule/Pages/PIMSearchEmp";
import DeleteEmp from "../ui/EmpModule/Pages/DeleteEmp";
Cypress.config('defaultCommandTimeout', 10000);

describe("ui employee <smoke>",{ tags: '@smoke'},() => {
  beforeEach('visiting the url', () => {
    const obj =new Login();
    cy.fixture('urlProvider').then((urls) => {
      obj.login(urls.url);
    })
  })

  it('add employee',()=>{
    const obj =new PIMAddEmp();
    cy.fixture('dataForEmp').then((empList)=>{
      empList.emp.forEach(myFunction);
function myFunction(item) {
  obj.addEmp(item.fn,item.mn,item.ln,item.id);  
}
    })
  })
  it('Search employee',()=>{
    const obj=new PIMSearchEmp();
    cy.fixture('dataForEmp').then((empList)=>{
      empList.emp.forEach(myFunction);
function myFunction(item) {
  obj.searchEmp(item.fn,item.id);  
}
    })
  })
it('Delete employee',()=>{
  const obj=new DeleteEmp();
  cy.fixture('dataForEmp').then((empList)=>{
    empList.emp.forEach(myFunction);
function myFunction(item) {
obj.deleteEmp(item.fn,item.id);  
}
  })
})
})