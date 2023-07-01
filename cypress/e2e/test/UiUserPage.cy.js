/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>

import AdminAddUser from "../ui/AdminModule/Pages/AdminAddUser";
import AdminSearchUser from "../ui/AdminModule/Pages/AdminSearchUser";
import DeleteUser from "../ui/AdminModule/Pages/DeleteUser";
import Login from "../validation/LoginModule/Login";
import PIMAddEmp from "../ui/EmpModule/Pages/PIMAddEmp";
Cypress.config('defaultCommandTimeout', 10000);

describe("ui user <sanity>",{ tags: '@sanity'},() => {
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
  it('add user',()=>{
  const obj =new AdminAddUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.addUser(item.name,item.passwd,item.empName,item.role,item.status);  
}
  })
})

it('Search user',()=>{
  const obj=new AdminSearchUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.searchUser(item.name,item.empName,item.role,item.status);  
}
  })
})

it('Delete user',()=>{
  const obj=new DeleteUser();
  cy.fixture('dataForUser').then((userList)=>{
    userList.users.forEach(myFunction);
function myFunction(item) {
obj.deleteUser(item.name,item.empName,item.role,item.status);  
}
  })
})
})