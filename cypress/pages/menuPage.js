class menuPage {
    selectorslist(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }

        return selectors

    }

        accessMyInfo(){
            cy.get(this.selectorslist().myInfoButton).click()
        }
        accessPerformance(){
            cy.get(this.selectorslist().performanceButton).click()
        }
    }

    export default menuPage
