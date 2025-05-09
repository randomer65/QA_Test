describe('test spec', () => {
  it('passes happy path', () => {
    cy.visit('http://localhost:3000/index.html');
    cy.get('#counter').should('have.text', '0');
    cy.get('#increment-btn').click();
    cy.get('#counter').should('have.text', '1');
  });
});

  
