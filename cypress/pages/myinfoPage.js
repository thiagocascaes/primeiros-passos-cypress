class myInfoPage {
    selectorslist(){
        const selectors = {
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

        return selectors

    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(selectorsList.firstNameField).clear().type(firstName)
        cy.get(selectorsList.middleNameField).clear().type(middleName)
        cy.get(selectorsList.lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails() {
        cy.get(selectorsList.genericField).eq(3).clear().type(employeeId)
        cy.get(selectorsList.genericField).eq(4).clear().type(otherId)
        cy.get(selectorsList.genericField).eq(5).clear().type(driversLicenceDate)
        cy.get(selectorsList.genericField).eq(6).clear().type()
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
        cy.get(selectorsList.secondItemCombobox).click()
        cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
        cy.get(selectorsList.thirdItemCombobox).click()
    }

    }

    export default myInfoPage
