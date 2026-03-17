<?php
/**
 * SCRS Digital Ecosystem theme functions and definitions
 *
 * @package SCRS_Digital_Ecosystem
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function scrs_digital_ecosystem_scripts() {
    $theme_dir  = get_template_directory();
    $theme_uri  = get_template_directory_uri();
    $assets_dir = $theme_dir . '/assets';

    $js_file  = '';
    $css_file = '';

    if ( is_dir( $assets_dir ) ) {
        $files = scandir( $assets_dir, SCANDIR_SORT_DESCENDING );
        foreach ( $files as $file ) {
            if ( strpos( $file, 'index-' ) === 0 && ! $js_file && pathinfo( $file, PATHINFO_EXTENSION ) === 'js' ) {
                $js_file = $file;
            }
            if ( strpos( $file, 'index-' ) === 0 && ! $css_file && pathinfo( $file, PATHINFO_EXTENSION ) === 'css' ) {
                $css_file = $file;
            }
        }
    }

    if ( $css_file ) {
        wp_enqueue_style( 'scrs-digital-ecosystem-main', $theme_uri . '/assets/' . $css_file, array(), null );
    }

    if ( $js_file ) {
        wp_enqueue_script( 'scrs-digital-ecosystem-main', $theme_uri . '/assets/' . $js_file, array(), null, true );
    }

    wp_enqueue_style( 'scrs-digital-ecosystem-fonts', 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=Inter:wght@300;400;500;600&display=swap', array(), null );

    wp_enqueue_style( 'scrs-digital-ecosystem-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'scrs_digital_ecosystem_scripts' );

function scrs_digital_ecosystem_script_loader_tag( $tag, $handle, $src ) {
    if ( 'scrs-digital-ecosystem-main' !== $handle ) {
        return $tag;
    }

    $tag = '<script type="module" src="' . esc_url( $src ) . '" id="' . esc_attr( $handle ) . '-js"></script>';
    return $tag;
}
add_filter( 'script_loader_tag', 'scrs_digital_ecosystem_script_loader_tag', 10, 3 );

function scrs_digital_ecosystem_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'scrs_digital_ecosystem_setup' );
