describe('test spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:3000/index.html')
  })
})
describe('Click a button', () => {
  it('should click the button with id "increment-btn"', () => {
    cy.visit('http://localhost:3000');

    cy.get('#increment-btn').click();
  });
});
cy.get('#counter').should('have.text', '1');
