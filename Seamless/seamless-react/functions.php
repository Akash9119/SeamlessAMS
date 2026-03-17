<?php
/**
 * Seamless React theme functions and definitions.
 *
 * @package Seamless_React
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function seamless_react_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support(
        'html5',
        array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
    );
}
add_action( 'after_setup_theme', 'seamless_react_setup' );

function seamless_react_enqueue_assets() {
    $theme_dir  = get_template_directory();
    $theme_uri  = get_template_directory_uri();
    $assets_dir = $theme_dir . '/assets';

    $js_file  = '';
    $css_file = '';

    if ( is_dir( $assets_dir ) ) {
        $files = scandir( $assets_dir, SCANDIR_SORT_DESCENDING );
        foreach ( $files as $file ) {
            if ( strpos( $file, 'index-' ) === 0 && ! $js_file && 'js' === pathinfo( $file, PATHINFO_EXTENSION ) ) {
                $js_file = $file;
            }

            if ( strpos( $file, 'index-' ) === 0 && ! $css_file && 'css' === pathinfo( $file, PATHINFO_EXTENSION ) ) {
                $css_file = $file;
            }
        }
    }

    if ( $css_file ) {
        wp_enqueue_style( 'seamless-react-main', $theme_uri . '/assets/' . $css_file, array(), null );
    }

    if ( $js_file ) {
        wp_enqueue_script( 'seamless-react-main', $theme_uri . '/assets/' . $js_file, array(), null, true );
    }

    wp_enqueue_style(
        'seamless-react-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style( 'seamless-react-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'seamless_react_enqueue_assets' );

function seamless_react_script_loader_tag( $tag, $handle, $src ) {
    if ( 'seamless-react-main' !== $handle ) {
        return $tag;
    }

    return '<script type="module" src="' . esc_url( $src ) . '" id="' . esc_attr( $handle ) . '-js"></script>';
}
add_filter( 'script_loader_tag', 'seamless_react_script_loader_tag', 10, 3 );

function seamless_react_spa_routes() {
    return array(
        '/',
        '/home',
        '/features',
        '/about',
        '/integrations',
        '/pricing',
        '/faq',
        '/request-demo',
        '/contact',
        '/brand-guidelines',
    );
}

function seamless_react_normalize_request_path() {
    global $wp;

    $request_path = wp_parse_url( home_url( isset( $wp->request ) ? $wp->request : '' ), PHP_URL_PATH );
    $site_path    = wp_parse_url( home_url( '/' ), PHP_URL_PATH );

    $request_path = '/' . ltrim( (string) $request_path, '/' );
    $site_path    = '/' . ltrim( (string) $site_path, '/' );

    if ( '/' !== $site_path && 0 === strpos( $request_path, $site_path ) ) {
        $request_path = substr( $request_path, strlen( $site_path ) );
        $request_path = '/' . ltrim( (string) $request_path, '/' );
    }

    return untrailingslashit( $request_path ?: '/' ) ?: '/';
}

function seamless_react_is_spa_route() {
    return in_array( seamless_react_normalize_request_path(), seamless_react_spa_routes(), true );
}

function seamless_react_template_override( $template ) {
    if ( is_admin() || wp_doing_ajax() || is_feed() ) {
        return $template;
    }

    $theme_dir = get_stylesheet_directory();

    if ( is_front_page() || is_home() || seamless_react_is_spa_route() ) {
        return $theme_dir . '/index.php';
    }

    if ( is_404() ) {
        return $theme_dir . '/404.php';
    }

    return $template;
}
add_filter( 'template_include', 'seamless_react_template_override', 99 );
