// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-real-events";
// import "cypress-drag-drop"
import "@4tw/cypress-drag-drop";

Cypress.Commands.add("getRandomEmail", () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const emailLength = 10;
  let email = "";

  for (let i = 0; i < emailLength; i++) {
    email += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  email += "@example.com";
  return email;
});

Cypress.Commands.add("generateRandomPhoneNumber", () => {
  const digits = "0123456789";
  let phoneNumber = "";
  for (let i = 0; i < 8; i++) {
    phoneNumber += digits[Math.floor(Math.random() * digits.length)];
  }
  return phoneNumber;
});
