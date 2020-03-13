<?php
get_header(); 
?>

<main id="main" role="main" style="overflow-y:scroll">
<div id="admin">

<?=parseBlurbs(getBlurbs());

?>
</div>
</main>
<?php
wp_footer(); ?>