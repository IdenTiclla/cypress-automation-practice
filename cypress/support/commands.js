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

Cypress.Commands.add("generateRandomFirstname", () => {
  const prefix = 'user'
  const randomString = Math.random().toString(36).substring(2, 10)
  const randomFirstname = `${prefix}_${randomString}`
  return cy.wrap(randomFirstname)
})


Cypress.Commands.add("generateRandomLastname", () => {
  const randomLastname = Math.random().toString(36).substring(2, 10)
  return cy.wrap(randomLastname)
})

Cypress.Commands.add("generateRandomPassword", () => {
  const length = 12
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?'; // Conjunto de caracteres
  let randomPassword = ''
  for (let i = 0;  i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    randomPassword += charset[randomIndex]
  }
  return cy.wrap(randomPassword)
})