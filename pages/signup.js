import { test, expect } from "@playwright/test"

export class signup {
    constructor(page) {
        this.page = page

        this.joinRealLink = page.locator("//p[text()='Join Real']");
        this.formVerificationText = page.locator("//p[text()='Please fill out the form below to get started.']");
        this.firstName = page.locator("//label[text()='First Name']//following::input[1]");
        this.lastName = page.locator("//label[text()='Last Name']//following::input[1]");
        this.userName = page.locator("//label[text()='Username']//following::input[1]");
        this.Email = page.locator("//span[text()='Email']//following::input[1]");
        this.country = page.locator("//label[text()='Country']//following::input[1]");
        this.password = page.locator("//label[text()='Password']//following::input[1]");
        this.PConf = page.locator("//label[text()='Password Confirmation']//following::input[1]");
        this.checkbox1 = page.locator("//small[text()='By checking the box and clicking the “I agree” button below, I agree to the']");
        this.checkbox2 = page.locator("//small[contains(.,'By checking the applicable box below and clicking the “I agree” button below, I consent by electronic signature to receive calls and text messages from Real Broker, LLC and its affiliated entities, if the applicable box is checked, made by any means or technology, for informational, marketing, or any other purposes at the phone number I provided above. I understand that my consent to such calls and text messages is not required to purchase products from or use the services of any of the entities listed below.')]")
        this.CreateButton = page.locator("//span[text()='Create Account']");

        // Login code Xpaths

        this.loginButton = page.locator("//span[text()='Login']");

        // deatils tab
        this.eyeIcon = page.locator("//button[@data-testid='icon-button']");
        this.detailsTab = page.locator("//p[text()='Details']");
        this.adjustCommission = page.locator("//div[@data-testid='adjust-commission-splits']");

        //percentage 
        this.input1 = page.locator("//input[@id='commissionParticipant[0].percent.value']");
        this.input2 = page.locator("//input[@id='commissionParticipant[1].percent.value']");
        this.input3 = page.locator("//input[@id='commissionParticipant[2].money.amount']");
        this.input4 = page.locator("//input[@id='commissionParticipant[3].money.amount']");

        // toggles
        this.toggle1 = page.locator("(//button[@data-testid='toggle-switch-button'])[1]");
        this.toggle2 = page.locator("(//button[@data-testid='toggle-switch-button'])[2]");
        this.toggle3 = page.locator("(//button[@data-testid='toggle-switch-button'])[3]");
        this.toggle4 = page.locator("(//button[@data-testid='toggle-switch-button'])[4]");

        // Total
        this.total = page.locator("//p[text()='Total']//following::p[1]");
        this.totalCommission = page.locator("//h2[text()='Total Commission']");

    }

    async Navigate() {
        await this.page.goto("https://bolt.playrealbrokerage.com/");
        await expect(this.page).toHaveTitle("Login - Bolt");
    }
    async joinReal() {
        await expect(formVerificationText).toBeVisible();
        await this.joinRealLink.click();

        await expect(formVerificationText).toBeVisible();
    }
    async SignUp() {
        await expect(this.firstName).toBeVisible()
        await expect(this.lastName).toBeVisible()
        await expect(this.userName).toBeVisible()
        await expect(this.Email).toBeVisible()
        await expect(this.country).toBeVisible()
        await expect(this.password).toBeVisible()
        await expect(this.PConf).toBeVisible()
        await expect(this.checkbox1).toBeVisible()
        await expect(this.checkbox2).toBeVisible()

        await this.firstName.fill('krishna');
        await this.lastName.fill('c');
        await this.userName.fill('Krishnac');
        await this.Email.fill('krishnachitragar0@gmail.com');
        await this.country.selectOption("United States");
        await this.password.fill('Krishna@123');
        await this.PConf.fill('Krishna@123');
        await this.checkbox1.click();
        await this.checkbox2.click();

        await expect(this.CreateButton).toBeVisible();
        await this.CreateButton.click();

    }

    async SignUpEmailError() {
        await expect(this.firstName).toBeVisible()
        await expect(this.lastName).toBeVisible()
        await expect(this.userName).toBeVisible()
        await expect(this.Email).toBeVisible()
        await expect(this.country).toBeVisible()
        await expect(this.password).toBeVisible()
        await expect(this.PConf).toBeVisible()
        await expect(this.checkbox1).toBeVisible()
        await expect(this.checkbox2).toBeVisible()

        await this.firstName.fill('krishna');
        await this.lastName.fill('c');
        await this.userName.fill('Krishnac');
        // entering wrong email
        await this.Email.fill('krishna');
        await this.country.selectOption("United States");
        await this.password.fill('Krishna@123');
        await this.PConf.fill('Krishna@123');
        await this.checkbox1.click();
        await this.checkbox2.click();

        await expect(this.CreateButton).toBeVisible();
        await this.CreateButton.click();

    }

    async signupWrongPassword() {
        await expect(this.firstName).toBeVisible()
        await expect(this.lastName).toBeVisible()
        await expect(this.userName).toBeVisible()
        await expect(this.Email).toBeVisible()
        await expect(this.country).toBeVisible()
        await expect(this.password).toBeVisible()
        await expect(this.PConf).toBeVisible()
        await expect(this.checkbox1).toBeVisible()
        await expect(this.checkbox2).toBeVisible()

        await this.firstName.fill('krishna');
        await this.lastName.fill('c');
        await this.userName.fill('Krishnac');
        await this.Email.fill('krishnachitragar0@gmail.com');
        await this.country.selectOption("United States");
        await this.password.fill('Krishna');
        await this.PConf.fill('Krishna@123');
        await this.checkbox1.click();
        await this.checkbox2.click();

        await expect(this.CreateButton).toBeVisible();
        await this.CreateButton.click();

    }





// roundTwo


    async Login() {
        await expect(this.userName).toBeVisible();
        await expect(this.password).toBeVisible();

        await this.userName.fill("sahilagent");

        await this.password.fill("P@ssw0rd");
        await this.loginButton.click();

    }

    async transactionEyeIcon() {
        await expect(this.eyeIcon).toBeVisible();
        await this.eyeIcon.click();
    }

    async deatilsAdjustTestcase1() {
        await expect(this.detailsTab).toBeVisible();
        await this.detailsTab.click();
        await expect(this.adjustCommission).toBeVisible();
        await this.adjustCommission.click();

        await expect(this.totalCommission).toBeVisible();

        await expect(this.toggle1).toBeVisible();
        await expect(this.toggle2).toBeVisible();
        await this.toggle1.click();
        await this.toggle2.click();

        await this.input1.fill("50000");
        await this.input1.fill("50000");
        await this.input3.fill("50000");
        await this.input4.fill("50000");

        await expect(this.total).toHaveCSS("border-color", "#e4e4e7");
    }

    async deatilsAdjustTestcase2() {
        await expect(this.detailsTab).toBeVisible();
        await this.detailsTab.click();
        await expect(this.adjustCommission).toBeVisible();
        await this.adjustCommission.click();

        await expect(this.totalCommission).toBeVisible();
        await this.input1.fill("50000");
        await this.input1.fill("50000");

        await expect(this.toggle3).toBeVisible();
        await expect(this.toggle4).toBeVisible();
        await this.toggle3.click();
        await this.toggle4.click();


        await this.input3.fill("50");
        await this.input4.fill("50");

        await expect(this.total).toHaveCSS("border-color", "#e4e4e7");
    }

     async deatilsAdjustTestcase3() {
        await expect(this.detailsTab).toBeVisible();
        await this.detailsTab.click();
        await expect(this.adjustCommission).toBeVisible();
        await this.adjustCommission.click();

        await expect(this.totalCommission).toBeVisible();

         await expect(this.toggle1).toBeVisible();
        await expect(this.toggle2).toBeVisible();
         await this.toggle1.click();
        await this.toggle2.click();

        await this.input1.fill("50");
        await this.input1.fill("50");

        await expect(this.toggle3).toBeVisible();
        await expect(this.toggle4).toBeVisible();
        await this.toggle3.click();
        await this.toggle4.click();


        await this.input3.fill("50");
        await this.input4.fill("50");

        await expect(this.total).toHaveCSS("border-color", "#e4e4e7");
    }
}