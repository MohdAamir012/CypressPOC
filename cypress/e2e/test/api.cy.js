/// <reference types="cypress"/>

import deleteRequest from "../api/Pages/deleteRequest";
import getRequest from "../api/Pages/getRequest";
import postRequest from "../api/Pages/postRequest";
Cypress.config("defaultCommandTimeout", 5000);

describe("api testing <smoke>", () => {
  let getReq = new getRequest();
  let postReq = new postRequest();
  let delReq = new deleteRequest();

  before("validate user", () => {
    cy.fixture("data").then((data) => {
      cy.fixture("urlProvider").then((urls) => {
        postReq.validate(data, urls);
      });
    });
  });

  it("login", () => {
    postReq.logIn();
  });

  it("getAllUser", () => {
    cy.fixture("accessToken").then((token) => {
      cy.fixture("urlProvider").then((urlProvider) => {
        cy.log(token[0].value);
        getReq.getAllUser(urlProvider, token[0]);
      });
    });
  });
  it("getAllEmp", () => {
    cy.fixture("accessToken").then((token) => {
      cy.fixture("urlProvider").then((urlProvider) => {
        cy.log(token[0].value);
        getReq.getAllEmp(urlProvider, token[0]);
      });
    });
  });
  it("searchUser", () => {
    cy.fixture("accessToken").then((token) => {
      cy.fixture("urlProvider").then((urlProvider) => {
        cy.log(token[0].value);
        getReq.searchUser(urlProvider, token[0]);
      });
    });
  });
  it("searchEmp", () => {
    cy.fixture("accessToken").then((token) => {
      cy.fixture("urlProvider").then((urlProvider) => {
        getReq.searchEmp(urlProvider, token[0]);
      });
    });
  });
  it("deleteAllUser", () => {
    cy.fixture("accessToken").then((token) => {
      cy.fixture("urlProvider").then((urlProvider) => {
        cy.log(token[0].value);
        delReq.deleteAllUser(urlProvider, token[0]);
      });
    });
  });
});
