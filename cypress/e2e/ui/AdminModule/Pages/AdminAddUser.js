const adminbtn = "//a[@href='/web/index.php/admin/viewAdminModule']";
const addBtn = "//button[text()=' Add ']/i";
const userRole = ".oxd-select-wrapper :nth-child(2)";
const employeeName = "//input[@placeholder='Type for hints...']";
const userStatus =
  ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
const userName = ".oxd-form-row >div.oxd-grid-2 :nth-child(4)>div >div>input";
const userPasswd =
  ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";
const confrimPasswd =
  ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
const saveBtn = ".oxd-button--secondary";

class AdminAddUser {
  addUser(name, passwd, empName, role, status) {
    cy.xpath(adminbtn).click();
    cy.wait(1000);
    cy.xpath(addBtn).scrollIntoView().should("be.visible");
    cy.wait(1000);
    cy.xpath(addBtn).click({ force: true });
    cy.wait(1000);
    role === "Admin"
      ? cy.get(userRole).first().type("{downArrow}{enter}")
      : cy.get(userRole).first().type("{downArrow}{downArrow}{enter}");
    cy.wait(1000);
    cy.xpath(employeeName).type(empName);
    cy.wait(2000);
    cy.wait(1000);
    cy.xpath(employeeName).type("{downArrow}{enter}");
    cy.wait(1000);
    cy.xpath(employeeName).should("contain.value", empName);
    status === "Enabled"
      ? cy.get(userStatus).type("{downArrow}{enter}")
      : cy.get(userStatus).type("{downArrow}{downArrow}{enter}");
    cy.scrollTo(0);
    cy.wait(1000);
    cy.get(userName).type(name);
    cy.wait(1000);
    cy.get(userPasswd).type(passwd);
    cy.wait(1000);
    cy.get(confrimPasswd).type(passwd);
    cy.wait(1000);
    cy.get(saveBtn).click();
    cy.wait(2000);
  }
}
export default AdminAddUser;
