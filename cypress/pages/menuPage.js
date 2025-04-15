class menuPage {
    selectorslist(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors

    }

        accessMyInfo(){

            cy.get(this.selectorslist().myInfoButton).click()
        }
    }

    export default menuPage

