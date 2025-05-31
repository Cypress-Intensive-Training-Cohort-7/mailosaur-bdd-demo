import { fakerEN_NG as faker } from "@faker-js/faker"
let login
let signup
let email
let serverID = 'co4n7lwl'
let emailDomain = '@co4n7lwl.mailosaur.net'
let emailAddress
let userDetails

beforeEach(() => {

    const checker = new Date().getTime()
    const emailSuffix = checker.toString().substring(6, 13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    userDetails = {
        emailAddress: emailAddress
    }

    cy.writeFile('cypress/fixtures/creds.json', JSON.stringify(userDetails, null, 2))

    cy.fixture('elements').then(sel => {
        homepage = sel.elements.homepage
        signup = sel.elements.signupPage
        login = sel.elements.loginPage
    })
    cy.fixture('creds').then((cred) => {
        email = cred
    })
})

Cypress.Commands.add('typeInAnyValue', (field, text) => {
    cy.get(field).type(text)
})

Cypress.Commands.add('clickAnyButtonWithText', (text) => {
    cy.get('button').contains(text).click()
})

Cypress.Commands.add('clickDesiredElement', (text,elementType) => {
    if(elementType === 'Button'){
            cy.get('button').contains(text).click()
    }else if (elementType === 'Span'){
            cy.get('span').contains(text).click()
    }else if (elementType === 'Link'){
            cy.get('a').contains(text).click()
    }else{
        cy.log('Command not understandable')
    }

})

Cypress.Commands.add('clickAnySpanWithText', (text) => {
    cy.get('span').contains(text).click()
})

Cypress.Commands.add('clickAnyLinkWithText', (text) => {
    cy.get('a').contains(text).click()
})

Cypress.Commands.add('readEmailFromFile', (path) => {
    return cy.readFile(path)
})

Cypress.Commands.add('clickHowYouHeardABoutUsDropdown', (text) => {
    cy.get(signup.howYouHeardAboutUs).click()
    cy.get('#scrollableDiv').contains(text).click()

})

Cypress.Commands.add('typeInBasicDetailsAndRegNumber', () => {
    const inputs = [
        faker.person.fullName(),
        faker.company.buzzNoun(),
        email.emailAddress,
        faker.phone.number({ style: 'international' }),
        faker.string.numeric({ length: { min: 5, max: 7 } })
    ]
    cy.get('input').each(($el, index) => {
        cy.wrap($el).fill(inputs[index])
    })

    cy.clickAnyButtonWithText('Next')
})

Cypress.Commands.add('typeInBasicDetails', () => {
    cy.typeInAnyValue(signup.fullnameField, faker.person.fullName())
    cy.typeInAnyValue(signup.businessNameField, faker.company.buzzNoun())
    cy.fillInBusinessEmail()
    cy.typeInAnyValue(signup.businesPhoneField, faker.phone.number({ style: 'international' }))

})

Cypress.Commands.add('insertPassword', () => {
    cy.typeInAnyValue(signup.passwordField, 'Test@1234')
})

Cypress.Commands.add('submitSignupForm', () => {
    cy.clickAnyButtonWithText('Sign Up')
})

Cypress.Commands.add('retrieveAndInsertOTP', () => {
    cy.mailosaurGetMessage(serverID, { sentTo: emailAddress })
        .then((email) => {
            const firstCode = email.html.codes[0]
            const otp = firstCode.value
            cy.log(firstCode)
            cy.log(otp)
            cy.get('input').each(($el, index) => {
                cy.wrap($el).type(otp[index])
            })
        })
})

Cypress.Commands.add('fillinAnyOptionalField', (option) => {
    if (option === 'business registeration') {
        cy.typeInAnyValue(signup.businessRegNumField, '668598')
        cy.clickAnyButtonWithText('Next')
    } else if (option === 'website') {
        cy.clickAnyButtonWithText('Next')
        cy.typeInAnyValue(signup.websiteField, faker.internet.domainName())
    } else if (option === 'instagram') {
        cy.clickAnyButtonWithText('Next')
        cy.typeInAnyValue(signup.instagramField, faker.company.buzzNoun())
    } else if (option === 'twitter') {
        cy.clickAnyButtonWithText('Next')
        cy.typeInAnyValue(signup.twitterField, faker.company.buzzNoun())
    } else {
        throw new Error("Option not available");

    }
})

Cypress.Commands.add('checkSignUpForm', () => {
    cy.get(signup.fullnameField).should('be.visible')
})

Cypress.Commands.add('fillInBusinessEmail', (path, field) => {
    cy.readEmailFromFile(path).then((email) => {
        cy.get(field).fill(email.emailAddress)
    })
})

Cypress.Commands.add('insterEmail', (field) => {
    switch (field) {
        case 'business email':
            cy.fillInBusinessEmail('cypress/fixtures/creds.json', signup.businessEmailField)
            break
        case 'email':
            cy.fillInBusinessEmail('cypress/fixtures/login.json', login.emailField)
    }
})

Cypress.Commands.add('saveSignUpEmail', () => {
    userDetails = {
        emailAddress: emailAddress
    }

    cy.writeFile('cypress/fixtures/login.json', JSON.stringify(userDetails, null, 2))

})

Cypress.Commands.add('insertDetails', (detailType) => {
    switch (detailType) {
        case 'full name':
            cy.fillInFullname()
            break
        case 'business name':
            cy.fillInBusinessName()
            break
        case 'business email':
            cy.fillInBusinessEmail('cypress/fixtures/creds.json', signup.businessEmailField)
            break
        case 'business phone number':
            cy.fillInBusinessPhoneNUmber()
            break
        case 'business registration number':
            cy.fillInBusinessRegNumber()

    }
})