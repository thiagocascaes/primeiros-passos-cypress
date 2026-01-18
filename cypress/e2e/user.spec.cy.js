import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
 
describe('Orange HRM tests', () => {
    
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last())
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 1900, max: 2000 }), chance.ssn({ ssnFour: true }), chance.ssn({ dashes: false }), '2030-02-05')
    myInfoPage.fillStatus()
    myInfoPage.firstSaveForm()
    myInfoPage.fillCustomField(chance.word({ length: 5 }))
    myInfoPage.secondSaveForm()


  })
})