describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Digital Craftsman (Developer/Open Source Advocate/Tinkerer)');
  });
});
