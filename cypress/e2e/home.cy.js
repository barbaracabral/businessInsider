describe('Abrir a home do Business Insider spec', () => {
  it('Checar o componente de Header da Página e seus elementos', () => {
    cy.visit('/');
    cy.wait(2000);

    //Verificar o Hamburguer Menu
    cy.get('header .menu-container [data-e2e-name="hamburgerBtn"] svg').click();
    cy.get('.close-icon-clickable-area').click();

    //Verificar o link da Newsletter
    cy.get('[data-analytics-product-area="newsletters"]')
      .should('have.attr', 'href', 'https://businessinsider.com/subscription/newsletter')
      .contains('Newsletter');

    //Verificar o botão de login
    cy.get('.account-text-not-logged-in')
      .contains('Log in');

    //Verificar o botão de Subscribe
    //Possível Bug
    cy.get('[data-e2e-name="subscribeBtn"]')
      //.should('have.attr', 'href', 'https://www.businessinsider.com/subscription?r-masthead&IR=C')
      .should('have.class', 'subscribe-btn')
      .contains('Subscribe');
  })

  it('Checar o Newsletter Signup no Body da Página', () => {
    cy.visit('/');
    //Preencher o Newsletter Signup
    cy.get('.newsletter-signup').scrollIntoView({ offset: { top: -150, left: 0 } });
    cy.get('#newsletter-module-input').type('barbaracabral@gmail.com');
    cy.get('.homepage-newsletter-form .rounded-button')
      .should('have.class', 'dark-button')
      .contains('Sign up');
  })
})