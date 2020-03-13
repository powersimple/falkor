<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); 
    $url = wp_upload_dir();
?>
  <script>
      // Wordpress PHP variables to render into JS at outset.
      var active_id = <?=$post->ID?>;
      var active_object = "<?=$post->post_type?>";
      var home_page = <?=get_option( 'page_on_front' )?>;
      var site_title = "<?=get_bloginfo('name')?>";
      var data_path = "<?=get_stylesheet_directory_uri()?>/data/";
      var uploads_path =  "<?=$url['baseurl']?>/";
      var xr_path = 'xr/'
      
      <?php
          if(function_exists('icl_object_id')){
              global $sitepress;
              print "var languages = ".json_encode(getLanguageList());
            

          }
      ?>

  </script>
</head>


  <body>
  <header>

  <div id="laurel">
  <?php // print get_bloginfo('description');?>
  </div>
    <div id="logo">
    <?php 
  //  include "svg/powersimple.svg";
  ?>
  </div>
  </header>


<main id="main" role="main">
