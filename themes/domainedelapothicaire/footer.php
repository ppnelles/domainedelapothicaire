<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _turbo
 */

?>

	<?php /* </div><!-- #content --> */ ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<div class="about">
				<span class="footer-name">© Copyright <?php echo date("Y"); ?> <strong><?php bloginfo( 'name' ); ?> </strong></span> 

				<?php if(get_field('footer_info','option')): ?> 
					<span class="footer-info">
						<?php echo '<span class="sep"> - </span>'; the_field( 'footer_info','option' ); ?>	
					</span> 
				<?php endif; ?> 

				<span class="footer-privacy"><span class="sep"> - </span> <?php echo get_the_privacy_policy_link(); ?></span>
			</div>
			<?php /* <div class="made-by">
				<a href="https://www.getin.agency/" title="<?php _e('Website by GET IN Agency','_turbo') ?>"><span><?php _e('Website by GET IN Agency','_turbo') ?></span></a>
			</div> */ ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->


<?php //get_template_part('template-parts/content','popup'); ?>

<?php get_template_part('template-parts/content','cookie'); ?>

<?php wp_footer(); ?>

</body>
</html>
