<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;

final class Oceancreditcard_Gateway_Blocks extends AbstractPaymentMethodType {

    private $gateway;
    protected $name = 'oceancreditcard';
    public function initialize() {
        $this->settings = get_option( 'woocommerce_oceancreditcard_settings', [] );
        $this->gateway = new WC_Gateway_Oceancreditcard();
    }

    public function is_active() {
        return $this->gateway->is_available();
    }

    public function get_payment_method_script_handles() {

        wp_register_script(
            'oceancreditcard-blocks-integration',
            plugin_dir_url(__FILE__) . 'js/oceancreditcard-block.js',
            [
                'wc-blocks-registry',
                'wc-settings',
                'wp-element',
                'wp-html-entities',
                'wp-i18n',
            ],
            null,
            true
        );
        if( function_exists( 'wp_set_script_translations' ) ) {            
            wp_set_script_translations( 'oceancreditcard-blocks-integration');
            
        }


        return [ 'oceancreditcard-blocks-integration' ];
    }


    public function get_payment_method_data() {
        $logo = $this->settings['logo'];

        foreach ( $logo as $vo ) {
            $icons[] = array(
                'id'  => $vo.'_icon',
                'alt' => $vo,
                'src' => WC_HTTPS::force_https_url( plugins_url('images/'.$vo.'.png' , __FILE__ ) )
            );
        }
        return [
            'title' => $this->gateway->title,
            'description' => $this->gateway->description,
            'icons'=>$icons
        ];
    }

}
?>