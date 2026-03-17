<?php
/**
 * The template for displaying 404 pages.
 *
 * @package Seamless_React
 */

get_header();
?>

<main class="seamless-404">
    <div class="seamless-404__inner">
        <p class="seamless-404__eyebrow">404</p>
        <h1 class="seamless-404__title">Page not found.</h1>
        <p class="seamless-404__copy">The page you requested does not exist or may have moved.</p>
        <a class="seamless-404__link" href="<?php echo esc_url( home_url( '/' ) ); ?>">Return to homepage</a>
    </div>
</main>

<?php
get_footer();
