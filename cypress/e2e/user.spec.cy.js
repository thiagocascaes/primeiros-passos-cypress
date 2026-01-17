import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

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

    myInfoPage.fillPersonalDetails('Nome TESTE', 'Meio TESTE', 'Sobrenome TESTE')
    myInfoPage.fillEmployeeDetails('Id TESTE', 'Other ID', 'Driver TESTE','2030-12-31')
    myInfoPage.fillStatus()
    myInfoPage.firstSaveForm()
    myInfoPage.fillCustomField('Text TESTE')
    myInfoPage.secondSaveForm()


  })
})