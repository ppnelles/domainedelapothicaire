<?php
/**
 * Template Name: contact
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
			<div class="entry-content" itemprop="articleBody">
				<?php the_content(); ?>
			</div><!-- .entry-content -->

			<div class="contact-information">
				<?php echo do_shortcode(get_field( 'code_formulaire' )); ?>
				<div class="company">
					<h3><?php the_field( 'nom_sas' ); ?></h3>
					<div class="address">
						<p><?php the_field( 'adresse_l1' ); ?></p>
						<p><?php the_field( 'adresse_l2' ); ?></p>
						<p><?php the_field( 'pays' ); ?></p>
					</div>
					<div class="legal">
						<p><?php the_field( 'siren' ); ?></p>
						<p><?php the_field( 'rcs' ); ?></p>
						<p><?php the_field( 'tva' ); ?></p>
					</div>
				</div>
			</div>
		</article>

	<?php
	$related_pages = get_field('linked_paged');
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