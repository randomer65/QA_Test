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
describe('test spec 2', () => {
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
describe()('test spec 3', () => {
  it('clicks a button multiple times and checks counter', () => {
    for (let i = 1; i < 43; i++) {
      $cy.get('#increment-btn').click();
      cy.get('#counter').should('have.value', i);
    }
  });
});
