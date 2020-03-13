<?php
    function enqueue_xr(){
        wp_register_script('xr-lib',get_stylesheet_directory_uri() . '/xr-lib.js', array('jquery'),rand(100000,999999), false); 
        wp_enqueue_script('xr-lib');
        
         wp_register_script('xr-app',get_stylesheet_directory_uri() . '/xr-app.js', array('jquery'),rand(100000,999999), true); 
        wp_enqueue_script('xr-app');
        }
    add_action( 'wp_enqueue_scripts', 'enqueue_xr' ); 

    add_filter('xr-lib', 'addModule' , 10, 3);
    function addModule($tag, $handle, $src) {
    // if not your script, do nothing and return original $tag
    if ( 'your-script-handle' !== $handle ) {
        return $tag;
    }
    // change the script tag by adding type="module" and return it.
    $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
    return $tag;
}
?>