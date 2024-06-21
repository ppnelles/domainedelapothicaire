<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _turbo
 */

?>


<?php _turbo_post_thumbnail(); ?>

<div class="page-container <?php if(get_field('photo_bouteille')) { echo 'two-cols'; } ?>">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title" itemprop="headline">', '</h1>' ); ?>
		</header><!-- .entry-header -->

		<div class="entry-content" itemprop="articleBody">
			<?php if (get_field('wine_content')) { ?>
				<?php while ( have_rows( 'wine_content' ) ) : the_row(); ?>
					<div class="wine-info">
						<?php if (get_sub_field('titre')): ?>
							<h3><?php the_sub_field( 'titre' ); ?></h3>
						<?php endif; ?>
						<?php if (get_sub_field('contenu')): ?>
							<div class="content"><?php the_sub_field( 'contenu' ); ?></div>
						<?php endif; ?>
					</div>
				<?php endwhile; ?>
			<?php } else {
				the_content();
			} ?>

			<?php if(get_field('millesime') || get_field('cepages') || get_field('alcool')) : ?>
				<h3>Fiche technique</h3>
			<?php endif; ?>

			<?php if(get_field('millesime')): ?>
				<div class="wine-attribute millesime">
					<figure class="picto">
						<img src="<?php bloginfo('template_directory'); ?>/img/picto-millesime.png">
					</figure>
					<div class="intro">
						<p><strong>Millésime :</strong></p>
						<p><?php the_field( 'millesime' ); ?></p>
					</div>
				</div>
			<?php endif; ?>

			<?php if(get_field('cepages')): ?>
				<div class="wine-attribute cepages">
					<figure class="picto">
						<img src="<?php bloginfo('template_directory'); ?>/img/picto-cepages.png">
					</figure>
					<div class="intro">
						<p><strong>Cépages :</strong></p>
						<p><?php the_field( 'cepages' ); ?></p>
					</div>
				</div>
			<?php endif; ?>

			<?php if(get_field('alcool')): ?>
				<div class="wine-attribute alcool">
					<figure class="picto">
						<img src="<?php bloginfo('template_directory'); ?>/img/picto-alcool.png">
					</figure>
					<div class="intro">
						<p><strong>Alcool :</strong></p>
						<p><?php the_field( 'alcool' ); ?></p>
					</div>
				</div>
		<?php endif; ?>

		</div><!-- .entry-content -->

		<?php if ( have_rows( 'galerie' ) ) : ?>
			<figure class="wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex">
				<?php while ( have_rows( 'galerie' ) ) : the_row(); ?>
					<?php //ACF field must be set as ID
					if(get_sub_field('photo')) { ?>
						<figure class="wp-block-image size-large">
							<a href="<?php echo wp_get_attachment_url(get_sub_field( 'photo' )); ?>" data-lightbox="<?php echo sanitize_title(get_the_title()); ?>" data-title="<?php the_title(); ?>">
								<?php echo wp_get_attachment_image(get_sub_field('photo'), 'large', '', array('class' => 'no-lazyload'));?>
							</a>
						</figure>
					<?php } ?>
				<?php endwhile; ?>
			</figure>
		<?php endif; ?>
	
		<?php
		$the_wines = get_field('les_vins');
		if( $the_wines ): ?>
		    <ul class="our-wines">
		    <?php foreach( $the_wines as $post ): 

		        // Setup this post for WP functions (variable must be named $post).
		        setup_postdata($post); ?>
		        <li>
		        	<a href="<?php the_permalink(); ?>">
		        		<?php //ACF field must be set as ID
		        		if(get_field('photo_bouteille')) { ?>
		        			<figure>
		        				<?php echo wp_get_attachment_image(get_field('photo_bouteille'), 'large'); ?>
		        			</figure>
		        		<?php } ?>
		            	<h2><?php the_title(); ?></h2>
		            </a>
		        </li>
		    <?php endforeach; ?>
		    </ul>
		    <?php 
		    // Reset the global post object so that the rest of the page works correctly.
		    wp_reset_postdata(); ?>
		<?php endif; ?>

		<?php //ACF field must be set as ID
		if(get_field('photo_bouteille')) { ?>
			<figure class="photo-bouteille">
				<?php echo wp_get_attachment_image(get_field('photo_bouteille'), 'large'); ?>
			</figure>
		<?php } ?>

	</article><!-- #post-<?php the_ID(); ?> -->


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

