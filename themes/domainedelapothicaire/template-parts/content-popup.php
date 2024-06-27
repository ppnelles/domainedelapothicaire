<?php 
	$showPopup = false;
	$popShowOn = 0;

	
	if(get_field('pop_activ','option') == true && get_field('pop_allpages','option') == true):
		$showPopup = true;
	elseif(get_field('pop_activ','option') == true && get_field('pop_allpages','option') == false):
		$popShowOn = get_field('pop_showon','option');
		if(in_array($post->ID, $popShowOn, false)) {
			$showPopup = true;
		}
	endif;
	


	/*if(get_field('pop_activ','option') && get_field('pop_allpage','option') == true ) :
		$showPopup = true;
	elseif(get_field('pop_activ','option') && $popShowOn != false && in_array($post->ID, $popShowOn, false)) :
		$showPopup = true;
	endif;

	if*/

if($showPopup == true) : 


	$posts = get_field('pop_selected', 'option');


	if( $posts ):
		foreach( $posts as $post): // variable must be called $post (IMPORTANT) 
			setup_postdata($post);
			$popFormat = get_field('pop_format'); ?>
			
			<div id="popup" class="hidden <?php echo $popFormat; ?>">
				<?php if($popFormat == 'fullscreen'): ?>
					<div class="popup-bg"></div>
				<?php endif; ?>


				<div class="popup-content">
					
					<?php if(get_field('pop_title')): ?>
						<h2 class="pop-title"><?php the_field( 'pop_title'); ?></h2>
					<?php endif; ?>

					<?php if($popFormat == 'fullscreen' && get_field('pop_content_fullscreen')): ?>
						<div class="pop-inner">
							<div class="pop-content">
								<?php the_field( 'pop_content_fullscreen'); ?>
							</div>
							<?php if ( have_rows( 'pop_buttons' ) ) : ?>
								<ul class='pop-buttons'>
									<?php while ( have_rows( 'pop_buttons' ) ) : the_row(); ?>
										<li>
											<a href="<?php the_sub_field( 'link' ); ?>" class="btn <?php the_sub_field( 'class_html' ); ?>"><?php the_sub_field( 'title' ); ?></a>
										</li>
									<?php endwhile; ?>
								</ul>
							<?php endif; ?>
							<?php if(get_field('pop_footer')): ?>
								<div class="pop-footer">
									<?php the_field( 'pop_footer' ); ?>
								</div>
							<?php endif; ?>
						</div>
					<?php elseif($popFormat == 'bubble' && get_field('pop_content_bubble')): ?>
						<div class="pop-inner">
							<?php the_field( 'pop_content_bubble'); ?>
							<button class="popup-close"><span>X</span></button>
						</div>
					<?php endif; ?>



				</div>
			</div>

		<?php endforeach; 
		wp_reset_postdata();
	endif;
	
	
/*	if(get_field('pop_allpage','option') == false && in_array($post->ID, $popShowOn, false)) :

		echo "<h1>c'est oui</h1>";µ
	endif;*/
?>
<?php endif; ?>