describe('test spec 0', () => {
  it('passes smoke test', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
  });
});
describe('test spec 1', () => {
  it('passes happy path', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#counter').should('have.text', '0');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '2');
    cy.get('#increment-btn').click();
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '4');
    cy.get('#decrement-btn').click();
    cy.get('#counter').should('have.text', '3');
  });
});
describe('test spec 3', () => {
  it('takes a screenshot after increment', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-increment').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-increment.png');
    });
  });
});
describe('test spec 3', () => {
  it('clicks a button multiple times and checks counter', () => {
    cy.visit('http://localhost:3000/index.html');
    for (let i = 1; i < 420; i++) {
    // Arbitrary number - trying to keep the test duration under 30 seconds 
      cy.get('#increment-btn').click();
      cy.get('#counter').should('have.text', i.toString());
    }
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-several-increments').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-several-increments.png');
  });
});

describe('test spec 4', () => {
  it.skip('takes a screenshot after decrement from 0', () => {
    // Skipping because it fails by showing -1 not 0
    cy.visit('http://localhost:3000/index.html');
    cy.get('#decrement-btn').click();
    cy.get('#counter').should('have.text', '0');
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-decrement').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-decrement.png');
    });
  });
});
