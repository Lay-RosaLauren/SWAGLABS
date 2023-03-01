export const elements = {
    // Elements > Page Login
    inputLoginUserName: '[data-test=username]',
    inputLoginPassword: '[data-test=password]',
    btnLogin: '[data-test=login-button]',  
    baseValidateUserLogin: '.title',
    baseCheckErrorMsg: '[data-test=error]',

    // Elements > Menu Sidebar
    btnBurgerMenu: '[id=react-burger-menu-btn]',
    btnLogoutSidebar: '[id=logout_sidebar_link]:contains(Logout)',

    // Elements > Assertions
    baseValidateUserLoggedOut: '[data-test=login-button]',
    baseCheckErrorCookiesMsg: '[data-test=error]',

    // Elements > Shopping Cart
    btnAddToCartProduct: '[data-test=add-to-cart-sauce-labs-backpack]',
    btnShoppingCart: '.shopping_cart_link',

    // Elements > Checkout
    btnCheckout: '[data-test=checkout]',
    inputCheckoutFirstName: '[data-test=firstName]',
    inputCheckoutLastName: '[data-test=lastName]',
    inputCheckoutPostalCode: '[data-test=postalCode]',
    btnCheckoutContinue: '[data-test=continue]',
    btnCheckoutFinish: '[data-test=finish]',
    baseValidateUserCheckout: '.complete-header:contains(THANK YOU FOR YOUR ORDER)',
    
    // Elements > Menu Sidebar
    btnResetSidebar: '[id=reset_sidebar_link]' 
}
