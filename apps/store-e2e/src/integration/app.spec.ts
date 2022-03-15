import { getProductList } from '../support/app.po';

describe('store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getProductList().find('banshop-product-card').should('have.length', 9);
  });
});
