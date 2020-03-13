<?php

//ENQUE

    function admin_q() {
		wp_enqueue_style('admin-styles', get_template_directory_uri().'/profiler/admin.css');
		wp_enqueue_style( 'font-awesome','https://use.fontawesome.com/releases/v5.6.3/css/all.css');

		wp_register_script('admin_js', get_template_directory_uri() . '/profiler/admin.js'); 
        wp_enqueue_script('admin_js');
		wp_register_script('ajax_js', get_template_directory_uri() . '/profiler/ajax.js'); 
        wp_enqueue_script('ajax_js');
    }
    add_action('admin_enqueue_scripts', 'admin_q');
	


// PROFILE METABOXES

function setProfileURL( $meta_boxes ) { // this shows the box were 
	$prefix = '';

	$meta_boxes[] = array(
		'id' => 'profile_info',
		'title' => esc_html__( 'PROFILE', 'omniscience-profiler' ),
		'post_types' => array('profile' ),
		'context' => 'side',
		'priority' => 'high',
		'autosave' => 'false',
		'fields' => array(
			array(
				'id' => $prefix . 'url',
				'type' => 'url',
				'name' => esc_html__( 'URL', 'omniscience-profiler' ),
				'desc' => esc_html__( 'Enter URL for the Resource to Profile', 'omniscience-profiler' ),
			),
			array(
				'id' => $prefix . 'profile_logo',
				'type' => 'image_advanced',
				'name' => esc_html__( 'Logo', 'omniscience-profiler' ),
				//'desc' => esc_html__( 'Size to 1920x1280', 'metabox-online-generator' ),
			),
           				array(
					'id' =>  'wikipedia',
					'type' => 'url',
					'name' => esc_html__( 'Wikipedia URL', 'omniscience-profiler' ),
				),

				array(
					'id' =>  'linkedin',
					'type' => 'url',
					'name' => esc_html__( 'LinkedIn URL', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'twitter',
					'type' => 'url',
					'name' => esc_html__( 'Twitter URL', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'facebook',
					'type' => 'url',
					'name' => esc_html__( 'Facebook URL', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'flickr',
					'type' => 'url',
					'name' => esc_html__( 'Flickr URL', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'instagram',
					'type' => 'url',
					'name' => esc_html__( 'Instagram URL', 'omniscience-profiler' ),
				),

			
				array(
					'id' =>  'Tumblr',
					'type' => 'url',
					'name' => esc_html__( 'Tumblr', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'google_plus',
					'type' => 'url',
					'name' => esc_html__( 'Google Plus', 'omniscience-profiler' ),
				),

				array(
					'id' =>  'pinterest',
					'type' => 'url',
					'name' => esc_html__( 'Pinterest', 'omniscience-profiler' ),
				),


					array(
					'id' =>  'GitHub',
					'type' => 'url',
					'name' => esc_html__( 'Github', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'medium',
					'type' => 'url',
					'name' => esc_html__( 'Medium', 'omniscience-profiler' ),
				),

				//comms
				array(
					'id' =>  'telegram',
					'type' => 'url',
					'name' => esc_html__( 'Telegram ', 'omniscience-profiler' ),
				),



				array(
					'id' =>  'slack',
					'type' => 'url',
					'name' => esc_html__( 'Slack', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'skype',
					'type' => 'url',
					'name' => esc_html__( 'Skype', 'omniscience-profiler' ),
				),

				//video
				array(
					'id' =>  'youtube',
					'type' => 'url',
					'name' => esc_html__( 'YouTube Channel', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'vimeo',
					'type' => 'url',
					'name' => esc_html__( 'Vimeo', 'omniscience-profiler' ),
				),

			array(
				'id' =>  'crunchbase',
				'type' => 'url',
				'name' => esc_html__( 'crunchbase URL', 'omniscience-profiler' ),
			),
							array(
					'id' =>  'rss',
					'type' => 'url',
					'name' => esc_html__( 'RSS Feed URL', 'omniscience-profiler' ),
				),
				array(
					'id' =>  'email',
					'type' => 'email',
					'name' => esc_html__( 'Email Address', 'omniscience-profiler' ),
				),
		


// URLs
			array(
				'id' => 'logo_url',
				'type' => 'text',
				'name' => esc_html__( 'Logo URL', 'omniscience-profiler' ),
			),
			array(
				'id' => 'logo_svgtag',
				'type' => 'text',
				'name' => esc_html__( 'Logo SVG', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'contact_url',
				'type' => 'url',
				'name' => esc_html__( 'Contact URL', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'blog_url',
				'type' => 'url',
				'name' => esc_html__( 'Blog URL', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'apply_url',
				'type' => 'url',
				'name' => esc_html__( 'Apply URL', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'jobs_url',
				'type' => 'url',
				'name' => esc_html__( 'Jobs URL', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'events_url',
				'type' => 'url',
				'name' => esc_html__( 'Events URL', 'omniscience-profiler' ),
			),
			array(
				'id' =>  'conference_url',
				'type' => 'url',
				'name' => esc_html__( 'Conference URL', 'omniscience-profiler' ),
			),
				array(
				'id' =>  'developers_url',
				'type' => 'url',
				'name' => esc_html__( 'Developers URL', 'omniscience-profiler' ),
			),
			
		),
	);

	return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'setProfileURL' );




function setProfileResearch( $meta_boxes ) { // this shows the box where the scrape and search results
	$prefix = '';

	$meta_boxes[] = array(
		'id' => 'profiler',
		'title' => esc_html__( 'PROFILE RESEARCH', 'omniscience-profiler' ),
		'post_types' => array('profile' ),
		'context' => 'advanced',
		'priority' => 'high',
		'autosave' => 'false',
		'fields' => array(
			array(
				'id' => $prefix . 'card',
				'type' => 'custom_html',
				 //'std'  => '<div class="alert alert-warning">This is a custom HTML content</div>',
				 'callback' => 'profile_menu',
			),
            array(
				'id' => $prefix . 'profile_results',
				'type' => 'custom_html',
				 //'std'  => '<div class="alert alert-warning">This is a custom HTML content</div>',
				 'callback' => 'profiler',
			),
			array(
				'id' => 'search_content',
				'type' => 'textarea',
				'name' => esc_html__( 'Saved Search', 'metabox-online-generator' ),
			),
			array(
				'id' => 'scraped_content',
				'type' => 'textarea',
				'name' => esc_html__( 'Saved Scrape', 'metabox-online-generator' ),
			),
			array(
				'id' => 'lang',
				'type' => 'text',
				'name' => esc_html__( 'Language', 'metabox-online-generator' ),
				'size' => 5,
			),
		),
	);

	return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'setProfileResearch' );

function getImg($src){
	@$_GET['addImg'] = $src; // the php way. 
	return addImageToLibrary();
	
}




function addImageToLibrary(){ // THIS ADDS AN IMAGE TO THE MEDIA LIBRARY FROM A SRC URL.
	global $post;
	$image_url = strtok(@$_GET['addImg'],"?");

	$upload_dir = wp_upload_dir();

	$image_data = file_get_contents( $image_url );

	$filename = basename( $image_url );

	if ( wp_mkdir_p( $upload_dir['path'] ) ) {
	$file = $upload_dir['path'] . '/' . $filename;
	}
	else {
	$file = $upload_dir['basedir'] . '/' . $filename;
	}

	file_put_contents( $file, $image_data );

	$wp_filetype = wp_check_filetype( $filename, null );

	$attachment = array(
		'post_mime_type' => $wp_filetype['type'],
		'post_title' => @$_GET['title'],
		'post_excerpt' => '',
		'post_content' => @$_GET['addImg'],
		'post_status' => 'inherit'
	);

	$attach_id = wp_insert_attachment( $attachment, $file );
	require_once( ABSPATH . 'wp-admin/includes/image.php' );
	$attach_data = wp_generate_attachment_metadata( $attach_id, $file );
	wp_update_attachment_metadata( $attach_id, $attach_data );
	update_post_meta($attach_id, '_wp_attachment_image_alt', @$_POST['new_image_alt'] );
	return wp_get_attachment_image_src($attach_id)[0];
}


function profile_events() {
	if(@$_GET['addImg']){

		addImageToLibrary($_GET['addImg']);
	}

	//THIS IS A HACK, needs to be done right. 
	//Gutternberg doesn't update the dom
	if(@$_GET['updateExcerpt']){
		 $my_post = array(
      'ID'           => @$_GET['POST'],
	  
      'post_excerpt' => json_decode($_GET['updateExcerpt']),
		);

		// Update the post into the database
		wp_update_post( $my_post );
		
	}
	if(@$_GET['updateContent']){

	
	}
	if(@$_GET['updateTitle']){

	
	}


}
add_action( 'admin_init', 'profile_events' );