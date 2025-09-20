import { test, expect } from "@playwright/test"
import { signup } from "../pages/signup"


test("Sign up to the Real", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.joinReal();
    await real.SignUp();
})

test("Sign up to the Real Negative Testcase with wrong email", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.joinReal();
    await real.SignUpEmailError();
})

test("Sign up to the Real Negative Testcase with wrong password", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.joinReal();
    await real.signupWrongPassword();
})



test("Testcase 1 with all dollars", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase1();

})

test("Testcase 2 with two dollars and two percentages", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase2();

})

test("Testcase 3 with all 4 percentages", async ({ page }) => {

    const real = new signup(page);

    await real.Navigate();
    await real.Login();
    await real.transactionEyeIcon();
    await real.deatilsAdjustTestcase3();

})
