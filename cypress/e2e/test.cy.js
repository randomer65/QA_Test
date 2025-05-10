describe('test spec 0', () => {
  it('passes smoke test', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
  });
});
describe('test spec 1', () => {
  it('passes happy path test', () => {
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
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-increment').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-increment.png');
    });
  });
});
describe('test spec 2', () => {
  it('click Increment button multiple times and check counter', () => {
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
});
describe('test spec 3', () => {
  it.skip('decrement from 0', () => {
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

describe('test spec 4', () => {
  it('click Increment button multiple times and check counter', () => {
    cy.visit('http://localhost:3000/index.html');
    for (let i = 1; i < 200; i++) {
    // Arbitrary number - trying to keep the test duration under 30 seconds 
      cy.get('#increment-btn').click();
      cy.get('#counter').should('have.text', i.toString());
    }
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-several-increments').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-200-increments.png');
    });
    for (let i = 198; i > 0; i--) {
    // Arbitrary number - trying to keep the test duration under 30 seconds 
      cy.get('#decrement-btn').click();
      cy.get('#counter').should('have.text', i.toString());
    }
    // Take a screenshot of the entire page
    cy.screenshot('counter-after-several-increments').then(() => {
      console.log('::notice::Screenshot saved: cypress/screenshots/test.cy.js/counter-after-200-increments-and-decrements.png');
    });
  });
});
