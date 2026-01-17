class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardgrid: '.orangehrm-dashboard-grid',
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    }
}

export default DashboardPage