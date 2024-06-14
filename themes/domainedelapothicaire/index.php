<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _turbo
 */

get_header();
?>

<main id="primary" class="site-main news" role="main" itemprop="mainContentOfPage">

	<div class="post-thumbnail" itemprop="primaryImageOfPage">
		<?php //ACF field must be set as ID
		if(get_field('cover',910)) { ?>
			<figure>
				<?php echo wp_get_attachment_image(get_field('cover',910), 'full'); ?>
			</figure>
		<?php } ?>
	</div>

	<div class="page-container">
		<article class="hentry">
			<header class="entry-header">
				<h1><?php the_field( 'titre',910 ); ?></h1>
			</header><!-- .entry-header -->

			<div class="the-news">
				<?php
				    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
				    $args = array( 
				        'posts_per_page' => 8, 
				        'paged' => $paged, 
				    );
				    $cpt_query = new WP_Query($args);
				?>

				<?php if ($cpt_query->have_posts()) : while ($cpt_query->have_posts()) : $cpt_query->the_post(); ?>

				    <div class="news-excerpt">
				    	<?php _turbo_post_thumbnail(); ?>
				    	<div class="inner">
				    		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				    		<div class="excerpt">
				    			<p><?php echo _turbo_truncate_content(get_the_content(), 200, '...', false, false, true); ?></p> 
				    		</div>
				    	</div>
				    	<div class="more"><a class="btn" href="<?php the_permalink(); ?>">Lire la suite</a></div>

				    	<?php ?>
				    </div>

				<?php endwhile; endif; ?>

			</div>
			<nav class="news-nav">
			    <ul>
			        <li><?php previous_posts_link( '&laquo; Suivant', $cpt_query->max_num_pages) ?></li> 
			        <li><?php next_posts_link( 'Précedent &raquo;', $cpt_query->max_num_pages) ?></li>
			    </ul>
			</nav>

		</article>
	</div>

</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
