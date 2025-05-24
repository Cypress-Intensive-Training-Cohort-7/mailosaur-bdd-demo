import { fakerEN_NG as faker } from "@faker-js/faker"
let signup

before(() => {
    cy.fixture('elements').then(sel => {
        signup = sel.elements.signupPage
    })
})

Cypress.Commands.add('fillInFullname', ()=>{
    cy.get(signup.fullnameField).fill(faker.person.fullName())
})

Cypress.Commands.add('fillInBusinessName', ()=>{
    cy.get(signup.businessNameField).fill(faker.company.buzzNoun())
})

Cypress.Commands.add('fillInBusinessPhoneNUmber', ()=>{
    cy.get(signup.businesPhoneField).fill(faker.phone.number({style: 'international'}))
})

Cypress.Commands.add('fillInBusinessRegNumber', ()=>{
    cy.get(signup.businessRegNumField).fill(faker.string.numeric({min:5, max:7}))
})

Cypress.Commands.add('clickNextButton', ()=>{
    cy.get('button').contains('Next').click()
})

Cypress.Commands.add('verifyPageLoad', (element)=>{
    cy.get(element).should('be.visible')
})

Cypress.Commands.add('fillInWebsite', ()=>{
    cy.typeInAnyValue(signup.fullnameField, faker.person.fullName())
})

Cypress.Commands.add('fillInInstagramHandle', ()=>{
    cy.typeInAnyValue(signup.businessNameField, faker.company.buzzNoun())
})

Cypress.Commands.add('fillInTwitterHandle', ()=>{
    cy.typeInAnyValue(signup.businesPhoneField, faker.phone.number({style: 'international'}))
})

Cypress.Commands.add('fillInPassword', ()=>{
    cy.typeInAnyValue(signup.businessRegNumField, faker.string.numeric({min:5, max:7}))
})
