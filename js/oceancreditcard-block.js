
const oceancreditcard_settings = window.wc.wcSettings.getSetting( 'oceancreditcard_data', {} );


const oceancreditcard_label = window.wp.htmlEntities.decodeEntities( oceancreditcard_settings.title ) || window.wp.i18n.__( 'Oceanpayment Creditcard Payment Gateway', 'oceanpayment-creditcard-gateway' );




const oceancreditcard_Content = () => {
    return window.wp.htmlEntities.decodeEntities( oceancreditcard_settings.description || '' );
};


var I = function(e) {
    var t = e.components,
        n = e.title,
        r = e.icons,
        a = e.id;
    Array.isArray(r) || (r = [r]);
    var o = t.PaymentMethodLabel,
        i = t.PaymentMethodIcons;
    return React.createElement("div", {
        className: "wc-oceancreditcard-blocks-payment-method__label ".concat(a)
    }, React.createElement(o, {
        text: n
    }), React.createElement(i, {
        icons: r
    }))
};
const Oceancreditcard_Block_Gateway = {
    name: 'oceancreditcard',

    label: React.createElement(I, {
        id: "oceancreditcard",
        title: oceancreditcard_settings.title,
        icons: oceancreditcard_settings.icons
    }),

    content: Object( window.wp.element.createElement )( oceancreditcard_Content, null ),
    edit: Object( window.wp.element.createElement )( oceancreditcard_Content, null ),
    canMakePayment: () => true,
    ariaLabel: oceancreditcard_label,
    // placeOrderButtonLabel: window.wp.i18n.__( 'Proceed to Oceanpayment', 'oceanpayment-creditcard-gateway' ),
  /*  supports: {
        features: oceancreditcard_settings.supports,
    },*/
};

window.wc.wcBlocksRegistry.registerPaymentMethod( Oceancreditcard_Block_Gateway );