<?php
/**
 * Template Name: homepage
 *
 * @package _turbo
 */

get_header();
?>


<main id="primary" class="site-main homepage" role="main" itemprop="mainContentOfPage">
	<?php _turbo_post_thumbnail(); ?>
	
	<div class="home-intro">
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
			<header class="entry-header">
				<div class="home-header">
					<?php the_title( '<h1 class="entry-title" itemprop="headline">', '</h1>' ); ?>
					<ul class="networks">
						<li><a href="https://www.facebook.com/domaine.de.l.apothicaire" target="_blank" class="facebook"><span>Facebook</span></a></li>
						<li><a href="https://www.instagram.com/domaine.apothicaire" target="_blank" class="instagram"><span>Instagram</span></a></li>
					</ul>
				</div>
			</header><!-- .entry-header -->

			<div class="entry-content" itemprop="articleBody">
				<?php the_content(); ?>
			</div><!-- .entry-content -->

			<div class="badge">
				<figure>
					<img src="<?php bloginfo('template_directory'); ?>/img/HVE_produit_ocre.png" alt="Issu d'une exploitation à Haute Valeur Environnementale">
				</figure>
			</div>
			
		</article><!-- #post-<?php the_ID(); ?> -->

		<div class="last-news">
			<h2>Dernières news</h2>
			<?php $args = array(
				'posts_per_page' => 3
			);
			$the_query = new WP_Query($args);
			if ( $the_query->have_posts() ) : ?>
				<ul>
					<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<li>
							<a href="<?php the_permalink(); ?>">
								<h4><?php the_title(); ?></h4>
								<p><?php echo get_the_date('d/m/Y'); ?></p>
							</a>
						</li>
					<?php endwhile; ?>
				</ul>
			<?php endif; wp_reset_query(); ?>
		</div>
		
	</div>


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
</main>
<?php
//get_sidebar();
get_footer();