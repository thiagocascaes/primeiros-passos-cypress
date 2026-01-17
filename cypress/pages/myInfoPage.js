class myInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]',
            genericSelect: '.oxd-select-text--active',
            countryListOption: '.oxd-select-dropdown > :nth-child(27)',
            maritalStatusListOption: '.oxd-select-dropdown > :nth-child(3)',
            labelGender: ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label',
            bloodTypeListOption: '.oxd-select-dropdown > :nth-child(5)'
            
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicense, driverLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    
    fillStatus() {
        cy.get(this.selectorsList().genericSelect).eq(0).click()
        cy.get(this.selectorsList().countryListOption).click()
        cy.get(this.selectorsList().genericSelect).eq(1).click()
        cy.get(this.selectorsList().maritalStatusListOption).click()
        cy.get(this.selectorsList().genericField).eq(8).click().clear().type('1988-05-11')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().labelGender).click()
    }

    firstSaveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillCustomField(testField) {
        cy.get(this.selectorsList().genericSelect).eq(2).click()
        cy.get(this.selectorsList().bloodTypeListOption).click()
        cy.get(this.selectorsList().genericField).eq(9).click().clear().type(testField)
    }

    secondSaveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

}

export default myInfoPage