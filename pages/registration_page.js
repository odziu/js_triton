const registrationLoginField = element(by.id('signupform-username'));
const registrationEmailField = element(by.id('signupform-email'));
const registrationPasswordField = element(by.id('signupform-password'));
const signUpBtn = element(by.xpath(`//button[@name='signup-button']`));
const randomUsername = Math.random().toString(36).substring(7);
const randomPassword = Math.random().toString(36).replace('0.', '');

class RegistrationPage {
    
}