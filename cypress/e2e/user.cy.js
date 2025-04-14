import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'

const LoginPage = new loginPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  genericCombobox: ".oxd-select-text--arrow",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
  secondItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
  thirdItemCombobox: ":nth-child(4) > span",
  dateBirthField: ".oxd-date-input",
  genderSelection: ".oxd-radio-wrapper",
  bloodType: ".oxd-select-text-input",
  textField: "[options='']",

}


  it.only('User Info Update - Success', () => {
    LoginPage.accessloginPage()
    LoginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   cy.get(selectorsList.dashboardGrid)
   cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Name Test')
    cy.get(selectorsList.middleNameField).clear().type('Middle Test')
    cy.get(selectorsList.lastNameField).clear().type('Last Name Test')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicence')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.dateBirthField).eq(1).clear().type('1988-11-05')
    cy.get(selectorsList.genderSelection).eq(1).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get(selectorsList.bloodType).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()
    cy.get(selectorsList.textField).clear().type('Test Blood')
    cy.get(selectorsList.submitButton).eq(1).click()
  }
)
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})