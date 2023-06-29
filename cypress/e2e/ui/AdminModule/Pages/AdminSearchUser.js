const adminbtn = "//a[@href='/web/index.php/admin/viewAdminModule']";
const searchName = ":nth-child(2) > .oxd-input";
const userRole =
  ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
const employeeName = ".oxd-autocomplete-text-input > input";
const userStatus =
  ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
class AdminSearchUser {
  searchUser(name, empName, role, status) {
    cy.xpath(adminbtn).click();
    cy.wait(1000);
    cy.get(searchName).type(name);
    cy.wait(1000);
    role === "Admin"
      ? cy.get(userRole).first().type("{downArrow}{enter}")
      : cy.get(userRole).first().type("{downArrow}{downArrow}{enter}");
    cy.wait(1000);
    cy.get(employeeName).type(empName);
    cy.wait(2000);
    cy.get(employeeName).type("{downArrow}{enter}");
    //  cy.xpath(employeeName).should('contain.text',empName);
    cy.wait(1000);
    status === "Enabled"
      ? cy.get(userStatus).type("{downArrow}{enter}")
      : cy.get(userStatus).type("{downArrow}{downArrow}{enter}");
    cy.scrollTo(0);
    cy.wait(1000);
    // cy.get(searchBtn).click({force: true});
    cy.clickBtnForceFully(" Search ");
    cy.wait(2000);
    cy.xpath(`//div[text()="${name}"]`).should("have.text", name);
    cy.wait(2000);
  }
}
export default AdminSearchUser;
