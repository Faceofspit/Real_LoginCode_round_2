import { test, expect } from "@playwright/test"
import { Login } from "../pages/Login";


test("Testcase 1 with all dollars", async ({ page }) => {

    const real = new Login(this.page);

    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase1();
    
})

test("Testcase 2 with two dollars and two percentages", async ({ page }) => {

    const real = new Login(this.page);

    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase2();
    
})

test("Testcase 3 with all 4 percentages", async ({ page }) => {

    const real = new Login(this.page);

    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase3();
    
})
