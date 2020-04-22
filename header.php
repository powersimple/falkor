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
      var active_id = <?=$post->ID?>,
      active_object = "<?=$post->post_type?>",
      home_page = <?=get_option( 'page_on_front' )?>,
      site_title = "<?=get_bloginfo('name')?>",
      xr_path = "<?=get_stylesheet_directory_uri()?>/xr/",
      data_path = "<?=get_stylesheet_directory_uri()?>/data/",
      useWheelNav = false,
      uploads_path =  "<?=$url['baseurl']?>/"
     
      
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
  <?php print get_bloginfo('description');?>
  </div>
        <div class="page-loader">
        <div class="loader"><img src="<?php echo get_stylesheet_directory_uri();?>/svg/SpatialComputingCircle-01.svg" alt="" class="style-svg"></div> 
<?php //die();?>
      </div>
       <div id="logo">
            <a title="Spatial Computing.World" class="navbar-brand header-logo" href="/"> <?php 
      include "svg/SpatialComputingCircle-01.svg";
  ?>
  
 

    
    </a><div id="globe"> <canvas id="world"></canvas></div></div> </div>
    
      <nav class="navbar navbar-custom navbar-fixed-top navbar-transparent one-page" role="navigation" id="nav">
        <div class="contained">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
           
          </div>
          
          </div>

          <div class="collapse navbar-collapse" id="custom-collapse">
            <ul class="nav navbar-nav navbar-right">
            <?php //dynamic_sidebar( 'header-menu' ); ?>
            </ul>
         
          </div>
 
    </nav>
  <div id="tag-cloud-button">
          <?php 
      include "svg/tag-cloud-01.svg";
  ?>
  </div>
        
     
   
  </header>
