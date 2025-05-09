describe('test spec', () => {
  it('passes happy path', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#counter').should('have.text', '0');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
  });
});
describe('test spec', () => {
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
  
