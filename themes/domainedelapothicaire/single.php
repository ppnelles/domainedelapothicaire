<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _turbo
 */

get_header();
?>

<main id="primary" class="site-main contact" role="main" itemprop="mainContentOfPage">

    <?php _turbo_post_thumbnail(); ?>

    <div class="page-container">

    	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
    		<header class="entry-header">
                <?php the_title( '<h1 class="entry-title" itemprop="headline">', '</h1>' ); ?>
            </header><!-- .entry-header -->
            <div class="article-body">
                <?php the_content(); ?>
            </div>
    	</article>
    
        <?php
        $related_pages = get_field('linked_paged', 'option');
        if( $related_pages ): ?>
            <ul class="related_pages">
            <?php foreach( $related_pages as $post ): 

                // Setup this post for WP functions (variable must be named $post).
                setup_postdata($post); ?>
                <li>
                    <a href="<?php the_permalink(); ?>">
                        <?php _turbo_post_thumbnail(); ?>
                        <div class="inner">
                            <h3><?php the_title(); ?></h3>
                        </div>
                    </a>
                </li>
            <?php endforeach; ?>
            </ul>
            <?php 
            // Reset the global post object so that the rest of the page works correctly.
            wp_reset_postdata(); ?>
        <?php endif; ?>

    </div>


</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
