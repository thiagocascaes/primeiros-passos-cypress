import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert-content > .oxd-text',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateCloseButton: '.--close',
    submitButton: '[type="submit"]',
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Nome TESTE')
    cy.get(selectorsList.middleNameField).clear().type('Sobrenome meio TESTE')
    cy.get(selectorsList.lastNameField).clear().type('Sobrenome TESTE')
    cy.get(selectorsList.genericField).eq(3).clear().type('ID TESTE')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherID TESTE')
    cy.get(selectorsList.genericField).eq(5).clear().type('Driver TESTE')
    cy.get(selectorsList.genericField).eq(6).clear().type('2030-28-11')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})