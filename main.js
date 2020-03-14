var icon = '<svg class="sg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.31 251.89"><path d="M66.8,144.17c0-66.24,22.46-113.09,80.72-112.32,81.48,1.07,80.72,46.08,80.72,112.32,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.08-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68C61.47,146.07,66.8,149.07,66.8,144.17Z" transform="translate(-56.6 -25.84)" style="fill:#ffdfbf;fill-rule:evenodd"/><path d="M147.52,31.85C99.49,31.22,75.79,63,69,111.24c8.78-23.84,27.86-26,64.33-26.54,70.62-1.13,88.39,8.27,79.64,96.55-1.84,18.6-6.1,24.62-28.36,39.74-12.07,8.2,18.54-26.37-49.78-27-49.5-.43-30.06,36.41-40.06,29.44a81.88,81.88,0,0,1-20.28-20.73c12.89,40.76,40.76,69,73.08,69,37.3,0,68.69-37.59,77.95-88.67l2.77-38.89C228.24,77.93,229,32.91,147.52,31.85Z" transform="translate(-56.6 -25.84)" style="fill:#d0b57b;fill-rule:evenodd"/><path d="M146.13,31.84h1.39c81.48,1.07,80.72,46.08,80.72,112.33,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.08-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68-1.34-16.39,4-13.39,4-18.29,0-65.71,22.11-112.33,79.33-112.33m0-6h0c-29.39,0-51.65,11.54-66.18,34.3C67.3,80,60.86,108.06,60.8,143.68h0c-2.54,3.05-4.94,7-4,19.12.4,12.11,2.72,16.46,6.59,19.86,9.65,56,44.19,95.07,84.11,95.07,19.91,0,38.59-9.42,54-27.25,14.35-16.57,24.87-39.79,29.66-65.45l0,0c4.22-2.57,8.87-6.53,10.58-21.1l0-.2v-.2c.58-11.55-3.35-16.18-7.07-19.61l-.53-.5v-1c0-33,0-61.46-10.76-82.11-12-23-36.09-33.89-75.88-34.41Z" transform="translate(-56.6 -25.84)" style="fill:#303030"/><path d="M118.31,183.29s4.28,4.28,12.84,4S143.67,182,143.67,182s-3.62,8.23-11.53,8.89S118.31,183.29,118.31,183.29Z" transform="translate(-56.6 -25.84)" style="fill:#bfa78f;fill-rule:evenodd"/><ellipse cx="44.24" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><ellipse cx="104.54" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><circle class="eye" id="eye-left" cx="35.9" cy="121.66" r="10.5" style="fill:#303030"/><circle class="eye" cx="94.57" cy="121.66" r="10.5" style="fill:#303030"/><path d="M140.74,236.63h0c-16.92,0-29.43-4.38-29.43-18.42h0c0-4.22,4.12-7.64,9.21-7.64H160c3.6,0,6.53,2.42,6.53,5.42v7.23C166.55,234.48,154.32,236.63,140.74,236.63Z" transform="translate(-56.6 -25.84)" style="fill:#2d251d;fill-rule:evenodd"/><path d="M160,210.57h-39.5c-5.09,0-9.21,3.42-9.21,7.64,0,.07,0,.15,0,.22,7.57,2.29,17.6,3.2,29,3.2h0c9.87,0,19.24-.52,26.25-2.36V216C166.55,213,163.62,210.57,160,210.57Z" transform="translate(-56.6 -25.84)" style="fill:#fff"/></svg>';

document.head.insertAdjacentHTML('beforeend', '<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>');

var a = document.createElement('a');
a.setAttribute('href', 'https://twitter.com/steeevg');
a.setAttribute('target', '_blank');
a.innerHTML = icon;

//  document.body.appendChild(a);





















var increment = 'vw';
oriented = 'horizontal', // BECAUSE iOS doesn't like the variable orientation

    orientation_last = '',
    slider_orientation = 'vertical', // 
    dimension = 'wide',
    maxed = false,
    maxed_last = false,
    maxed_changed = false,
    slider_menu = 'wheel-menu',
    _w = jQuery(window).width(),
    _h = jQuery(window).height(),
    aspect = _w / _h,

    current_notch = 0
var wheel_nav_params = {}
jQuery(document).ready(function() {


    jQuery(".wheelnav-outer-nav-title").css("display:none;");
    console.log("ready")
    reposition_screen()


})
jQuery(window).resize(function() {
    _w = jQuery(window).width()
    _h = jQuery(window).height()

    if (_w > _h) {
        increment = 'vh'
        oriented = 'horizontal'
            // orientation_last = 'horizontal'
    } else {
        increment = 'vw'
        oriented = 'vertical'
            //orientation_last = 'vertical'
    }
    aspect = _w / _h
    reposition_screen()

})

function initSite() { // called from the menus callback
    //console.log("load",data_loaded.length,data_score)
    if (menus == undefined || media == undefined || posts == undefined) {
        window.setTimeout(initSite(), 100);
    }




    var default_slug = 'about'
        //console.log("init",menus,location.hash)
    if (location.hash == '#undefined' || location.hash == '') {
        //console.log('hash undefined',location.hash)

        default_slug = 'about'
        location.hash = '#about'
            //console.log('hash empty or undefined', location.hash)
    } else {
        default_slug = location.hash.replace("#", "");

        // console.log("set by slugHash",location.hash, default_slug, menus['wheel-menu'].slug_nav[default_slug])


    }
    // console.log("slug=" + default_slug, menus['wheel-menu'].slug_nav)
    setSocial()

    var notch = menus['wheel-menu'].slug_nav[default_slug]
    setSlider()

    setSlides('wheel-menu')
    setSlides('projects')

    // console.log("menu","notch="+notch)
    //  jQuery(menu_config[m].location).html(items)
    setSlideShow('wheel-menu'); // creates slides for the slick carousel
    makeWheelNav("outer-nav", menus['wheel-menu'].menu_levels)
    setSliderNotch(notch)

    initWebGLProgram()

    //  initMatrix();
    //console.log(menus)
}

function setWheelNavParams() {
    wheel_nav_params = {
        'maxPercent': 1,
        'min': 0.91,
        'max': 1,
        'sel_min': 0.91,
        'sel_max': 1,
    }

    if (maxed == true) {
        wheel_nav_params = {
            'maxPercent': 1,
            'min': 0.85,
            'max': 1,
            'sel_min': 0.85,
            'sel_max': 1,
        }

    }
    //console.log("maxed="+maxed, wheel_nav_params)




}



function positionElements() { // manages classes for sizes, orientation and aspect

    var elements = ["#main", "header", "footer", "#related", "#screen"]

    slider_orientation: 'vertical'
    dimension = 'wide'



    if (_w < _h) { // sets orientation

        oriented = 'vertical'

        slider_orientation = 'horizontal'

    } else {

        oriented = 'horizontal'
        slider_orientation = 'vertical'

    }

    if (orientation_last != oriented) { // this triggers on orientation change
        orientation_last = oriented;
        //    console.log("orientation changed to "+oriented,orientation_last)
        setSlider()
    }



    if (aspect <= 0.5) {
        dimension = "super-narrow"
    } else if (aspect > 0.5 && aspect <= 0.75) {
        dimension = "narrow"
    } else if (aspect > 0.75 && aspect <= 0.9) {
        dimension = "semi-narrow"
    } else if (aspect > 0.9 && aspect <= 1.1) {
        dimension = "square"
    } else if (aspect > 1.1 && aspect <= 1.25) {
        dimension = "semi-wide"
    } else if (aspect > 1.25 && aspect <= 1.5) {
        dimension = "wide"
    } else if (aspect > 1.5 && aspect <= 2) {
        dimension = "super-wide"
    } else if (aspect > 2) {
        dimension = "extra-super-wide"
    }

    for (e = 0; e < elements.length; e++) {
        //  console.log("set orientation",elements[e],oriented)
        jQuery(elements[e]).removeClass()

        jQuery(elements[e]).addClass(dimension)
        jQuery(elements[e]).addClass(oriented)


        if (maxed == true) {
            jQuery(elements[e]).addClass('maxed')

        } else {

        }
    }
    //console.log("slider-wrap",orientation,slider_orientation)

    jQuery('#slider-wrap').removeClass()
    jQuery('#slider-wrap').addClass(slider_orientation)
    jQuery('#slider-wrap').addClass(dimension)

}


function positionProjector() {
    var top = 50,
        width = "20vw",
        height = "20vw";

    if (aspect > 1.15 && aspect < 1.5) {
        top = ((aspect - 1) * 100) + "%";
        width = "10vw"
        height = "10vw"
            //fontSize = 1.2
    } else if (aspect > 0.50 && aspect <= 1.15) {
        top = "20%"
        width = "15vw"
        height = "15vw"
            //fontSize = 1
    } else if (aspect >= 1.5) {
        top = "50%";
        width = '20vw'
        height = '20vw'
            //fontSize = 1.5
    }


    //jQuery("#featured-image-header").css("fontSize", fontSize + 'em')
    //jQuery("#featured-image-footer").css("fontSize", fontSize * 0.8 + "em")



}




function reposition_screen() {



    var width = '100vw'
    var height = '100vh'
    var top = 20
    var bottom = 0;
    var left = 0;
    var margin_top = 0
    var margin_left = 0;
    var inc = 'vh'

    if (aspect <= 0.5) {
        width = _w + "px"
        height = _w * 2 + "px"
        top = 50
        left = 0
        margin_top = _w * -1
        margin_left = 0
        bottom = _w
        inc = 'px'
    } else if (aspect >= 2) {
        width = _h * 2 + 'px'
        height = _h + 'px'
        top = 0
        left = 50
        margin_top = 0
        bottom = 0
        margin_left = _h * -1
        inc = 'px'
    }
    //jQuery('header').css('width',  width)
    //jQuery('header').css('height', height)
    //  jQuery('header').css('top', top + "%")
    //  jQuery('header').css('left', left + '%')
    //  jQuery('header').css('marginTop', margin_top)
    //jQuery('header').css('marginLeft', margin_left)

    //  isMaxed()

    jQuery('#main').css('width', width)
    jQuery('#main').css('height', height)
    jQuery('#main').css('top', top + "%")
    jQuery('#main').css('left', left + "%")
    jQuery('#main').css('marginTop', margin_top + inc)
    jQuery('#main').css('marginLeft', margin_left + inc)




    //console.log("aspect=" + aspect, "_w" + _w, "_h" + _h, "w=" + width, "h=" + height, "t=" + top, "l=" + left, "mt" + margin_top, "ml=" + margin_left);



    positionProjector()
    positionElements();

    jQuery("#slider").css("visibility", "visible")

    var calibrate_elements = [{ // default
            id: ".phi-centered",
            size: 61.8, //use number, it needs to be divided
            increment: "vw"
        },
        {
            id: "#outer-ring",
            size: 80, //use number, it needs to be divided
            increment: "vw"
        },
        {
            id: "#inner-ring",
            size: 72, //use number, it needs to be divided
            increment: "vw"
        },
        {
            id: "#inner-subring",
            size: 65, //use number, it needs to be divided
            increment: "vw"
        }

    ]



    jQuery('#stars').css('height', '100vh')
    jQuery('#stars').css('width', '100vw')
    jQuery('#stars').css('top', 0)
    jQuery('#stars').css('left', 0)


}

function isMaxed() { // FIX - this is still problematic and has been backed out for now
    maxed_changed = false
    if ((aspect < 0.75 && _w < 768) || (aspect > 1.5 && _h < 640)) { // MAX OUT the wheel size below 768 and wide or narrow 
        maxed = true;

        if (maxed_last == false) {



            //resetWheel();
            maxed_last = true;
            maxed_changed = true
        }



    } else {

        maxed = false;
        if (maxed_last == true) {


            //resetWheel();

            maxed_last = false
            maxed_changed = true

        }


    }
    if (maxed_changed == true) {

        //console.log("maxed now =", maxed)
        if (wheels["outer-nav"] != undefined) {
            wheels["outer-nav"].raphael.remove();

            popAWheelie('outer-nav')

            makeWheelNav("outer-nav", menus['wheel-menu'].menu_levels)
        }
    }
}

function resetWheel() {
    setWheelNavParams();
    //console.log("resetWheel")

    wheels["outer-nav"].removeWheel()
    if (wheels["inner-nav"] != undefined) {
        wheels["inner-nav"].removeWheel()
    }
    if (wheels["inner-subnav"] != undefined) {
        wheels["inner-subnav"].removeWheel()
    }


}


function calibrateCircle(id, size, increment) {
    /*
  console.log("calibrate",id,size,increment)
 
   jQuery(id).css('width', size + increment)
   jQuery(id).css('height', size + increment)
   jQuery(id).css('margin-left', ((size / 2) * -1) + increment)
   jQuery(id).css('margin-top', ((size / 2) * -1) + increment)
*/

}

    var photoCount = 0;
    var pieceCount = 0;
    var onPhoto = 0;
    var pieceCompleteCount = 0;
 //this is the interval that needs to be stoped.

    var transitions = ['center', 'random']
    var transitionType = 1;
    
    var viewerDest = null
    //console.log("circleviwer loaded")
    function circleViewer(dest) {
        
        photoCount = state.screen_images.length
        pieceCount = state.screen_images.length
        //console.log("CIRCLE VIEWER PRELOAD", dest, state.screen_images, pieceCount)
        
        viewerDest = dest
        for (var i = 0; i < state.screen_images.length; i++) {

            jQuery('#preload').append('<img src="' + state.screen_images[i].src + '">')
        };
        jQuery(window).load(function(){
           

        })
        loadCircleViewer(dest);
    }

    function loadCircleViewer(dest, screen_images) {
        jQuery(dest+'-container').html('');
        for (var i = 0; i < state.screen_images.length; i++) {
            var newWidth = (((100 - (100 / pieceCount) * i)) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
            var newBackgroundSize = 100 + (100 - newWidth) / newWidth * 100; //100 + (100 - newWidth);
            var newTop = ((100 / pieceCount) * i) / 2;

            jQuery(dest+'-container').append('<div class="section" id="piece' + i + '" style="top: ' + newTop + '%; left: ' + newTop + '%; width: ' + newWidth + '%; height: ' + newWidth + '%; background-size:' + newBackgroundSize + '%; background-image: url(' + state.screen_images[i].src + ')"></div>')
        };
        //console.log("IMAGES", dest, state.screen_images)
        nextSlide();
    }

    function nextSlide() {
        // console.log("onphonto", onPhoto)
        clearInterval(state.circle_delay);
        pieceCompleteCount = 0;
        ++onPhoto;
        if (onPhoto >= photoCount) {
            onPhoto = 0;
        }
        
    //console.log("next", state.screen_images)
        for (var i = 0; i < state.screen_images.length; i++) {
           // console.log("nextloop ", "i=" + i, state.screen_images[i])
            var spinDelay = 0;
            var spin = 360;
            var piece = jQuery('#piece' + i);
            var image = state.screen_images[onPhoto]
            switch (transitions[transitionType]) {
                case 'random':
                    spinDelay = Math.random() / 2;
                    spin = Math.random() * 360;
                    break;
                case 'center':
                    spinDelay = (pieceCount - i) / 10;
                    spin = 181;
                    break;
            }

            TweenMax.to(piece, 1, {
                delay: spinDelay,
                directionalRotation: spin + '_long',
                onComplete: completeRotation,
                onCompleteParams: [piece,image],
                ease: Power4.easeIn
            })
        }
    }

    function completeRotation(piece,image) {
        //console.log("piece", piece, image.src)
        piece.css('background-image', 'url('+image.src+')');
        TweenMax.to(piece, 2, {
            directionalRotation: '0_short',
            onComplete: finishPieceanimation,
            ease: Elastic.easeOut
        })
    }

    function finishPieceanimation() {
        ++pieceCompleteCount;
        if (pieceCompleteCount == pieceCount) {
            state.circle_delay = setInterval(nextSlide, 5000);
        }
    }

function setSlideContent(slide, id) {
    //console.log("setSlideContent", slide, id )
    if (posts[id] != undefined) {
        var title_length = posts[id].title.length,
        content_length = posts[id].content.length
        
        jQuery("#slide" + id + " h2").html(posts[id].title)
        console.log("title="+title_length,"content"+content_length)

      jQuery("#slide" + id + " section div.content").html(posts[id].content)
      $carousel.slick('slickGoTo', slide);
    } else {
      //console.log("post undefined", slide, id, posts)
    }
  }
  
  
  
  
  
  function setText(){
    if (typeof languages !== 'undefined') { // wpml present
  
      if(state.language == languages.default){//use defaults
        page_title = posts[state.post_id].title + " | " + site_title;
      } else { // get data. 
  
        page_title = retreiveML('posts',"title",state.post_id,state.language)
        //console.log("new page title " + page_title)
  
      }
  
    } else { // wpml not present, use default
      
  
      page_title = posts[state.post_id].title + " | " + site_title;
      
    }
    //set variables
    document.title = page_title;
  }
  
  
  
  
  function setContent(dest, object_id, object) {
    state.slide = posts_nav[object_id] //
    state.object_id = posts_nav[object_id]
   

    jQuery('#projects-content').fadeOut();
    jQuery('#project-info').fadeOut();
  
    jQuery('#wheel-menu-content').fadeIn();
    
    //console.log("setContent",dest,object_id,object,posts[object_id])
    if (posts[object_id] != undefined) {
      //console.log("selected post", posts[object_id])
      state.post_id = object_id;
      setText();
      
  
      setImage(object_id, //post id (ideally)
        "featured", //destination = id of empty tag and template waiting for its goodness
        'featured_media', //the attr of the objectg that we're passing, in this case, this is featured media
        "flip" // the type of effect that awaits
      );
  
     
      var video_path = uploads_path + "" + posts[object_id].featured_video.video_path;
  
      
      setVideo(posts[object_id].featured_video.video_id,"#bg-video")
      setRelated(posts[object_id])
      if (posts[object_id].screen_images.length >0){
        
        setScreenImages(posts[object_id].screen_images,"#screen-image","circleViewer");//array of images, destination, imagedisplaycallback
      } else {
        jQuery('#screen-image-container').html('')
      }
  //   console.log("tags", posts[object_id].tags)
  
    }
  
    setSlideContent(dest, object_id)
  
    /*
          for category wheels
          if(cat_children.length>0){
            for(c=0;c<cat_children.length;c++){
              
              data.push({
                    id : categories[cat_children[c]].id,
                    title : categories[cat_children[c]].name,
                    type: "category",
                    children: categories[cat_children[c]].children
                }
              )
              
            }
            
  
            makeWheelNav(dest, data, inner_subnav_params)
            //
  
          
  
        } else {
          
        }*/
  
  }
/*! flip - v1.1.2 - 2016-10-20
 * https://github.com/nnattawat/flip
 * Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */
(function ($) {
    /*
     * Private attributes and method
     */

    // Function from David Walsh: http://davidwalsh.name/css-animation-callback licensed with http://opensource.org/licenses/MIT
    var whichTransitionEvent = function () {
        var t, el = document.createElement("fakeelement"),
            transitions = {
                "transition": "transitionend",
                "OTransition": "oTransitionEnd",
                "MozTransition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };

    /*
     * Model declaration
     */
    var Flip = function ($el, options, callback) {
        //console.log('flip',$el,options,callback)
        // Define default setting
        this.setting = {
            axis: "y",
            reverse: false,
            trigger: "click",
            speed: 500,
            forceHeight: false,
            forceWidth: false,
            autoSize: true,
            front: '.front',
            back: '.back'
        };

        this.setting = $.extend(this.setting, options);

        if (typeof options.axis === 'string' && (options.axis.toLowerCase() === 'x' || options.axis.toLowerCase() === 'y')) {
            this.setting.axis = options.axis.toLowerCase();
        }

        if (typeof options.reverse === "boolean") {
            this.setting.reverse = options.reverse;
        }

        if (typeof options.trigger === 'string') {
            this.setting.trigger = options.trigger.toLowerCase();
        }

        var speed = parseInt(options.speed);
        if (!isNaN(speed)) {
            this.setting.speed = speed;
        }

        if (typeof options.forceHeight === "boolean") {
            this.setting.forceHeight = options.forceHeight;
        }

        if (typeof options.forceWidth === "boolean") {
            this.setting.forceWidth = options.forceWidth;
        }

        if (typeof options.autoSize === "boolean") {
            this.setting.autoSize = options.autoSize;
        }

        if (typeof options.front === 'string' || options.front instanceof $) {
            this.setting.front = options.front;
        }

        if (typeof options.back === 'string' || options.back instanceof $) {
            this.setting.back = options.back;
        }

        // Other attributes
        this.element = $el;
        this.frontElement = this.getFrontElement();
        this.backElement = this.getBackElement();
        this.isFlipped = false;

        this.init(callback);
    };

    /*
     * Public methods
     */
    $.extend(Flip.prototype, {

        flipDone: function (callback) {
            var self = this;
            // Providing a nicely wrapped up callback because transform is essentially async
            self.element.one(whichTransitionEvent(), function () {
                self.element.trigger('flip:done');
                if (typeof callback === 'function') {
                    callback.call(self.element);
                }
            });
        },

        flip: function (callback) {
            if (this.isFlipped) {
                return;
            }

            this.isFlipped = true;

            var rotateAxis = "rotate" + this.setting.axis;
            this.frontElement.css({
                transform: rotateAxis + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
                "z-index": "0"
            });

            this.backElement.css({
                transform: rotateAxis + "(0deg)",
                "z-index": "1"
            });
            this.flipDone(callback);
        },

        unflip: function (callback) {
            if (!this.isFlipped) {
                return;
            }

            this.isFlipped = false;

            var rotateAxis = "rotate" + this.setting.axis;
            this.frontElement.css({
                transform: rotateAxis + "(0deg)",
                "z-index": "1"
            });

            this.backElement.css({
                transform: rotateAxis + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
                "z-index": "0"
            });
            this.flipDone(callback);
        },

        getFrontElement: function () {
            if (this.setting.front instanceof $) {
                return this.setting.front;
            } else {
                return this.element.find(this.setting.front);
            }
        },

        getBackElement: function () {
            if (this.setting.back instanceof $) {
                return this.setting.back;
            } else {
                return this.element.find(this.setting.back);
            }
        },

        init: function (callback) {
            var self = this;

            var faces = self.frontElement.add(self.backElement);
            var rotateAxis = "rotate" + self.setting.axis;
            var perspective = self.element["outer" + (rotateAxis === "rotatex" ? "Height" : "Width")]() * 2;
            var elementCss = {
                'perspective': perspective,
                'position': 'relative'
            };
            var backElementCss = {
                "transform": rotateAxis + "(" + (self.setting.reverse ? "180deg" : "-180deg") + ")",
                "z-index": "0",
                "position": "relative"
            };
            var faceElementCss = {
                "backface-visibility": "hidden",
                "transform-style": "preserve-3d",
                "position": "absolute",
                "z-index": "1"
            };

            if (self.setting.forceHeight) {
                faces.outerHeight(self.element.height());
            } else if (self.setting.autoSize) {
                faceElementCss.height = '100%';
            }

            if (self.setting.forceWidth) {
                faces.outerWidth(self.element.width());
            } else if (self.setting.autoSize) {
                faceElementCss.width = '100%';
            }

            // Back face always visible on Chrome #39
            if ((window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window) {
                //Blink Engine, add preserve-3d to self.element
                elementCss["-webkit-transform-style"] = "preserve-3d";
            }


            faces.css(faceElementCss).find('*').css({
                "backface-visibility": "hidden"
            });

            self.element.css(elementCss);
            self.backElement.css(backElementCss);

            // #39
            // not forcing width/height may cause an initial flip to show up on
            // page load when we apply the style to reverse the backface...
            // To prevent self we first apply the basic styles and then give the
            // browser a moment to apply them. Only afterwards do we add the transition.
            setTimeout(function () {
                // By now the browser should have applied the styles, so the transition
                // will only affect subsequent flips.
                var speedInSec = self.setting.speed / 1000 || 0.5;
                faces.css({
                    "transition": "all " + speedInSec + "s ease-out"
                });

                // This allows flip to be called for setup with only a callback (default settings)
                if (typeof callback === 'function') {
                    callback.call(self.element);
                }

                // While this used to work with a setTimeout of zero, at some point that became
                // unstable and the initial flip returned. The reason for this is unknown but we
                // will temporarily use a short delay of 20 to mitigate this issue.
            }, 20);

            self.attachEvents();
        },

        clickHandler: function (event) {
            if (!event) {
                event = window.event;
            }
            if (this.element.find($(event.target).closest('button, a, input[type="submit"]')).length) {
                return;
            }

            if (this.isFlipped) {
                this.unflip();
            } else {
                this.flip();
            }
        },

        hoverHandler: function () {
            var self = this;
            self.element.off('mouseleave.flip');

            self.flip();

            setTimeout(function () {
                self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
                if (!self.element.is(":hover")) {
                    self.unflip();
                }
            }, (self.setting.speed + 150));
        },

        attachEvents: function () {
            var self = this;
            if (self.setting.trigger === "click") {
                self.element.on($.fn.tap ? "tap.flip" : "click.flip", $.proxy(self.clickHandler, self));
            } else if (self.setting.trigger === "hover") {
                self.element.on('mouseenter.flip', $.proxy(self.hoverHandler, self));
                self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
            }
        },

        flipChanged: function (callback) {
            this.element.trigger('flip:change');
            if (typeof callback === 'function') {
                callback.call(this.element);
            }
        },

        changeSettings: function (options, callback) {
            var self = this;
            var changeNeeded = false;

            if (options.axis !== undefined && self.setting.axis !== options.axis.toLowerCase()) {
                self.setting.axis = options.axis.toLowerCase();
                changeNeeded = true;
            }

            if (options.reverse !== undefined && self.setting.reverse !== options.reverse) {
                self.setting.reverse = options.reverse;
                changeNeeded = true;
            }

            if (changeNeeded) {
                var faces = self.frontElement.add(self.backElement);
                var savedTrans = faces.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);

                faces.css({
                    transition: "none"
                });

                // This sets up the first flip in the new direction automatically
                var rotateAxis = "rotate" + self.setting.axis;

                if (self.isFlipped) {
                    self.frontElement.css({
                        transform: rotateAxis + (self.setting.reverse ? "(-180deg)" : "(180deg)"),
                        "z-index": "0"
                    });
                } else {
                    self.backElement.css({
                        transform: rotateAxis + (self.setting.reverse ? "(180deg)" : "(-180deg)"),
                        "z-index": "0"
                    });
                }
                // Providing a nicely wrapped up callback because transform is essentially async
                setTimeout(function () {
                    faces.css(savedTrans);
                    self.flipChanged(callback);
                }, 0);
            } else {
                // If we didnt have to set the axis we can just call back.
                self.flipChanged(callback);
            }
        }

    });

    /*
     * jQuery collection methods
     */
    $.fn.flip = function (options, callback) {
        if (typeof options === 'function') {
            callback = options;
        }

        if (typeof options === "string" || typeof options === "boolean") {
            this.each(function () {
                var flip = $(this).data('flip-model');

                if (options === "toggle") {
                    options = !flip.isFlipped;
                }

                if (options) {
                    flip.flip(callback);
                } else {
                    flip.unflip(callback);
                }
            });
        } else {
            this.each(function () {
                if ($(this).data('flip-model')) { // The element has been initiated, all we have to do is change applicable settings
                    var flip = $(this).data('flip-model');

                    if (options && (options.axis !== undefined || options.reverse !== undefined)) {
                        flip.changeSettings(options, callback);
                    }
                } else { // Init
                    $(this).data('flip-model', new Flip($(this), (options || {}), callback));
                }
            });
        }

        return this;
    };

}(jQuery));
var width = 300,
    height = 300,
    speed = 1e-2,
    start = Date.now();

var sphere = { type: "Sphere" };

var projection = d3.geo.orthographic()
    .scale(height / 2.1)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(.5);

var graticule = d3.geo.graticule();

var canvas = d3.select("#globe").append("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas.node().getContext("2d");

var path = d3.geo.path()
    .projection(projection)
    .context(context);

var hiddenCanvas = d3.select("body").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "hiddenCanvas");

var hiddenContext = hiddenCanvas.node().getContext("2d");

var hiddenProjection = d3.geo.equirectangular()
    .translate([width / 2, height / 2])
    .scale(width / 7);

var hiddenPath = d3.geo.path()
    .projection(hiddenProjection)
    .context(hiddenContext);

// d3.json("//bl.ocks.org/syntagmatic/raw/6645345/world-110m.json", function(error, topo) {

var topo = {
    "type": "Topology",
    "objects": {
        "land": {
            "type": "MultiPolygon",
            "arcs": [
                [
                    [0]
                ],
                [
                    [1]
                ],
                [
                    [2]
                ],
                [
                    [3]
                ],
                [
                    [4]
                ],
                [
                    [5]
                ],
                [
                    [6]
                ],
                [
                    [7, 8, 9]
                ],
                [
                    [10, 11, 12, 13]
                ],
                [
                    [14]
                ],
                [
                    [15]
                ],
                [
                    [16]
                ],
                [
                    [17]
                ],
                [
                    [18]
                ],
                [
                    [19]
                ],
                [
                    [20]
                ],
                [
                    [21]
                ],
                [
                    [22]
                ],
                [
                    [23]
                ],
                [
                    [24]
                ],
                [
                    [25]
                ],
                [
                    [26]
                ],
                [
                    [27]
                ],
                [
                    [28]
                ],
                [
                    [29]
                ],
                [
                    [30]
                ],
                [
                    [31, 32]
                ],
                [
                    [33]
                ],
                [
                    [34]
                ],
                [
                    [35]
                ],
                [
                    [36]
                ],
                [
                    [37]
                ],
                [
                    [38]
                ],
                [
                    [39]
                ],
                [
                    [40]
                ],
                [
                    [41]
                ],
                [
                    [42]
                ],
                [
                    [43]
                ],
                [
                    [44, 45]
                ],
                [
                    [46]
                ],
                [
                    [47]
                ],
                [
                    [48]
                ],
                [
                    [49, 50, 51, 52]
                ],
                [
                    [53]
                ],
                [
                    [54]
                ],
                [
                    [55]
                ],
                [
                    [56]
                ],
                [
                    [57]
                ],
                [
                    [58]
                ],
                [
                    [59]
                ],
                [
                    [60]
                ],
                [
                    [61]
                ],
                [
                    [62]
                ],
                [
                    [63]
                ],
                [
                    [64, 65]
                ],
                [
                    [66]
                ],
                [
                    [67]
                ],
                [
                    [68]
                ],
                [
                    [69]
                ],
                [
                    [70]
                ],
                [
                    [71]
                ],
                [
                    [72]
                ],
                [
                    [73]
                ],
                [
                    [74]
                ],
                [
                    [75]
                ],
                [
                    [76]
                ],
                [
                    [77]
                ],
                [
                    [78, 79]
                ],
                [
                    [80]
                ],
                [
                    [81]
                ],
                [
                    [82]
                ],
                [
                    [83]
                ],
                [
                    [84]
                ],
                [
                    [85]
                ],
                [
                    [86]
                ],
                [
                    [87]
                ],
                [
                    [88]
                ],
                [
                    [89]
                ],
                [
                    [90]
                ],
                [
                    [91]
                ],
                [
                    [92, 93]
                ],
                [
                    [94]
                ],
                [
                    [95]
                ],
                [
                    [96, 97, 98, 99, 100, 101, 102, 103]
                ],
                [
                    [104]
                ],
                [
                    [105]
                ],
                [
                    [106]
                ],
                [
                    [107]
                ],
                [
                    [108]
                ],
                [
                    [109]
                ],
                [
                    [110]
                ],
                [
                    [111]
                ],
                [
                    [112]
                ],
                [
                    [113]
                ],
                [
                    [114]
                ],
                [
                    [115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232]
                ],
                [
                    [233, 234]
                ],
                [
                    [235]
                ],
                [
                    [236]
                ],
                [
                    [237]
                ],
                [
                    [238]
                ],
                [
                    [239]
                ],
                [
                    [240]
                ],
                [
                    [241, 242, 243, 244]
                ],
                [
                    [245]
                ],
                [
                    [246]
                ],
                [
                    [247]
                ],
                [
                    [248]
                ],
                [
                    [249]
                ],
                [
                    [250]
                ],
                [
                    [251]
                ],
                [
                    [252]
                ],
                [
                    [253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491],
                    [492, 493, 494, 495, 496, 497, 498]
                ],
                [
                    [499]
                ],
                [
                    [500]
                ],
                [
                    [501]
                ],
                [
                    [502]
                ],
                [
                    [503]
                ],
                [
                    [504]
                ],
                [
                    [505]
                ],
                [
                    [506]
                ],
                [
                    [507]
                ],
                [
                    [508]
                ],
                [
                    [509]
                ],
                [
                    [510]
                ],
                [
                    [511]
                ],
                [
                    [512]
                ]
            ]
        },
        "countries": {
            "type": "GeometryCollection",
            "geometries": [{
                "type": "Polygon",
                "id": 4,
                "arcs": [
                    [513, 514, 515, 516, 517, 518]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 24,
                "arcs": [
                    [
                        [519, 520, 363, 521]
                    ],
                    [
                        [365, 522, 523]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 8,
                "arcs": [
                    [524, 525, 426, 526, 527, 528]
                ]
            }, {
                "type": "Polygon",
                "id": 784,
                "arcs": [
                    [323, 529, 325, 530, 531]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 32,
                "arcs": [
                    [
                        [532, 13]
                    ],
                    [
                        [533, 534, 535, 175, 536, 177, 537, 538]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 51,
                "arcs": [
                    [539, 540, 541, 542, 543]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 10,
                "arcs": [
                    [
                        [0]
                    ],
                    [
                        [1]
                    ],
                    [
                        [2]
                    ],
                    [
                        [3]
                    ],
                    [
                        [4]
                    ],
                    [
                        [5]
                    ],
                    [
                        [6]
                    ],
                    [
                        [544, 545, 9]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 260,
                "arcs": [
                    [15]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 36,
                "arcs": [
                    [
                        [16]
                    ],
                    [
                        [26]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 40,
                "arcs": [
                    [546, 547, 548, 549, 550, 551, 552]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 31,
                "arcs": [
                    [
                        [553, -543]
                    ],
                    [
                        [498, 554, 493, 555, -541, 556, 557]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 108,
                "arcs": [
                    [558, 559, 560]
                ]
            }, {
                "type": "Polygon",
                "id": 56,
                "arcs": [
                    [561, 562, 563, 564, 449]
                ]
            }, {
                "type": "Polygon",
                "id": 204,
                "arcs": [
                    [377, 565, 566, 567, 568]
                ]
            }, {
                "type": "Polygon",
                "id": 854,
                "arcs": [
                    [569, 570, 571, -567, 572, 573]
                ]
            }, {
                "type": "Polygon",
                "id": 50,
                "arcs": [
                    [574, 575, 300, 576]
                ]
            }, {
                "type": "Polygon",
                "id": 100,
                "arcs": [
                    [577, 416, 578, 579, 580, 581]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 44,
                "arcs": [
                    [
                        [73]
                    ],
                    [
                        [75]
                    ],
                    [
                        [76]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 70,
                "arcs": [
                    [582, 583, 584]
                ]
            }, {
                "type": "Polygon",
                "id": 112,
                "arcs": [
                    [585, 586, 587, 588, 589]
                ]
            }, {
                "type": "Polygon",
                "id": 84,
                "arcs": [
                    [590, 154, 591]
                ]
            }, {
                "type": "Polygon",
                "id": 68,
                "arcs": [
                    [592, 593, 594, 595, -539]
                ]
            }, {
                "type": "Polygon",
                "id": 76,
                "arcs": [
                    [-535, 596, -595, 597, 598, 599, 600, 601, 602, 173, 603]
                ]
            }, {
                "type": "Polygon",
                "id": 96,
                "arcs": [
                    [50, 604]
                ]
            }, {
                "type": "Polygon",
                "id": 64,
                "arcs": [
                    [605, 606]
                ]
            }, {
                "type": "Polygon",
                "id": 72,
                "arcs": [
                    [607, 608, 609, 610]
                ]
            }, {
                "type": "Polygon",
                "id": 140,
                "arcs": [
                    [611, 612, 613, 614, 615, 616, 617]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 124,
                "arcs": [
                    [
                        [86]
                    ],
                    [
                        [87]
                    ],
                    [
                        [88]
                    ],
                    [
                        [89]
                    ],
                    [
                        [90]
                    ],
                    [
                        [105]
                    ],
                    [
                        [106]
                    ],
                    [
                        [108]
                    ],
                    [
                        [110]
                    ],
                    [
                        [112]
                    ],
                    [
                        [618, 116, 619, 118, 620, 120, 621, 122, 622, 124, 623, 126, 624, 210, 625, 212, 626, 226, 627, 228, 628, 230, 629, 232]
                    ],
                    [
                        [630, 234]
                    ],
                    [
                        [235]
                    ],
                    [
                        [236]
                    ],
                    [
                        [237]
                    ],
                    [
                        [238]
                    ],
                    [
                        [240]
                    ],
                    [
                        [241, 631, 243, 632]
                    ],
                    [
                        [246]
                    ],
                    [
                        [248]
                    ],
                    [
                        [249]
                    ],
                    [
                        [251]
                    ],
                    [
                        [252]
                    ],
                    [
                        [499]
                    ],
                    [
                        [500]
                    ],
                    [
                        [502]
                    ],
                    [
                        [503]
                    ],
                    [
                        [504]
                    ],
                    [
                        [510]
                    ],
                    [
                        [511]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 756,
                "arcs": [
                    [-550, 633, 634, 635]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 152,
                "arcs": [
                    [
                        [-533, 10, 636, 12]
                    ],
                    [
                        [-538, 178, 637, 180, 638, -593]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 156,
                "arcs": [
                    [
                        [66]
                    ],
                    [
                        [639, 285, 640, 287, 641, 289, 642, 291, 643, 644, 645, 646, 647, -607, 648, 649, 650, 651, -517, 652, 653, 654, 655, 656, 657]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 384,
                "arcs": [
                    [380, 658, 659, 660, -570, 661]
                ]
            }, {
                "type": "Polygon",
                "id": 120,
                "arcs": [
                    [662, 663, 664, 370, 665, 666, 667, 668, -618, 669]
                ]
            }, {
                "type": "Polygon",
                "id": 180,
                "arcs": [
                    [670, 671, -559, 672, 673, 674, 675, -522, 364, -524, 676, -616, 677]
                ]
            }, {
                "type": "Polygon",
                "id": 178,
                "arcs": [
                    [-523, 366, 678, -670, -617, -677]
                ]
            }, {
                "type": "Polygon",
                "id": 170,
                "arcs": [
                    [679, 183, 680, 164, 681, -599, 682]
                ]
            }, {
                "type": "Polygon",
                "id": 188,
                "arcs": [
                    [187, 683, 160, 684]
                ]
            }, {
                "type": "Polygon",
                "id": 192,
                "arcs": [
                    [72]
                ]
            }, {
                "type": "Polygon",
                "id": -99,
                "arcs": [
                    [79, 685]
                ]
            }, {
                "type": "Polygon",
                "id": 196,
                "arcs": [
                    [78, -686]
                ]
            }, {
                "type": "Polygon",
                "id": 203,
                "arcs": [
                    [-552, 686, 687, 688]
                ]
            }, {
                "type": "Polygon",
                "id": 276,
                "arcs": [
                    [457, 689, -687, -551, -636, 690, 691, -563, 692, 453, 693]
                ]
            }, {
                "type": "Polygon",
                "id": 262,
                "arcs": [
                    [348, 694, 695, 696]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 208,
                "arcs": [
                    [
                        [94]
                    ],
                    [
                        [-694, 454, 697, 456]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 214,
                "arcs": [
                    [64, 698]
                ]
            }, {
                "type": "Polygon",
                "id": 12,
                "arcs": [
                    [699, 700, 701, 702, 703, 396, 704, 705]
                ]
            }, {
                "type": "Polygon",
                "id": 218,
                "arcs": [
                    [182, -680, 706]
                ]
            }, {
                "type": "Polygon",
                "id": 818,
                "arcs": [
                    [344, 707, 708, 402, 709]
                ]
            }, {
                "type": "Polygon",
                "id": 232,
                "arcs": [
                    [710, 711, 712, 347, -697]
                ]
            }, {
                "type": "Polygon",
                "id": 724,
                "arcs": [
                    [443, 713, 445, 714, 439, 715, 441, 716]
                ]
            }, {
                "type": "Polygon",
                "id": 233,
                "arcs": [
                    [462, 717, 718]
                ]
            }, {
                "type": "Polygon",
                "id": 231,
                "arcs": [
                    [-696, 719, 720, 721, 722, 723, 724, -711]
                ]
            }, {
                "type": "Polygon",
                "id": 246,
                "arcs": [
                    [725, 464, 726, 727, 467, 728, 729]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 242,
                "arcs": [
                    [
                        [20]
                    ],
                    [
                        [21]
                    ],
                    [
                        [22]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 238,
                "arcs": [
                    [14]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 250,
                "arcs": [
                    [
                        [730, 731, 172, -603]
                    ],
                    [
                        [84]
                    ],
                    [
                        [732, -691, -635, 733, 438, -715, 446, 734, 448, -565]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 266,
                "arcs": [
                    [367, 735, -663, -679]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 826,
                "arcs": [
                    [
                        [736, 92]
                    ],
                    [
                        [737, 97, 738, 99, 739, 101, 740, 103]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 268,
                "arcs": [
                    [412, 741, -557, -540, 742]
                ]
            }, {
                "type": "Polygon",
                "id": 288,
                "arcs": [
                    [379, -662, -574, 743]
                ]
            }, {
                "type": "Polygon",
                "id": 324,
                "arcs": [
                    [744, 745, 385, 746, 747, 748, -660]
                ]
            }, {
                "type": "Polygon",
                "id": 270,
                "arcs": [
                    [388, 749]
                ]
            }, {
                "type": "Polygon",
                "id": 624,
                "arcs": [
                    [386, 750, -747]
                ]
            }, {
                "type": "Polygon",
                "id": 226,
                "arcs": [
                    [368, -664, -736]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 300,
                "arcs": [
                    [
                        [80]
                    ],
                    [
                        [419, 751, 421, 752, 423, 753, 425, -526, 754, -580, 755]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 304,
                "arcs": [
                    [512]
                ]
            }, {
                "type": "Polygon",
                "id": 320,
                "arcs": [
                    [194, 756, -592, 155, 757, 758]
                ]
            }, {
                "type": "Polygon",
                "id": 328,
                "arcs": [
                    [170, 759, -601, 760]
                ]
            }, {
                "type": "Polygon",
                "id": 340,
                "arcs": [
                    [191, 761, 762, -758, 156, 763, 158, 764]
                ]
            }, {
                "type": "Polygon",
                "id": 191,
                "arcs": [
                    [765, -585, 766, 429, 767, 431, 768, 769]
                ]
            }, {
                "type": "Polygon",
                "id": 332,
                "arcs": [
                    [-699, 65]
                ]
            }, {
                "type": "Polygon",
                "id": 348,
                "arcs": [
                    [-547, 770, 771, 772, 773, -770, 774]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 360,
                "arcs": [
                    [
                        [28]
                    ],
                    [
                        [775, 32]
                    ],
                    [
                        [33]
                    ],
                    [
                        [34]
                    ],
                    [
                        [37]
                    ],
                    [
                        [38]
                    ],
                    [
                        [41]
                    ],
                    [
                        [42]
                    ],
                    [
                        [776, 45]
                    ],
                    [
                        [46]
                    ],
                    [
                        [47]
                    ],
                    [
                        [777, 52]
                    ],
                    [
                        [48]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 356,
                "arcs": [
                    [-651, 778, -649, -606, -648, 779, -577, 301, 780, 303, 781, 305, 782, 307, 783]
                ]
            }, {
                "type": "Polygon",
                "id": 372,
                "arcs": [
                    [93, -737]
                ]
            }, {
                "type": "Polygon",
                "id": 364,
                "arcs": [
                    [784, -519, 785, 311, 786, 313, 787, 788, 789, -554, -542, -556, 494]
                ]
            }, {
                "type": "Polygon",
                "id": 368,
                "arcs": [
                    [790, 791, 792, 793, 794, 795, -789]
                ]
            }, {
                "type": "Polygon",
                "id": 352,
                "arcs": [
                    [109]
                ]
            }, {
                "type": "Polygon",
                "id": 376,
                "arcs": [
                    [796, 797, 798, -710, 403, 799, 800]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 380,
                "arcs": [
                    [
                        [81]
                    ],
                    [
                        [82]
                    ],
                    [
                        [801, 433, 802, 435, 803, 437, -734, -634, -549]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 388,
                "arcs": [
                    [63]
                ]
            }, {
                "type": "Polygon",
                "id": 400,
                "arcs": [
                    [-797, 804, -794, 805, 343, -799, 806]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 392,
                "arcs": [
                    [
                        [77]
                    ],
                    [
                        [83]
                    ],
                    [
                        [85]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 398,
                "arcs": [
                    [807, 808, 496, 809, -655, 810]
                ]
            }, {
                "type": "Polygon",
                "id": 404,
                "arcs": [
                    [353, 811, 812, 813, -722, 814]
                ]
            }, {
                "type": "Polygon",
                "id": 417,
                "arcs": [
                    [-811, -654, 815, 816]
                ]
            }, {
                "type": "Polygon",
                "id": 116,
                "arcs": [
                    [817, 818, 819, 294]
                ]
            }, {
                "type": "Polygon",
                "id": 410,
                "arcs": [
                    [276, 820, 278, 821]
                ]
            }, {
                "type": "Polygon",
                "id": -99,
                "arcs": [
                    [-529, 822, 823, 824]
                ]
            }, {
                "type": "Polygon",
                "id": 414,
                "arcs": [
                    [315, 825, -792]
                ]
            }, {
                "type": "Polygon",
                "id": 418,
                "arcs": [
                    [826, 827, -646, 828, -819]
                ]
            }, {
                "type": "Polygon",
                "id": 422,
                "arcs": [
                    [-800, 404, 829]
                ]
            }, {
                "type": "Polygon",
                "id": 430,
                "arcs": [
                    [381, 830, 383, 831, -745, -659]
                ]
            }, {
                "type": "Polygon",
                "id": 434,
                "arcs": [
                    [832, -706, 833, 400, 834, -709, 835, 836]
                ]
            }, {
                "type": "Polygon",
                "id": 144,
                "arcs": [
                    [54]
                ]
            }, {
                "type": "Polygon",
                "id": 426,
                "arcs": [
                    [837]
                ]
            }, {
                "type": "Polygon",
                "id": 440,
                "arcs": [
                    [838, 460, 839, -586, 840]
                ]
            }, {
                "type": "Polygon",
                "id": 442,
                "arcs": [
                    [-692, -733, -564]
                ]
            }, {
                "type": "Polygon",
                "id": 428,
                "arcs": [
                    [461, -719, 841, -587, -840]
                ]
            }, {
                "type": "Polygon",
                "id": 504,
                "arcs": [
                    [-704, 842, 392, 843, 844, 395]
                ]
            }, {
                "type": "Polygon",
                "id": 498,
                "arcs": [
                    [845, 846]
                ]
            }, {
                "type": "Polygon",
                "id": 450,
                "arcs": [
                    [25]
                ]
            }, {
                "type": "Polygon",
                "id": 484,
                "arcs": [
                    [847, 153, -591, -757, 195, 848, 197, 849, 199, 850, 201, 851, 203, 852]
                ]
            }, {
                "type": "Polygon",
                "id": 807,
                "arcs": [
                    [-825, 853, -581, -755, -525]
                ]
            }, {
                "type": "Polygon",
                "id": 466,
                "arcs": [
                    [854, -701, 855, -571, -661, -749, 856]
                ]
            }, {
                "type": "Polygon",
                "id": 104,
                "arcs": [
                    [298, -575, -780, -647, -828, 857]
                ]
            }, {
                "type": "Polygon",
                "id": 499,
                "arcs": [
                    [858, 428, -767, -584, 859, -823, -528]
                ]
            }, {
                "type": "Polygon",
                "id": 496,
                "arcs": [
                    [860, -657]
                ]
            }, {
                "type": "Polygon",
                "id": 508,
                "arcs": [
                    [861, 355, 862, 863, 358, 864, 865, 866, 867, 868, 869]
                ]
            }, {
                "type": "Polygon",
                "id": 478,
                "arcs": [
                    [870, 390, 871, -702, -855]
                ]
            }, {
                "type": "Polygon",
                "id": 454,
                "arcs": [
                    [-870, 872, 873]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 458,
                "arcs": [
                    [
                        [296, 874]
                    ],
                    [
                        [-778, 49, -605, 51]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 516,
                "arcs": [
                    [362, -521, 875, -609, 876]
                ]
            }, {
                "type": "Polygon",
                "id": 540,
                "arcs": [
                    [19]
                ]
            }, {
                "type": "Polygon",
                "id": 562,
                "arcs": [
                    [-572, -856, -700, -833, 877, -668, 878, -568]
                ]
            }, {
                "type": "Polygon",
                "id": 566,
                "arcs": [
                    [372, 879, 374, 880, 376, -569, -879, -667]
                ]
            }, {
                "type": "Polygon",
                "id": 558,
                "arcs": [
                    [188, 881, 190, -765, 159, -684]
                ]
            }, {
                "type": "Polygon",
                "id": 528,
                "arcs": [
                    [452, -693, -562, 450, 882]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 578,
                "arcs": [
                    [
                        [883, -730, 884, 469, 885, 471, 886, 473]
                    ],
                    [
                        [501]
                    ],
                    [
                        [506]
                    ],
                    [
                        [507]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 524,
                "arcs": [
                    [-779, -650]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 554,
                "arcs": [
                    [
                        [17]
                    ],
                    [
                        [18]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 512,
                "arcs": [
                    [
                        [887, 330, 888, 889, 890, -531, 326, 891, 328]
                    ],
                    [
                        [-530, 324]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 586,
                "arcs": [
                    [-652, -784, 308, 892, 310, -786, -518]
                ]
            }, {
                "type": "Polygon",
                "id": 591,
                "arcs": [
                    [184, 893, 186, -685, 161, 894, 163, -681]
                ]
            }, {
                "type": "Polygon",
                "id": 604,
                "arcs": [
                    [-639, 181, -707, -683, -598, -594]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 608,
                "arcs": [
                    [
                        [53]
                    ],
                    [
                        [56]
                    ],
                    [
                        [57]
                    ],
                    [
                        [58]
                    ],
                    [
                        [59]
                    ],
                    [
                        [60]
                    ],
                    [
                        [61]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 598,
                "arcs": [
                    [
                        [39]
                    ],
                    [
                        [40]
                    ],
                    [
                        [-777, 44]
                    ],
                    [
                        [43]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 616,
                "arcs": [
                    [-690, 458, 895, -841, -590, 896, 897, -688]
                ]
            }, {
                "type": "Polygon",
                "id": 630,
                "arcs": [
                    [62]
                ]
            }, {
                "type": "Polygon",
                "id": 408,
                "arcs": [
                    [898, 273, 899, 275, -822, 900, 280, 901, 282, 902, 284, -640]
                ]
            }, {
                "type": "Polygon",
                "id": 620,
                "arcs": [
                    [-717, 442]
                ]
            }, {
                "type": "Polygon",
                "id": 600,
                "arcs": [
                    [-596, -597, -534]
                ]
            }, {
                "type": "Polygon",
                "id": 275,
                "arcs": [
                    [-807, -798]
                ]
            }, {
                "type": "Polygon",
                "id": 634,
                "arcs": [
                    [319, 903, 321, 904]
                ]
            }, {
                "type": "Polygon",
                "id": 642,
                "arcs": [
                    [905, -847, 906, 415, -578, 907, -773]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 643,
                "arcs": [
                    [
                        [91]
                    ],
                    [
                        [-896, 459, -839]
                    ],
                    [
                        [111]
                    ],
                    [
                        [113]
                    ],
                    [
                        [114]
                    ],
                    [
                        [239]
                    ],
                    [
                        [245]
                    ],
                    [
                        [247]
                    ],
                    [
                        [250]
                    ],
                    [
                        [908, 254, 909, 256, 910, 258, 911, 260, 912, 262, 913, 264, 914, 266, 915, 268, 916, 270, 917, 272, -899, -658, -861, -656, -810, 497, -558, -742, 413, 918, -588, -842, -718, 463, -726, -884, 474, 919, 476, 920, 478, 921, 480, 922, 482, 923, 484, 924, 925, 487, 926, 489, 927, 491]
                    ],
                    [
                        [505]
                    ],
                    [
                        [508]
                    ],
                    [
                        [509]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 646,
                "arcs": [
                    [928, -560, -672, 929]
                ]
            }, {
                "type": "Polygon",
                "id": 732,
                "arcs": [
                    [-703, -872, 391, -843]
                ]
            }, {
                "type": "Polygon",
                "id": 682,
                "arcs": [
                    [930, 340, 931, 342, -806, -793, -826, 316, 932, 318, -905, 322, -532, -891, 933]
                ]
            }, {
                "type": "Polygon",
                "id": 729,
                "arcs": [
                    [934, 935, -613, 936, -836, -708, 345, -712, -725, 937]
                ]
            }, {
                "type": "Polygon",
                "id": 728,
                "arcs": [
                    [938, -723, -814, 939, -678, -615, 940, -935]
                ]
            }, {
                "type": "Polygon",
                "id": 686,
                "arcs": [
                    [389, -871, -857, -748, -751, 387, -750]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 90,
                "arcs": [
                    [
                        [27]
                    ],
                    [
                        [29]
                    ],
                    [
                        [30]
                    ],
                    [
                        [35]
                    ],
                    [
                        [36]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 694,
                "arcs": [
                    [384, -746, -832]
                ]
            }, {
                "type": "Polygon",
                "id": 222,
                "arcs": [
                    [941, 193, -759, -763]
                ]
            }, {
                "type": "Polygon",
                "id": -99,
                "arcs": [
                    [-720, -695, 349, 942, 351, 943]
                ]
            }, {
                "type": "Polygon",
                "id": 706,
                "arcs": [
                    [-815, -721, -944, 352]
                ]
            }, {
                "type": "Polygon",
                "id": 688,
                "arcs": [
                    [-582, -854, -824, -860, -583, -766, -774, -908]
                ]
            }, {
                "type": "Polygon",
                "id": 740,
                "arcs": [
                    [171, -732, 944, -602, -760]
                ]
            }, {
                "type": "Polygon",
                "id": 703,
                "arcs": [
                    [-898, 945, -771, -553, -689]
                ]
            }, {
                "type": "Polygon",
                "id": 705,
                "arcs": [
                    [-548, -775, -769, 432, -802]
                ]
            }, {
                "type": "Polygon",
                "id": 752,
                "arcs": [
                    [-885, -729, 468]
                ]
            }, {
                "type": "Polygon",
                "id": 748,
                "arcs": [
                    [946, -866]
                ]
            }, {
                "type": "Polygon",
                "id": 760,
                "arcs": [
                    [-805, -801, -830, 405, 947, -795]
                ]
            }, {
                "type": "Polygon",
                "id": 148,
                "arcs": [
                    [-878, -837, -937, -612, -669]
                ]
            }, {
                "type": "Polygon",
                "id": 768,
                "arcs": [
                    [378, -744, -573, -566]
                ]
            }, {
                "type": "Polygon",
                "id": 764,
                "arcs": [
                    [295, -875, 297, -858, -827, -818]
                ]
            }, {
                "type": "Polygon",
                "id": 762,
                "arcs": [
                    [-816, -653, -516, 948]
                ]
            }, {
                "type": "Polygon",
                "id": 795,
                "arcs": [
                    [-785, 495, -809, 949, -514]
                ]
            }, {
                "type": "Polygon",
                "id": 626,
                "arcs": [
                    [31, -776]
                ]
            }, {
                "type": "Polygon",
                "id": 780,
                "arcs": [
                    [55]
                ]
            }, {
                "type": "Polygon",
                "id": 788,
                "arcs": [
                    [-705, 397, 950, 399, -834]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 792,
                "arcs": [
                    [
                        [411, -743, -544, -790, -796, -948, 406, 951, 952, 409, 953]
                    ],
                    [
                        [954, -756, -579, 417]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 158,
                "arcs": [
                    [74]
                ]
            }, {
                "type": "Polygon",
                "id": 834,
                "arcs": [
                    [-812, 354, -862, -874, 955, -675, 956, -673, -561, -929, 957]
                ]
            }, {
                "type": "Polygon",
                "id": 800,
                "arcs": [
                    [-930, -671, -940, -813, -958]
                ]
            }, {
                "type": "Polygon",
                "id": 804,
                "arcs": [
                    [-919, 414, -907, -846, -906, -772, -946, -897, -589]
                ]
            }, {
                "type": "Polygon",
                "id": 858,
                "arcs": [
                    [-604, 174, -536]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 840,
                "arcs": [
                    [
                        [67]
                    ],
                    [
                        [68]
                    ],
                    [
                        [69]
                    ],
                    [
                        [70]
                    ],
                    [
                        [71]
                    ],
                    [
                        [127, 958, 129, 959, 131, 960, 133, 961, 135, 962, 137, 963, 139, 964, 141, 965, 143, 966, 145, 967, 147, 968, 149, 969, 151, -853, 204, 970, 206, 971, 208, 972, -625]
                    ],
                    [
                        [95]
                    ],
                    [
                        [104]
                    ],
                    [
                        [107]
                    ],
                    [
                        [-627, 213, 973, 215, 974, 217, 975, 219, 976, 221, 977, 223, 978, 225]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 860,
                "arcs": [
                    [-950, -808, -817, -949, -515]
                ]
            }, {
                "type": "Polygon",
                "id": 862,
                "arcs": [
                    [165, 979, 167, 980, 169, -761, -600, -682]
                ]
            }, {
                "type": "Polygon",
                "id": 704,
                "arcs": [
                    [293, -820, -829, -645]
                ]
            }, {
                "type": "MultiPolygon",
                "id": 548,
                "arcs": [
                    [
                        [23]
                    ],
                    [
                        [24]
                    ]
                ]
            }, {
                "type": "Polygon",
                "id": 887,
                "arcs": [
                    [981, 332, 982, 334, 983, 336, 984, 338, -934, -890]
                ]
            }, {
                "type": "Polygon",
                "id": 710,
                "arcs": [
                    [985, 361, -877, -608, 986, -867, -947, -865, 359],
                    [-838]
                ]
            }, {
                "type": "Polygon",
                "id": 894,
                "arcs": [
                    [-873, -869, 987, -610, -876, -520, -676, -956]
                ]
            }, {
                "type": "Polygon",
                "id": 716,
                "arcs": [
                    [-987, -611, -988, -868]
                ]
            }]
        }
    },
    "arcs": [
        [
            [33452, 3290],
            [-82, -301],
            [-81, -266],
            [-582, 81],
            [-621, -35],
            [-348, 197],
            [0, 23],
            [-152, 174],
            [625, -23],
            [599, -58],
            [207, 243],
            [147, 208],
            [288, -243]
        ],
        [
            [5775, 3611],
            [-533, -81],
            [-364, 208],
            [-163, 209],
            [-11, 35],
            [-180, 162],
            [169, 220],
            [517, -93],
            [277, -185],
            [212, -209],
            [76, -266]
        ],
        [
            [37457, 4468],
            [342, -255],
            [120, -359],
            [33, -254],
            [11, -301],
            [-430, -186],
            [-452, -150],
            [-522, -139],
            [-582, -116],
            [-658, 35],
            [-365, 197],
            [49, 243],
            [593, 162],
            [239, 197],
            [174, 254],
            [126, 220],
            [168, 209],
            [180, 243],
            [141, 0],
            [414, 127],
            [419, -127]
        ],
        [
            [16330, 7154],
            [359, -93],
            [332, 104],
            [-158, -208],
            [-261, -151],
            [-386, 47],
            [-278, 208],
            [60, 197],
            [332, -104]
        ],
        [
            [15122, 7165],
            [425, -231],
            [-164, 23],
            [-359, 58],
            [-381, 162],
            [202, 127],
            [277, -139]
        ],
        [
            [22505, 8080],
            [305, -81],
            [304, 69],
            [163, -335],
            [-217, 46],
            [-337, -23],
            [-343, 23],
            [-376, -35],
            [-283, 116],
            [-146, 243],
            [174, 104],
            [353, -81],
            [403, -46]
        ],
        [
            [30985, 8657],
            [33, -266],
            [-49, -231],
            [-76, -220],
            [-326, -81],
            [-311, -116],
            [-364, 11],
            [136, 232],
            [-327, -81],
            [-310, -81],
            [-212, 174],
            [-16, 243],
            [305, 231],
            [190, 70],
            [321, -23],
            [82, 301],
            [16, 219],
            [-6, 475],
            [158, 278],
            [256, 93],
            [147, -220],
            [65, -220],
            [120, -267],
            [92, -254],
            [76, -267]
        ],
        [
            [794, 704],
            [78, 49],
            [94, 61],
            [81, 52],
            [41, 26]
        ],
        [
            [1088, 892],
            [41, -1],
            [29, -10]
        ],
        [
            [1158, 881],
            [402, -246],
            [352, 246],
            [63, 34],
            [816, 104],
            [265, -138],
            [130, -71],
            [419, -196],
            [789, -151],
            [625, -185],
            [1072, -139],
            [800, 162],
            [1181, -116],
            [669, -185],
            [734, 174],
            [773, 162],
            [60, 278],
            [-1094, 23],
            [-898, 139],
            [-234, 231],
            [-745, 128],
            [49, 266],
            [103, 243],
            [104, 220],
            [-55, 243],
            [-462, 162],
            [-212, 209],
            [-430, 185],
            [675, -35],
            [642, 93],
            [402, -197],
            [495, 173],
            [457, 220],
            [223, 197],
            [-98, 243],
            [-359, 162],
            [-408, 174],
            [-571, 35],
            [-500, 81],
            [-539, 58],
            [-180, 220],
            [-359, 185],
            [-217, 208],
            [-87, 672],
            [136, -58],
            [250, -185],
            [457, 58],
            [441, 81],
            [228, -255],
            [441, 58],
            [370, 127],
            [348, 162],
            [315, 197],
            [419, 58],
            [-11, 220],
            [-97, 220],
            [81, 208],
            [359, 104],
            [163, -196],
            [425, 115],
            [321, 151],
            [397, 12],
            [375, 57],
            [376, 139],
            [299, 128],
            [337, 127],
            [218, -35],
            [190, -46],
            [414, 81],
            [370, -104],
            [381, 11],
            [364, 81],
            [375, -57],
            [414, -58],
            [386, 23],
            [403, -12],
            [413, -11],
            [381, 23],
            [283, 174],
            [337, 92],
            [349, -127],
            [331, 104],
            [300, 208],
            [179, -185],
            [98, -208],
            [180, -197],
            [288, 174],
            [332, -220],
            [375, -70],
            [321, -162],
            [392, 35],
            [354, 104],
            [418, -23],
            [376, -81],
            [381, -104],
            [147, 254],
            [-180, 197],
            [-136, 209],
            [-359, 46],
            [-158, 220],
            [-60, 220],
            [-98, 440],
            [213, -81],
            [364, -35],
            [359, 35],
            [327, -93],
            [283, -174],
            [119, -208],
            [376, -35],
            [359, 81],
            [381, 116],
            [342, 70],
            [283, -139],
            [370, 46],
            [239, 451],
            [224, -266],
            [321, -104],
            [348, 58],
            [228, -232],
            [365, -23],
            [337, -69],
            [332, -128],
            [218, 220],
            [108, 209],
            [278, -232],
            [381, 58],
            [283, -127],
            [190, -197],
            [370, 58],
            [288, 127],
            [283, 151],
            [337, 81],
            [392, 69],
            [354, 81],
            [272, 127],
            [163, 186],
            [65, 254],
            [-32, 244],
            [-87, 231],
            [-98, 232],
            [-87, 231],
            [-71, 209],
            [-16, 231],
            [27, 232],
            [130, 220],
            [109, 243],
            [44, 231],
            [-55, 255],
            [-32, 232],
            [136, 266],
            [152, 173],
            [180, 220],
            [190, 186],
            [223, 173],
            [109, 255],
            [152, 162],
            [174, 151],
            [267, 34],
            [174, 186],
            [196, 115],
            [228, 70],
            [202, 150],
            [157, 186],
            [218, 69],
            [163, -151],
            [-103, -196],
            [-283, -174],
            [-120, -127],
            [-206, 92],
            [-229, -58],
            [-190, -139],
            [-202, -150],
            [-136, -174],
            [-38, -231],
            [17, -220],
            [130, -197],
            [-190, -139],
            [-261, -46],
            [-153, -197],
            [-163, -185],
            [-174, -255],
            [-44, -220],
            [98, -243],
            [147, -185],
            [229, -139],
            [212, -185],
            [114, -232],
            [60, -220],
            [82, -232],
            [130, -196],
            [82, -220],
            [38, -544],
            [81, -220],
            [22, -232],
            [87, -231],
            [-38, -313],
            [-152, -243],
            [-163, -197],
            [-370, -81],
            [-125, -208],
            [-169, -197],
            [-419, -220],
            [-370, -93],
            [-348, -127],
            [-376, -128],
            [-223, -243],
            [-446, -23],
            [-489, 23],
            [-441, -46],
            [-468, 0],
            [87, -232],
            [424, -104],
            [311, -162],
            [174, -208],
            [-310, -185],
            [-479, 58],
            [-397, -151],
            [-17, -243],
            [-11, -232],
            [327, -196],
            [60, -220],
            [353, -220],
            [588, -93],
            [500, -162],
            [398, -185],
            [506, -186],
            [690, -92],
            [681, -162],
            [473, -174],
            [517, -197],
            [272, -278],
            [136, -220],
            [337, 209],
            [457, 173],
            [484, 186],
            [577, 150],
            [495, 162],
            [691, 12],
            [680, -81],
            [560, -139],
            [180, 255],
            [386, 173],
            [702, 12],
            [550, 127],
            [522, 128],
            [577, 81],
            [614, 104],
            [430, 150],
            [-196, 209],
            [-119, 208],
            [0, 220],
            [-539, -23],
            [-571, -93],
            [-544, 0],
            [-77, 220],
            [39, 440],
            [125, 128],
            [397, 138],
            [468, 139],
            [337, 174],
            [337, 174],
            [251, 231],
            [380, 104],
            [376, 81],
            [190, 47],
            [430, 23],
            [408, 81],
            [343, 116],
            [337, 139],
            [305, 139],
            [386, 185],
            [245, 197],
            [261, 173],
            [82, 232],
            [-294, 139],
            [98, 243],
            [185, 185],
            [288, 116],
            [305, 139],
            [283, 185],
            [217, 232],
            [136, 277],
            [202, 163],
            [331, -35],
            [136, -197],
            [332, -23],
            [11, 220],
            [142, 231],
            [299, -58],
            [71, -220],
            [331, -34],
            [360, 104],
            [348, 69],
            [315, -34],
            [120, -243],
            [305, 196],
            [283, 105],
            [315, 81],
            [310, 81],
            [283, 139],
            [310, 92],
            [240, 128],
            [168, 208],
            [207, -151],
            [288, 81],
            [202, -277],
            [157, -209],
            [316, 116],
            [125, 232],
            [283, 162],
            [365, -35],
            [108, -220],
            [229, 220],
            [299, 69],
            [326, 23],
            [294, -11],
            [310, -70],
            [300, -34],
            [130, -197],
            [180, -174],
            [304, 104],
            [327, 24],
            [315, 0],
            [310, 11],
            [278, 81],
            [294, 70],
            [245, 162],
            [261, 104],
            [283, 58],
            [212, 162],
            [152, 324],
            [158, 197],
            [288, -93],
            [109, -208],
            [239, -139],
            [289, 46],
            [196, -208],
            [206, -151],
            [283, 139],
            [98, 255],
            [250, 104],
            [289, 197],
            [272, 81],
            [326, 116],
            [218, 127],
            [228, 139],
            [218, 127],
            [261, -69],
            [250, 208],
            [180, 162],
            [261, -11],
            [229, 139],
            [54, 208],
            [234, 162],
            [228, 116],
            [278, 93],
            [256, 46],
            [244, -35],
            [262, -58],
            [223, -162],
            [27, -254],
            [245, -197],
            [168, -162],
            [332, -70],
            [185, -162],
            [229, -162],
            [266, -35],
            [223, 116],
            [240, 243],
            [261, -127],
            [272, -70],
            [261, -69],
            [272, -46],
            [277, 0],
            [229, -614],
            [-11, -150],
            [-33, -267],
            [-266, -150],
            [-218, -220],
            [38, -232],
            [310, 12],
            [-38, -232],
            [-141, -220],
            [-131, -243],
            [212, -185],
            [321, -58],
            [321, 104],
            [153, 232],
            [92, 220],
            [153, 185],
            [174, 174],
            [70, 208],
            [147, 289],
            [174, 58],
            [316, 24],
            [277, 69],
            [283, 93],
            [136, 231],
            [82, 220],
            [190, 220],
            [272, 151],
            [234, 115],
            [153, 197],
            [157, 104],
            [202, 93],
            [277, -58],
            [250, 58],
            [272, 69],
            [305, -34],
            [201, 162],
            [142, 393],
            [103, -162],
            [131, -278],
            [234, -115],
            [266, -47],
            [267, 70],
            [283, -46],
            [261, -12],
            [174, 58],
            [234, -35],
            [212, -127],
            [250, 81],
            [300, 0],
            [255, 81],
            [289, -81],
            [185, 197],
            [141, 196],
            [191, 163],
            [348, 439],
            [179, -81],
            [212, -162],
            [185, -208],
            [354, -359],
            [272, -12],
            [256, 0],
            [299, 70],
            [299, 81],
            [229, 162],
            [190, 174],
            [310, 23],
            [207, 127],
            [218, -116],
            [141, -185],
            [196, -185],
            [305, 23],
            [190, -150],
            [332, -151],
            [348, -58],
            [288, 47],
            [218, 185],
            [185, 185],
            [250, 46],
            [251, -81],
            [288, -58],
            [261, 93],
            [250, 0],
            [245, -58],
            [256, -58],
            [250, 104],
            [299, 93],
            [283, 23],
            [316, 0],
            [255, 58],
            [251, 46],
            [76, 290],
            [11, 243],
            [174, -162],
            [49, -266],
            [92, -244],
            [115, -196],
            [234, -105],
            [315, 35],
            [365, 12],
            [250, 35],
            [364, 0],
            [262, 11],
            [364, -23],
            [310, -46],
            [196, -186],
            [-54, -220],
            [179, -173],
            [299, -139],
            [310, -151],
            [360, -104],
            [375, -92],
            [283, -93],
            [315, -12],
            [180, 197],
            [245, -162],
            [212, -185],
            [245, -139],
            [337, -58],
            [321, -69],
            [136, -232],
            [316, -139],
            [212, -208],
            [310, -93],
            [321, 12],
            [299, -35],
            [332, 12],
            [332, -47],
            [310, -81],
            [288, -139],
            [289, -116],
            [195, -173],
            [-32, -232],
            [-147, -208],
            [-125, -266],
            [-98, -209],
            [-131, -243],
            [-364, -93],
            [-163, -208],
            [-360, -127],
            [-125, -232],
            [-190, -220],
            [-201, -185],
            [-115, -243],
            [-70, -220],
            [-28, -266],
            [6, -220],
            [158, -232],
            [60, -220],
            [130, -208],
            [517, -81],
            [109, -255],
            [-501, -93],
            [-424, -127],
            [-528, -23],
            [-234, -336],
            [-49, -278],
            [-119, -220],
            [-147, -220],
            [370, -196],
            [141, -244],
            [239, -219],
            [338, -197],
            [386, -186],
            [419, -185],
            [636, -185],
            [142, -289],
            [800, -128],
            [53, -45],
            [208, -175],
            [767, 151],
            [636, -186],
            [-99504, -147],
            [245, 344],
            [501, -185],
            [32, 21]
        ],
        [
            [31400, 18145],
            [-92, -239],
            [-238, -183]
        ],
        [
            [31070, 17723],
            [-301, 67]
        ],
        [
            [30769, 17790],
            [-202, 177],
            [-291, 86],
            [-350, 330],
            [-283, 317],
            [-383, 662],
            [229, -124],
            [390, -395],
            [369, -212],
            [143, 271],
            [90, 405],
            [256, 244],
            [198, -70]
        ],
        [
            [30935, 19481],
            [106, -274],
            [139, -443],
            [361, -355],
            [389, -147],
            [-125, -296],
            [-264, -29],
            [-141, 208]
        ],
        [
            [33736, 20389],
            [222, -266],
            [-83, -207],
            [-375, -177],
            [-125, 207],
            [-236, -266],
            [-139, 266],
            [333, 354],
            [236, -148],
            [167, 237]
        ],
        [
            [69522, 21210],
            [-427, -38],
            [-7, 314],
            [41, 244],
            [19, 121],
            [179, -186],
            [263, -74],
            [9, -112],
            [-77, -269]
        ],
        [
            [90387, 26479],
            [269, -204],
            [151, 81],
            [217, 113],
            [166, -39],
            [20, -702],
            [-95, -203],
            [-29, -476],
            [-97, 162],
            [-193, -412],
            [-57, 32],
            [-171, 19],
            [-171, 505],
            [-38, 390],
            [-160, 515],
            [7, 271],
            [181, -52]
        ],
        [
            [98060, 26404],
            [63, -244],
            [198, 239],
            [80, -249],
            [0, -249],
            [-103, -274],
            [-182, -435],
            [-142, -238],
            [103, -284],
            [-214, -7],
            [-238, -223],
            [-75, -387],
            [-157, -597],
            [-219, -264],
            [-138, -169],
            [-256, 13],
            [-180, 194],
            [-302, 42],
            [-46, 217],
            [149, 438],
            [349, 583],
            [179, 111],
            [200, 225],
            [238, 310],
            [167, 306],
            [123, 441],
            [106, 149],
            [41, 330],
            [195, 273],
            [61, -251]
        ],
        [
            [98502, 29218],
            [202, -622],
            [5, 403],
            [126, -161],
            [41, -447],
            [224, -192],
            [188, -48],
            [158, 226],
            [141, -69],
            [-67, -524],
            [-85, -345],
            [-212, 12],
            [-74, -179],
            [26, -254],
            [-41, -110],
            [-105, -319],
            [-138, -404],
            [-214, -236],
            [-48, 155],
            [-116, 85],
            [160, 486],
            [-91, 326],
            [-299, 236],
            [8, 214],
            [201, 206],
            [47, 455],
            [-13, 382],
            [-113, 396],
            [8, 104],
            [-133, 244],
            [-218, 523],
            [-117, 418],
            [104, 46],
            [151, -328],
            [216, -153],
            [78, -526]
        ],
        [
            [96421, 37487],
            [-105, -142],
            [-153, 160],
            [-199, 266],
            [-179, 313],
            [-184, 416],
            [-38, 201],
            [119, -9],
            [156, -201],
            [122, -200],
            [89, -166],
            [228, -366],
            [144, -272]
        ],
        [
            [99547, 40335],
            [96, -171],
            [-46, -308],
            [-172, -81],
            [-153, 73],
            [-27, 260],
            [107, 203],
            [126, -74],
            [69, 98]
        ],
        [
            [99822, 40653],
            [-177, -124],
            [-36, 220],
            [139, 121],
            [88, 33],
            [163, 184],
            [0, -289],
            [-177, -145]
        ],
        [
            [23, 40830],
            [-23, -32],
            [0, 289],
            [57, 27],
            [-34, -284]
        ],
        [
            [96623, 40851],
            [-92, -78],
            [-93, 259],
            [10, 158],
            [175, -339]
        ],
        [
            [96418, 41756],
            [45, -476],
            [-75, 74],
            [-58, -32],
            [-39, 163],
            [-6, 453],
            [133, -182]
        ],
        [
            [63904, 42571],
            [45, -711],
            [72, -276],
            [-28, -284],
            [-49, -174],
            [-94, 347],
            [-53, -175],
            [53, -438],
            [-24, -250],
            [-77, -137],
            [-18, -500],
            [-109, -689],
            [-137, -814],
            [-172, -1120],
            [-106, -821],
            [-125, -685],
            [-226, -140],
            [-243, -250],
            [-160, 151],
            [-220, 211],
            [-77, 312],
            [-18, 524],
            [-98, 471],
            [-26, 425],
            [50, 426],
            [128, 102],
            [1, 197],
            [133, 447],
            [25, 377],
            [-65, 280],
            [-52, 372],
            [-23, 544],
            [97, 331],
            [38, 375],
            [138, 22],
            [155, 121],
            [103, 107],
            [122, 7],
            [158, 337],
            [229, 364],
            [83, 297],
            [-38, 253],
            [118, -71],
            [153, 410],
            [6, 356],
            [92, 264],
            [96, -254],
            [74, -251],
            [69, -390]
        ],
        [
            [89877, 42448],
            [100, -464],
            [179, 223],
            [92, -250],
            [133, -231],
            [-29, -262],
            [60, -506],
            [42, -295],
            [70, -72],
            [75, -505],
            [-27, -307],
            [90, -400],
            [301, -309],
            [197, -281],
            [186, -257],
            [-37, -143],
            [159, -371],
            [108, -639],
            [111, 130],
            [113, -256],
            [68, 91],
            [48, -626],
            [197, -363],
            [129, -226],
            [217, -478],
            [78, -475],
            [7, -337],
            [-19, -365],
            [132, -502],
            [-16, -523],
            [-48, -274],
            [-75, -527],
            [6, -339],
            [-55, -423],
            [-123, -538],
            [-205, -290],
            [-102, -458],
            [-93, -292],
            [-82, -510],
            [-107, -294],
            [-70, -442],
            [-36, -407],
            [14, -187],
            [-159, -205],
            [-311, -22],
            [-257, -242],
            [-127, -229],
            [-168, -254],
            [-230, 262],
            [-170, 104],
            [43, 308],
            [-152, -112],
            [-243, -428],
            [-240, 160],
            [-158, 94],
            [-159, 42],
            [-269, 171],
            [-179, 364],
            [-52, 449],
            [-64, 298],
            [-137, 240],
            [-267, 71],
            [91, 287],
            [-67, 438],
            [-136, -408],
            [-247, -109],
            [146, 327],
            [42, 341],
            [107, 289],
            [-22, 438],
            [-226, -504],
            [-174, -202],
            [-106, -470],
            [-217, 243],
            [9, 313],
            [-174, 429],
            [-147, 221],
            [52, 137],
            [-356, 358],
            [-195, 17],
            [-267, 287],
            [-498, -56],
            [-359, -211],
            [-317, -197],
            [-265, 39],
            [-294, -303],
            [-241, -137],
            [-53, -309],
            [-103, -240],
            [-236, -15],
            [-174, -52],
            [-246, 107],
            [-199, -64],
            [-191, -27],
            [-165, -315],
            [-81, 26],
            [-140, -167],
            [-133, -187],
            [-203, 23],
            [-186, 0],
            [-295, 377],
            [-149, 113],
            [6, 338],
            [138, 81],
            [47, 134],
            [-10, 212],
            [34, 411],
            [-31, 350],
            [-147, 598],
            [-45, 337],
            [12, 336],
            [-111, 385],
            [-7, 174],
            [-123, 235],
            [-35, 463],
            [-158, 467],
            [-39, 252],
            [122, -255],
            [-93, 548],
            [137, -171],
            [83, -229],
            [-5, 303],
            [-138, 465],
            [-26, 186],
            [-65, 177],
            [31, 341],
            [56, 146],
            [38, 295],
            [-29, 346],
            [114, 425],
            [21, -450],
            [118, 406],
            [225, 198],
            [136, 252],
            [212, 217],
            [126, 46],
            [77, -73],
            [219, 220],
            [168, 66],
            [42, 129],
            [74, 54],
            [153, -14],
            [292, 173],
            [151, 262],
            [71, 316],
            [163, 300],
            [13, 236],
            [7, 321],
            [194, 502],
            [117, -510],
            [119, 118],
            [-99, 279],
            [87, 287],
            [122, -128],
            [34, 449],
            [152, 291],
            [67, 233],
            [140, 101],
            [4, 165],
            [122, -69],
            [5, 148],
            [122, 85],
            [134, 80],
            [205, -271],
            [155, -350],
            [173, -4],
            [177, -56],
            [-59, 325],
            [133, 473],
            [126, 155],
            [-44, 147],
            [121, 338],
            [168, 208],
            [142, -70],
            [234, 111],
            [-5, 302],
            [-204, 195],
            [148, 86],
            [184, -147],
            [148, -242],
            [234, -151],
            [79, 60],
            [172, -182],
            [162, 169],
            [105, -51],
            [65, 113],
            [127, -292],
            [-74, -316],
            [-105, -239],
            [-96, -20],
            [32, -236],
            [-81, -295],
            [-99, -291],
            [20, -166],
            [221, -327],
            [214, -189],
            [143, -204],
            [201, -350],
            [78, 1],
            [145, -151],
            [43, -183],
            [265, -200],
            [183, 202],
            [55, 317],
            [56, 262],
            [34, 324],
            [85, 470],
            [-39, 286],
            [20, 171],
            [-32, 339],
            [37, 445],
            [53, 120],
            [-43, 197],
            [67, 313],
            [52, 325],
            [7, 168],
            [104, 222],
            [78, -289],
            [19, -371],
            [70, -71],
            [11, -249],
            [101, -300],
            [21, -335],
            [-10, -214]
        ],
        [
            [95032, 44386],
            [78, -203],
            [-194, 4],
            [-106, 363],
            [166, -142],
            [56, -22]
        ],
        [
            [83531, 44530],
            [-117, -11],
            [-368, 414],
            [259, 116],
            [146, -180],
            [97, -180],
            [-17, -159]
        ],
        [
            [94680, 44747],
            [-108, -14],
            [-170, 60],
            [-58, 91],
            [17, 235],
            [183, -93],
            [91, -124],
            [45, -155]
        ],
        [
            [94910, 44908],
            [-42, -109],
            [-206, 512],
            [-57, 353],
            [94, 0],
            [100, -473],
            [111, -283]
        ],
        [
            [84713, 45326],
            [32, 139],
            [239, 133],
            [194, 20],
            [87, 74],
            [105, -74],
            [-102, -160],
            [-289, -258],
            [-233, -170]
        ],
        [
            [84746, 45030],
            [-181, -441],
            [-238, -130],
            [-33, 71],
            [25, 201],
            [119, 360],
            [275, 235]
        ],
        [
            [82749, 45797],
            [100, -158],
            [172, 48],
            [69, -251],
            [-321, -119],
            [-193, -79],
            [-149, 5],
            [95, 340],
            [153, 5],
            [74, 209]
        ],
        [
            [84139, 45797],
            [-41, -328],
            [-417, -168],
            [-370, 73],
            [0, 216],
            [220, 123],
            [174, -177],
            [185, 45],
            [249, 216]
        ],
        [
            [94409, 45654],
            [12, -119],
            [-218, 251],
            [-152, 212],
            [-104, 197],
            [41, 60],
            [128, -142],
            [228, -272],
            [65, -187]
        ],
        [
            [93760, 46238],
            [-56, -33],
            [-121, 134],
            [-114, 243],
            [14, 99],
            [166, -250],
            [111, -193]
        ],
        [
            [80172, 46575],
            [533, -59],
            [61, 244],
            [515, -284],
            [101, -383],
            [417, -108],
            [341, -351],
            [-317, -225],
            [-306, 238],
            [-251, -16],
            [-288, 44],
            [-260, 106],
            [-322, 225],
            [-204, 59],
            [-116, -74],
            [-506, 243],
            [-48, 254],
            [-255, 44],
            [191, 564],
            [337, -35],
            [224, -231],
            [115, -45],
            [38, -210]
        ],
        [
            [87423, 46908],
            [-143, -402],
            [-27, 445],
            [49, 212],
            [58, 200],
            [63, -173],
            [0, -282]
        ],
        [
            [93299, 46550],
            [-78, -59],
            [-120, 227],
            [-122, 375],
            [-59, 450],
            [38, 57],
            [30, -175],
            [84, -134],
            [135, -375],
            [131, -200],
            [-39, -166]
        ],
        [
            [92217, 47343],
            [-146, -48],
            [-44, -166],
            [-152, -144],
            [-142, -138],
            [-148, 1],
            [-228, 171],
            [-158, 165],
            [23, 183],
            [249, -86],
            [152, 46],
            [42, 283],
            [40, 15],
            [27, -314],
            [158, 45],
            [78, 202],
            [155, 211],
            [-30, 348],
            [166, 11],
            [56, -97],
            [-5, -327],
            [-93, -361]
        ],
        [
            [85346, 48536],
            [-104, -196],
            [-192, 108],
            [-54, 254],
            [281, 29],
            [69, -195]
        ],
        [
            [86241, 48752],
            [101, -452],
            [-234, 244],
            [-232, 49],
            [-157, -39],
            [-192, 21],
            [65, 325],
            [344, 24],
            [305, -172]
        ],
        [
            [92538, 47921],
            [-87, -157],
            [-52, 348],
            [-65, 229],
            [-126, 193],
            [-158, 252],
            [-200, 174],
            [77, 143],
            [150, -166],
            [94, -130],
            [117, -142],
            [111, -248],
            [106, -189],
            [33, -307]
        ],
        [
            [89166, 49043],
            [482, -407],
            [513, -338],
            [192, -302],
            [154, -297],
            [43, -349],
            [462, -365],
            [68, -313],
            [-256, -64],
            [62, -393],
            [248, -388],
            [180, -627],
            [159, 20],
            [-11, -262],
            [215, -100],
            [-84, -111],
            [295, -249],
            [-30, -171],
            [-184, -41],
            [-69, 153],
            [-238, 66],
            [-281, 89],
            [-216, 377],
            [-158, 325],
            [-144, 517],
            [-362, 259],
            [-235, -169],
            [-170, -195],
            [35, -436],
            [-218, -203],
            [-155, 99],
            [-288, 25]
        ],
        [
            [89175, 45193],
            [-247, 485],
            [-282, 118],
            [-69, -168],
            [-352, -18],
            [118, 481],
            [175, 164],
            [-72, 642],
            [-134, 496],
            [-538, 500],
            [-229, 50],
            [-417, 546],
            [-82, -287],
            [-107, -52],
            [-63, 216],
            [-1, 257],
            [-212, 290],
            [299, 213],
            [198, -11],
            [-23, 156],
            [-407, 1],
            [-110, 352],
            [-248, 109],
            [-117, 293],
            [374, 143],
            [142, 192],
            [446, -242],
            [44, -220],
            [78, -955],
            [287, -354],
            [232, 627],
            [319, 356],
            [247, 1],
            [238, -206],
            [206, -212],
            [298, -113]
        ],
        [
            [84788, 51419],
            [-223, -587],
            [-209, -113],
            [-267, 115],
            [-463, -29],
            [-243, -85],
            [-39, -447],
            [248, -526],
            [150, 268],
            [518, 201],
            [-22, -272],
            [-121, 86],
            [-121, -347],
            [-245, -229],
            [263, -757],
            [-50, -203],
            [249, -682],
            [-2, -388],
            [-148, -173],
            [-109, 207],
            [134, 484],
            [-273, -229],
            [-69, 164],
            [36, 228],
            [-200, 346],
            [21, 576],
            [-186, -179],
            [24, -689],
            [11, -846],
            [-176, -85],
            [-119, 173],
            [79, 544],
            [-43, 570],
            [-117, 4],
            [-86, 405],
            [115, 387],
            [40, 469],
            [139, 891],
            [58, 243],
            [237, 439],
            [217, -174],
            [350, -82],
            [319, 25],
            [275, 429],
            [48, -132]
        ],
        [
            [85746, 51249],
            [-15, -517],
            [-143, 58],
            [-42, -359],
            [114, -312],
            [-78, -71],
            [-112, 374],
            [-82, 755],
            [56, 472],
            [92, 215],
            [20, -322],
            [164, -52],
            [26, -241]
        ],
        [
            [79393, 47122],
            [-308, -12],
            [-234, 494],
            [-356, 482],
            [-119, 358],
            [-210, 481],
            [-138, 443],
            [-212, 827],
            [-244, 493],
            [-81, 508],
            [-103, 461],
            [-250, 372],
            [-145, 506],
            [-209, 330],
            [-290, 652],
            [-24, 300],
            [178, -24],
            [430, -114],
            [246, -577],
            [215, -401],
            [153, -246],
            [263, -635],
            [283, -9],
            [233, -405],
            [161, -495],
            [211, -270],
            [-111, -482],
            [159, -205],
            [100, -15],
            [47, -412],
            [97, -330],
            [204, -52],
            [135, -374],
            [-70, -735],
            [-11, -914]
        ],
        [
            [80461, 51765],
            [204, -202],
            [214, 110],
            [56, 500],
            [119, 112],
            [333, 128],
            [199, 467],
            [137, 374]
        ],
        [
            [81723, 53254],
            [110, 221],
            [236, 323]
        ],
        [
            [82069, 53798],
            [214, 411],
            [140, 462],
            [112, 2],
            [143, -299],
            [13, -257],
            [183, -165],
            [231, -177],
            [-20, -232],
            [-186, -29],
            [50, -289],
            [-205, -201]
        ],
        [
            [82744, 53024],
            [-158, -533],
            [204, -560],
            [-48, -272],
            [312, -546],
            [-329, -70],
            [-93, -403],
            [12, -535],
            [-267, -404],
            [-7, -589],
            [-107, -903],
            [-41, 210],
            [-316, -266],
            [-110, 361],
            [-198, 34],
            [-139, 189],
            [-330, -212],
            [-101, 285],
            [-182, -32],
            [-229, 68],
            [-43, 793],
            [-138, 164],
            [-134, 505],
            [-38, 517],
            [32, 548],
            [165, 392]
        ],
        [
            [85104, 55551],
            [28, -392],
            [16, -332],
            [-94, -540],
            [-102, 602],
            [-130, -300],
            [89, -435],
            [-79, -277],
            [-327, 343],
            [-78, 428],
            [84, 280],
            [-176, 280],
            [-87, -245],
            [-131, 23],
            [-205, -330],
            [-46, 173],
            [109, 498],
            [175, 166],
            [151, 223],
            [98, -268],
            [212, 162],
            [45, 264],
            [196, 15],
            [-16, 457],
            [225, -280],
            [23, -297],
            [20, -218]
        ],
        [
            [72560, 54241],
            [-242, -135],
            [-132, 470],
            [-49, 849],
            [126, 959],
            [192, -328],
            [129, -416],
            [134, -616],
            [-42, -615],
            [-116, -168]
        ],
        [
            [33073, 56553],
            [-232, -65],
            [-50, 53],
            [81, 163],
            [-6, 233],
            [160, 77],
            [58, -21],
            [-11, -440]
        ],
        [
            [84439, 56653],
            [-100, -195],
            [-87, -373],
            [-87, -175],
            [-171, 409],
            [57, 158],
            [70, 165],
            [30, 367],
            [153, 35],
            [-44, -398],
            [205, 570],
            [-26, -563]
        ],
        [
            [82917, 56084],
            [-369, -561],
            [136, 414],
            [200, 364],
            [167, 409],
            [146, 587],
            [49, -482],
            [-183, -325],
            [-146, -406]
        ],
        [
            [83856, 57606],
            [166, -183],
            [177, 1],
            [-5, -247],
            [-129, -251],
            [-176, -178],
            [-10, 275],
            [20, 301],
            [-43, 282]
        ],
        [
            [84861, 57766],
            [78, -660],
            [-214, 157],
            [5, -199],
            [68, -364],
            [-132, -133],
            [-11, 416],
            [-84, 31],
            [-43, 357],
            [163, -47],
            [-4, 224],
            [-169, 451],
            [266, -13],
            [77, -220]
        ],
        [
            [83757, 58301],
            [-74, -510],
            [-119, 295],
            [-142, 450],
            [238, -22],
            [97, -213]
        ],
        [
            [83700, 61512],
            [171, -168],
            [85, 153],
            [26, -150],
            [-46, -245],
            [95, -423],
            [-73, -491],
            [-164, -196],
            [-43, -476],
            [62, -471],
            [147, -65],
            [123, 70],
            [347, -328],
            [-27, -321],
            [91, -142],
            [-29, -272],
            [-216, 290],
            [-103, 310],
            [-71, -217],
            [-177, 354],
            [-253, -87],
            [-138, 130],
            [14, 244],
            [87, 151],
            [-83, 136],
            [-36, -213],
            [-137, 340],
            [-41, 257],
            [-11, 566],
            [112, -195],
            [29, 925],
            [90, 535],
            [169, -1]
        ],
        [
            [31780, 61349],
            [-71, -149],
            [-209, 4],
            [-163, -21],
            [-16, 253],
            [40, 86],
            [227, -3],
            [142, -52],
            [50, -118]
        ],
        [
            [28638, 61137],
            [-84, -99],
            [-156, 95],
            [-159, 215],
            [34, 135],
            [116, 41],
            [64, -20],
            [187, -53],
            [147, -142],
            [46, -161],
            [-195, -11]
        ],
        [
            [30080, 62227],
            [34, 101],
            [217, -3],
            [165, -152],
            [73, 15],
            [50, -209],
            [152, 11],
            [-9, -176],
            [124, -21],
            [136, -217],
            [-103, -240],
            [-132, 128],
            [-127, -25],
            [-92, 28],
            [-50, -107],
            [-106, -37],
            [-43, 144],
            [-92, -85],
            [-111, -405],
            [-71, 94],
            [-14, 170]
        ],
        [
            [30081, 61241],
            [-185, 100],
            [-131, -41],
            [-169, 43],
            [-130, -110],
            [-149, 184],
            [24, 190],
            [256, -82],
            [210, -47],
            [100, 131],
            [-127, 256],
            [2, 226],
            [-175, 92],
            [62, 163],
            [170, -26],
            [241, -93]
        ],
        [
            [80649, 61615],
            [-240, -284],
            [-228, 183],
            [-8, 509],
            [137, 267],
            [304, 166],
            [159, -14],
            [62, -226],
            [-122, -260],
            [-64, -341]
        ],
        [
            [6794, 61855],
            [-41, -99],
            [-69, 84],
            [8, 165],
            [-46, 216],
            [14, 65],
            [48, 97],
            [-19, 116],
            [16, 55],
            [21, -11],
            [107, -100],
            [49, -51],
            [45, -79],
            [71, -207],
            [-7, -33],
            [-108, -126],
            [-89, -92]
        ],
        [
            [6645, 62777],
            [-94, -43],
            [-47, 125],
            [-32, 48],
            [-3, 37],
            [27, 50],
            [99, -56],
            [73, -90],
            [-23, -71]
        ],
        [
            [6456, 63091],
            [-9, -63],
            [-149, 17],
            [21, 72],
            [137, -26]
        ],
        [
            [6207, 63177],
            [-15, -34],
            [-19, 8],
            [-97, 21],
            [-35, 133],
            [-11, 24],
            [74, 82],
            [23, -38],
            [80, -196]
        ],
        [
            [5737, 63567],
            [-33, -58],
            [-93, 107],
            [14, 43],
            [43, 58],
            [64, -12],
            [5, -138]
        ],
        [
            [27867, 64030],
            [110, -216],
            [260, 66],
            [98, -138],
            [235, -366],
            [173, -267],
            [92, 8],
            [165, -120],
            [-20, -167],
            [205, -24],
            [210, -242],
            [-33, -138],
            [-185, -75],
            [-187, -29],
            [-191, 46],
            [-398, -57],
            [186, 329],
            [-113, 154],
            [-179, 39],
            [-96, 171],
            [-66, 336],
            [-157, -23],
            [-259, 159],
            [-83, 124],
            [-362, 91],
            [-97, 115],
            [104, 148],
            [-273, 30],
            [-199, -307],
            [-115, -8],
            [-40, -144],
            [-138, -65],
            [-118, 56],
            [146, 183],
            [60, 213],
            [126, 131],
            [142, 116],
            [210, 56],
            [67, 65],
            [240, -42],
            [219, -7],
            [261, -201]
        ],
        [
            [28462, 64617],
            [-68, -29],
            [-70, 340],
            [-104, 171],
            [60, 375],
            [84, -23],
            [97, -491],
            [1, -343]
        ],
        [
            [83659, 64045],
            [-119, -485],
            [-146, 499],
            [-32, 438],
            [163, 581],
            [223, 447],
            [127, -176],
            [-49, -357],
            [-167, -947]
        ],
        [
            [28383, 66284],
            [-303, -95],
            [-19, 219],
            [130, 47],
            [184, -18],
            [8, -153]
        ],
        [
            [28611, 66290],
            [-48, -420],
            [-51, 75],
            [4, 309],
            [-124, 234],
            [-1, 67],
            [220, -265]
        ],
        [
            [87399, 70756],
            [35, -203],
            [-156, -357],
            [-114, 189],
            [-143, -137],
            [-73, -346],
            [-181, 168],
            [2, 281],
            [154, 352],
            [158, -68],
            [114, 248],
            [204, -127]
        ],
        [
            [59437, 71293],
            [8, -48],
            [-285, -240],
            [-136, 77],
            [-64, 237],
            [132, 22]
        ],
        [
            [59092, 71341],
            [19, 3],
            [40, 143],
            [200, -8],
            [253, 176],
            [-188, -251],
            [21, -111]
        ],
        [
            [56583, 71675],
            [152, -199],
            [216, 34],
            [207, -42],
            [-7, -103],
            [151, 71],
            [-35, -175],
            [-400, -50],
            [3, 98],
            [-339, 115],
            [52, 251]
        ],
        [
            [54311, 73167],
            [-100, -465],
            [41, -183],
            [-58, -303],
            [-213, 222],
            [-141, 64],
            [-387, 300],
            [38, 304],
            [325, -54],
            [284, 64],
            [211, 51]
        ],
        [
            [52558, 74927],
            [166, -419],
            [-39, -782],
            [-126, 38],
            [-113, -197],
            [-105, 156],
            [-11, 713],
            [-64, 338],
            [153, -30],
            [139, 183]
        ],
        [
            [89159, 72524],
            [-104, -472],
            [48, -296],
            [-145, -416],
            [-355, -278],
            [-488, -36],
            [-396, -675],
            [-186, 227],
            [-12, 442],
            [-483, -130],
            [-329, -279],
            [-325, -11],
            [282, -435],
            [-186, -1004],
            [-179, -248],
            [-135, 229],
            [69, 533],
            [-176, 172],
            [-113, 405],
            [263, 182],
            [145, 371],
            [280, 306],
            [203, 403],
            [553, 177],
            [297, -121],
            [291, 1050],
            [185, -282],
            [408, 591],
            [158, 229],
            [174, 723],
            [-47, 664],
            [117, 374],
            [295, 108],
            [152, -819],
            [-9, -479],
            [-256, -595],
            [4, -610]
        ],
        [
            [52655, 75484],
            [-92, -456],
            [-126, 120],
            [-64, 398],
            [56, 219],
            [179, 226],
            [47, -507]
        ],
        [
            [89974, 76679],
            [195, -126],
            [197, 250],
            [62, -663],
            [-412, -162],
            [-244, -587],
            [-436, 404],
            [-152, -646],
            [-308, -9],
            [-39, 587],
            [138, 455],
            [296, 33],
            [81, 817],
            [83, 460],
            [326, -615],
            [213, -198]
        ],
        [
            [32315, 78082],
            [202, -79],
            [257, 16],
            [-137, -242],
            [-102, -38],
            [-353, 250],
            [-69, 198],
            [105, 183],
            [97, -288]
        ],
        [
            [32831, 79592],
            [-135, -11],
            [-360, 186],
            [-258, 279],
            [96, 49],
            [365, -148],
            [284, -247],
            [8, -108]
        ],
        [
            [15692, 79240],
            [-140, -82],
            [-456, 269],
            [-84, 209],
            [-248, 207],
            [-50, 168],
            [-286, 107],
            [-107, 321],
            [24, 137],
            [291, -129],
            [171, -89],
            [261, -63],
            [94, -204],
            [138, -280],
            [277, -244],
            [115, -327]
        ],
        [
            [34407, 80527],
            [-184, -517],
            [181, 199],
            [187, -126],
            [-98, -206],
            [247, -162],
            [128, 144],
            [277, -182],
            [-86, -433],
            [194, 101],
            [36, -313],
            [86, -367],
            [-117, -520],
            [-125, -22],
            [-183, 111],
            [60, 484],
            [-77, 75],
            [-322, -513],
            [-166, 21],
            [196, 277],
            [-267, 144],
            [-298, -35],
            [-539, 18],
            [-43, 175],
            [173, 208],
            [-121, 160],
            [234, 356],
            [287, 941],
            [172, 336],
            [241, 204],
            [129, -26],
            [-54, -160],
            [-148, -372]
        ],
        [
            [13136, 82508],
            [267, 47],
            [-84, -671],
            [242, -475],
            [-111, 1],
            [-167, 270],
            [-103, 272],
            [-140, 184],
            [-51, 260],
            [16, 188],
            [131, -76]
        ],
        [
            [89901, 80562],
            [280, -1046],
            [-411, 195],
            [-171, -854],
            [271, -605],
            [-8, -413],
            [-211, 356],
            [-182, -457],
            [-51, 496],
            [31, 575],
            [-32, 638],
            [64, 446],
            [13, 790],
            [-163, 581],
            [24, 808],
            [257, 271],
            [-110, 274],
            [123, 83],
            [73, -391],
            [96, -569],
            [-7, -581],
            [114, -597]
        ],
        [
            [47896, 83153],
            [233, 24],
            [298, -365],
            [-149, -406]
        ],
        [
            [48278, 82406],
            [46, -422],
            [-210, -528],
            [-493, -349],
            [-393, 89],
            [225, 617],
            [-145, 601],
            [378, 463],
            [210, 276]
        ],
        [
            [53524, 83435],
            [-166, -478],
            [-291, 333],
            [-39, 246],
            [408, 195],
            [88, -296]
        ],
        [
            [7498, 84325],
            [-277, -225],
            [-142, 152],
            [-43, 277],
            [252, 210],
            [148, 90],
            [185, -40],
            [117, -183],
            [-240, -281]
        ],
        [
            [49420, 83612],
            [270, -759]
        ],
        [
            [49690, 82853],
            [190, -95],
            [171, -673],
            [79, -233],
            [337, -113],
            [-34, -378],
            [-142, -173],
            [111, -305],
            [-250, -310],
            [-371, 6],
            [-473, -163],
            [-130, 116],
            [-183, -276],
            [-257, 67],
            [-195, -226],
            [-148, 118],
            [407, 621],
            [249, 127]
        ],
        [
            [49051, 80963],
            [-436, 99]
        ],
        [
            [48615, 81062],
            [-79, 235],
            [291, 183],
            [-152, 319],
            [52, 387]
        ],
        [
            [48727, 82186],
            [414, -54]
        ],
        [
            [49141, 82132],
            [40, 343]
        ],
        [
            [49181, 82475],
            [-190, 372]
        ],
        [
            [48991, 82847],
            [-337, 104],
            [-66, 160],
            [101, 264],
            [-92, 163],
            [-149, -279],
            [-17, 569],
            [-140, 301],
            [101, 611],
            [216, 480],
            [222, -47],
            [335, 49],
            [-297, -639],
            [283, 81],
            [304, -3],
            [-72, -481],
            [-250, -530],
            [287, -38]
        ],
        [
            [4006, 85976],
            [-171, -92],
            [-182, 110],
            [-168, 161],
            [274, 101],
            [220, -54],
            [27, -226]
        ],
        [
            [27981, 87304],
            [-108, -310],
            [-123, 50],
            [-73, 176],
            [13, 41],
            [107, 177],
            [114, -13],
            [70, -121]
        ],
        [
            [27250, 87631],
            [-325, -326],
            [-196, 13],
            [-61, 160],
            [207, 273],
            [381, -6],
            [-6, -114]
        ],
        [
            [2297, 88264],
            [171, -113],
            [173, 61],
            [225, -156],
            [276, -79],
            [-23, -64],
            [-211, -125],
            [-211, 128],
            [-106, 107],
            [-245, -34],
            [-66, 52],
            [17, 223]
        ],
        [
            [26344, 89371],
            [51, -259],
            [143, 91],
            [161, -155],
            [304, -203],
            [318, -184],
            [25, -281],
            [204, 46],
            [199, -196],
            [-247, -186],
            [-432, 142],
            [-156, 266],
            [-275, -314],
            [-396, -306],
            [-95, 346],
            [-377, -57],
            [242, 292],
            [35, 465],
            [95, 542],
            [201, -49]
        ],
        [
            [45969, 89843],
            [-64, -382],
            [314, -403],
            [-361, -451],
            [-801, -405],
            [-240, -107],
            [-365, 87],
            [-775, 187],
            [273, 261],
            [-605, 289],
            [492, 114],
            [-12, 174],
            [-583, 137],
            [188, 385],
            [421, 87],
            [433, -400],
            [422, 321],
            [349, -167],
            [453, 315],
            [461, -42]
        ],
        [
            [28926, 90253],
            [-312, -30],
            [-69, 289],
            [118, 331],
            [255, 82],
            [217, -163],
            [3, -253],
            [-32, -82],
            [-180, -174]
        ],
        [
            [1385, 89919],
            [187, -147],
            [-64, 429],
            [754, -88],
            [544, -553],
            [-276, -257],
            [-455, -61],
            [-7, -578],
            [-111, -122],
            [-260, 17],
            [-212, 206],
            [-369, 172],
            [-62, 257],
            [-283, 96],
            [-315, -76],
            [-151, 207],
            [60, 219],
            [-333, -140],
            [126, -278],
            [-158, -251],
            [0, 2354],
            [681, -451],
            [728, -588],
            [-24, -367]
        ],
        [
            [23431, 91410],
            [-173, -207],
            [-374, 179],
            [-226, -65],
            [-380, 266],
            [245, 183],
            [194, 256],
            [295, -168],
            [166, -106],
            [84, -112],
            [169, -226]
        ],
        [
            [99999, 92429],
            [-305, -30],
            [-49, 187],
            [354, 247],
            [0, -404]
        ],
        [
            [363, 92465],
            [-363, -36],
            [0, 404],
            [36, 24],
            [235, -1],
            [402, -169],
            [-24, -81],
            [-286, -141]
        ],
        [
            [26228, 91219],
            [16, 648],
            [394, -45]
        ],
        [
            [26638, 91822],
            [411, -87],
            [373, -293],
            [17, -293],
            [-207, -315],
            [196, -316],
            [-36, -288],
            [-544, -413],
            [-386, -91],
            [-287, 178],
            [-83, -297],
            [-268, -498]
        ],
        [
            [25824, 89109],
            [-81, -258],
            [-322, -400]
        ],
        [
            [25421, 88451],
            [-397, -39],
            [-220, -250],
            [-18, -384],
            [-323, -74],
            [-340, -479],
            [-301, -665],
            [-108, -466]
        ],
        [
            [23714, 86094],
            [-15, -686],
            [408, -99]
        ],
        [
            [24107, 85309],
            [125, -553],
            [130, -448],
            [388, 117],
            [517, -256],
            [277, -225],
            [199, -279]
        ],
        [
            [25743, 83665],
            [348, -162],
            [294, -249]
        ],
        [
            [26385, 83254],
            [459, -34],
            [302, -58],
            [-45, -511],
            [86, -594],
            [201, -661],
            [414, -561],
            [214, 192],
            [150, 607],
            [-145, 934],
            [-196, 311],
            [445, 276],
            [314, 415],
            [154, 411]
        ],
        [
            [28738, 83981],
            [-22, 395],
            [-189, 502]
        ],
        [
            [28527, 84878],
            [-338, 445],
            [328, 619],
            [-121, 535],
            [-93, 922],
            [194, 137],
            [476, -161],
            [286, -57],
            [230, 155],
            [258, -200],
            [342, -343],
            [85, -229],
            [495, -45],
            [-8, -496],
            [92, -747],
            [254, -92],
            [201, -348],
            [402, 328],
            [266, 652],
            [184, 274],
            [216, -527],
            [362, -754],
            [307, -709],
            [-112, -371],
            [370, -333],
            [250, -338],
            [442, -152],
            [179, -189],
            [110, -500],
            [216, -78],
            [112, -223],
            [20, -664],
            [-202, -222],
            [-199, -207],
            [-458, -210],
            [-349, -486],
            [-470, -96],
            [-594, 125],
            [-417, 4],
            [-287, -41],
            [-233, -424],
            [-354, -262],
            [-401, -782],
            [-320, -545],
            [236, 97],
            [446, 776],
            [583, 493]
        ],
        [
            [31513, 79609],
            [416, 59],
            [245, -290]
        ],
        [
            [32174, 79378],
            [-262, -397],
            [88, -637],
            [91, -446],
            [361, -295],
            [459, 86],
            [278, 664],
            [19, -429],
            [180, -214],
            [-344, -387],
            [-615, -351],
            [-276, -239],
            [-310, -426],
            [-211, 44],
            [-11, 500],
            [483, 488],
            [-445, -19],
            [-309, -72]
        ],
        [
            [31350, 77248],
            [48, -194],
            [-296, -286],
            [-286, -204],
            [-293, -175]
        ],
        [
            [30523, 76389],
            [-159, -386],
            [-35, -98]
        ],
        [
            [30329, 75905],
            [-3, -313],
            [92, -313],
            [115, -15],
            [-29, 216],
            [83, -131],
            [-22, -169],
            [-188, -96]
        ],
        [
            [30377, 75084],
            [-133, 12],
            [-205, -104]
        ],
        [
            [30039, 74992],
            [-121, -29],
            [-162, -29],
            [-231, -171],
            [408, 111],
            [82, -112],
            [-389, -177],
            [-177, -1],
            [8, 72],
            [-84, -164],
            [82, -27],
            [-60, -424],
            [-203, -455],
            [-20, 152]
        ],
        [
            [29172, 73738],
            [-61, 31],
            [-91, 147]
        ],
        [
            [29020, 73916],
            [57, -318]
        ],
        [
            [29077, 73598],
            [66, -106],
            [8, -222]
        ],
        [
            [29151, 73270],
            [-89, -230],
            [-157, -472],
            [-25, 24],
            [86, 402]
        ],
        [
            [28966, 72994],
            [-142, 226],
            [-33, 490]
        ],
        [
            [28791, 73710],
            [-53, -255],
            [59, -375]
        ],
        [
            [28797, 73080],
            [-175, 88],
            [183, -186]
        ],
        [
            [28805, 72982],
            [12, -562],
            [79, -41],
            [29, -204],
            [39, -591],
            [-176, -439],
            [-288, -175],
            [-182, -346],
            [-139, -38],
            [-141, -217],
            [-39, -199],
            [-305, -383],
            [-157, -281],
            [-131, -351],
            [-43, -419],
            [50, -411],
            [92, -505],
            [124, -418],
            [1, -256],
            [132, -685],
            [-9, -398],
            [-12, -230],
            [-69, -361]
        ],
        [
            [27672, 65472],
            [-83, -74],
            [-137, 71]
        ],
        [
            [27452, 65469],
            [-44, 259]
        ],
        [
            [27408, 65728],
            [-106, 136],
            [-147, 508]
        ],
        [
            [27155, 66372],
            [-129, 452],
            [-42, 231],
            [57, 393],
            [-77, 325],
            [-217, 494]
        ],
        [
            [26747, 68267],
            [-108, 91],
            [-281, -269]
        ],
        [
            [26358, 68089],
            [-49, 30]
        ],
        [
            [26309, 68119],
            [-135, 276],
            [-174, 146]
        ],
        [
            [26000, 68541],
            [-314, -75],
            [-247, 66],
            [-212, -41]
        ],
        [
            [25227, 68491],
            [-118, -83],
            [54, -166]
        ],
        [
            [25163, 68242],
            [-5, -240],
            [59, -117],
            [-53, -77],
            [-103, 87],
            [-104, -112],
            [-202, 18]
        ],
        [
            [24755, 67801],
            [-207, 313],
            [-242, -74]
        ],
        [
            [24306, 68040],
            [-202, 137],
            [-173, -42],
            [-234, -138],
            [-253, -438],
            [-276, -255],
            [-152, -282],
            [-63, -266],
            [-3, -407],
            [14, -284],
            [52, -201]
        ],
        [
            [23016, 65864],
            [1, -1],
            [-1, -1],
            [-107, -516]
        ],
        [
            [22909, 65346],
            [-49, -426],
            [-20, -791],
            [-27, -289],
            [48, -322],
            [86, -288],
            [56, -458],
            [184, -440],
            [65, -337],
            [109, -291],
            [295, -157],
            [114, -247],
            [244, 165],
            [212, 60],
            [208, 106],
            [175, 101],
            [176, 241],
            [67, 345],
            [22, 496],
            [48, 173],
            [188, 155],
            [294, 137],
            [246, -21],
            [169, 50],
            [66, -125],
            [-9, -285],
            [-149, -351],
            [-66, -360],
            [51, -103],
            [-42, -255],
            [-69, -461],
            [-71, 152],
            [-58, -10]
        ],
        [
            [25472, 61510],
            [1, -87],
            [53, -3],
            [-5, -160],
            [-45, -256],
            [24, -91],
            [-29, -212],
            [18, -56],
            [-32, -299],
            [-55, -156],
            [-50, -19],
            [-55, -205]
        ],
        [
            [25297, 59966],
            [90, -107],
            [24, 88],
            [82, -75]
        ],
        [
            [25493, 59872],
            [29, -23],
            [61, 104],
            [79, 8],
            [26, -48],
            [43, 29],
            [129, -53]
        ],
        [
            [25860, 59889],
            [128, 16],
            [90, 65]
        ],
        [
            [26078, 59970],
            [32, 66],
            [89, -31],
            [66, -40],
            [73, 14],
            [55, 51],
            [127, -82],
            [44, -13],
            [85, -110],
            [80, -132],
            [101, -91],
            [73, -162]
        ],
        [
            [26903, 59440],
            [-24, -57],
            [-14, -132],
            [29, -216],
            [-64, -202],
            [-30, -237],
            [-9, -261],
            [15, -152],
            [7, -266],
            [-43, -58],
            [-26, -253],
            [19, -156],
            [-56, -151],
            [12, -159],
            [43, -97]
        ],
        [
            [26762, 57043],
            [70, -321],
            [108, -238],
            [130, -252]
        ],
        [
            [27070, 56232],
            [100, -212]
        ],
        [
            [27170, 56020],
            [-6, -125],
            [111, -27]
        ],
        [
            [27275, 55868],
            [26, 48],
            [77, -145],
            [136, 42],
            [119, 150],
            [168, 119],
            [95, 176],
            [153, -34],
            [-10, -58],
            [155, -21],
            [124, -102],
            [90, -177],
            [105, -164]
        ],
        [
            [28513, 55702],
            [143, -18],
            [209, 412],
            [114, 63],
            [3, 195],
            [51, 500],
            [159, 274],
            [175, 11],
            [22, 123],
            [218, -49],
            [218, 298],
            [109, 132],
            [134, 285],
            [98, -36],
            [73, -156],
            [-54, -199]
        ],
        [
            [30185, 57537],
            [-8, -139],
            [-163, -69],
            [91, -268],
            [-3, -309]
        ],
        [
            [30102, 56752],
            [-123, -343],
            [105, -469]
        ],
        [
            [30084, 55940],
            [120, 38],
            [62, 427],
            [-86, 208],
            [-14, 447],
            [346, 241],
            [-38, 278],
            [97, 186],
            [100, -415],
            [195, -9],
            [180, -330],
            [11, -195],
            [249, -6],
            [297, 61],
            [159, -264]
        ],
        [
            [31762, 56607],
            [213, -73],
            [155, 184]
        ],
        [
            [32130, 56718],
            [4, 149],
            [344, 35],
            [333, 9],
            [-236, -175],
            [95, -279],
            [222, -44],
            [210, -291],
            [45, -473],
            [144, 13],
            [109, -139]
        ],
        [
            [33400, 55523],
            [183, -217],
            [171, -385],
            [8, -304],
            [105, -14],
            [149, -289],
            [109, -205]
        ],
        [
            [34125, 54109],
            [333, -119],
            [30, 107],
            [225, 43],
            [298, -159]
        ],
        [
            [35011, 53981],
            [95, -65],
            [204, -140],
            [294, -499],
            [46, -242]
        ],
        [
            [35650, 53035],
            [95, 28],
            [69, -327],
            [155, -1033],
            [149, -97],
            [7, -408],
            [-208, -487],
            [86, -178],
            [491, -92],
            [10, -593],
            [211, 388],
            [349, -212],
            [462, -361],
            [135, -346],
            [-45, -327],
            [323, 182],
            [540, -313],
            [415, 23],
            [411, -489],
            [355, -662],
            [214, -170],
            [237, -24],
            [101, -186],
            [94, -752],
            [46, -358],
            [-110, -977],
            [-142, -385],
            [-391, -822],
            [-177, -668],
            [-206, -513],
            [-69, -11],
            [-78, -435],
            [20, -1107],
            [-77, -910],
            [-30, -390],
            [-88, -233],
            [-49, -790],
            [-282, -771],
            [-47, -610],
            [-225, -256],
            [-65, -355],
            [-302, 2],
            [-437, -227],
            [-195, -263],
            [-311, -173],
            [-327, -470],
            [-235, -586],
            [-41, -441],
            [46, -326],
            [-51, -597],
            [-63, -289],
            [-195, -325],
            [-308, -1040],
            [-244, -468],
            [-189, -277],
            [-127, -562],
            [-183, -337]
        ],
        [
            [35174, 30629],
            [-121, -372],
            [-313, -328],
            [-205, 118],
            [-151, -63],
            [-256, 253],
            [-189, -19],
            [-169, 327]
        ],
        [
            [33770, 30545],
            [-19, -308],
            [353, -506],
            [-38, -408],
            [173, -257],
            [-14, -289],
            [-267, -757],
            [-412, -317],
            [-557, -123],
            [-305, 59],
            [59, -352],
            [-57, -442],
            [51, -298],
            [-167, -208],
            [-284, -82],
            [-267, 216],
            [-108, -155],
            [39, -587],
            [188, -178],
            [152, 186],
            [82, -307],
            [-255, -183],
            [-223, -367],
            [-41, -595],
            [-66, -316],
            [-262, -2],
            [-218, -302],
            [-80, -443]
        ],
        [
            [31227, 23224],
            [274, -433],
            [265, -119]
        ],
        [
            [31766, 22672],
            [-96, -531],
            [-328, -333],
            [-180, -692],
            [-254, -234],
            [-113, -276],
            [89, -614],
            [185, -342],
            [-117, 30]
        ],
        [
            [30952, 19680],
            [-247, 4],
            [-134, -145],
            [-250, -213],
            [-45, -552],
            [-118, -14],
            [-313, 192],
            [-318, 412],
            [-346, 338],
            [-87, 374],
            [79, 346],
            [-140, 393],
            [-36, 1007],
            [119, 568],
            [293, 457],
            [-422, 172],
            [265, 522],
            [94, 982],
            [309, -208],
            [145, 1224],
            [-186, 157],
            [-87, -738],
            [-175, 83],
            [87, 845],
            [95, 1095],
            [127, 404]
        ],
        [
            [29661, 27385],
            [-79, 576],
            [-23, 666]
        ],
        [
            [29559, 28627],
            [117, 19],
            [170, 954],
            [192, 945],
            [118, 881],
            [-64, 885],
            [83, 487],
            [-34, 730],
            [163, 721],
            [50, 1143],
            [89, 1227],
            [87, 1321],
            [-20, 967],
            [-58, 832]
        ],
        [
            [30452, 39739],
            [-279, 340],
            [-24, 242],
            [-551, 593],
            [-498, 646],
            [-214, 365],
            [-115, 488],
            [46, 170],
            [-236, 775],
            [-274, 1090],
            [-262, 1177],
            [-114, 269],
            [-87, 435],
            [-216, 386],
            [-198, 239],
            [90, 264],
            [-134, 563],
            [86, 414],
            [221, 373]
        ],
        [
            [27693, 48568],
            [148, 442],
            [-60, 258],
            [-106, -275],
            [-166, 259],
            [56, 167],
            [-47, 536],
            [97, 89],
            [52, 368],
            [105, 381],
            [-20, 241],
            [153, 126],
            [190, 236]
        ],
        [
            [28095, 51396],
            [-37, 183],
            [103, 44],
            [-12, 296],
            [65, 214],
            [138, 40],
            [117, 371],
            [106, 310],
            [-102, 141],
            [52, 343],
            [-62, 540],
            [59, 155],
            [-44, 500],
            [-112, 315]
        ],
        [
            [28366, 54848],
            [-93, 170],
            [-59, 319],
            [68, 158],
            [-70, 40]
        ],
        [
            [28212, 55535],
            [-52, 195],
            [-138, 165]
        ],
        [
            [28022, 55895],
            [-122, -38],
            [-56, -205],
            [-112, -149],
            [-61, -20],
            [-27, -123],
            [132, -321],
            [-75, -76],
            [-40, -87],
            [-130, -30],
            [-48, 353],
            [-36, -101],
            [-92, 35],
            [-56, 238],
            [-114, 39],
            [-72, 69],
            [-119, -1],
            [-8, -128],
            [-32, 89]
        ],
        [
            [26954, 55439],
            [-151, 131],
            [-56, 124],
            [32, 103],
            [-11, 130],
            [-77, 142],
            [-109, 116],
            [-95, 76],
            [-19, 173],
            [-73, 105],
            [18, -172],
            [-55, -141],
            [-64, 164],
            [-89, 58],
            [-38, 120],
            [2, 179],
            [36, 187],
            [-78, 83],
            [64, 114]
        ],
        [
            [26191, 57131],
            [-96, 186],
            [-130, 238],
            [-61, 200],
            [-117, 185],
            [-140, 267]
        ],
        [
            [25647, 58207],
            [31, 92],
            [46, -89]
        ],
        [
            [25724, 58210],
            [21, 41]
        ],
        [
            [25745, 58251],
            [-48, 185]
        ],
        [
            [25697, 58436],
            [-84, 52],
            [-31, -140]
        ],
        [
            [25582, 58348],
            [-161, 9],
            [-100, 57],
            [-115, 117],
            [-154, 37],
            [-79, 127]
        ],
        [
            [24973, 58695],
            [-142, 103],
            [-174, 11],
            [-127, 117],
            [-149, 244]
        ],
        [
            [24381, 59170],
            [-314, 636]
        ],
        [
            [24067, 59806],
            [-144, 192],
            [-226, 154]
        ],
        [
            [23697, 60152],
            [-156, -43],
            [-223, -223],
            [-140, -58],
            [-196, 156],
            [-208, 112],
            [-260, 271],
            [-208, 83],
            [-314, 275],
            [-233, 282],
            [-70, 158],
            [-155, 35],
            [-284, 187],
            [-116, 270],
            [-299, 335],
            [-139, 373],
            [-66, 288],
            [93, 57],
            [-29, 169],
            [64, 153],
            [1, 204],
            [-93, 266],
            [-25, 235],
            [-94, 298],
            [-244, 587],
            [-280, 462],
            [-135, 368],
            [-238, 241],
            [-51, 145],
            [42, 365]
        ],
        [
            [19641, 66203],
            [-142, 137],
            [-164, 288]
        ],
        [
            [19335, 66628],
            [-69, 412],
            [-149, 48],
            [-162, 311],
            [-130, 288],
            [-12, 184],
            [-149, 446],
            [-99, 452],
            [5, 227]
        ],
        [
            [18570, 68996],
            [-201, 235],
            [-93, -26]
        ],
        [
            [18276, 69205],
            [-159, 163],
            [-44, -240],
            [46, -284],
            [27, -444],
            [95, -243],
            [206, -407],
            [46, -139],
            [42, -42],
            [37, -203],
            [49, 8],
            [56, -381],
            [85, -150],
            [59, -210],
            [174, -300],
            [92, -550],
            [83, -259],
            [77, -277],
            [15, -311],
            [134, -20],
            [112, -268],
            [100, -264],
            [-6, -106],
            [-117, -217],
            [-49, 3],
            [-74, 359]
        ],
        [
            [19362, 64423],
            [-182, 337],
            [-200, 286]
        ],
        [
            [18980, 65046],
            [-142, 150],
            [9, 432],
            [-42, 320],
            [-132, 183],
            [-191, 264],
            [-37, -76],
            [-70, 154],
            [-171, 143],
            [-164, 343],
            [20, 44],
            [115, -33],
            [103, 221],
            [10, 266],
            [-214, 422],
            [-163, 163],
            [-102, 369],
            [-103, 388],
            [-129, 472],
            [-113, 531]
        ],
        [
            [17464, 69802],
            [-46, 302],
            [-180, 340],
            [-130, 71],
            [-30, 169],
            [-156, 30],
            [-100, 159],
            [-258, 59]
        ],
        [
            [16564, 70932],
            [-70, 95],
            [-34, 324]
        ],
        [
            [16460, 71351],
            [-270, 594],
            [-231, 821],
            [10, 137],
            [-123, 195],
            [-215, 495],
            [-38, 482],
            [-148, 323],
            [61, 489],
            [-10, 507],
            [-89, 453],
            [109, 557]
        ],
        [
            [15516, 76404],
            [67, 1072]
        ],
        [
            [15583, 77476],
            [-50, 792],
            [-88, 506],
            [-80, 274],
            [33, 115],
            [402, -200],
            [148, -558]
        ],
        [
            [15948, 78405],
            [68, 156],
            [-44, 485],
            [-94, 484]
        ],
        [
            [15878, 79530],
            [-38, 1],
            [-537, 581],
            [-199, 255]
        ],
        [
            [15104, 80367],
            [-503, 245],
            [-155, 523],
            [40, 362]
        ],
        [
            [14486, 81497],
            [-356, 252],
            [-48, 476],
            [-336, 429],
            [-6, 304]
        ],
        [
            [13740, 82958],
            [-153, 223],
            [-245, 188],
            [-78, 515],
            [-358, 478],
            [-150, 558],
            [-267, 38],
            [-441, 15],
            [-326, 170],
            [-574, 613],
            [-266, 112],
            [-486, 211]
        ],
        [
            [10396, 86079],
            [-385, -50],
            [-546, 271]
        ],
        [
            [9465, 86300],
            [-330, 252],
            [-309, -125],
            [58, -411],
            [-154, -38],
            [-321, -123],
            [-245, -199]
        ],
        [
            [8164, 85656],
            [-307, -126],
            [-40, 348]
        ],
        [
            [7817, 85878],
            [125, 580],
            [295, 182],
            [-76, 148],
            [-354, -329],
            [-190, -394],
            [-400, -420],
            [203, -287],
            [-262, -424]
        ],
        [
            [7158, 84934],
            [-299, -247],
            [-278, -181]
        ],
        [
            [6581, 84506],
            [-69, -261],
            [-434, -305],
            [-87, -278],
            [-325, -252],
            [-191, 45],
            [-259, -165],
            [-282, -201],
            [-231, -197],
            [-477, -169],
            [-43, 99],
            [304, 276],
            [271, 182],
            [296, 324],
            [345, 66],
            [137, 243],
            [385, 353],
            [62, 119],
            [205, 208],
            [48, 448],
            [141, 349],
            [-320, -179],
            [-90, 102],
            [-150, -215],
            [-181, 300],
            [-75, -212],
            [-104, 294],
            [-278, -236],
            [-170, 0],
            [-24, 352]
        ],
        [
            [4985, 85596],
            [50, 217],
            [-179, 210]
        ],
        [
            [4856, 86023],
            [-361, -113],
            [-235, 277],
            [-190, 142],
            [-1, 334],
            [-214, 252],
            [108, 340],
            [226, 330],
            [99, 303],
            [225, 43],
            [191, -94],
            [224, 285],
            [201, -51],
            [212, 183],
            [-52, 270],
            [-155, 106],
            [205, 228],
            [-170, -7],
            [-295, -128],
            [-85, -131],
            [-219, 131],
            [-392, -67],
            [-407, 142],
            [-117, 238],
            [-351, 343],
            [390, 247],
            [620, 289],
            [228, 0]
        ],
        [
            [4541, 89915],
            [-38, -295],
            [586, 22]
        ],
        [
            [5089, 89642],
            [-225, 366]
        ],
        [
            [4864, 90008],
            [-342, 226],
            [-197, 295]
        ],
        [
            [4325, 90529],
            [-267, 252],
            [-381, 187],
            [155, 309],
            [493, 19],
            [350, 270],
            [66, 287],
            [284, 281],
            [271, 68],
            [526, 262],
            [256, -40],
            [427, 315],
            [421, -124],
            [201, -266],
            [123, 114],
            [469, -35],
            [-16, -136],
            [425, -101],
            [283, 59],
            [585, -186],
            [534, -56],
            [214, -77],
            [370, 96],
            [421, -177],
            [302, -83]
        ],
        [
            [10837, 91767],
            [518, -142]
        ],
        [
            [11355, 91625],
            [438, -284],
            [289, -55]
        ],
        [
            [12082, 91286],
            [244, 247],
            [336, 184],
            [413, -72],
            [416, 259],
            [455, 148],
            [191, -245],
            [207, 138],
            [62, 278],
            [192, -63],
            [470, -530],
            [369, 401]
        ],
        [
            [15437, 92031],
            [38, -448],
            [341, 96]
        ],
        [
            [15816, 91679],
            [105, 173],
            [337, -34],
            [424, -248],
            [650, -217],
            [383, -100],
            [272, 38]
        ],
        [
            [17987, 91291],
            [375, -300],
            [-391, -293]
        ],
        [
            [17971, 90698],
            [502, -127],
            [750, 70],
            [236, 103],
            [296, -354],
            [302, 299],
            [-283, 251],
            [179, 202],
            [338, 27],
            [223, 59],
            [224, -141],
            [279, -321],
            [310, 47],
            [491, -266],
            [431, 94],
            [405, -14],
            [-32, 367],
            [247, 103],
            [431, -200],
            [-2, -559],
            [177, 471],
            [223, -16],
            [126, 594],
            [-298, 364],
            [-324, 239],
            [22, 653],
            [329, 429],
            [366, -95],
            [281, -261],
            [378, -666],
            [-247, -290],
            [517, -120],
            [-1, -604],
            [371, 463],
            [332, -380],
            [-83, -438],
            [269, -399],
            [290, 427],
            [202, 510]
        ],
        [
            [19722, 91216],
            [-824, -103],
            [-374, -41]
        ],
        [
            [18524, 91072],
            [-151, 279],
            [-379, 161],
            [-246, -66],
            [-343, 468],
            [185, 62],
            [429, 101],
            [392, -26],
            [362, 103],
            [-537, 138],
            [-594, -47],
            [-394, 12],
            [-146, 217],
            [644, 237],
            [-428, -9],
            [-485, 156],
            [233, 443],
            [193, 235],
            [744, 359],
            [284, -114],
            [-139, -277],
            [618, 179],
            [386, -298],
            [314, 302],
            [254, -194],
            [227, -580],
            [140, 244],
            [-197, 606],
            [244, 86],
            [276, -94],
            [311, -239],
            [175, -575],
            [86, -417],
            [466, -293],
            [502, -279],
            [-31, -260],
            [-456, -48],
            [178, -227],
            [-94, -217],
            [-503, 93],
            [-478, 160],
            [-322, -36],
            [-522, -201]
        ],
        [
            [20972, 93958],
            [-244, -390],
            [-434, 413],
            [95, 83],
            [372, 24],
            [211, -130]
        ],
        [
            [28794, 93770],
            [25, -163],
            [-296, 17],
            [-299, 13],
            [-304, -80],
            [-80, 36],
            [-306, 313],
            [12, 213],
            [133, 39],
            [636, -63],
            [479, -325]
        ],
        [
            [25955, 93803],
            [219, -369],
            [256, 477],
            [704, 242],
            [477, -611],
            [-42, -387],
            [550, 172],
            [263, 235],
            [616, -299],
            [383, -282],
            [36, -258],
            [515, 134],
            [290, -376],
            [670, -234],
            [242, -238],
            [263, -553],
            [-510, -275],
            [654, -386],
            [441, -130],
            [400, -543],
            [437, -39],
            [-87, -414],
            [-487, -687],
            [-342, 253],
            [-437, 568],
            [-359, -74],
            [-35, -338],
            [292, -344],
            [377, -272],
            [114, -157],
            [181, -584],
            [-96, -425],
            [-350, 160],
            [-697, 473],
            [393, -509],
            [289, -357],
            [45, -206],
            [-753, 236],
            [-596, 343],
            [-337, 287],
            [97, 167],
            [-414, 304],
            [-405, 286],
            [5, -171],
            [-803, -94],
            [-235, 203],
            [183, 435],
            [522, 10],
            [571, 76],
            [-92, 211],
            [96, 294],
            [360, 576],
            [-77, 261],
            [-107, 203],
            [-425, 286],
            [-563, 201],
            [178, 150],
            [-294, 367],
            [-245, 34],
            [-219, 201],
            [-149, -175],
            [-503, -76],
            [-1011, 132],
            [-588, 174],
            [-450, 89],
            [-231, 207],
            [290, 270],
            [-394, 2],
            [-88, 599],
            [213, 528],
            [286, 241],
            [717, 158],
            [-204, -382]
        ],
        [
            [22123, 94208],
            [331, -124],
            [496, 75],
            [72, -172],
            [-259, -283],
            [420, -254],
            [-50, -532],
            [-455, -229],
            [-268, 50],
            [-192, 225],
            [-690, 456],
            [5, 189],
            [567, -73],
            [-306, 386],
            [329, 286]
        ],
        [
            [89889, 93835],
            [-421, -4],
            [-569, 66],
            [-49, 31],
            [263, 234],
            [348, 54],
            [394, -226],
            [34, -155]
        ],
        [
            [24112, 93575],
            [-298, -442],
            [-317, 22],
            [-173, 519],
            [4, 294],
            [145, 251],
            [276, 161],
            [579, -20],
            [530, -144],
            [-415, -526],
            [-331, -115]
        ],
        [
            [15808, 92470],
            [-147, 259],
            [-641, 312]
        ],
        [
            [15020, 93041],
            [93, 193],
            [218, 489]
        ],
        [
            [15331, 93723],
            [241, 388],
            [-272, 362],
            [939, 93],
            [397, -123],
            [709, -33],
            [270, -171],
            [298, -249],
            [-349, -149],
            [-681, -415],
            [-344, -414]
        ],
        [
            [16539, 93012],
            [0, -248],
            [-731, -294]
        ],
        [
            [91869, 94941],
            [-321, -234],
            [-444, 53],
            [-516, 233],
            [66, 192],
            [518, -89],
            [697, -155]
        ],
        [
            [23996, 94879],
            [-151, -229],
            [-403, 44],
            [-337, 155],
            [148, 266],
            [399, 159],
            [243, -208],
            [101, -187]
        ],
        [
            [90301, 95224],
            [-219, -439],
            [-1023, 16],
            [-461, -139],
            [-550, 384],
            [149, 406],
            [366, 111],
            [734, -26],
            [1004, -313]
        ],
        [
            [22639, 95907],
            [212, -273],
            [9, -303],
            [-127, -440],
            [-458, -60],
            [-298, 94],
            [5, 345],
            [-455, -46],
            [-18, 457],
            [299, -18],
            [419, 201],
            [390, -34],
            [22, 77]
        ],
        [
            [19941, 95601],
            [109, -210],
            [247, 99],
            [291, -26],
            [49, -289],
            [-169, -281],
            [-940, -91],
            [-701, -256],
            [-423, -14],
            [-35, 193],
            [577, 261],
            [-1255, -70],
            [-389, 106],
            [379, 577],
            [262, 165],
            [782, -199],
            [493, -350],
            [485, -45],
            [-397, 565],
            [255, 215],
            [286, -68],
            [94, -282]
        ],
        [
            [65981, 92363],
            [-164, -52],
            [-907, 77],
            [-74, 262],
            [-503, 158],
            [-40, 320],
            [284, 126],
            [-10, 323],
            [551, 503],
            [-255, 73],
            [665, 518],
            [-75, 268],
            [621, 312],
            [917, 380],
            [925, 110],
            [475, 220],
            [541, 76],
            [193, -233],
            [-187, -184],
            [-984, -293],
            [-848, -282],
            [-863, -562],
            [-414, -577],
            [-435, -568],
            [56, -491],
            [531, -484]
        ],
        [
            [23699, 96131],
            [308, -190],
            [547, 1],
            [240, -194],
            [-64, -222],
            [319, -134],
            [177, -140],
            [374, -26],
            [406, -50],
            [441, 128],
            [566, 51],
            [451, -42],
            [298, -223],
            [62, -244],
            [-174, -157],
            [-414, -127],
            [-355, 72],
            [-797, -91],
            [-570, -11],
            [-449, 73],
            [-738, 190],
            [-96, 325],
            [-34, 293],
            [-279, 258],
            [-574, 72],
            [-322, 183],
            [104, 242],
            [573, -37]
        ],
        [
            [17722, 96454],
            [-38, -454],
            [-214, -205],
            [-259, -29],
            [-517, -252],
            [-444, -91],
            [-377, 128],
            [472, 442],
            [570, 383],
            [426, -9],
            [381, 87]
        ],
        [
            [81143, 94175],
            [250, 112],
            [142, -379]
        ],
        [
            [81535, 93908],
            [122, 153],
            [444, 93],
            [892, -97],
            [67, -276],
            [1162, -88],
            [15, 451]
        ],
        [
            [84237, 94144],
            [590, -103],
            [443, 3]
        ],
        [
            [85270, 94044],
            [449, -312],
            [128, -378],
            [-165, -247],
            [349, -465],
            [437, -240],
            [268, 620],
            [446, -266],
            [473, 159],
            [538, -182],
            [204, 166],
            [455, -83],
            [-201, 549],
            [367, 256],
            [2509, -384],
            [236, -351],
            [727, -451],
            [1122, 112],
            [553, -98],
            [231, -244],
            [-33, -432],
            [342, -168],
            [372, 121],
            [492, 15],
            [525, -116],
            [526, 66],
            [484, -526],
            [344, 189],
            [-224, 378]
        ],
        [
            [97224, 91732],
            [123, 263],
            [886, -166]
        ],
        [
            [98233, 91829],
            [578, 36],
            [799, -282],
            [389, -258],
            [0, -2354],
            [-2, -3],
            [-357, -260],
            [-360, 44],
            [250, -315],
            [166, -487],
            [128, -159],
            [32, -244],
            [-71, -157],
            [-518, 129],
            [-777, -445],
            [-247, -69],
            [-425, -415],
            [-403, -362],
            [-102, -269],
            [-397, 409],
            [-724, -464]
        ],
        [
            [96192, 85904],
            [-126, 220],
            [-268, -254]
        ],
        [
            [95798, 85870],
            [-371, 81],
            [-90, -388],
            [-333, -572],
            [10, -239],
            [316, -132],
            [-37, -860],
            [-258, -22],
            [-119, -494],
            [116, -255]
        ],
        [
            [95032, 82989],
            [-486, -301],
            [-96, -675]
        ],
        [
            [94450, 82013],
            [-415, -144],
            [-83, -600],
            [-400, -551],
            [-103, 407],
            [-119, 862],
            [-155, 1313],
            [134, 819],
            [234, 353]
        ],
        [
            [93543, 84472],
            [15, 276],
            [431, 132]
        ],
        [
            [93989, 84880],
            [496, 744],
            [479, 608],
            [499, 471],
            [223, 833],
            [-337, -50],
            [-167, -487]
        ],
        [
            [95182, 86999],
            [-705, -648],
            [-227, 726]
        ],
        [
            [94250, 87077],
            [-717, -201],
            [-696, -990],
            [230, -362],
            [-620, -154],
            [-430, -61],
            [20, 427],
            [-431, 90],
            [-344, -291],
            [-850, 102]
        ],
        [
            [90412, 85637],
            [-913, -175],
            [-900, -1153]
        ],
        [
            [88599, 84309],
            [-1065, -1394],
            [438, -74],
            [136, -370],
            [270, -132]
        ],
        [
            [88378, 82339],
            [178, 296],
            [305, -39]
        ],
        [
            [88861, 82596],
            [401, -650]
        ],
        [
            [89262, 81946],
            [9, -502],
            [-217, -591]
        ],
        [
            [89054, 80853],
            [-23, -705],
            [-126, -945],
            [-418, -855],
            [-94, -409],
            [-377, -688],
            [-374, -682],
            [-179, -349],
            [-370, -346],
            [-175, -8],
            [-175, 287],
            [-373, -432],
            [-43, -197]
        ],
        [
            [86327, 75524],
            [-106, 36]
        ],
        [
            [86221, 75560],
            [-120, -201],
            [-83, -201]
        ],
        [
            [86018, 75158],
            [10, -424],
            [-143, -130],
            [-50, -105],
            [-104, -174],
            [-185, -97],
            [-121, -159],
            [-9, -256],
            [-32, -65],
            [111, -96],
            [157, -259]
        ],
        [
            [85652, 73393],
            [240, -697],
            [68, -383],
            [3, -681],
            [-105, -325],
            [-252, -113],
            [-222, -245],
            [-250, -51],
            [-31, 322]
        ],
        [
            [85103, 71220],
            [52, 443],
            [-123, 615]
        ],
        [
            [85032, 72278],
            [206, 99],
            [-190, 506]
        ],
        [
            [85048, 72883],
            [-135, 113],
            [-34, -112]
        ],
        [
            [84879, 72884],
            [-81, -49],
            [-10, 112],
            [-72, 54],
            [-75, 94]
        ],
        [
            [84641, 73095],
            [77, 260],
            [65, 69]
        ],
        [
            [84783, 73424],
            [-25, 108],
            [71, 319]
        ],
        [
            [84829, 73851],
            [-18, 97],
            [-163, 64]
        ],
        [
            [84648, 74012],
            [-131, 158]
        ],
        [
            [84517, 74170],
            [-388, -171],
            [-204, -277],
            [-300, -161],
            [148, 274],
            [-58, 230],
            [220, 397],
            [-147, 310],
            [-242, -209],
            [-314, -411],
            [-171, -381],
            [-272, -29],
            [-142, -275],
            [147, -400],
            [227, -97],
            [9, -265]
        ],
        [
            [83030, 72705],
            [220, -172],
            [311, 421]
        ],
        [
            [83561, 72954],
            [247, -230],
            [179, -15]
        ],
        [
            [83987, 72709],
            [46, -310],
            [-394, -165]
        ],
        [
            [83639, 72234],
            [-130, -319],
            [-270, -296],
            [-142, -414]
        ],
        [
            [83097, 71205],
            [299, -324],
            [109, -582]
        ],
        [
            [83505, 70299],
            [169, -541],
            [189, -454],
            [-5, -439],
            [-174, -161],
            [66, -315],
            [164, -184],
            [-43, -481],
            [-71, -468],
            [-155, -53],
            [-203, -640],
            [-225, -775],
            [-258, -705],
            [-382, -545],
            [-386, -498],
            [-313, -68],
            [-170, -262],
            [-96, 192],
            [-157, -294],
            [-388, -296],
            [-294, -90],
            [-95, -624],
            [-154, -35],
            [-73, 429],
            [66, 228]
        ],
        [
            [80517, 63220],
            [-373, 190],
            [-131, -97]
        ],
        [
            [80013, 63313],
            [-371, -505],
            [-231, -558],
            [-61, -410],
            [212, -623],
            [260, -772],
            [252, -365],
            [169, -475],
            [127, -1093],
            [-37, -1039],
            [-232, -389],
            [-318, -381],
            [-227, -492],
            [-346, -550],
            [-101, 378],
            [78, 401],
            [-206, 335]
        ],
        [
            [78981, 56775],
            [-233, 87],
            [-112, 307],
            [-141, 611]
        ],
        [
            [78495, 57780],
            [-249, 271],
            [-238, -11],
            [41, 464],
            [-245, -3],
            [-22, -650],
            [-150, -863],
            [-90, -522],
            [19, -428],
            [181, -18],
            [113, -539],
            [50, -512],
            [155, -338],
            [168, -69],
            [144, -306]
        ],
        [
            [78372, 54256],
            [64, -56],
            [164, -356],
            [116, -396],
            [16, -398],
            [-29, -269],
            [27, -203],
            [20, -349],
            [98, -163],
            [109, -523],
            [-5, -199],
            [-197, -40],
            [-263, 438],
            [-329, 469],
            [-32, 301],
            [-161, 395],
            [-38, 489],
            [-100, 322],
            [30, 431],
            [-61, 250]
        ],
        [
            [77801, 54399],
            [-110, 227],
            [-47, 292],
            [-148, 334],
            [-135, 280],
            [-45, -347],
            [-53, 328],
            [30, 369],
            [82, 566]
        ],
        [
            [77375, 56448],
            [-27, 439],
            [86, 452],
            [-94, 350],
            [23, 644],
            [-113, 306],
            [-90, 707],
            [-50, 746],
            [-121, 490],
            [-183, -297],
            [-315, -421],
            [-156, 53],
            [-172, 138],
            [96, 732],
            [-58, 554],
            [-218, 681],
            [34, 213],
            [-163, 76],
            [-197, 481]
        ],
        [
            [75657, 62792],
            [-79, 309],
            [-16, 301],
            [-53, 284]
        ],
        [
            [75509, 63686],
            [-116, 344],
            [-256, 23],
            [25, -243],
            [-87, -329],
            [-118, 120],
            [-41, -108],
            [-78, 65],
            [-108, 53]
        ],
        [
            [74730, 63611],
            [-39, -216],
            [-189, 7],
            [-343, -122],
            [16, -445],
            [-148, -349],
            [-400, -398],
            [-311, -695],
            [-209, -373]
        ],
        [
            [73107, 61020],
            [-276, -386],
            [-1, -272]
        ],
        [
            [72830, 60362],
            [-138, -146]
        ],
        [
            [72692, 60216],
            [-250, -212],
            [-130, -31]
        ],
        [
            [72312, 59973],
            [-84, -450],
            [58, -769],
            [15, -490],
            [-118, -561],
            [-1, -1004],
            [-144, -29],
            [-126, -450],
            [84, -195]
        ],
        [
            [71996, 56025],
            [-253, -167],
            [-93, -402]
        ],
        [
            [71650, 55456],
            [-112, -170],
            [-263, 552],
            [-128, 827],
            [-107, 596],
            [-97, 279],
            [-148, 568],
            [-69, 739],
            [-48, 369],
            [-253, 811],
            [-115, 1145],
            [-83, 756],
            [1, 716],
            [-54, 553],
            [-404, -353],
            [-196, 70],
            [-362, 716],
            [133, 214],
            [-82, 232],
            [-326, 501]
        ],
        [
            [68937, 64577],
            [-203, 150]
        ],
        [
            [68734, 64727],
            [-83, 425],
            [-215, 449]
        ],
        [
            [68436, 65601],
            [-512, -111],
            [-451, -11],
            [-391, -83]
        ],
        [
            [67082, 65396],
            [-523, 179]
        ],
        [
            [66559, 65575],
            [-302, 136],
            [-314, 76]
        ],
        [
            [65943, 65787],
            [-118, 725],
            [-133, 105],
            [-214, -106],
            [-280, -286],
            [-339, 196],
            [-281, 454],
            [-267, 168],
            [-186, 561],
            [-205, 788],
            [-149, -96],
            [-177, 196]
        ],
        [
            [63594, 68492],
            [-103, -231],
            [-165, 29]
        ],
        [
            [63326, 68290],
            [58, -261],
            [-25, -135],
            [89, -445]
        ],
        [
            [63448, 67449],
            [109, -510],
            [137, -135],
            [47, -207]
        ],
        [
            [63741, 66597],
            [190, -248],
            [16, -244]
        ],
        [
            [63947, 66105],
            [-27, -197],
            [35, -199],
            [80, -165],
            [37, -194],
            [41, -145]
        ],
        [
            [64113, 65205],
            [-18, 430],
            [75, 310],
            [76, 64]
        ],
        [
            [64246, 66009],
            [84, -186],
            [5, -345]
        ],
        [
            [64335, 65478],
            [-61, -348]
        ],
        [
            [64274, 65130],
            [53, -226]
        ],
        [
            [64327, 64904],
            [49, 29],
            [11, -162],
            [217, 93],
            [230, -15],
            [168, -18],
            [190, 400],
            [207, 379],
            [176, 364]
        ],
        [
            [65575, 65974],
            [80, 201],
            [35, -51],
            [-26, -244],
            [-37, -108]
        ],
        [
            [65627, 65772],
            [38, -466]
        ],
        [
            [65665, 65306],
            [125, -404],
            [155, -214]
        ],
        [
            [65945, 64688],
            [204, -78],
            [164, -107]
        ],
        [
            [66313, 64503],
            [125, -339],
            [75, -196],
            [100, -75],
            [-1, -132],
            [-101, -352],
            [-44, -166],
            [-117, -189],
            [-104, -404],
            [-126, 31],
            [-58, -141],
            [-44, -300],
            [34, -395],
            [-26, -72],
            [-128, 2],
            [-174, -221],
            [-27, -288],
            [-63, -125],
            [-173, 5],
            [-109, -149]
        ],
        [
            [65352, 60997],
            [1, -239],
            [-134, -164]
        ],
        [
            [65219, 60594],
            [-153, 56],
            [-186, -199]
        ],
        [
            [64880, 60451],
            [-128, -33],
            [-201, -159]
        ],
        [
            [64551, 60259],
            [-54, -263],
            [-6, -201],
            [-277, -249],
            [-444, -276],
            [-249, -417]
        ],
        [
            [63521, 58853],
            [-122, -32],
            [-83, 34]
        ],
        [
            [63316, 58855],
            [-163, -245]
        ],
        [
            [63153, 58610],
            [-177, -113],
            [-233, -31]
        ],
        [
            [62743, 58466],
            [-70, -34],
            [-61, -156],
            [-73, -43]
        ],
        [
            [62539, 58233],
            [-42, -150],
            [-138, 13]
        ],
        [
            [62359, 58096],
            [-89, -80],
            [-192, 30],
            [-72, 345],
            [8, 323],
            [-46, 174],
            [-54, 437],
            [-80, 243],
            [56, 29],
            [-29, 270],
            [34, 114],
            [-12, 257]
        ],
        [
            [61883, 60238],
            [-36, 253],
            [-84, 177]
        ],
        [
            [61763, 60668],
            [-22, 236],
            [-143, 212],
            [-148, 495],
            [-79, 482],
            [-192, 406],
            [-124, 97],
            [-184, 563],
            [-32, 411],
            [12, 350],
            [-159, 655],
            [-130, 231],
            [-150, 122],
            [-92, 339],
            [15, 133]
        ],
        [
            [60335, 65400],
            [-77, 307],
            [-81, 131]
        ],
        [
            [60177, 65838],
            [-108, 440],
            [-170, 476],
            [-141, 406],
            [-139, -3],
            [44, 325],
            [12, 206],
            [34, 236]
        ],
        [
            [59709, 67924],
            [-9, 86]
        ],
        [
            [59700, 68010],
            [-78, -238],
            [-60, -446],
            [-75, -308],
            [-65, -103],
            [-93, 191],
            [-125, 263],
            [-198, 847],
            [-29, -53],
            [115, -624],
            [171, -594],
            [210, -920],
            [102, -321],
            [90, -334],
            [249, -654],
            [-55, -103],
            [9, -384],
            [323, -530],
            [49, -121]
        ],
        [
            [60240, 63578],
            [90, -580],
            [-61, -107],
            [40, -608],
            [102, -706],
            [106, -145],
            [152, -219]
        ],
        [
            [60669, 61213],
            [161, -683],
            [77, -543]
        ],
        [
            [60907, 59987],
            [152, -288],
            [379, -558],
            [154, -336],
            [151, -341],
            [87, -203],
            [136, -178]
        ],
        [
            [61966, 58083],
            [66, -183],
            [-9, -245],
            [-158, -142],
            [119, -161]
        ],
        [
            [61984, 57352],
            [91, -109]
        ],
        [
            [62075, 57243],
            [54, -244],
            [125, -248]
        ],
        [
            [62254, 56751],
            [138, -2],
            [262, 151],
            [302, 70],
            [245, 184],
            [138, 39],
            [99, 108],
            [158, 20]
        ],
        [
            [63596, 57321],
            [89, 12],
            [128, 88],
            [147, 59],
            [132, 202],
            [105, 2],
            [6, -163],
            [-25, -344],
            [1, -310],
            [-59, -214],
            [-78, -639],
            [-134, -659],
            [-172, -755],
            [-238, -866],
            [-237, -661],
            [-327, -806],
            [-278, -479],
            [-415, -586],
            [-259, -450],
            [-304, -715],
            [-64, -312],
            [-63, -140]
        ],
        [
            [61551, 49585],
            [-195, -236],
            [-68, -246],
            [-104, -44],
            [-40, -416],
            [-89, -238],
            [-54, -393],
            [-112, -195]
        ],
        [
            [60889, 47817],
            [-128, -728],
            [16, -335],
            [178, -216],
            [8, -153],
            [-76, -357],
            [16, -180],
            [-18, -282],
            [97, -370],
            [115, -583],
            [101, -129]
        ],
        [
            [61198, 44484],
            [45, -265],
            [-11, -588],
            [34, -519],
            [11, -923],
            [49, -290],
            [-83, -422],
            [-108, -410],
            [-177, -366],
            [-254, -225],
            [-313, -287],
            [-313, -634],
            [-107, -108],
            [-194, -420],
            [-115, -136],
            [-23, -421],
            [132, -448],
            [54, -346],
            [4, -177],
            [49, 29],
            [-8, -579]
        ],
        [
            [59870, 36949],
            [-45, -274],
            [65, -102]
        ],
        [
            [59890, 36573],
            [-41, -246],
            [-116, -210]
        ],
        [
            [59733, 36117],
            [-229, -199],
            [-334, -320],
            [-122, -219],
            [24, -248],
            [71, -40],
            [-24, -311]
        ],
        [
            [59119, 34780],
            [-70, -430],
            [-32, -491],
            [-72, -267],
            [-190, -298],
            [-54, -86],
            [-118, -300],
            [-77, -303],
            [-158, -424],
            [-314, -609],
            [-196, -355]
        ],
        [
            [57838, 31217],
            [-209, -269],
            [-291, -229]
        ],
        [
            [57338, 30719],
            [-141, -31],
            [-36, -164],
            [-169, 88],
            [-138, -113],
            [-301, 114],
            [-168, -72],
            [-115, 31],
            [-286, -233],
            [-238, -94],
            [-171, -223],
            [-127, -14],
            [-117, 210],
            [-94, 11],
            [-120, 264],
            [-13, -82],
            [-37, 159],
            [2, 346],
            [-90, 396],
            [89, 108],
            [-7, 453],
            [-182, 553],
            [-139, 501],
            [-1, 1],
            [-199, 768]
        ],
        [
            [54540, 33696],
            [-207, 446],
            [-108, 432],
            [-62, 575],
            [-68, 428],
            [-93, 910],
            [-7, 707],
            [-35, 322],
            [-108, 243],
            [-144, 489],
            [-146, 708],
            [-60, 371],
            [-226, 577],
            [-17, 453]
        ],
        [
            [53259, 40357],
            [-26, 372],
            [38, 519],
            [96, 541],
            [15, 254],
            [90, 532],
            [66, 243],
            [159, 386],
            [90, 263],
            [29, 438],
            [-15, 335],
            [-83, 211],
            [-74, 358],
            [-68, 355],
            [15, 122],
            [85, 235],
            [-84, 570],
            [-57, 396],
            [-139, 374],
            [26, 115]
        ],
        [
            [53422, 46976],
            [-39, 183]
        ],
        [
            [53383, 47159],
            [-74, 444]
        ],
        [
            [53309, 47603],
            [-228, 626]
        ],
        [
            [53081, 48229],
            [-285, 596],
            [-184, 488],
            [-169, 610],
            [9, 196],
            [61, 189],
            [67, 430],
            [56, 438]
        ],
        [
            [52636, 51176],
            [-52, 90],
            [96, 663]
        ],
        [
            [52680, 51929],
            [40, 467],
            [-108, 390]
        ],
        [
            [52612, 52786],
            [-127, 100],
            [-56, 265]
        ],
        [
            [52429, 53151],
            [-71, 85],
            [3, 163]
        ],
        [
            [52361, 53399],
            [-289, -213]
        ],
        [
            [52072, 53186],
            [-105, 32],
            [-107, -133]
        ],
        [
            [51860, 53085],
            [-222, 13],
            [-149, 370],
            [-91, 427]
        ],
        [
            [51398, 53895],
            [-197, 390],
            [-209, -8]
        ],
        [
            [50992, 54277],
            [-245, 1]
        ],
        [
            [50747, 54278],
            [-229, -69]
        ],
        [
            [50518, 54209],
            [-224, -126]
        ],
        [
            [50294, 54083],
            [-436, -346],
            [-154, -203],
            [-250, -171],
            [-248, 168]
        ],
        [
            [49206, 53531],
            [-126, -7],
            [-194, 116],
            [-178, -7],
            [-329, -103],
            [-193, -170],
            [-275, -217],
            [-54, 15]
        ],
        [
            [47857, 53158],
            [-73, -5],
            [-286, 282]
        ],
        [
            [47498, 53435],
            [-252, 450],
            [-237, 323]
        ],
        [
            [47009, 54208],
            [-187, 381]
        ],
        [
            [46822, 54589],
            [-75, 44],
            [-200, 238],
            [-144, 316],
            [-49, 216],
            [-34, 437]
        ],
        [
            [46320, 55840],
            [-122, 349],
            [-108, 232],
            [-71, 76],
            [-69, 118],
            [-32, 261],
            [-41, 130],
            [-80, 97]
        ],
        [
            [45797, 57103],
            [-149, 247],
            [-117, 39],
            [-63, 166],
            [1, 90],
            [-84, 125],
            [-18, 127]
        ],
        [
            [45367, 57897],
            [-46, 453]
        ],
        [
            [45321, 58350],
            [36, 262]
        ],
        [
            [45357, 58612],
            [-115, 460],
            [-138, 210],
            [122, 112],
            [134, 415],
            [66, 304]
        ],
        [
            [45426, 60113],
            [-24, 318],
            [78, 291],
            [34, 557],
            [-30, 583],
            [-34, 294],
            [28, 295],
            [-72, 281],
            [-146, 255]
        ],
        [
            [45260, 62987],
            [12, 249]
        ],
        [
            [45272, 63236],
            [13, 274],
            [106, 161],
            [91, 308],
            [-18, 200],
            [96, 417],
            [155, 376],
            [93, 95],
            [74, 344],
            [6, 315],
            [100, 365],
            [185, 216],
            [177, 603]
        ],
        [
            [46350, 66910],
            [144, 235]
        ],
        [
            [46494, 67145],
            [259, 66],
            [219, 403],
            [139, 158]
        ],
        [
            [47111, 67772],
            [232, 493],
            [-70, 735],
            [106, 508],
            [37, 312],
            [179, 399],
            [278, 270],
            [206, 244],
            [186, 612],
            [87, 362],
            [205, -2],
            [167, -251],
            [264, 41],
            [288, -131],
            [121, -6]
        ],
        [
            [49397, 71358],
            [267, 323],
            [300, 102],
            [175, 244],
            [268, 180],
            [471, 105],
            [459, 48],
            [140, -87],
            [262, 232],
            [297, 5],
            [113, -137],
            [190, 35]
        ],
        [
            [52339, 72408],
            [302, 239],
            [195, -71],
            [-9, -299],
            [236, 217],
            [20, -113]
        ],
        [
            [53083, 72381],
            [-139, -289],
            [-2, -274]
        ],
        [
            [52942, 71818],
            [96, -147],
            [-36, -511],
            [-183, -297],
            [53, -322],
            [143, -10],
            [70, -281],
            [106, -92]
        ],
        [
            [53191, 70158],
            [326, -204],
            [117, 51],
            [232, -98],
            [368, -264],
            [130, -526],
            [250, -114],
            [391, -248],
            [296, -293],
            [136, 153],
            [133, 272],
            [-65, 452],
            [87, 288],
            [200, 277],
            [192, 80],
            [375, -121],
            [95, -264],
            [104, -2],
            [88, -101]
        ],
        [
            [56646, 69496],
            [276, -69],
            [68, -196]
        ],
        [
            [56990, 69231],
            [369, 10],
            [268, -156],
            [275, -175],
            [129, -92],
            [214, 188],
            [114, 169],
            [245, 49],
            [198, -75],
            [75, -293],
            [65, 193],
            [222, -140],
            [217, -33],
            [137, 149]
        ],
        [
            [59518, 69025],
            [80, 194],
            [-19, 34],
            [74, 276],
            [56, 446],
            [40, 149],
            [8, 6]
        ],
        [
            [59757, 70130],
            [99, 482],
            [138, 416],
            [5, 21]
        ],
        [
            [59999, 71049],
            [-26, 452],
            [68, 243]
        ],
        [
            [60041, 71744],
            [-102, 268],
            [105, 222],
            [-169, -51],
            [-233, 136],
            [-191, -340],
            [-421, -66],
            [-225, 317],
            [-300, 20],
            [-64, -245]
        ],
        [
            [58441, 72005],
            [-192, -71],
            [-268, 315]
        ],
        [
            [57981, 72249],
            [-303, -10],
            [-165, 587]
        ],
        [
            [57513, 72826],
            [-203, 328],
            [135, 459],
            [-176, 283],
            [308, 565],
            [428, 23],
            [117, 449],
            [529, -78],
            [334, 383],
            [324, 167],
            [459, 13]
        ],
        [
            [59768, 75418],
            [485, -416],
            [399, -229]
        ],
        [
            [60652, 74773],
            [323, 91],
            [239, -53],
            [328, 309]
        ],
        [
            [61542, 75120],
            [42, 252],
            [-70, 403],
            [-160, 218],
            [-154, 68],
            [-102, 181]
        ],
        [
            [61098, 76242],
            [-354, 499],
            [-317, 223],
            [-240, 347],
            [202, 95],
            [231, 494],
            [-156, 234],
            [410, 241],
            [-8, 129],
            [-249, -95]
        ],
        [
            [60617, 78409],
            [-222, -48],
            [-185, -191],
            [-260, -31],
            [-239, -220],
            [16, -368],
            [136, -142],
            [284, 35],
            [-55, -210],
            [-304, -103],
            [-377, -342],
            [-154, 121],
            [61, 277],
            [-304, 173],
            [50, 113],
            [265, 197],
            [-80, 135],
            [-432, 149],
            [-19, 221],
            [-257, -73],
            [-103, -325],
            [-215, -437]
        ],
        [
            [58223, 77340],
            [6, -152],
            [-135, -128],
            [-84, 56],
            [-78, -713]
        ],
        [
            [57932, 76403],
            [-144, -245],
            [-101, -422],
            [89, -337]
        ],
        [
            [57776, 75399],
            [33, -228],
            [243, -190],
            [-51, -145],
            [-330, -33],
            [-118, -182],
            [-232, -319]
        ],
        [
            [57321, 74302],
            [-87, 275],
            [3, 122]
        ],
        [
            [57237, 74699],
            [-169, 17],
            [-145, 56],
            [-336, -154],
            [192, -332],
            [-141, -96]
        ],
        [
            [56638, 74190],
            [-154, 0],
            [-147, 304]
        ],
        [
            [56337, 74494],
            [-52, -130],
            [62, -353],
            [139, -277]
        ],
        [
            [56486, 73734],
            [-105, -130],
            [155, -272]
        ],
        [
            [56536, 73332],
            [137, -171],
            [4, -334],
            [-257, 157],
            [82, -302],
            [-176, -62],
            [105, -521]
        ],
        [
            [56431, 72099],
            [-184, -7],
            [-228, 257],
            [-104, 472]
        ],
        [
            [55915, 72821],
            [-49, 393],
            [-108, 272],
            [-143, 337],
            [-18, 168]
        ],
        [
            [55597, 73991],
            [-48, 41],
            [-5, 130],
            [-154, 199],
            [-24, 281],
            [23, 403],
            [38, 184]
        ],
        [
            [55427, 75229],
            [-46, 93],
            [-59, 46]
        ],
        [
            [55322, 75368],
            [-78, 192],
            [-120, 118]
        ],
        [
            [55124, 75678],
            [-261, 218],
            [-161, 213],
            [-254, 176]
        ],
        [
            [54448, 76285],
            [-233, 435],
            [56, 44]
        ],
        [
            [54271, 76764],
            [-127, 248],
            [-5, 200],
            [-179, 93],
            [-85, -255],
            [-82, 198],
            [6, 205],
            [10, 9]
        ],
        [
            [53809, 77462],
            [62, 54]
        ],
        [
            [53871, 77516],
            [-221, 86],
            [-226, -210],
            [15, -293],
            [-34, -168],
            [91, -301],
            [261, -298],
            [140, -488],
            [309, -476],
            [217, 3],
            [68, -130],
            [-78, -118]
        ],
        [
            [54413, 75123],
            [249, -213],
            [204, -179]
        ],
        [
            [54866, 74731],
            [238, -308],
            [29, -111],
            [-52, -211],
            [-154, 276],
            [-242, 97],
            [-116, -382],
            [200, -219],
            [-33, -309],
            [-116, -35],
            [-148, -506],
            [-116, -46],
            [1, 181],
            [57, 317],
            [60, 126],
            [-108, 342],
            [-85, 298],
            [-115, 74],
            [-82, 255],
            [-179, 107],
            [-120, 238],
            [-206, 38],
            [-217, 267],
            [-254, 384]
        ],
        [
            [53108, 75604],
            [-189, 341],
            [-86, 584]
        ],
        [
            [52833, 76529],
            [-138, 68],
            [-226, 195],
            [-128, -80],
            [-161, -274],
            [-115, -43]
        ],
        [
            [52065, 76395],
            [-252, -334],
            [-548, 160],
            [-404, -192],
            [-32, -355]
        ],
        [
            [50829, 75674],
            [15, -344],
            [-263, -393],
            [-356, -125],
            [-25, -199],
            [-171, -327],
            [-107, -481],
            [108, -338],
            [-160, -263],
            [-60, -384],
            [-210, -118]
        ],
        [
            [49600, 72702],
            [-197, -455],
            [-352, -8]
        ],
        [
            [49051, 72239],
            [-265, 11],
            [-174, -209],
            [-106, -223],
            [-136, 49],
            [-103, 199],
            [-79, 340],
            [-259, 92]
        ],
        [
            [47929, 72498],
            [-112, -153],
            [-146, 83],
            [-143, -65],
            [42, 462],
            [-26, 363],
            [-124, 55],
            [-67, 224],
            [22, 386],
            [111, 215],
            [20, 239],
            [58, 355],
            [-6, 250],
            [-56, 212],
            [-12, 200]
        ],
        [
            [47490, 75324],
            [14, 420],
            [-114, 257],
            [393, 426]
        ],
        [
            [47783, 76427],
            [340, -107],
            [373, 4]
        ],
        [
            [48496, 76324],
            [296, -101],
            [230, 31],
            [449, -19]
        ],
        [
            [49471, 76235],
            [144, 354],
            [53, 1177],
            [-287, 620],
            [-205, 299]
        ],
        [
            [49176, 78685],
            [-424, 228],
            [-28, 430]
        ],
        [
            [48724, 79343],
            [360, 129],
            [466, -152],
            [-88, 669],
            [263, -254],
            [646, 461],
            [84, 484],
            [243, 119]
        ],
        [
            [50698, 80799],
            [222, 117]
        ],
        [
            [50920, 80916],
            [143, 162]
        ],
        [
            [51063, 81078],
            [244, 870],
            [380, 247]
        ],
        [
            [51687, 82195],
            [231, -17]
        ],
        [
            [51918, 82178],
            [54, 125],
            [232, 32],
            [52, -130],
            [188, 291],
            [-63, 222],
            [-13, 335]
        ],
        [
            [52368, 83053],
            [-113, 328],
            [-8, 604],
            [46, 159]
        ],
        [
            [52293, 84144],
            [80, 178],
            [244, 36]
        ],
        [
            [52617, 84358],
            [98, 163],
            [223, 167],
            [-9, -304],
            [-82, -192],
            [33, -166],
            [151, -89],
            [-68, -223],
            [-83, 64],
            [-200, -425],
            [76, -288]
        ],
        [
            [52756, 83065],
            [4, -228],
            [281, -138],
            [-3, -210],
            [283, 111],
            [156, 162],
            [313, -233],
            [132, -189]
        ],
        [
            [53922, 82340],
            [189, 174],
            [434, 273],
            [350, 200],
            [277, -100],
            [21, -144],
            [268, -7]
        ],
        [
            [55461, 82736],
            [63, 260],
            [383, 191]
        ],
        [
            [55907, 83187],
            [-59, 497]
        ],
        [
            [55848, 83684],
            [10, 445],
            [136, 371],
            [262, 202],
            [221, -442],
            [223, 12],
            [53, 453]
        ],
        [
            [56753, 84725],
            [32, 349],
            [-102, -75],
            [-176, 210],
            [-24, 340],
            [351, 164],
            [350, 86],
            [301, -97],
            [287, 17]
        ],
        [
            [57772, 85719],
            [316, 327],
            [-291, 280]
        ],
        [
            [57797, 86326],
            [-504, -47],
            [-489, -216],
            [-452, -125]
        ],
        [
            [56352, 85938],
            [-161, 322],
            [-269, 195],
            [62, 581]
        ],
        [
            [55984, 87036],
            [-135, 534],
            [133, 344]
        ],
        [
            [55982, 87914],
            [252, 371],
            [635, 640],
            [185, 124],
            [-28, 250],
            [-387, 279]
        ],
        [
            [56639, 89578],
            [-478, -167],
            [-269, -413],
            [43, -361],
            [-441, -475],
            [-537, -509],
            [-202, -832],
            [198, -416],
            [265, -328],
            [-255, -666],
            [-289, -138],
            [-106, -992],
            [-157, -554],
            [-337, 57],
            [-158, -468],
            [-321, -27],
            [-89, 558],
            [-232, 671],
            [-211, 835]
        ],
        [
            [53063, 85353],
            [-187, 363],
            [-548, -684]
        ],
        [
            [52328, 85032],
            [-370, -138],
            [-385, 301]
        ],
        [
            [51573, 85195],
            [-99, 635]
        ],
        [
            [51474, 85830],
            [-88, 1364],
            [256, 380]
        ],
        [
            [51642, 87574],
            [733, 496],
            [549, 609],
            [508, 824],
            [668, 1141],
            [465, 444],
            [763, 741],
            [610, 259],
            [457, -31],
            [423, 489],
            [506, -26],
            [499, 118],
            [869, -433],
            [-358, -158],
            [305, -371]
        ],
        [
            [58639, 91676],
            [286, 206],
            [456, -358],
            [761, -140],
            [1050, -668],
            [213, -281],
            [18, -393],
            [-308, -311],
            [-454, -157],
            [-1240, 449],
            [-204, -75],
            [453, -433]
        ],
        [
            [59670, 89515],
            [36, -878]
        ],
        [
            [59706, 88637],
            [358, -180],
            [217, -153],
            [36, 286]
        ],
        [
            [60317, 88590],
            [-174, 263],
            [183, 215]
        ],
        [
            [60326, 89068],
            [672, -368]
        ],
        [
            [60998, 88700],
            [234, 144],
            [-187, 433]
        ],
        [
            [61045, 89277],
            [647, 578],
            [256, -34],
            [260, -206],
            [161, 406],
            [-231, 352],
            [136, 353],
            [-204, 367],
            [777, -190],
            [158, -331],
            [-351, -73]
        ],
        [
            [62654, 90499],
            [2, -328],
            [218, -203]
        ],
        [
            [62874, 89968],
            [429, 128],
            [68, 377]
        ],
        [
            [63371, 90473],
            [581, 282],
            [969, 507]
        ],
        [
            [64921, 91262],
            [209, -29],
            [-273, -359],
            [344, -61],
            [199, 202],
            [521, 16],
            [412, 245],
            [317, -356],
            [315, 391],
            [-291, 343],
            [145, 195],
            [820, -179],
            [385, -185],
            [1006, -675],
            [186, 309],
            [-282, 313],
            [-8, 125],
            [-335, 58],
            [92, 280],
            [-149, 461],
            [-8, 189],
            [512, 535]
        ],
        [
            [69038, 93080],
            [182, 537],
            [207, 116]
        ],
        [
            [69427, 93733],
            [735, -156],
            [58, -328]
        ],
        [
            [70220, 93249],
            [-263, -479],
            [173, -189],
            [89, -413],
            [-63, -809],
            [307, -362],
            [-120, -395],
            [-544, -839],
            [318, -87],
            [110, 213],
            [306, 151],
            [74, 293],
            [240, 281],
            [-162, 336],
            [130, 390],
            [-304, 49],
            [-67, 328]
        ],
        [
            [70444, 91717],
            [222, 594],
            [-361, 481]
        ],
        [
            [70305, 92792],
            [497, 398],
            [-64, 421],
            [139, 13],
            [145, -328],
            [-109, -570],
            [297, -108],
            [-127, 426],
            [465, 233],
            [577, 31],
            [513, -337],
            [-247, 492],
            [-28, 630]
        ],
        [
            [72363, 94093],
            [484, 119],
            [668, -26]
        ],
        [
            [73515, 94186],
            [602, 77],
            [-226, 309],
            [321, 388],
            [319, 16],
            [540, 293],
            [734, 79],
            [93, 162],
            [729, 55],
            [227, -133],
            [624, 314],
            [510, -10],
            [77, 255],
            [265, 252],
            [656, 242],
            [476, -191],
            [-378, -146],
            [629, -90],
            [75, -292],
            [254, 143],
            [812, -7],
            [626, -289],
            [223, -221],
            [-69, -307],
            [-307, -175],
            [-730, -328],
            [-209, -175],
            [345, -83],
            [410, -149]
        ],
        [
            [63720, 73858],
            [-47, -207],
            [-102, -138]
        ],
        [
            [63571, 73513],
            [7, -293]
        ],
        [
            [63578, 73220],
            [88, -436],
            [263, -123],
            [193, -296],
            [395, -102],
            [434, 156],
            [27, 139]
        ],
        [
            [64978, 72558],
            [-52, 417],
            [40, 618],
            [-216, 200],
            [71, 405],
            [-184, 34],
            [61, 498],
            [262, -145],
            [244, 189],
            [-202, 355],
            [-80, 338],
            [-224, -151],
            [-28, -433],
            [-87, 383]
        ],
        [
            [64583, 75266],
            [-15, 144],
            [68, 246],
            [-53, 206],
            [-322, 202],
            [-125, 530],
            [-154, 150],
            [-9, 192],
            [270, -56],
            [11, 432],
            [236, 96],
            [243, -88],
            [50, 576],
            [-50, 365],
            [-278, -28],
            [-236, 144],
            [-321, -260],
            [-259, -124]
        ],
        [
            [63639, 77993],
            [-127, -350],
            [-269, -97],
            [-276, -610],
            [252, -561],
            [-27, -398],
            [303, -696]
        ],
        [
            [63495, 75281],
            [146, -311],
            [141, -419],
            [130, -28],
            [85, -159],
            [-228, -47],
            [-49, -459]
        ],
        [
            [23933, 96380],
            [-126, -17],
            [-521, 38],
            [-74, 165],
            [559, -9],
            [195, -109],
            [-33, -68]
        ],
        [
            [19392, 96485],
            [-518, -170],
            [-411, 191],
            [224, 188],
            [406, 60],
            [392, -92],
            [-93, -177]
        ],
        [
            [56867, 96577],
            [-620, -241],
            [-490, 137],
            [191, 152],
            [-167, 189],
            [575, 119],
            [110, -222],
            [401, -134]
        ],
        [
            [19538, 97019],
            [-339, -115],
            [-461, 1],
            [5, 84],
            [285, 177],
            [149, -27],
            [361, -120]
        ],
        [
            [23380, 96697],
            [-411, -122],
            [-226, 138],
            [-119, 221],
            [-22, 245],
            [360, -24],
            [162, -39],
            [332, -205],
            [-76, -214]
        ],
        [
            [22205, 96856],
            [108, -247],
            [-453, 66],
            [-457, 192],
            [-619, 21],
            [268, 176],
            [-335, 142],
            [-21, 227],
            [546, -81],
            [751, -215],
            [212, -281]
        ],
        [
            [79187, 96845],
            [-1566, -228],
            [507, 776],
            [229, 66],
            [208, -38],
            [704, -336],
            [-82, -240]
        ],
        [
            [55069, 97669],
            [915, -440],
            [-699, -233],
            [-155, -435],
            [-243, -111],
            [-132, -490],
            [-335, -23],
            [-598, 361],
            [252, 210],
            [-416, 170],
            [-541, 499],
            [-216, 463],
            [757, 212],
            [152, -207],
            [396, 8],
            [105, 202],
            [408, 20],
            [350, -206]
        ],
        [
            [57068, 98086],
            [545, -207],
            [-412, -318],
            [-806, -70],
            [-819, 98],
            [-50, 163],
            [-398, 11],
            [-304, 271],
            [858, 165],
            [403, -142],
            [281, 177],
            [702, -148]
        ],
        [
            [64204, 98169],
            [-373, -78],
            [-250, -45],
            [-39, -97],
            [-324, -98],
            [-301, 140],
            [158, 185],
            [-618, 18],
            [542, 107],
            [422, 8],
            [57, -160],
            [159, 142],
            [262, 97],
            [412, -129],
            [-107, -90]
        ],
        [
            [77760, 97184],
            [-606, -73],
            [-773, 170],
            [-462, 226],
            [-213, 423],
            [-379, 117],
            [722, 404],
            [600, 133],
            [540, -297],
            [640, -572],
            [-69, -531]
        ],
        [
            [25828, 97644],
            [334, -190],
            [-381, -176],
            [-513, -445],
            [-492, -42],
            [-575, 76],
            [-299, 240],
            [4, 215],
            [220, 157],
            [-508, -4],
            [-306, 196],
            [-176, 268],
            [193, 262],
            [192, 180],
            [285, 42],
            [-122, 135],
            [646, 30],
            [355, -315],
            [468, -127],
            [455, -112],
            [220, -390]
        ],
        [
            [30972, 99681],
            [742, -47],
            [597, -75],
            [508, -161],
            [-12, -157],
            [-678, -257],
            [-672, -119],
            [-251, -133],
            [605, 3],
            [-656, -358],
            [-452, -167],
            [-476, -483],
            [-573, -98],
            [-177, -120],
            [-841, -64],
            [383, -74],
            [-192, -105],
            [230, -292],
            [-264, -202],
            [-429, -167],
            [-132, -232],
            [-388, -176],
            [39, -134],
            [475, 23],
            [6, -144],
            [-742, -355],
            [-726, 163],
            [-816, -91],
            [-414, 71],
            [-525, 31],
            [-35, 284],
            [514, 133],
            [-137, 427],
            [170, 41],
            [742, -255],
            [-379, 379],
            [-450, 113],
            [225, 229],
            [492, 141],
            [79, 206],
            [-392, 231],
            [-118, 304],
            [759, -26],
            [220, -64],
            [433, 216],
            [-625, 68],
            [-972, -38],
            [-491, 201],
            [-232, 239],
            [-324, 173],
            [-61, 202],
            [413, 112],
            [324, 19],
            [545, 96],
            [409, 220],
            [344, -30],
            [300, -166],
            [211, 319],
            [367, 95],
            [498, 65],
            [849, 24],
            [148, -63],
            [802, 100],
            [601, -38],
            [602, -37]
        ],
        [
            [42472, 99925],
            [1737, -469],
            [-513, -227],
            [-1062, -26],
            [-1496, -58],
            [140, -105],
            [984, 65],
            [836, -204],
            [540, 181],
            [231, -212],
            [-305, -344],
            [707, 220],
            [1348, 229],
            [833, -114],
            [156, -253],
            [-1132, -420],
            [-157, -136],
            [-888, -102],
            [643, -28],
            [-324, -431],
            [-224, -383],
            [9, -658],
            [333, -386],
            [-434, -24],
            [-457, -187],
            [513, -313],
            [65, -502],
            [-297, -55],
            [360, -508],
            [-617, -42],
            [322, -241],
            [-91, -208],
            [-391, -91],
            [-388, -2],
            [348, -400],
            [4, -263],
            [-549, 244],
            [-143, -158],
            [375, -148],
            [364, -361],
            [105, -476],
            [-495, -114],
            [-214, 228],
            [-344, 340],
            [95, -401],
            [-322, -311],
            [732, -25],
            [383, -32],
            [-745, -515],
            [-755, -466],
            [-813, -204],
            [-306, -2],
            [-288, -228],
            [-386, -624],
            [-597, -414],
            [-192, -24],
            [-370, -145],
            [-399, -138],
            [-238, -365],
            [-4, -415],
            [-141, -388],
            [-453, -472],
            [112, -462],
            [-125, -488],
            [-142, -577],
            [-391, -36],
            [-410, 482],
            [-556, 3],
            [-269, 324],
            [-186, 577],
            [-481, 735],
            [-141, 385],
            [-38, 530],
            [-384, 546],
            [100, 435],
            [-186, 208],
            [275, 691],
            [418, 220],
            [110, 247],
            [58, 461],
            [-318, -209],
            [-151, -88],
            [-249, -84],
            [-341, 193],
            [-19, 401],
            [109, 314],
            [258, 9],
            [567, -157],
            [-478, 375],
            [-249, 202],
            [-276, -83],
            [-232, 147],
            [310, 550],
            [-169, 220],
            [-220, 409],
            [-335, 626],
            [-353, 230],
            [3, 247],
            [-745, 346],
            [-590, 43],
            [-743, -24],
            [-677, -44],
            [-323, 188],
            [-482, 372],
            [729, 186],
            [559, 31],
            [-1188, 154],
            [-627, 241],
            [39, 229],
            [1051, 285],
            [1018, 284],
            [107, 214],
            [-750, 213],
            [243, 235],
            [961, 413],
            [404, 63],
            [-115, 265],
            [658, 156],
            [854, 93],
            [853, 5],
            [303, -184],
            [737, 325],
            [663, -221],
            [390, -46],
            [577, -192],
            [-660, 318],
            [38, 253],
            [932, 353],
            [975, -27],
            [354, 218],
            [982, 57],
            [2219, -74]
        ],
        [
            [67002, 71642],
            [284, -224],
            [209, 79],
            [58, 268],
            [219, 89],
            [157, 180],
            [55, 472],
            [234, 114],
            [44, 211],
            [131, -158],
            [84, -19]
        ],
        [
            [68477, 72654],
            [154, -4],
            [210, -124]
        ],
        [
            [68841, 72526],
            [85, -72],
            [201, 189],
            [93, -114],
            [90, 271],
            [166, -12],
            [43, 86],
            [29, 239],
            [120, 205],
            [150, -134],
            [-30, -181],
            [84, -28],
            [-26, -496],
            [110, -194],
            [97, 125],
            [123, 58],
            [173, 265],
            [192, -44],
            [286, -1]
        ],
        [
            [70827, 72688],
            [50, -169]
        ],
        [
            [70877, 72519],
            [-162, -67],
            [-141, -109],
            [-319, -68],
            [-298, -124],
            [-163, -258],
            [66, -250],
            [32, -294],
            [-139, -248],
            [12, -227],
            [-76, -213],
            [-265, 18],
            [110, -390],
            [-177, -150],
            [-118, -356],
            [15, -355],
            [-108, -166],
            [-103, 55],
            [-212, -77],
            [-31, -166],
            [-207, 1],
            [-154, -334],
            [-10, -503],
            [-361, -246],
            [-194, 52],
            [-56, -129],
            [-166, 75],
            [-278, -88],
            [-465, 301]
        ],
        [
            [66909, 68203],
            [252, 536],
            [-23, 380],
            [-210, 100],
            [-22, 375],
            [-91, 472],
            [119, 323],
            [-121, 87],
            [76, 430],
            [113, 736]
        ],
        [
            [56642, 44124],
            [29, -184],
            [-32, -286],
            [49, -277],
            [-41, -222],
            [24, -203],
            [-579, 7],
            [-13, -1880],
            [188, -483],
            [181, -369]
        ],
        [
            [56448, 40227],
            [-510, -241],
            [-673, 83],
            [-192, 284],
            [-1126, -26],
            [-42, -41],
            [-166, 267],
            [-180, 17],
            [-166, -100],
            [-134, -113]
        ],
        [
            [53422, 46976],
            [115, 79],
            [80, -11],
            [98, 71],
            [820, -8],
            [68, -440],
            [80, -354],
            [64, -191],
            [106, -309],
            [184, 47],
            [91, 83],
            [154, -83],
            [42, 148],
            [69, 344],
            [172, 23],
            [15, 103],
            [142, 2],
            [-24, -213],
            [337, 5],
            [5, -372],
            [56, -228],
            [-41, -356],
            [21, -363],
            [93, -219],
            [-15, -703],
            [68, 54],
            [121, -15],
            [172, 89],
            [127, -35]
        ],
        [
            [53309, 47603],
            [112, 255],
            [84, 100],
            [104, -203]
        ],
        [
            [53609, 47755],
            [-101, -124],
            [-45, -152],
            [-9, -258],
            [-71, -62]
        ],
        [
            [55719, 75309],
            [-35, -201],
            [39, -254],
            [115, -144]
        ],
        [
            [55838, 74710],
            [-5, -155],
            [-91, -85],
            [-16, -192],
            [-129, -287]
        ],
        [
            [55427, 75229],
            [-47, 93]
        ],
        [
            [55380, 75322],
            [-18, 188],
            [120, 291],
            [18, -111],
            [75, 52]
        ],
        [
            [55575, 75742],
            [59, -159],
            [66, -60],
            [19, -214]
        ],
        [
            [65575, 65974],
            [52, -202]
        ],
        [
            [65665, 65306],
            [-142, -3],
            [-23, -384],
            [50, -82],
            [-126, -117],
            [-1, -241],
            [-81, -245],
            [-7, -238]
        ],
        [
            [65335, 63996],
            [-56, -125],
            [-835, 298],
            [-106, 599],
            [-11, 136]
        ],
        [
            [31400, 18145],
            [-168, 16],
            [-297, 1],
            [0, 1319]
        ],
        [
            [32587, 37434],
            [511, -964],
            [227, -89],
            [339, -437],
            [286, -231],
            [40, -261],
            [-273, -898],
            [280, -160],
            [312, -91],
            [220, 95],
            [252, 453],
            [45, 521]
        ],
        [
            [34826, 35372],
            [138, 114],
            [139, -341],
            [-6, -472],
            [-234, -326],
            [-186, -241],
            [-314, -573],
            [-370, -806]
        ],
        [
            [33993, 32727],
            [-70, -473],
            [-74, -607],
            [3, -588],
            [-61, -132],
            [-21, -382]
        ],
        [
            [31227, 23224],
            [273, -433],
            [266, -119]
        ],
        [
            [30952, 19680],
            [-257, 93],
            [-672, 79],
            [-115, 344],
            [6, 443],
            [-185, -38],
            [-98, 214],
            [-24, 626],
            [213, 260],
            [88, 375],
            [-33, 299],
            [148, 504],
            [101, 782],
            [-30, 347],
            [122, 112],
            [-30, 223],
            [-129, 118],
            [92, 248],
            [-126, 224],
            [-65, 682],
            [112, 120],
            [-47, 720],
            [65, 605],
            [75, 527],
            [166, 215],
            [-84, 576],
            [-1, 543],
            [210, 386],
            [-7, 494],
            [159, 576],
            [1, 544],
            [-72, 108],
            [-128, 1020],
            [171, 607],
            [-27, 572],
            [100, 537],
            [182, 555],
            [196, 367],
            [-83, 232],
            [58, 190],
            [-9, 985],
            [302, 291],
            [96, 614],
            [-34, 148]
        ],
        [
            [31359, 37147],
            [231, 534],
            [364, -144],
            [163, -427],
            [109, 475],
            [316, -24],
            [45, -127]
        ],
        [
            [62106, 74858],
            [386, 92]
        ],
        [
            [62492, 74950],
            [57, -155],
            [106, -103],
            [-56, -148],
            [148, -202],
            [-78, -189],
            [118, -160],
            [124, -97],
            [7, -410]
        ],
        [
            [62918, 73486],
            [-101, -17]
        ],
        [
            [62817, 73469],
            [-113, 342],
            [1, 91],
            [-123, -2],
            [-82, 159],
            [-58, -16]
        ],
        [
            [62442, 74043],
            [-109, 172],
            [-207, 147],
            [27, 288],
            [-47, 208]
        ],
        [
            [794, 704],
            [294, 188]
        ],
        [
            [1088, 892],
            [38, -7],
            [32, -4]
        ],
        [
            [54716, 79012],
            [-21, -241],
            [-156, -2],
            [53, -128],
            [-92, -380]
        ],
        [
            [54500, 78261],
            [-53, -100],
            [-243, -14],
            [-140, -134],
            [-229, 45]
        ],
        [
            [53835, 78058],
            [-398, 153],
            [-62, 205],
            [-274, -102],
            [-32, -113],
            [-169, 84]
        ],
        [
            [52900, 78285],
            [-142, 16],
            [-125, 108],
            [42, 145],
            [-10, 104]
        ],
        [
            [52665, 78658],
            [83, 33],
            [141, -164],
            [39, 156],
            [245, -25],
            [199, 106],
            [133, -18],
            [87, -121],
            [26, 100],
            [-40, 385],
            [100, 75],
            [98, 272]
        ],
        [
            [53776, 79457],
            [206, -190],
            [157, 242],
            [98, 44],
            [215, -180],
            [131, 30],
            [128, -111]
        ],
        [
            [54711, 79292],
            [-23, -75],
            [28, -205]
        ],
        [
            [62817, 73469],
            [-190, 78],
            [-141, 273],
            [-44, 223]
        ],
        [
            [63720, 73858],
            [-48, -207],
            [-101, -138]
        ],
        [
            [63578, 73220],
            [-69, -29],
            [-173, 309],
            [95, 292],
            [-82, 174],
            [-104, -44],
            [-327, -436]
        ],
        [
            [62492, 74950],
            [68, 96],
            [207, -169],
            [149, -36],
            [38, 70],
            [-136, 319],
            [72, 82]
        ],
        [
            [62890, 75312],
            [78, -20],
            [191, -359],
            [122, -40],
            [48, 150],
            [166, 238]
        ],
        [
            [58149, 47921],
            [-17, 713],
            [-70, 268]
        ],
        [
            [58062, 48902],
            [169, -46],
            [85, 336],
            [147, -38]
        ],
        [
            [58463, 49154],
            [16, -233],
            [60, -134],
            [3, -192],
            [-69, -124],
            [-108, -308],
            [-101, -214],
            [-115, -28]
        ],
        [
            [50920, 80916],
            [204, -47],
            [257, 123],
            [176, -258],
            [153, -138]
        ],
        [
            [51710, 80596],
            [-32, -400]
        ],
        [
            [51678, 80196],
            [-72, -22],
            [-30, -331]
        ],
        [
            [51576, 79843],
            [-243, 269],
            [-143, -46],
            [-194, 279],
            [-129, 237],
            [-129, 10],
            [-40, 207]
        ],
        [
            [50518, 54209],
            [-69, 407],
            [13, 1357],
            [-56, 122],
            [-11, 290],
            [-96, 207],
            [-85, 174],
            [35, 311]
        ],
        [
            [50249, 57077],
            [96, 67],
            [56, 258],
            [136, 56],
            [61, 176]
        ],
        [
            [50598, 57634],
            [93, 173],
            [100, 2],
            [212, -340]
        ],
        [
            [51003, 57469],
            [-11, -197],
            [62, -350],
            [-54, -238],
            [29, -159],
            [-135, -366],
            [-86, -181],
            [-52, -372],
            [7, -376],
            [-16, -952]
        ],
        [
            [49214, 56277],
            [-190, 152],
            [-130, -22],
            [-97, -149],
            [-125, 125],
            [-49, 195],
            [-125, 129]
        ],
        [
            [48498, 56707],
            [-18, 343],
            [76, 250],
            [-7, 200],
            [221, 490],
            [41, 405],
            [76, 144],
            [134, -79],
            [116, 120],
            [38, 152],
            [216, 265],
            [53, 184],
            [259, 246],
            [153, 84],
            [70, -114],
            [178, 3]
        ],
        [
            [50104, 59400],
            [-22, -286],
            [37, -269],
            [156, -386],
            [9, -286],
            [320, -134],
            [-6, -405]
        ],
        [
            [50249, 57077],
            [-243, 13]
        ],
        [
            [50006, 57090],
            [-128, 47],
            [-90, -96],
            [-123, 43],
            [-482, -27],
            [-7, -336],
            [38, -444]
        ],
        [
            [75742, 63602],
            [-6, -424],
            [-97, 90],
            [18, -476]
        ],
        [
            [75657, 62792],
            [-79, 308],
            [-16, 301],
            [-53, 285]
        ],
        [
            [74730, 63611],
            [-43, 486],
            [-96, 444],
            [47, 356],
            [-171, 159],
            [62, 215],
            [173, 220],
            [-200, 313],
            [98, 401],
            [220, -255],
            [133, -30],
            [24, -410],
            [265, -81],
            [257, 8],
            [160, -101],
            [-128, -500],
            [-124, -34],
            [-86, -336],
            [152, -306],
            [46, 377],
            [76, 2],
            [147, -937]
        ],
        [
            [56293, 76715],
            [80, -243],
            [108, 43],
            [213, -92],
            [408, -31],
            [138, 150],
            [327, 138],
            [202, -215],
            [163, -62]
        ],
        [
            [57776, 75399],
            [-239, 79],
            [-283, -186]
        ],
        [
            [57254, 75292],
            [-3, -294],
            [-252, -56],
            [-196, 206],
            [-222, -162],
            [-206, 17]
        ],
        [
            [56375, 75003],
            [-20, 391],
            [-139, 189]
        ],
        [
            [56216, 75583],
            [46, 84],
            [-30, 70],
            [47, 188],
            [105, 185],
            [-135, 255],
            [-24, 216],
            [68, 134]
        ],
        [
            [55279, 77084],
            [100, 2],
            [-69, -260],
            [134, -227],
            [-41, -278],
            [-65, -27]
        ],
        [
            [55338, 76294],
            [-52, -53],
            [-90, -138],
            [-41, -325]
        ],
        [
            [55155, 75778],
            [-246, 224],
            [-105, 247],
            [-106, 130],
            [-127, 221],
            [-61, 183],
            [-136, 277],
            [59, 245],
            [99, -136],
            [60, 123],
            [130, 13],
            [239, -98],
            [192, 8],
            [126, -131]
        ],
        [
            [56523, 82432],
            [268, -4],
            [302, 223],
            [64, 333],
            [228, 190],
            [-26, 264]
        ],
        [
            [57359, 83438],
            [169, 100],
            [298, 228]
        ],
        [
            [57826, 83766],
            [293, -149],
            [39, -146],
            [146, 70],
            [272, -141],
            [27, -277],
            [-60, -159],
            [174, -387],
            [113, -108],
            [-16, -107],
            [187, -104],
            [80, -157],
            [-108, -129],
            [-224, 20],
            [-54, -55],
            [66, -196],
            [68, -379]
        ],
        [
            [58829, 81362],
            [-239, -35],
            [-85, -129],
            [-18, -298],
            [-111, 57],
            [-250, -28],
            [-73, 138],
            [-104, -103],
            [-105, 86],
            [-218, 12],
            [-310, 141],
            [-281, 47],
            [-215, -14],
            [-152, -160],
            [-133, -23]
        ],
        [
            [56535, 81053],
            [-6, 263],
            [-85, 274],
            [166, 121],
            [2, 235],
            [-77, 225],
            [-12, 261]
        ],
        [
            [25238, 61101],
            [-2, 87],
            [33, 27],
            [51, -70],
            [99, 357],
            [53, 8]
        ],
        [
            [25297, 59966],
            [-83, 0],
            [22, 667],
            [2, 468]
        ],
        [
            [31359, 37147],
            [-200, -81],
            [-109, 814],
            [-150, 663],
            [88, 572],
            [-146, 250],
            [-37, 426],
            [-136, 402]
        ],
        [
            [30669, 40193],
            [175, 638],
            [-119, 496],
            [63, 199],
            [-49, 219],
            [108, 295],
            [6, 503],
            [13, 415],
            [60, 200],
            [-240, 951]
        ],
        [
            [30686, 44109],
            [206, -50],
            [143, 13],
            [62, 179],
            [243, 239],
            [147, 222],
            [363, 100],
            [-29, -443],
            [34, -227],
            [-23, -396],
            [302, -529],
            [311, -98],
            [109, -220],
            [188, -117],
            [115, -172],
            [175, 6],
            [161, -175],
            [12, -342],
            [55, -172],
            [3, -255],
            [-81, -10],
            [107, -688],
            [533, -24],
            [-41, -342],
            [30, -233],
            [151, -166],
            [66, -367],
            [-49, -465],
            [-77, -259],
            [27, -337],
            [-87, -122]
        ],
        [
            [33842, 38659],
            [-4, 182],
            [-259, 302],
            [-258, 9],
            [-484, -172],
            [-133, -520],
            [-7, -318],
            [-110, -708]
        ],
        [
            [34826, 35372],
            [54, 341],
            [38, 350],
            [0, 325],
            [-100, 107],
            [-104, -96],
            [-103, 26],
            [-33, 228],
            [-26, 541],
            [-52, 177],
            [-187, 160],
            [-114, -116],
            [-293, 113],
            [18, 802],
            [-82, 329]
        ],
        [
            [30686, 44109],
            [-157, -102],
            [-126, 68],
            [18, 898],
            [-228, -348],
            [-245, 15],
            [-105, 315],
            [-184, 34],
            [59, 254],
            [-155, 359],
            [-115, 532],
            [73, 108],
            [0, 250],
            [168, 171],
            [-28, 319],
            [71, 206],
            [20, 275],
            [318, 402],
            [227, 114],
            [37, 89],
            [251, -28]
        ],
        [
            [30585, 48040],
            [125, 1620],
            [6, 256],
            [-43, 339],
            [-123, 215],
            [1, 430],
            [156, 97],
            [56, -61],
            [9, 226],
            [-162, 61],
            [-4, 370],
            [541, -13],
            [92, 203],
            [77, -187],
            [55, -349],
            [52, 73]
        ],
        [
            [31423, 51320],
            [153, -312],
            [216, 38],
            [54, 181],
            [206, 138],
            [115, 97],
            [32, 250],
            [198, 168],
            [-15, 124],
            [-235, 51],
            [-39, 372],
            [12, 396],
            [-125, 153],
            [52, 55],
            [206, -76],
            [221, -148],
            [80, 140],
            [200, 92],
            [310, 221],
            [102, 225],
            [-37, 167]
        ],
        [
            [33129, 53652],
            [145, 26],
            [64, -136],
            [-36, -259],
            [96, -90],
            [63, -274],
            [-77, -209],
            [-44, -502],
            [71, -299],
            [20, -274],
            [171, -277],
            [137, -29],
            [30, 116],
            [88, 25],
            [126, 104],
            [90, 157],
            [154, -50],
            [67, 21]
        ],
        [
            [34294, 51702],
            [151, -48],
            [25, 120],
            [-46, 118],
            [28, 171],
            [112, -53],
            [131, 61],
            [159, -125]
        ],
        [
            [34854, 51946],
            [121, -122],
            [86, 160],
            [62, -25],
            [38, -166],
            [133, 42],
            [107, 224],
            [85, 436],
            [164, 540]
        ],
        [
            [35174, 30629],
            [-77, 334],
            [122, 280],
            [-160, 402],
            [-218, 327],
            [-286, 379],
            [-103, -18],
            [-279, 457],
            [-180, -63]
        ],
        [
            [82069, 53798],
            [-13, -291],
            [-16, -377],
            [-133, 19],
            [-58, -202],
            [-126, 307]
        ],
        [
            [75471, 66988],
            [113, -189],
            [-20, -363],
            [-227, -17],
            [-234, 39],
            [-175, -92],
            [-252, 224],
            [-6, 119]
        ],
        [
            [74670, 66709],
            [184, 439],
            [150, 150],
            [198, -137],
            [147, -14],
            [122, -159]
        ],
        [
            [58175, 37528],
            [-393, -435],
            [-249, -442],
            [-93, -393],
            [-83, -222],
            [-152, -47],
            [-48, -283],
            [-28, -184],
            [-178, -138],
            [-226, 29],
            [-133, 166],
            [-117, 71],
            [-135, -137],
            [-68, -283],
            [-132, -177],
            [-139, -264],
            [-199, -60],
            [-62, 207],
            [26, 360],
            [-165, 562],
            [-75, 88]
        ],
        [
            [55526, 35946],
            [0, 1725],
            [274, 20],
            [8, 2105],
            [207, 19],
            [428, 207],
            [106, -243],
            [177, 231],
            [85, 2],
            [156, 133]
        ],
        [
            [56967, 40145],
            [50, -44]
        ],
        [
            [57017, 40101],
            [107, -473],
            [56, -105],
            [87, -342],
            [315, -649],
            [119, -64],
            [0, -208],
            [82, -375],
            [215, -90],
            [177, -267]
        ],
        [
            [54244, 54965],
            [229, 44],
            [52, 152],
            [46, -11],
            [69, -134],
            [350, 226],
            [118, 230],
            [145, 207],
            [-28, 208],
            [78, 54],
            [269, -36],
            [261, 273],
            [201, 645],
            [141, 239],
            [176, 101]
        ],
        [
            [56351, 57163],
            [31, -253],
            [160, -369],
            [1, -241],
            [-45, -246],
            [18, -184],
            [96, -170]
        ],
        [
            [56612, 55700],
            [212, -258]
        ],
        [
            [56824, 55442],
            [152, -239],
            [2, -192],
            [187, -308],
            [116, -255],
            [70, -355],
            [208, -234],
            [44, -187]
        ],
        [
            [57603, 53672],
            [-91, -63],
            [-178, 14],
            [-209, 62],
            [-104, -51],
            [-41, -143],
            [-90, -18],
            [-110, 125],
            [-309, -295],
            [-127, 60],
            [-38, -46],
            [-83, -357],
            [-207, 115],
            [-203, 59],
            [-177, 218],
            [-229, 200],
            [-149, -190],
            [-108, -300],
            [-25, -412]
        ],
        [
            [55125, 52650],
            [-178, 33],
            [-188, 99],
            [-166, -313],
            [-146, -550]
        ],
        [
            [54447, 51919],
            [-29, 172],
            [-12, 269],
            [-127, 190],
            [-103, 305],
            [-23, 212],
            [-132, 309],
            [23, 176],
            [-28, 249],
            [21, 458],
            [67, 107],
            [140, 599]
        ],
        [
            [26228, 91219],
            [16, 649],
            [394, -46]
        ],
        [
            [25824, 89109],
            [-81, -259],
            [-322, -399]
        ],
        [
            [23714, 86094],
            [-16, -686],
            [409, -99]
        ],
        [
            [25743, 83665],
            [348, -163],
            [294, -248]
        ],
        [
            [28738, 83981],
            [-23, 395],
            [-188, 502]
        ],
        [
            [31513, 79609],
            [415, 58],
            [246, -289]
        ],
        [
            [31350, 77248],
            [-181, 334],
            [0, 805],
            [-123, 171],
            [-187, -100],
            [-92, 155],
            [-212, -446],
            [-84, -460],
            [-99, -269],
            [-118, -91],
            [-89, -30],
            [-28, -146],
            [-512, 0],
            [-422, -4],
            [-125, -109],
            [-294, -425],
            [-34, -46],
            [-89, -231],
            [-255, 1],
            [-273, -3],
            [-125, -93],
            [44, -116],
            [25, -181],
            [-5, -60],
            [-363, -293],
            [-286, -93],
            [-323, -316],
            [-70, 0],
            [-94, 93],
            [-31, 85],
            [6, 61],
            [61, 207],
            [131, 325],
            [81, 349],
            [-56, 514],
            [-59, 536],
            [-290, 277],
            [35, 105],
            [-41, 73],
            [-76, 0],
            [-56, 93],
            [-14, 140],
            [-54, -61],
            [-75, 18],
            [17, 59],
            [-65, 58],
            [-27, 155],
            [-216, 189],
            [-224, 197],
            [-272, 229],
            [-261, 214],
            [-248, -167],
            [-91, -6],
            [-342, 154],
            [-225, -77],
            [-269, 183],
            [-284, 94],
            [-194, 36],
            [-86, 100],
            [-49, 325],
            [-94, -3],
            [-1, -227],
            [-575, 0],
            [-951, 0],
            [-944, 0],
            [-833, 0],
            [-834, 0],
            [-819, 0],
            [-847, 0],
            [-273, 0],
            [-825, 0],
            [-788, 0]
        ],
        [
            [15104, 80367],
            [-503, 244],
            [-155, 523],
            [40, 363]
        ],
        [
            [13740, 82958],
            [154, 285],
            [-7, 373],
            [-473, 376],
            [-284, 674],
            [-173, 424],
            [-255, 266],
            [-187, 242],
            [-147, 306],
            [-279, -192],
            [-270, -330],
            [-247, 388],
            [-194, 259],
            [-271, 164],
            [-273, 17],
            [1, 3364],
            [2, 2193]
        ],
        [
            [11355, 91625],
            [438, -285],
            [289, -54]
        ],
        [
            [15437, 92031],
            [38, -449],
            [341, 97]
        ],
        [
            [17987, 91291],
            [374, -300],
            [-390, -293]
        ],
        [
            [19722, 91216],
            [-704, -88],
            [-494, -56]
        ],
        [
            [15020, 93041],
            [119, 250],
            [192, 432]
        ],
        [
            [16539, 93012],
            [0, -257],
            [-731, -285]
        ],
        [
            [52900, 78285],
            [-22, -242],
            [-122, -100],
            [-206, 75],
            [-60, -239],
            [-132, -19],
            [-48, 94],
            [-156, -200],
            [-134, -28],
            [-120, 126]
        ],
        [
            [51900, 77752],
            [-95, 259],
            [-133, -92],
            [5, 267],
            [203, 332],
            [-9, 150],
            [126, -54],
            [77, 101]
        ],
        [
            [52074, 78715],
            [236, -4],
            [57, 128],
            [298, -181]
        ],
        [
            [31070, 17723],
            [-137, 19],
            [-164, 48]
        ],
        [
            [29661, 27385],
            [-80, 576],
            [-22, 666]
        ],
        [
            [30452, 39739],
            [143, 151],
            [74, 303]
        ],
        [
            [86288, 75628],
            [-179, 348],
            [-111, -331],
            [-429, -254],
            [44, -312],
            [-241, 22],
            [-131, 185],
            [-191, -419],
            [-306, -318],
            [-227, -379]
        ],
        [
            [83030, 72705],
            [220, -173],
            [311, 422]
        ],
        [
            [83987, 72709],
            [45, -310],
            [-393, -165]
        ],
        [
            [83097, 71205],
            [299, -325],
            [109, -581]
        ],
        [
            [80517, 63220],
            [-373, 189],
            [-131, -96]
        ],
        [
            [80013, 63313],
            [-280, 154],
            [-132, 240],
            [44, 340],
            [-254, 108],
            [-134, 222],
            [-236, -315],
            [-271, -68],
            [-221, 3],
            [-149, -145]
        ],
        [
            [78380, 63852],
            [-144, -86],
            [42, -676],
            [-148, 16],
            [-25, 139]
        ],
        [
            [78105, 63245],
            [-9, 244],
            [-203, -172],
            [-121, 109],
            [-206, 222],
            [81, 490],
            [-176, 115],
            [-66, 544],
            [-293, -98],
            [33, 701],
            [263, 493],
            [11, 487],
            [-8, 452],
            [-121, 141],
            [-93, 348],
            [-162, -44]
        ],
        [
            [77035, 67277],
            [-300, 89],
            [94, 248],
            [-130, 367],
            [-198, -249],
            [-233, 145],
            [-321, -376],
            [-252, -439],
            [-224, -74]
        ],
        [
            [74670, 66709],
            [-23, 465],
            [-170, -124]
        ],
        [
            [74477, 67050],
            [-324, 57],
            [-314, 136],
            [-225, 259],
            [-216, 117],
            [-93, 284],
            [-157, 84],
            [-280, 385],
            [-223, 182],
            [-115, -141]
        ],
        [
            [72530, 68413],
            [-386, 413],
            [-273, 374],
            [-78, 651],
            [200, -79],
            [9, 301],
            [-111, 303],
            [28, 482],
            [-298, 692]
        ],
        [
            [71621, 71550],
            [-457, 239],
            [-82, 454],
            [-205, 276]
        ],
        [
            [70827, 72688],
            [-42, 337],
            [10, 230],
            [-169, 134],
            [-91, -59],
            [-70, 546]
        ],
        [
            [70465, 73876],
            [79, 136],
            [-39, 138],
            [266, 279],
            [192, 116],
            [294, -80],
            [105, 378],
            [356, 70],
            [99, 234],
            [438, 320],
            [39, 134]
        ],
        [
            [72294, 75601],
            [-22, 337],
            [190, 154],
            [-250, 1026],
            [550, 236],
            [143, 131],
            [200, 1058],
            [551, -194],
            [155, 267],
            [13, 592],
            [230, 56],
            [212, 393]
        ],
        [
            [74266, 79657],
            [109, 49]
        ],
        [
            [74375, 79706],
            [73, -413],
            [233, -313],
            [396, -222],
            [192, -476],
            [-107, -690],
            [100, -256],
            [330, -101],
            [374, -83],
            [336, -368],
            [171, -66],
            [127, -544],
            [163, -351],
            [306, 14],
            [574, -133],
            [369, 82],
            [274, -88],
            [411, -359],
            [336, 1],
            [123, -184],
            [324, 318],
            [448, 205],
            [417, 22],
            [324, 208],
            [200, 316],
            [194, 199],
            [-45, 195],
            [-89, 227],
            [146, 381],
            [156, -53],
            [286, -120],
            [277, 313],
            [423, 229],
            [204, 391],
            [195, 168],
            [404, 78],
            [219, -66],
            [30, 210],
            [-251, 413],
            [-223, 189],
            [-214, -219],
            [-274, 92],
            [-157, -74],
            [-72, 241],
            [197, 590],
            [135, 446]
        ],
        [
            [82410, 80055],
            [333, -223],
            [392, 373],
            [-3, 260],
            [251, 627],
            [155, 189],
            [-4, 326],
            [-152, 141],
            [229, 294],
            [345, 106],
            [369, 16],
            [415, -176],
            [244, -217],
            [172, -596],
            [104, -254],
            [97, -363],
            [103, -579],
            [483, -189],
            [329, -420],
            [112, -555],
            [423, -1],
            [240, 233],
            [459, 175],
            [-146, -532],
            [-107, -216],
            [-96, -647],
            [-186, -575],
            [-338, 104],
            [-238, -208],
            [73, -506],
            [-40, -698],
            [-142, -16],
            [2, -300]
        ],
        [
            [47857, 53158],
            [22, 487],
            [26, 74],
            [-8, 233],
            [-118, 247],
            [-88, 40],
            [-81, 162],
            [60, 262],
            [-28, 286],
            [13, 172]
        ],
        [
            [47655, 55121],
            [44, 0],
            [17, 258],
            [-22, 114],
            [27, 82],
            [103, 71],
            [-69, 473],
            [-64, 245],
            [23, 200],
            [55, 46]
        ],
        [
            [47769, 56610],
            [36, 54],
            [77, -89],
            [215, -5],
            [51, 172],
            [48, -11],
            [80, 67],
            [43, -253],
            [65, 74],
            [114, 88]
        ],
        [
            [49214, 56277],
            [74, -841],
            [-117, -496],
            [-73, -667],
            [121, -509],
            [-13, -233]
        ],
        [
            [53632, 51919],
            [-35, 32],
            [-164, -76],
            [-169, 79],
            [-132, -38]
        ],
        [
            [53132, 51916],
            [-452, 13]
        ],
        [
            [52680, 51929],
            [40, 466],
            [-108, 391]
        ],
        [
            [52429, 53151],
            [-72, 85],
            [4, 163]
        ],
        [
            [52361, 53399],
            [71, 418],
            [132, 570],
            [81, 6],
            [165, 345],
            [105, 10],
            [156, -243],
            [191, 199],
            [26, 246],
            [63, 238],
            [43, 299],
            [148, 243],
            [56, 414],
            [59, 132],
            [39, 307],
            [74, 377],
            [234, 457],
            [14, 196],
            [31, 107],
            [-110, 235]
        ],
        [
            [53939, 57955],
            [9, 188],
            [78, 34]
        ],
        [
            [54026, 58177],
            [111, -378],
            [18, -392],
            [-10, -393],
            [151, -537],
            [-155, 6],
            [-78, -42],
            [-127, 60],
            [-60, -279],
            [164, -345],
            [121, -100],
            [39, -245],
            [87, -407],
            [-43, -160]
        ],
        [
            [54447, 51919],
            [-20, -319],
            [-220, 140],
            [-225, 156],
            [-350, 23]
        ],
        [
            [58564, 52653],
            [-16, -691],
            [111, -80],
            [-89, -210],
            [-107, -157],
            [-106, -308],
            [-59, -274],
            [-15, -475],
            [-65, -225],
            [-2, -446]
        ],
        [
            [58216, 49787],
            [-80, -165],
            [-10, -351],
            [-38, -46],
            [-26, -323]
        ],
        [
            [58149, 47921],
            [50, -544],
            [-27, -307]
        ],
        [
            [58172, 47070],
            [55, -343],
            [161, -330]
        ],
        [
            [58388, 46397],
            [150, -745]
        ],
        [
            [58538, 45652],
            [-109, 60],
            [-373, -99],
            [-75, -71],
            [-79, -377],
            [62, -261],
            [-49, -699],
            [-34, -593],
            [75, -105],
            [194, -230],
            [76, 107],
            [23, -637],
            [-212, 5],
            [-114, 325],
            [-103, 252],
            [-213, 82],
            [-62, 310],
            [-170, -187],
            [-222, 83],
            [-93, 268],
            [-176, 55],
            [-131, -15],
            [-15, 184],
            [-96, 15]
        ],
        [
            [53609, 47755],
            [73, -60],
            [95, 226],
            [152, -6],
            [17, -167],
            [104, -105],
            [164, 370],
            [161, 289],
            [71, 189],
            [-10, 486],
            [121, 574],
            [127, 304],
            [183, 285],
            [32, 189],
            [7, 216],
            [45, 205],
            [-14, 335],
            [34, 524],
            [55, 368],
            [83, 316],
            [16, 357]
        ],
        [
            [57603, 53672],
            [169, -488],
            [124, -71],
            [75, 99],
            [128, -39],
            [155, 125],
            [66, -252],
            [244, -393]
        ],
        [
            [53081, 48229],
            [212, 326],
            [-105, 391],
            [95, 148],
            [187, 73],
            [23, 261],
            [148, -283],
            [245, -25],
            [85, 279],
            [36, 393],
            [-31, 461],
            [-131, 350],
            [120, 684],
            [-69, 117],
            [-207, -48],
            [-78, 305],
            [21, 258]
        ],
        [
            [29063, 50490],
            [-119, 140],
            [-137, 195],
            [-79, -94],
            [-235, 82],
            [-68, 255],
            [-52, -10],
            [-278, 338]
        ],
        [
            [28366, 54848],
            [36, 287],
            [89, -43],
            [52, 176],
            [-64, 348],
            [34, 86]
        ],
        [
            [30185, 57537],
            [-178, -99],
            [-71, -295],
            [-107, -169],
            [-81, -220],
            [-34, -422],
            [-77, -345],
            [144, -40],
            [35, -271],
            [62, -130],
            [21, -238],
            [-33, -219],
            [10, -123],
            [69, -49],
            [66, -207],
            [357, 57],
            [161, -75],
            [196, -508],
            [112, 63],
            [200, -32],
            [158, 68],
            [99, -102],
            [-50, -318],
            [-62, -199],
            [-22, -423],
            [56, -393],
            [79, -175],
            [9, -133],
            [-140, -294],
            [100, -130],
            [74, -207],
            [85, -589]
        ],
        [
            [30585, 48040],
            [-139, 314],
            [-83, 14],
            [179, 602],
            [-213, 276],
            [-166, -51],
            [-101, 103],
            [-153, -157],
            [-207, 74],
            [-163, 620],
            [-129, 152],
            [-89, 279],
            [-184, 280],
            [-74, -56]
        ],
        [
            [26191, 57131],
            [42, 76],
            [183, -156],
            [63, 77],
            [89, -50],
            [46, -121],
            [82, -40],
            [66, 126]
        ],
        [
            [27070, 56232],
            [-107, -53],
            [1, -238],
            [58, -88],
            [-41, -70],
            [10, -107],
            [-23, -120],
            [-14, -117]
        ],
        [
            [59437, 71293],
            [-30, 21],
            [-53, -45],
            [-42, 12],
            [-14, -22],
            [-5, 59],
            [-20, 37],
            [-54, 6],
            [-75, -51],
            [-52, 31]
        ],
        [
            [53776, 79457],
            [-157, 254],
            [-141, 142],
            [-30, 249],
            [-49, 176],
            [202, 129],
            [103, 147],
            [200, 114],
            [70, 113],
            [73, -68],
            [124, 62]
        ],
        [
            [54171, 80775],
            [132, -191],
            [207, -51],
            [-17, -163],
            [151, -122],
            [41, 153],
            [191, -66],
            [26, -185],
            [207, -36],
            [127, -291]
        ],
        [
            [55236, 79823],
            [-82, -1],
            [-43, -106],
            [-64, -26],
            [-18, -134],
            [-54, -28],
            [-7, -55],
            [-95, -61],
            [-123, 10],
            [-39, -130]
        ],
        [
            [53922, 82340],
            [64, -300],
            [-77, -158],
            [101, -210],
            [69, -316],
            [-22, -204],
            [114, -377]
        ],
        [
            [52074, 78715],
            [35, 421],
            [140, 404],
            [-400, 109],
            [-131, 155]
        ],
        [
            [51718, 79804],
            [16, 259],
            [-56, 133]
        ],
        [
            [51710, 80596],
            [-47, 619],
            [167, 0],
            [70, 222],
            [69, 541],
            [-51, 200]
        ],
        [
            [52368, 83053],
            [210, -78],
            [178, 90]
        ],
        [
            [61984, 57352],
            [-102, -317]
        ],
        [
            [61882, 57035],
            [-62, 106],
            [-67, -42],
            [-155, 10],
            [-4, 180],
            [-22, 163],
            [94, 277],
            [98, 261]
        ],
        [
            [61764, 57990],
            [119, -51],
            [83, 144]
        ],
        [
            [52293, 84144],
            [80, 177],
            [244, 37]
        ],
        [
            [30081, 61241],
            [5, 161],
            [-71, 177],
            [68, 99],
            [21, 228],
            [-24, 321]
        ],
        [
            [53333, 64447],
            [-952, -1126],
            [-804, -1161],
            [-392, -263]
        ],
        [
            [51185, 61897],
            [-308, -58],
            [-3, 376],
            [-129, 96],
            [-173, 169],
            [-66, 277],
            [-937, 1289],
            [-937, 1289]
        ],
        [
            [48632, 65335],
            [-1045, 1431]
        ],
        [
            [47587, 66766],
            [6, 114],
            [-1, 40]
        ],
        [
            [47592, 66920],
            [-2, 700],
            [449, 436],
            [277, 90],
            [227, 159],
            [107, 295],
            [324, 234],
            [12, 438],
            [161, 51],
            [126, 219],
            [363, 99],
            [51, 230],
            [-73, 125],
            [-96, 624],
            [-17, 359],
            [-104, 379]
        ],
        [
            [52339, 72408],
            [-57, -303],
            [44, -563],
            [-65, -487],
            [-171, -330],
            [24, -445],
            [227, -352],
            [3, -143],
            [171, -238],
            [118, -1061]
        ],
        [
            [52633, 68486],
            [90, -522],
            [15, -274],
            [-49, -482],
            [21, -270],
            [-36, -323],
            [24, -371],
            [-110, -247],
            [164, -431],
            [11, -253],
            [99, -330],
            [130, 109],
            [219, -275],
            [122, -370]
        ],
        [
            [29063, 50490],
            [38, -449],
            [-86, -384],
            [-303, -619],
            [-334, -233],
            [-170, -514],
            [-53, -398],
            [-157, -243],
            [-116, 298],
            [-113, 64],
            [-114, -47],
            [-8, 216],
            [79, 141],
            [-33, 246]
        ],
        [
            [60240, 63578],
            [-1102, 0],
            [-1077, 0],
            [-1117, 0]
        ],
        [
            [56944, 63578],
            [0, 2175],
            [0, 2101],
            [-83, 476],
            [71, 365],
            [-43, 253],
            [101, 283]
        ],
        [
            [59518, 69025],
            [182, -1015]
        ],
        [
            [61764, 57990],
            [-95, 191],
            [-114, 346],
            [-124, 190],
            [-71, 204],
            [-242, 237],
            [-191, 7],
            [-67, 124],
            [-163, -139],
            [-168, 268],
            [-87, -441],
            [-323, 124]
        ],
        [
            [60119, 59101],
            [-30, 236],
            [120, 868],
            [27, 393],
            [88, 181],
            [204, 97],
            [141, 337]
        ],
        [
            [60669, 61213],
            [161, -684],
            [77, -542]
        ],
        [
            [47783, 76427],
            [340, -106],
            [373, 3]
        ],
        [
            [49471, 76235],
            [111, -230],
            [511, -268],
            [101, 127],
            [313, -267],
            [322, 77]
        ],
        [
            [49600, 72702],
            [-197, -454],
            [-352, -9]
        ],
        [
            [47929, 72498],
            [-23, 195],
            [103, 222],
            [38, 161],
            [-96, 175],
            [77, 388],
            [-111, 355],
            [120, 48],
            [11, 280],
            [45, 86],
            [3, 461],
            [129, 160],
            [-78, 296],
            [-162, 21],
            [-47, -75],
            [-164, 0],
            [-70, 289],
            [-113, -86],
            [-101, -150]
        ],
        [
            [57772, 85719],
            [42, -103],
            [-198, -341],
            [83, -551],
            [-120, -187]
        ],
        [
            [57579, 84537],
            [-229, 1],
            [-239, 219],
            [-121, 73],
            [-237, -105]
        ],
        [
            [61882, 57035],
            [-61, -209],
            [103, -325],
            [102, -285],
            [106, -210],
            [909, -702],
            [233, 4]
        ],
        [
            [63274, 55308],
            [-785, -1773],
            [-362, -26],
            [-247, -417],
            [-178, -11],
            [-76, -186]
        ],
        [
            [61626, 52895],
            [-190, 0],
            [-112, 200],
            [-254, -247],
            [-82, -247],
            [-185, 47],
            [-62, 68],
            [-65, -16],
            [-87, 6],
            [-352, 502],
            [-193, 0],
            [-95, 194],
            [0, 332],
            [-145, 99]
        ],
        [
            [59804, 53833],
            [-164, 643],
            [-127, 137],
            [-48, 236],
            [-141, 288],
            [-171, 42],
            [95, 337],
            [147, 14],
            [42, 181]
        ],
        [
            [59437, 55711],
            [-4, 531]
        ],
        [
            [59433, 56242],
            [82, 618],
            [132, 166],
            [28, 241],
            [119, 451],
            [168, 293],
            [112, 582],
            [45, 508]
        ],
        [
            [57942, 91385],
            [-41, -414],
            [425, -394],
            [-256, -445],
            [323, -673],
            [-187, -506],
            [250, -440],
            [-113, -385],
            [411, -405],
            [-105, -301],
            [-258, -341],
            [-594, -755]
        ],
        [
            [56352, 85938],
            [-161, 323],
            [-269, 193],
            [62, 582]
        ],
        [
            [55984, 87036],
            [-135, 533],
            [133, 345]
        ],
        [
            [56639, 89578],
            [-93, 230],
            [-8, 910],
            [-433, 402],
            [-371, 289]
        ],
        [
            [55734, 91409],
            [167, 156],
            [309, -312],
            [362, 29],
            [298, -143],
            [265, 262],
            [137, 433],
            [431, 200],
            [356, -235],
            [-117, -414]
        ],
        [
            [34854, 51946],
            [70, 252],
            [24, 269],
            [48, 253],
            [-107, 349]
        ],
        [
            [34889, 53069],
            [-22, 404],
            [144, 508]
        ],
        [
            [51576, 79843],
            [62, -52],
            [80, 13]
        ],
        [
            [51900, 77752],
            [-11, -167],
            [82, -222],
            [-97, -180],
            [72, -457],
            [151, -75],
            [-32, -256]
        ],
        [
            [49176, 78685],
            [-424, 227],
            [-28, 431]
        ],
        [
            [52636, 51176],
            [94, 35],
            [404, -6],
            [-2, 711]
        ],
        [
            [48278, 82406],
            [-210, 122],
            [-172, -9],
            [57, 317],
            [-57, 317]
        ],
        [
            [49420, 83612],
            [22, -62],
            [248, -697]
        ],
        [
            [49051, 80963],
            [-2, 1],
            [-434, 98]
        ],
        [
            [48727, 82186],
            [413, -54],
            [1, 0]
        ],
        [
            [49181, 82475],
            [-186, 364],
            [-4, 8]
        ],
        [
            [61098, 76242],
            [34, 70],
            [235, -101],
            [409, -96],
            [378, -283],
            [48, -110],
            [169, 93],
            [259, -124],
            [85, -242],
            [175, -137]
        ],
        [
            [62106, 74858],
            [-268, 290],
            [-296, -28]
        ],
        [
            [50006, 57090],
            [-20, -184],
            [116, -305],
            [-1, -429],
            [27, -466],
            [69, -215],
            [-61, -532],
            [22, -294],
            [74, -375],
            [62, -207]
        ],
        [
            [47655, 55121],
            [-78, 15],
            [-57, -238],
            [-78, 3],
            [-55, 126],
            [19, 237],
            [-116, 362],
            [-73, -67],
            [-59, -13]
        ],
        [
            [47158, 55546],
            [-77, -34],
            [3, 217],
            [-44, 155],
            [9, 171],
            [-60, 249],
            [-78, 211],
            [-222, 1],
            [-65, -112],
            [-76, -13],
            [-48, -128],
            [-32, -163],
            [-148, -260]
        ],
        [
            [45797, 57103],
            [123, 288],
            [84, -11],
            [73, 99],
            [61, 1],
            [44, 78],
            [-24, 196],
            [31, 62],
            [5, 200]
        ],
        [
            [46194, 58016],
            [134, -6],
            [200, -144],
            [61, 13],
            [21, 66],
            [151, -47],
            [40, 33]
        ],
        [
            [46801, 57931],
            [16, -216],
            [44, 1],
            [73, 78],
            [46, -19],
            [77, -150],
            [119, -48],
            [76, 128],
            [90, 79],
            [67, 83],
            [55, -15],
            [62, -130],
            [33, -163],
            [114, -248],
            [-57, -152],
            [-11, -192],
            [59, 58],
            [35, -69],
            [-15, -176],
            [85, -170]
        ],
        [
            [45357, 58612],
            [302, 17],
            [63, 140],
            [88, 9],
            [110, -145],
            [86, -3],
            [92, 99],
            [56, -170],
            [-120, -133],
            [-121, 11],
            [-119, 124],
            [-103, -136],
            [-50, -5],
            [-67, -83],
            [-253, 13]
        ],
        [
            [45367, 57897],
            [147, 96],
            [92, -19],
            [75, 67],
            [513, -25]
        ],
        [
            [56638, 74190],
            [-154, -1],
            [-147, 305]
        ],
        [
            [56486, 73734],
            [-105, -129],
            [155, -273]
        ],
        [
            [56431, 72099],
            [-184, -8],
            [-228, 257],
            [-104, 473]
        ],
        [
            [55838, 74710],
            [182, 53],
            [106, 129],
            [150, -12],
            [46, 103],
            [53, 20]
        ],
        [
            [57254, 75292],
            [135, -157],
            [-86, -369],
            [-66, -67]
        ],
        [
            [24381, 59170],
            [7, 172],
            [32, 138],
            [-39, 111],
            [133, 481],
            [357, 2],
            [7, 201],
            [-45, 36],
            [-31, 128],
            [-103, 136],
            [-103, 198],
            [125, 1],
            [1, 333],
            [259, 1],
            [257, -7]
        ],
        [
            [25493, 59872],
            [-127, -225],
            [-131, -166],
            [-20, -113],
            [22, -116],
            [-58, -150]
        ],
        [
            [25179, 59102],
            [-65, -37],
            [15, -69],
            [-52, -66],
            [-95, -149],
            [-9, -86]
        ],
        [
            [34125, 54109],
            [-44, -532],
            [-169, -154],
            [15, -139],
            [-51, -305],
            [123, -429],
            [89, -1],
            [37, -333],
            [169, -514]
        ],
        [
            [33129, 53652],
            [-188, 448],
            [75, 163],
            [-5, 273],
            [171, 95],
            [69, 110],
            [-95, 220],
            [24, 215],
            [220, 347]
        ],
        [
            [25697, 58436],
            [-84, 51]
        ],
        [
            [25613, 58487],
            [19, 237],
            [-38, 64],
            [-57, 42],
            [-122, -70],
            [-10, 79],
            [-84, 95],
            [-60, 118],
            [-82, 50]
        ],
        [
            [25860, 59889],
            [128, 15],
            [90, 66]
        ],
        [
            [26903, 59440],
            [-95, 12],
            [-38, -81],
            [-97, -77],
            [-70, 0],
            [-61, -76],
            [-56, 27],
            [-47, 90],
            [-29, -17],
            [-36, -141],
            [-27, 5],
            [-4, -121],
            [-97, -163],
            [-51, -70],
            [-29, -74],
            [-82, 120],
            [-60, -158],
            [-58, 4],
            [-65, -14],
            [6, -290],
            [-41, -5],
            [-35, -135],
            [-86, -25]
        ],
        [
            [55230, 77704],
            [67, -229],
            [89, -169],
            [-107, -222]
        ],
        [
            [55155, 75778],
            [-31, -100]
        ],
        [
            [54448, 76285],
            [-233, 434],
            [56, 45]
        ],
        [
            [53809, 77462],
            [194, -20],
            [51, 100],
            [94, -97],
            [109, -11],
            [-1, 165],
            [97, 60],
            [27, 239],
            [221, 157]
        ],
        [
            [54601, 78055],
            [88, -73],
            [208, -253],
            [229, -114],
            [104, 89]
        ],
        [
            [54716, 79012],
            [141, -151],
            [103, -65],
            [233, 73],
            [22, 118],
            [111, 18],
            [135, 92],
            [30, -38],
            [130, 74],
            [66, 139],
            [91, 36],
            [297, -180],
            [59, 61]
        ],
        [
            [56134, 79189],
            [155, -161],
            [19, -159]
        ],
        [
            [56308, 78869],
            [-170, -123],
            [-131, -401],
            [-168, -401],
            [-223, -111]
        ],
        [
            [55616, 77833],
            [-173, 26],
            [-213, -155]
        ],
        [
            [54601, 78055],
            [-54, 200],
            [-47, 6]
        ],
        [
            [84713, 45326],
            [28, -117],
            [5, -179]
        ],
        [
            [89166, 49043],
            [5, -1925],
            [4, -1925]
        ],
        [
            [80461, 51765],
            [47, -395],
            [190, -334],
            [179, 121],
            [177, -43],
            [162, 299],
            [133, 52],
            [263, -166],
            [226, 126],
            [143, 822],
            [107, 205],
            [96, 672],
            [319, 0],
            [241, -100]
        ],
        [
            [72530, 68413],
            [-176, -268],
            [-108, -553],
            [269, -224],
            [262, -289],
            [362, -332],
            [381, -76],
            [160, -301],
            [215, -56],
            [334, -138],
            [231, 10],
            [32, 234],
            [-36, 375],
            [21, 255]
        ],
        [
            [77035, 67277],
            [20, -224],
            [-97, -108],
            [23, -364],
            [-199, 107],
            [-359, -408],
            [8, -338],
            [-153, -496],
            [-14, -288],
            [-124, -487],
            [-217, 135],
            [-11, -612],
            [-63, -201],
            [30, -251],
            [-137, -140]
        ],
        [
            [73107, 61020],
            [-276, -387],
            [-1, -271]
        ],
        [
            [72692, 60216],
            [-251, -212],
            [-129, -31]
        ],
        [
            [71996, 56025],
            [-253, -168],
            [-93, -401]
        ],
        [
            [68937, 64577],
            [185, 395],
            [612, -2],
            [-56, 507],
            [-156, 300],
            [-31, 455],
            [-182, 265],
            [306, 619],
            [323, -45],
            [290, 620],
            [174, 599],
            [270, 593],
            [-4, 421],
            [236, 342],
            [-224, 292],
            [-96, 400],
            [-99, 517],
            [137, 255],
            [421, -144],
            [310, 88],
            [268, 496]
        ],
        [
            [64978, 72558],
            [244, 114],
            [197, 338],
            [186, -17],
            [122, 110],
            [197, -55],
            [308, -299],
            [221, -65],
            [318, -523],
            [207, -21],
            [24, -498]
        ],
        [
            [66909, 68203],
            [137, -310],
            [112, -357],
            [266, -260],
            [7, -520],
            [133, -96],
            [23, -272],
            [-400, -305],
            [-105, -687]
        ],
        [
            [66559, 65575],
            [-303, 136],
            [-313, 76]
        ],
        [
            [63594, 68492],
            [-104, -231]
        ],
        [
            [63490, 68261],
            [-153, 311],
            [-3, 314],
            [-89, 0],
            [46, 428],
            [-143, 449],
            [-340, 324],
            [-193, 562],
            [65, 461],
            [139, 204],
            [-21, 345],
            [-182, 177],
            [-180, 705]
        ],
        [
            [62436, 72541],
            [-152, 473],
            [55, 183],
            [-87, 678],
            [190, 168]
        ],
        [
            [63490, 68261],
            [-164, 29]
        ],
        [
            [63326, 68290],
            [-187, 49],
            [-204, -567]
        ],
        [
            [62935, 67772],
            [-516, 47],
            [-784, 1188],
            [-413, 414],
            [-335, 160]
        ],
        [
            [60887, 69581],
            [-112, 720]
        ],
        [
            [60775, 70301],
            [615, 614],
            [105, 715],
            [-26, 431],
            [152, 146],
            [142, 369]
        ],
        [
            [61763, 72576],
            [119, 92],
            [324, -77],
            [97, -150],
            [133, 100]
        ],
        [
            [59922, 69905],
            [-49, -186]
        ],
        [
            [59873, 69719],
            [-100, 82],
            [-58, -394],
            [69, -66],
            [-71, -81],
            [-12, -156],
            [131, 80]
        ],
        [
            [59832, 69184],
            [7, -230],
            [-139, -944]
        ],
        [
            [59757, 70130],
            [93, -1],
            [25, 104],
            [75, 8]
        ],
        [
            [59950, 70241],
            [4, -242],
            [-38, -90],
            [6, -4]
        ],
        [
            [53835, 78058],
            [-31, -291],
            [67, -251]
        ],
        [
            [54413, 75123],
            [249, -214],
            [204, -178]
        ],
        [
            [53108, 75604],
            [-189, 340],
            [-86, 585]
        ],
        [
            [59922, 69905],
            [309, -234],
            [544, 630]
        ],
        [
            [60887, 69581],
            [-53, -89],
            [-556, -296],
            [277, -591],
            [-92, -101],
            [-46, -197],
            [-212, -82],
            [-66, -213],
            [-120, -182],
            [-310, 94]
        ],
        [
            [59832, 69184],
            [41, 173],
            [0, 362]
        ],
        [
            [69711, 75551],
            [-159, -109],
            [-367, -412],
            [-121, -422],
            [-104, -4],
            [-76, 280],
            [-353, 19],
            [-57, 484],
            [-135, 4],
            [21, 593],
            [-333, 431],
            [-476, -46],
            [-326, -86],
            [-265, 533],
            [-227, 223],
            [-431, 423],
            [-52, 51],
            [-715, -349],
            [11, -2178]
        ],
        [
            [65546, 74986],
            [-142, -29],
            [-195, 463],
            [-188, 166],
            [-315, -123],
            [-123, -197]
        ],
        [
            [63639, 77993],
            [-142, 96],
            [29, 304],
            [-177, 395],
            [-207, -17],
            [-235, 401],
            [160, 448],
            [-81, 120],
            [222, 649],
            [285, -342],
            [35, 431],
            [573, 643],
            [434, 15],
            [612, -409],
            [329, -239],
            [295, 249],
            [440, 12],
            [356, -306],
            [80, 175],
            [391, -25],
            [69, 280],
            [-450, 406],
            [267, 288],
            [-52, 161],
            [266, 153],
            [-200, 405],
            [127, 202],
            [1039, 205],
            [136, 146],
            [695, 218],
            [250, 245],
            [499, -127],
            [88, -612],
            [290, 144],
            [356, -202],
            [-23, -322],
            [267, 33],
            [696, 558],
            [-102, -185],
            [355, -457],
            [620, -1500],
            [148, 309],
            [383, -340],
            [399, 151],
            [154, -106],
            [133, -341],
            [194, -115],
            [119, -251],
            [358, 79],
            [147, -361]
        ],
        [
            [72294, 75601],
            [-171, 87],
            [-140, 212],
            [-412, 62],
            [-461, 16],
            [-100, -65],
            [-396, 248],
            [-158, -122],
            [-43, -349],
            [-457, 204],
            [-183, -84],
            [-62, -259]
        ],
        [
            [60889, 47817],
            [-399, 590],
            [-19, 343],
            [-1007, 1203],
            [-47, 65]
        ],
        [
            [59417, 50018],
            [-3, 627],
            [80, 239],
            [137, 391],
            [101, 431],
            [-123, 678],
            [-32, 296],
            [-132, 411]
        ],
        [
            [59445, 53091],
            [171, 352],
            [188, 390]
        ],
        [
            [61626, 52895],
            [-243, -670],
            [3, -2152],
            [165, -488]
        ],
        [
            [70465, 73876],
            [-526, -89],
            [-343, 192],
            [-301, -46],
            [26, 340],
            [303, -98],
            [101, 182]
        ],
        [
            [69725, 74357],
            [212, -58],
            [355, 425],
            [-329, 311],
            [-198, -147],
            [-205, 223],
            [234, 382],
            [-83, 58]
        ],
        [
            [78495, 57780],
            [-66, 713],
            [178, 492],
            [359, 112],
            [261, -84]
        ],
        [
            [79227, 59013],
            [229, -232],
            [126, 407],
            [246, -217]
        ],
        [
            [79828, 58971],
            [64, -394],
            [-34, -708],
            [-467, -455],
            [122, -358],
            [-292, -43],
            [-240, -238]
        ],
        [
            [85103, 71220],
            [51, 443],
            [-122, 615]
        ],
        [
            [85048, 72883],
            [17, 54],
            [124, -21],
            [108, 266],
            [197, 29],
            [118, 39],
            [40, 143]
        ],
        [
            [55575, 75742],
            [52, 132]
        ],
        [
            [55627, 75874],
            [66, 43],
            [38, 196],
            [50, 33],
            [40, -84],
            [52, -36],
            [36, -94],
            [46, -28],
            [54, -110],
            [39, 4],
            [-31, -144],
            [-33, -71],
            [9, -44]
        ],
        [
            [55993, 75539],
            [-62, -23],
            [-164, -91],
            [-13, -121],
            [-35, 5]
        ],
        [
            [63448, 67449],
            [-196, -16],
            [-69, 282],
            [-248, 57]
        ],
        [
            [79227, 59013],
            [90, 266],
            [12, 500],
            [-224, 515],
            [-18, 583],
            [-211, 480],
            [-210, 40],
            [-56, -205],
            [-163, -17],
            [-83, 104],
            [-293, -353],
            [-6, 530],
            [68, 623],
            [-188, 27],
            [-16, 355],
            [-120, 182]
        ],
        [
            [77809, 62643],
            [59, 218],
            [237, 384]
        ],
        [
            [78380, 63852],
            [162, -466],
            [125, -537],
            [342, -5],
            [108, -515],
            [-178, -155],
            [-80, -212],
            [333, -353],
            [231, -699],
            [175, -520],
            [210, -411],
            [70, -418],
            [-50, -590]
        ],
        [
            [59999, 71049],
            [125, -31],
            [45, -231],
            [-151, -223],
            [-68, -323]
        ],
        [
            [47498, 53435],
            [-252, 449],
            [-237, 324]
        ],
        [
            [46822, 54589],
            [66, 189],
            [15, 172],
            [126, 320],
            [129, 276]
        ],
        [
            [54125, 64088],
            [-197, -220],
            [-156, 324],
            [-439, 255]
        ],
        [
            [52633, 68486],
            [136, 137],
            [24, 250],
            [-30, 244],
            [191, 228],
            [86, 189],
            [135, 170],
            [16, 454]
        ],
        [
            [56646, 69496],
            [276, -70],
            [68, -195]
        ],
        [
            [56944, 63578],
            [0, -1180],
            [-320, -2],
            [-3, -248]
        ],
        [
            [56621, 62148],
            [-1108, 1131],
            [-1108, 1132],
            [-280, -323]
        ],
        [
            [58049, 33472],
            [96, -178],
            [-85, -288],
            [-47, -192],
            [-155, -93],
            [-51, -188],
            [-99, -59],
            [-209, 454],
            [148, 374],
            [151, 232],
            [130, 120],
            [121, -182]
        ],
        [
            [56314, 82678],
            [-23, 150],
            [30, 162],
            [-123, 94],
            [-291, 103]
        ],
        [
            [55848, 83684],
            [318, 181],
            [466, -38],
            [273, 59],
            [39, -123],
            [148, -38],
            [267, -287]
        ],
        [
            [56523, 82432],
            [-67, 182],
            [-142, 64]
        ],
        [
            [57579, 84537],
            [134, -136],
            [24, -287],
            [89, -348]
        ],
        [
            [47592, 66920],
            [-42, 0],
            [7, -317],
            [-172, -19],
            [-90, -134],
            [-126, 0],
            [-100, 76],
            [-234, -63],
            [-91, -460],
            [-86, -44],
            [-131, -745],
            [-386, -637],
            [-92, -816],
            [-114, -265],
            [-33, -213],
            [-625, -48],
            [-5, 1]
        ],
        [
            [46350, 66910],
            [5, 8],
            [139, 227]
        ],
        [
            [46494, 67145],
            [259, 65],
            [218, 404],
            [140, 158]
        ],
        [
            [57394, 79070],
            [66, 87],
            [185, 58],
            [204, -184],
            [115, -22],
            [125, -159],
            [-20, -200],
            [101, -97],
            [40, -247],
            [97, -150],
            [-19, -88],
            [52, -60],
            [-74, -44],
            [-164, 18],
            [-27, 81],
            [-58, -47],
            [20, -106],
            [-76, -188],
            [-49, -203],
            [-70, -64]
        ],
        [
            [57842, 77455],
            [-50, 270],
            [30, 252],
            [-9, 259],
            [-160, 352],
            [-89, 249],
            [-86, 175],
            [-84, 58]
        ],
        [
            [23016, 65864],
            [-107, -518]
        ],
        [
            [24067, 59806],
            [-144, 191],
            [-226, 155]
        ],
        [
            [19641, 66203],
            [-142, 138],
            [-164, 287]
        ],
        [
            [18570, 68996],
            [-201, 234],
            [-93, -25]
        ],
        [
            [19362, 64423],
            [-181, 337],
            [-201, 286]
        ],
        [
            [17464, 69802],
            [316, 46],
            [353, 64],
            [-26, -116],
            [419, -287],
            [634, -416],
            [552, 4],
            [221, 0],
            [0, 244],
            [481, 0],
            [102, -210],
            [142, -186],
            [165, -260],
            [92, -309],
            [69, -325],
            [144, -178],
            [230, -177],
            [175, 467],
            [227, 11],
            [196, -236],
            [139, -404],
            [96, -346],
            [164, -337],
            [61, -414],
            [78, -277],
            [217, -184],
            [197, -130],
            [108, 18]
        ],
        [
            [55993, 75539],
            [95, 35],
            [128, 9]
        ],
        [
            [46619, 59216],
            [93, 107],
            [47, 348],
            [88, 14],
            [194, -165],
            [157, 117],
            [107, -39],
            [42, 131],
            [1114, 9],
            [62, 414],
            [-48, 73],
            [-134, 2550],
            [-134, 2550],
            [425, 10]
        ],
        [
            [51185, 61897],
            [1, -1361],
            [-152, -394],
            [-24, -364],
            [-247, -94],
            [-379, -51],
            [-102, -210],
            [-178, -23]
        ],
        [
            [46801, 57931],
            [13, 184],
            [-24, 229],
            [-104, 166],
            [-54, 338],
            [-13, 368]
        ],
        [
            [77809, 62643],
            [-159, -137],
            [-162, -256],
            [-196, -26],
            [-127, -639],
            [-117, -107],
            [134, -519],
            [177, -431],
            [113, -390],
            [-101, -514],
            [-96, -109],
            [66, -296],
            [185, -470],
            [32, -330],
            [-4, -274],
            [108, -539],
            [-152, -551],
            [-135, -607]
        ],
        [
            [55380, 75322],
            [-58, 46]
        ],
        [
            [55338, 76294],
            [74, -101],
            [40, -82],
            [91, -63],
            [106, -123],
            [-22, -51]
        ],
        [
            [74375, 79706],
            [292, 102],
            [530, 509],
            [423, 278],
            [242, -182],
            [289, -8],
            [186, -276],
            [277, -22],
            [402, -148],
            [270, 411],
            [-113, 348],
            [288, 612],
            [311, -244],
            [252, -69],
            [327, -152],
            [53, -443],
            [394, -248],
            [263, 109],
            [351, 78],
            [279, -78],
            [272, -284],
            [168, -302],
            [258, 6],
            [350, -96],
            [255, 146],
            [366, 98],
            [407, 416],
            [166, -63],
            [146, -198],
            [331, 49]
        ],
        [
            [59599, 43773],
            [209, 48],
            [334, -166],
            [73, 74],
            [193, 16],
            [99, 177],
            [167, -10],
            [303, 230],
            [221, 342]
        ],
        [
            [59870, 36949],
            [-45, -275],
            [65, -101]
        ],
        [
            [59890, 36573],
            [-41, -245],
            [-116, -211]
        ],
        [
            [59119, 34780],
            [-211, 5]
        ],
        [
            [58908, 34785],
            [-24, 261],
            [-41, 265]
        ],
        [
            [58843, 35311],
            [-23, 212],
            [49, 659],
            [-72, 419],
            [-133, 832]
        ],
        [
            [58664, 37433],
            [292, 671],
            [74, 426],
            [42, 53],
            [31, 348],
            [-45, 175],
            [12, 442],
            [54, 409],
            [0, 748],
            [-145, 190],
            [-132, 43],
            [-60, 146],
            [-128, 125],
            [-232, -12],
            [-18, 220]
        ],
        [
            [58409, 41417],
            [-26, 421],
            [843, 487]
        ],
        [
            [59226, 42325],
            [159, -284],
            [77, 54],
            [110, -149],
            [16, -237],
            [-59, -274],
            [21, -417],
            [181, -365],
            [85, 410],
            [120, 124],
            [-24, 760],
            [-116, 427],
            [-100, 191],
            [-97, -9],
            [-77, 768],
            [77, 449]
        ],
        [
            [46619, 59216],
            [-184, 405],
            [-168, 435],
            [-184, 157],
            [-133, 173],
            [-155, -6],
            [-135, -129],
            [-138, 51],
            [-96, -189]
        ],
        [
            [45260, 62987],
            [60, 197],
            [1088, -4],
            [-53, 853],
            [68, 304],
            [261, 53],
            [-9, 1512],
            [911, -31],
            [1, 895]
        ],
        [
            [59226, 42325],
            [-147, 153],
            [85, 549],
            [87, 205],
            [-53, 490],
            [56, 479],
            [47, 160],
            [-71, 501],
            [-131, 264]
        ],
        [
            [59099, 45126],
            [273, -110],
            [55, -164],
            [95, -275],
            [77, -804]
        ],
        [
            [77801, 54399],
            [48, 105],
            [227, -258],
            [22, -304],
            [183, 71],
            [91, 243]
        ],
        [
            [56448, 40227],
            [228, 134],
            [180, -34],
            [109, -133],
            [2, -49]
        ],
        [
            [55526, 35946],
            [0, -2182],
            [-248, -302],
            [-149, -43],
            [-175, 112],
            [-125, 43],
            [-47, 252],
            [-109, 162],
            [-133, -292]
        ],
        [
            [54125, 64088],
            [68, -919],
            [104, -153],
            [4, -188],
            [116, -203],
            [-60, -254],
            [-107, -1199],
            [-15, -769],
            [-354, -557],
            [-120, -778],
            [115, -219],
            [0, -380],
            [178, -13],
            [-28, -279]
        ],
        [
            [53939, 57955],
            [-52, -13],
            [-188, 647],
            [-65, 24],
            [-217, -331],
            [-215, 173],
            [-150, 34],
            [-80, -83],
            [-163, 18],
            [-164, -252],
            [-141, -14],
            [-337, 305],
            [-131, -145],
            [-142, 10],
            [-104, 223],
            [-279, 221],
            [-298, -70],
            [-72, -128],
            [-39, -340],
            [-80, -238],
            [-19, -527]
        ],
        [
            [52072, 53186],
            [-105, 31],
            [-107, -132]
        ],
        [
            [51398, 53895],
            [-197, 389],
            [-209, -7]
        ],
        [
            [25647, 58207],
            [31, 91],
            [46, -88]
        ],
        [
            [51063, 81078],
            [244, 869],
            [380, 248]
        ],
        [
            [58639, 91676],
            [-473, -237],
            [-224, -54]
        ],
        [
            [55734, 91409],
            [-172, -24],
            [-41, -389],
            [-523, 95],
            [-74, -329],
            [-267, 2],
            [-183, -421],
            [-278, -655],
            [-431, -831],
            [101, -202],
            [-97, -234],
            [-275, 10],
            [-180, -554],
            [17, -784],
            [177, -300],
            [-92, -694],
            [-231, -405],
            [-122, -341]
        ],
        [
            [52328, 85032],
            [-371, -138],
            [-384, 301]
        ],
        [
            [51474, 85830],
            [-88, 1363],
            [256, 381]
        ],
        [
            [65352, 60997],
            [1, -238],
            [-134, -165]
        ],
        [
            [64880, 60451],
            [-128, -34]
        ],
        [
            [64752, 60417],
            [-91, 413],
            [-217, 975]
        ],
        [
            [64444, 61805],
            [833, 591],
            [185, 1182],
            [-127, 418]
        ],
        [
            [65945, 64688],
            [203, -78],
            [165, -107]
        ],
        [
            [68734, 64727],
            [-83, 424],
            [-215, 450]
        ],
        [
            [28212, 55535],
            [-52, 196],
            [-138, 164]
        ],
        [
            [27170, 56020],
            [-6, -126],
            [111, -26]
        ],
        [
            [55461, 82736],
            [342, -67],
            [511, 9]
        ],
        [
            [56535, 81053],
            [139, -515],
            [-29, -166],
            [-138, -69],
            [-252, -491],
            [71, -266],
            [-60, 35]
        ],
        [
            [56266, 79581],
            [-264, 227],
            [-200, -84],
            [-131, 61],
            [-165, -127],
            [-140, 210],
            [-114, -81],
            [-16, 36]
        ],
        [
            [86288, 75628],
            [39, -104]
        ],
        [
            [86221, 75560],
            [-120, -200],
            [-83, -202]
        ],
        [
            [85048, 72883],
            [-135, 112],
            [-34, -111]
        ],
        [
            [84641, 73095],
            [76, 260],
            [66, 69]
        ],
        [
            [84829, 73851],
            [-18, 96],
            [-163, 65]
        ],
        [
            [64246, 66009],
            [84, -185],
            [5, -346]
        ],
        [
            [64274, 65130],
            [-77, -42],
            [-84, 117]
        ],
        [
            [56308, 78869],
            [120, 127],
            [172, -65],
            [178, -3],
            [129, -144],
            [95, 91],
            [205, 56],
            [69, 139],
            [118, 0]
        ],
        [
            [57842, 77455],
            [124, -109],
            [131, 95],
            [126, -101]
        ],
        [
            [56293, 76715],
            [-51, 103],
            [65, 99],
            [-69, 74],
            [-87, -133],
            [-162, 172],
            [-22, 244],
            [-169, 139],
            [-31, 188],
            [-151, 232]
        ],
        [
            [81143, 94175],
            [251, 112],
            [141, -379]
        ],
        [
            [84237, 94144],
            [590, -104],
            [443, 4]
        ],
        [
            [97224, 91732],
            [123, 262],
            [886, -165]
        ],
        [
            [96192, 85904],
            [-126, 219],
            [-268, -253]
        ],
        [
            [95032, 82989],
            [-486, -302],
            [-96, -674]
        ],
        [
            [93543, 84472],
            [14, 276],
            [432, 132]
        ],
        [
            [95182, 86999],
            [-705, -649],
            [-227, 727]
        ],
        [
            [90412, 85637],
            [-914, -175],
            [-899, -1153]
        ],
        [
            [88378, 82339],
            [178, 295],
            [305, -38]
        ],
        [
            [89262, 81946],
            [9, -503],
            [-217, -590]
        ],
        [
            [60617, 78409],
            [9, 262],
            [143, 165],
            [269, 43],
            [44, 197],
            [-62, 326],
            [113, 310],
            [-3, 173],
            [-410, 192],
            [-162, -6],
            [-172, 277],
            [-213, -94],
            [-352, 208],
            [6, 116],
            [-99, 256],
            [-222, 29],
            [-23, 183],
            [70, 120],
            [-178, 334],
            [-288, -57],
            [-84, 30],
            [-70, -134],
            [-104, 23]
        ],
        [
            [59670, 89515],
            [18, -274],
            [18, -604]
        ],
        [
            [60317, 88590],
            [-168, 254],
            [177, 224]
        ],
        [
            [60998, 88700],
            [233, 144],
            [-186, 433]
        ],
        [
            [62654, 90499],
            [1, -328],
            [219, -203]
        ],
        [
            [63371, 90473],
            [580, 282],
            [970, 507]
        ],
        [
            [69038, 93080],
            [183, 537],
            [206, 116]
        ],
        [
            [69427, 93733],
            [736, -156],
            [57, -328]
        ],
        [
            [70444, 91717],
            [222, 593],
            [-361, 482]
        ],
        [
            [72363, 94093],
            [483, 119],
            [669, -26]
        ],
        [
            [58449, 49909],
            [110, -333],
            [-16, -348],
            [-80, -74]
        ],
        [
            [58216, 49787],
            [67, -60],
            [166, 182]
        ],
        [
            [61883, 60238],
            [-37, 252],
            [-83, 178]
        ],
        [
            [60335, 65400],
            [-77, 306],
            [-81, 132]
        ],
        [
            [63741, 66597],
            [190, -249],
            [16, -243]
        ],
        [
            [64444, 61805],
            [-801, -226],
            [-259, -266],
            [-199, -620],
            [-130, -99],
            [-70, 197],
            [-106, -30],
            [-269, 60],
            [-50, 59],
            [-321, -14],
            [-75, -53],
            [-114, 153],
            [-74, -290],
            [28, -249],
            [-121, -189]
        ],
        [
            [59434, 56171],
            [-39, 12],
            [5, 294],
            [-33, 203],
            [-143, 233],
            [-34, 426],
            [34, 436],
            [-129, 41],
            [-19, -132],
            [-167, -30],
            [67, -173],
            [23, -355],
            [-152, -324],
            [-138, -426],
            [-144, -61],
            [-233, 345],
            [-105, -122],
            [-29, -172],
            [-143, -112],
            [-9, -122],
            [-277, 0],
            [-38, 122],
            [-200, 20],
            [-100, -101],
            [-77, 51],
            [-143, 344],
            [-48, 163],
            [-200, -81],
            [-76, -274],
            [-72, -528],
            [-95, -111],
            [-85, -65]
        ],
        [
            [56635, 55672],
            [-23, 28]
        ],
        [
            [56351, 57163],
            [3, 143],
            [-102, 174],
            [-3, 343],
            [-58, 228],
            [-98, -34],
            [28, 217],
            [72, 246],
            [-32, 245],
            [92, 181],
            [-58, 138],
            [73, 365],
            [127, 435],
            [240, -41],
            [-14, 2345]
        ],
        [
            [59433, 56242],
            [1, -71]
        ],
        [
            [59434, 56171],
            [3, -460]
        ],
        [
            [59445, 53091],
            [-171, -272],
            [-195, 1],
            [-224, -138],
            [-176, 132],
            [-115, -161]
        ],
        [
            [56824, 55442],
            [-189, 230]
        ],
        [
            [25613, 58487],
            [-31, -139]
        ],
        [
            [62075, 57243],
            [54, -245],
            [125, -247]
        ],
        [
            [63596, 57321],
            [-2, -9],
            [-1, -244],
            [0, -596],
            [0, -308],
            [-125, -363],
            [-194, -493]
        ],
        [
            [34889, 53069],
            [109, -351],
            [-49, -254],
            [-24, -270],
            [-71, -248]
        ],
        [
            [56266, 79581],
            [-77, -154],
            [-55, -238]
        ],
        [
            [58908, 34785],
            [-56, -263],
            [-163, -63],
            [-166, 320],
            [-2, 204],
            [76, 222],
            [26, 172],
            [80, 42],
            [140, -108]
        ],
        [
            [60041, 71744],
            [74, 129],
            [75, 130],
            [15, 329],
            [91, -115],
            [306, 165],
            [147, -112],
            [229, 2],
            [320, 222],
            [149, -10],
            [316, 92]
        ],
        [
            [68841, 72526],
            [156, 598],
            [-60, 440],
            [-204, 140],
            [72, 261],
            [232, -28],
            [132, 326],
            [89, 380],
            [371, 137],
            [-58, -274],
            [40, -164],
            [114, 15]
        ],
        [
            [65546, 74986],
            [313, 8],
            [-45, 297],
            [237, 204],
            [234, 343],
            [374, -312],
            [30, -471],
            [106, -121],
            [301, 27],
            [93, -108],
            [137, -609],
            [317, -408],
            [181, -278],
            [291, -289],
            [369, -253],
            [-7, -362]
        ],
        [
            [53083, 72381],
            [-139, -290],
            [-2, -273]
        ],
        [
            [58441, 72005],
            [-192, -70],
            [-268, 314]
        ],
        [
            [57981, 72249],
            [-303, -11],
            [-165, 588]
        ],
        [
            [59768, 75418],
            [485, -417],
            [399, -228]
        ],
        [
            [57321, 74302],
            [-87, 276],
            [3, 121]
        ],
        [
            [59099, 45126],
            [-157, 177],
            [-177, 100],
            [-111, 99],
            [-116, 150]
        ],
        [
            [58388, 46397],
            [-161, 331],
            [-55, 342]
        ],
        [
            [58449, 49909],
            [98, 71],
            [304, -7],
            [566, 45]
        ],
        [
            [30523, 76389],
            [-147, -351],
            [-47, -133]
        ],
        [
            [30377, 75084],
            [-133, 11],
            [-205, -103]
        ],
        [
            [29172, 73738],
            [-61, 30],
            [-91, 148]
        ],
        [
            [29077, 73598],
            [69, -105],
            [5, -223]
        ],
        [
            [28966, 72994],
            [-142, 225],
            [-33, 491]
        ],
        [
            [28797, 73080],
            [-183, 93],
            [191, -191]
        ],
        [
            [27672, 65472],
            [-83, -75],
            [-137, 72]
        ],
        [
            [27408, 65728],
            [-105, 136],
            [-148, 508]
        ],
        [
            [26747, 68267],
            [-108, 90],
            [-281, -268]
        ],
        [
            [26309, 68119],
            [-135, 275],
            [-174, 147]
        ],
        [
            [25227, 68491],
            [-114, -92],
            [50, -157]
        ],
        [
            [24755, 67801],
            [-207, 312],
            [-242, -73]
        ],
        [
            [16564, 70932],
            [-71, 95],
            [-33, 324]
        ],
        [
            [15516, 76404],
            [34, 536],
            [33, 536]
        ],
        [
            [15948, 78405],
            [69, 156],
            [-45, 484],
            [-94, 485]
        ],
        [
            [10396, 86079],
            [-385, -51],
            [-546, 272]
        ],
        [
            [8164, 85656],
            [-308, -126],
            [-39, 348]
        ],
        [
            [7158, 84934],
            [-299, -248],
            [-278, -180]
        ],
        [
            [4985, 85596],
            [50, 216],
            [-179, 211]
        ],
        [
            [4541, 89915],
            [-38, -296],
            [586, 23]
        ],
        [
            [4864, 90008],
            [-342, 225],
            [-197, 296]
        ],
        [
            [30102, 56752],
            [-123, -344],
            [105, -468]
        ],
        [
            [31762, 56607],
            [213, -74],
            [155, 185]
        ],
        [
            [64752, 60417],
            [-201, -158]
        ],
        [
            [63521, 58853],
            [-122, -33],
            [-83, 35]
        ],
        [
            [63153, 58610],
            [-177, -114],
            [-233, -30]
        ],
        [
            [62539, 58233],
            [-43, -150],
            [-137, 13]
        ],
        [
            [57838, 31217],
            [-210, -269],
            [-290, -229]
        ],
        [
            [58175, 37528],
            [113, -7],
            [134, -100],
            [94, 71],
            [148, -59]
        ],
        [
            [58409, 41417],
            [-210, -81],
            [-159, -235],
            [-33, -205],
            [-100, -46],
            [-241, -486],
            [-154, -383],
            [-94, -13],
            [-90, 68],
            [-311, 65]
        ]
    ],
    "transform": { "scale": [0.0036000360003600037, 0.0016925586033320111], "translate": [-180, -85.60903777459777] }
};

var selected = false;

// console.log(topo)

var land = topojson.feature(topo, topo.objects.land),
    borders = topojson.feature(topo, topo.objects.countries),
    grid = graticule();

// console.log(borders)

var fillToCountry = {};
var i = borders.features.length;
while (i--) {
    hiddenContext.beginPath();
    hiddenPath(borders.features[i]);
    hiddenContext.fillStyle = "rgb(" + i + ",0,0)";
    hiddenContext.fill();
}

d3.timer(function() {
    projection.rotate([speed * (Date.now() - start), -15]);

    context.clearRect(0, 0, width, height);

    // context.beginPath();
    // path(sphere);
    // context.lineWidth = 3;
    // context.strokeStyle = "#000";
    // context.stroke();

    // context.beginPath();
    // path(sphere);
    // context.fillStyle = "#fff";
    // context.fill();

    context.beginPath();
    path(land);
    context.fillStyle = "#222";
    context.fill();

    context.beginPath();
    path(borders);
    context.lineWidth = .5;
    context.strokeStyle = "#fff";
    context.stroke();

    context.beginPath();
    path(grid);
    context.lineWidth = .5;
    context.strokeStyle = "lightgrey";
    context.stroke();

    if (selected !== false) {
        context.beginPath();
        path(borders.features[selected]);
        context.fillStyle = "#0ad";
        context.fill();
    }
});
canvas
    .on("mousemove", select)
    .on("touchstart", select);

function select() {
    var pos = d3.mouse(this);
    var latlong = projection.invert(pos);
    var hiddenPos = hiddenProjection(latlong);
    if (hiddenPos[0] > -1) {
        var p = hiddenContext.getImageData(hiddenPos[0], hiddenPos[1], 1, 1).data;
        selected = p[0];
        if (borders.features[selected].id === 56) {
            belgium = borders.features[selected];
            console.log(JSON.stringify(belgium));
            // var url = 'data:text/json;charset=utf8,' + encodeURIComponent(belgium);
            // window.open(url, '_blank');
            // window.focus();

        }
        context.beginPath();

        path(borders.features[selected]);
        context.fillStyle = "red";
        context.fill();
    } else {
        selected = false;
    }
};
// });

var belgium;
console.log("height", height)
d3.select(self.frameElement).style("height", (2 * height) + "px");
// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function

var posts = {},
    taxonomies = {},
    categories = {},
    tags = {},
    menus = {},
    media = {},
    posts_nav = {},
    posts_slug_ids = {},
    last_dest = 'outer-nav',
    menu_levels = [],
    menu_slides = [], // an array for all 
    related = {},
    data_score = 7,
    data_loaded = [],
    state = {},
    social = {}

state.featured = {
    'transition': {
        'type': 'flip',
        'face': 'front'
    }
}




function getStaticJSON(route, callback, dest) {
    // route =  the type 
    // param = url arguments for the REST API
    // callback = dynamic function name 
    // Pass in the name of a function and it will return the data to that function

    // local absolute path to the REST API + routing arguments
    //data_path is configured in header.php
    var json_data = data_path + route + ".json"
        //console.log("data_path", data_path)
        // console.log("jsonfile", json_data);
    jQuery.ajax({
        url: json_data, // the url
        data: '',
        success: function(data, textStatus, request) {
            // console.log(data);
            //      data_loaded.push(callback);
            return data,

                callback(data, dest) // this is the callback that sends the data to your custom function

        },
        error: function(data, textStatus, request) {
            //console.log(endpoint,data.responseText)
        },

        cache: false
    })
}
/*
//THIS SECTION IS DEPRECATED, Data now consolidated into one content packet
getStaticJSON('posts', setPosts) // get posts

// retrieves all projects, with fields from REST API
getStaticJSON('pages', setPosts) // get pages

// retrieves all projects, with fields from REST API
getStaticJSON('project', setPosts) // get the projects

// retrieves all categories for the development category
getStaticJSON('categories', setCategories) // returns the children of a specified parent category

// retrieves all categories for the development category
getStaticJSON('tags', setTags) // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus) // returns the tags

getStaticJSON('media', setMedia) // returns the tags
*/

getStaticJSON('content', setData) // returns all content

function setData(data) { //sets all content arrays

    setPosts(data.posts)
    setPosts(data.pages)
    setPosts(data.project)
    setPosts(data.social)
    setCategories(data.categories)
    setTags(data.tags)
    setMenus(data.menus)
    setMedia(data.media)
    initSite()

}

function setPosts(data) { // special function for the any post type

    var type = 'post'

    //  console.log("data", data)
    if (Array.isArray(data)) {

        for (var i = 0; i < data.length; i++) { // loop through the list of data
            //console.log("home", data[i].id)
            /*
              The REST API nests the output of title and content in the rendered variable, 
              so we must unpack and set it our way, which is just .title and .content
            */
            if (data[i].title !== undefined && data[i].title.rendered !== undefined) { // make sure the var is there
                data[i].title = data[i].title.rendered // lose that stupid rendered parameter
            }

            if (data[i].content !== undefined && data[i].content.rendered !== undefined) { // make sure the var is there
                data[i].content = data[i].content.rendered // lose the unnecessary "rendered" parameter
            }


            //console.log(dest,data[i]);
            if (data[i].type !== undefined) { // make sure the var is there
                type = data[i].type // set the type for the log

                posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
            }

        }
    } else {
        console.log(data)
        type = data.type // set the type for the log

        posts[data.id] = data // adds a key of the post id to address all data in the post as a JSON object

    }


    // console.log("posts", posts)


    return posts
}

function setMedia(data) {
    
    for (var m = 0; m < data.length; m++) {
        media[data[m].id] = data[m].data;
    }
  //  console.log("media", media);
}
function getMediaID(post_id,attr){
    //console.log(post_id,attr)
    if (posts[id][attr] != undefined) { //is featured_media defined
         var media_id = posts[post_id][attr]
         
        if (media_id > 0) { // is it set to a value above zero?
            
            if(media[media_id] != undefined){
                return media_id
            } else {
                return 0
            }

            // returns 


        } else {
            return 0
        }

    } else {
        return 0
    }
        

}
function getImageSRC(id, dest, size) { // id = media id

  //  console.log("set image", id, dest, size, media[id])
    if (media[id] != undefined) {


        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file



        if (media[id].mime == "image/svg+xml") { // if it's an SVG, let the src pass through
            return full_path + src;
        } else { //for real images

            if (size == 'square'||size==1) { // if for a square area
                src = getSquareVersion(media[id].meta.sizes, dest) // get the size version of the sq
         //      console.log('square',src)
            } else if (size == 'thumbnail') {
                src = getSquareVersion(media[id].meta.sizes, dest)
          //       console.log('thumbnail', src)
            } else {
                
                src = media[id].meta.sizes[size] // returns specified size
                //console.log('default', size, media[id].meta.sizes,src)
            }
   
        }

        if (dest == '') { //set path to '' to return the src only
            //console.log("Src return", full_path + src)
            return full_path + src;




        } else { // if dest is specified, set the src to the id and 

            return full_path + src;
        }
        // show the wrapper

    } else {

        return ''
    }

}

function toggleFace(dest, type) {
    //console.log("toggle-face", dest, type, state[dest])
    if (state[dest].transition.face == 'front') {
        return 'back'
    } else {
        return 'front'
    }
}

function loadTemplate(dest, type) { // dest is name of place to put template, type = transition type
    //console.log("load template",dest,type)
    var template = jQuery('#' + dest + "-template").html(); // gets the empty contents of x-template script tag for this dest
    if (type == "flip") { // requires a front back wraper around template contents
        var front = '<div class="card front">' + template + '</div>' // wraps template in a front class
        var back = '<div class="card back">' + template + '</div>' // wrapte template in a back class
        jQuery('#' + dest).html(front + back); // loads both front and back into template into dest
    } else {
         jQuery('#' + dest).html(template); // defaults to empty template contents
    }

}
function clearImageText(){

}
function getAspect(w,h){
    if(w == h){
        return 'square'
    } else {
        return Math.round(w/h)
    }

}
function setImageContent(loc,title,caption,desc,alt,src){
        
        //console.log("SET IMAGE CONTENT",loc,title,caption,desc,alt,src)
        setTimeout(function () {
        jQuery(loc + " .title").html(title)
        jQuery(loc + " .caption").html(caption)
        jQuery(loc + " .description").html(desc)
        jQuery(loc + " .image").attr('alt',alt)
        jQuery(loc + " .image").attr('src', src)
        },250)

}




function transitionImage(dest, type, media_id) {

    if (jQuery('#' + dest).html() == '' || state[dest].transition != type) { // load the template, only if you need to
        state[dest].transition.type = type // if transition type has changed, set it
        loadTemplate(dest, type)
    }
    var aspect = getAspect(parseInt(jQuery("#" + dest).width()), parseInt(jQuery("#" + dest).height())) // pass the sizes of the destination to get the aspect
    var src = getImageSRC(media_id, dest + ' .image', aspect) //returns appropriate image sice.
    if (type == 'flip'){
        var next_face = toggleFace(dest, type) // flip requires front and back, will return opposite based on state
        console.log("FLIP",next_face,dest, type, media_id,src)
        if(next_face == 'back'){
          //  jQuery('#featured').css("transform", "rotateY(180deg)")
        }
        if(media[media_id] != undefined){
            /*
            //console.log('next face', next_face)
            var flip_chain = {
                flip_out: function () {
                        jQuery(dest).css('transform', 'rotateY(90deg)')
                        console.log('flipout')
                        return flip_chain
                    },
                set_content: function () {
                    setImageContent( '#' + dest + " ." + next_face, //uses "loc" instead of dest to allow for card faces.
                        media[media_id].title,
                        media[media_id].caption,
                        media[media_id].desc,
                        media[media_id].alt,
                        src)
                                            return flip_chain

                },
                flip_in: function() {
                    //jQuery(dest).css('transform', 'rotateY(90deg)')
                    console.log('flipin')

                    return flip_chain
                }
            }
            flip_chain.flip_out().set_content().flip_in()
            */

  
            setImageContent('#' + dest + " ." + next_face, //uses "loc" instead of dest to allow for card faces.
                  media[media_id].title,
                  media[media_id].caption,
                  media[media_id].desc,
                  media[media_id].alt,
                  src)
               
                state[dest].transition.face = next_face
            /*jQuery(function () {
                jQuery("#"+dest).flip({
                    axis: "y", // y or x
                    reverse: false, // true and false
                    trigger: "hover", // click or hover
                    speed: '250',
                    autoSize: false
                });
            })*/
         //   console.log('next face', next_face)
          
        } else {
            setImageContent('#' + dest + " ." + next_face,'','','','','')
        }
         jQuery('#' + dest).toggleClass('is-flipped')

    }


    
    

}




/* GET FEATURED IMAGE BY POST ID */
function setImage(post_id, dest, attr, type, size) {
    //console.log("set image", post_id, size)
    var transition_type = "flip"
    if (posts[post_id] != undefined) { //you passed a post ID, is it there?
        var media_id = getMediaID(post_id,attr) //returns zero if doesn't exist
        
        if (media_id >0 ) { //is media_id
        jQuery('#' + dest).fadeIn()
              
               // var src = getImageSRC(media_id, dest + '-image', 'square')
               // setMediaText(media_id, dest + '-image')
               // jQuery("#" + dest + '-image').attr("src", src)
                transitionImage(dest, transition_type, media_id)

                //console.log("set", media_id, src)
            
           
        } else {
            //console.log("media off", media_id)
            jQuery('#'+dest).fadeOut()
        }
        
    }
    

}


function wrapTag(tag, str) {
    return "<" + tag + ">" + str + "</" + tag + ">"
}

function setMediaText(id, dest) { // old

    if (media[id] != undefined) {
        // console.log("caption",media[id]);
        jQuery('#' + dest + "-title").html(media[id].title)
        jQuery('#' + dest + "-caption").html(media[id].caption)
        jQuery('#' + dest + "-description").html(media[id].desc)
        jQuery('#' + dest).attr("alt", media[id].alt);
    } else {
        //console.log("clear media text",dest);
        jQuery('#' + dest + "-title").html('')
        jQuery('#' + dest + "-caption").html('')
        jQuery('#' + dest + "-description").html('')
        jQuery('#' + dest).attr("alt", '');
    }

}

function getSquareVersion(sizes, dest) {

    box = { // object getting the container dimensions
        w: jQuery(dest + "-container").width(),
        h: jQuery(dest + "-container").height()
    }
    // console.log("box",box,"dest"+dest,sizes)

    if (box.w > 1280 || box.h > 1280) { //over 1500 use large
        //    console.log("sq-lg")
        return sizes['sq-lg']
    } else if ((box.w > 250 || box.h > 250) && (box.w <= 1280 || box.h <= 1280)) {
        // console.log("sq-med")
        return sizes['sq-med']
    } else {
        //  console.log("sq-sm")
        return sizes['sq-sm']
    }


}

function setVideo(id, dest) {


    if (media[id] != undefined) {

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file

        var video = jQuery(dest + ' video source').attr("src", full_path + src);
        
        //    console.log("unhide video player")

        jQuery(dest + ' video')[0].load();

        video = jQuery(dest + ' video source').attr("src", full_path + src);
        jQuery(dest).fadeIn()
    } else {
        //    console.log("no video, hide player")
        jQuery(dest).fadeOut();
    }

}

function setScreenImages(screen_images, dest, callback) {
    var images = []
    for (var i = 0; i < screen_images.length; i++) {
      //  console.log("screen image",screen_images[i])
        images.push({
            "src": getImageSRC(screen_images[i], '#screen-image', "square"),
            "data": media[screen_images[i]]
        })

    }
    state.screen_images = images
    //console.log("set ScreenImages", screen_images, dest, images, callback);
    //callback(dest)
    //initParticleTranstion(dest)
    if(images.length>0 && callback == 'circleViewer'){
    circleViewer(dest, state.screen_images) // buggy
        }
    //  callback(dest,images)



}
var menu_config = {
    'wheel-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav'
    },
    'projects':{
         'menu_type': 'project',
         'location': '#projects'
    }, 
    'social-links' : {
    'menu_type': 'social',
    'location': '#social'
    }
}

function setMenus(data, dest) {
    //console.log("raw menu data",data)
 
    for (var i = 0; i < data.length; i++) {
        menus[data[i].slug] = {},
        menus[data[i].slug].menu_array = []
        menus[data[i].slug].name = data[i].name
        menus[data[i].slug].slug = data[i].slug
        menus[data[i].slug].items = setMenu(data[i].slug, data[i].items)
        
        //console.log("slug", data[i].slug)
    }
   buildMenuData();
   //console.log("raw menu data", menus)
    
}

function setMenu(slug, items) {
    menu = {}
    //console.log("setMenu",dest,slug,items)
    for (var i = 0; i < items.length; i++) {
        menu[items[i].ID] = setMenuItem(slug, items[i])
       // console.log("setMenu", items[i].ID, slug, items)
        if (items[i].menu_item_parent != 0) { //recursive
            menu[items[i].menu_item_parent].children.push(items[i].ID)//children empty array is created in setMenuItem

        } else {

        }
        menus[slug].menu_array.push(menu[items[i].ID])

    }
    //console.log("MENU ARRAY",menus[dest].menu_array)
    //console.log("SetMenu",slug, menu)
    return menu
}

function setMenuItem(slug, item) {
    //console.log("setMenuItem",item)
    this_item = {}
    this_item.menu_id = item.ID
    this_item.title = item.title

    this_item.menu_order = item.menu_order
    this_item.object = item.object
    this_item.object_id = item.object_id
    this_item.parent = item.menu_item_parent
    this_item.slug = slug


    this_item.children = []//this array is populated in Set Menu

    return this_item
}


function menu_order(a, b) {
    if (a.menu_order < b.menu_order)
        return -1;
    if (a.menu_order > b.menu_order)
        return 1;
    return 0;
}

function setLinearNav(m) {
    var counter = 0
    menus[m].linear_nav = [];
    for (var i in menus[m].items) {


       // menu.items[i].post = posts[menu.items[i].object_id]
        menus[m].items[i].slug = i


        id = menus[m].items[i].object_id
        menus[m].linear_nav.push(menus[m].items[i])

      
        counter++;
    }
    menus[m].linear_nav.sort(menu_order);
    
    
   //console.log("linear_nav", menus[m].linear_nav);
   // console.log("posts_nav", posts_nav);

}

function setLinearDataNav(m,data) { // sets local data into linear array for wheel
    menus[m].data_nav = []
    menus[m].slug_nav = []
    var counter = 0,
        outer_counter = 0,
        inner_counter = 0,
        inner_subcounter = 0,
        grandparent = 0,
        next_parent = 0,
        dest = 'outer-nav'

    // THESE 3 NESTED LOOPS POPULATE THE data_nav array WITH WHAT IT NEEDS TO BUILD THE WHEEL AND HAVE IT BE CONTROLLED BY THE ORDERED NOTCHES FROM THE NAV
    //console.log(m,data)
    for (var d = 0; d < data.length; d++) { //outer
        dest = 'outer-nav'
        data[d].dest = dest;
        data[d].slice = outer_counter;
        data[d].notch = counter;
        grandparent = counter;
        menus[m].data_nav.push(data[d])
        menus[m].slug_nav[data[d].slug] = counter
        counter++;
        for (var c = 0; c < data[d].children.length; c++) { //children
            data[d].children[c].dest = "inner-nav"
            data[d].children[c].slice = c
            data[d].children[c].notch = counter
            data[d].children[c].parent = grandparent
            next_parent = counter
            menus[m].data_nav.push(data[d].children[c])
            menus[m].slug_nav[data[d].children[c].slug] = counter;
            counter++
            for (var g = 0; g < data[d].children[c].children.length; g++) { //grandchildren
                data[d].children[c].children[g].dest = "inner-subnav"
                data[d].children[c].children[g].slice = g
                data[d].children[c].children[g].notch = counter
                data[d].children[c].children[g].grandparent = grandparent
                data[d].children[c].children[g].parent = next_parent

                menus[m].data_nav.push(data[d].children[c].children[g])
                menus[m].slug_nav[data[d].children[c].children[g].slug] = counter;
                counter++
            }
            // console.log("dataNav", data);
        }

        outer_counter++;

    }
     //console.log("dataNav",m, menus[m].data_nav);
     //console.log("slug_nav",m, menus[m].slug_nav);
}
function getSlug(item,_of,_array,_it){
    if(item!=undefined){
        var slug = item.slug
        if (posts[item.object_id] != undefined){
            slug = posts[item.object_id].slug
        }
    } else {
  //  console.log("get slug item undefined",slug,item.object_id,item,_of,_array,_it)
}    
  return slug
    
}
function buildMenuData() {

    // needs post variable
    if (posts == undefined) {
        //console.log("No Posts Data Yet",  posts)
        window.setTimeout(buildMenuData(), 10);
    } else {

        
       
    
        for (var m in menus) { // 
             var data = [];
            //console.log('menu loop',m)
            if (menu_config[m] != undefined) { 
                var items = ''

                //menus[m].items.sort(function(a,b){return a.menu_order-b.menu_order})



                menus[m].menu_array = [];
                for (var i in menus[m].items) {
                    // console.log('menu item', menus[m].items[i], menu_config[m].location)
                    if (menus[m].items[i].parent == 0) {
                        // console.log("menu", menus[m].items[i].title)

                        menus[m].menu_array.push(menus[m].items[i]);
                    }
                    // items += '<a href="#" class="">' + menus[m].items[i].title + '</a>'

                }
                menus[m].menu_array.sort(menu_order);


                var children = [];
                var this_menu = menus[m].menu_array
                
                for (var a = 0; a < this_menu.length; a++) {
                    children = [];

                    for (var c = 0; c < this_menu[a].children.length; c++) {
                        var grandchildren = [];
                        var nested_children = menus[m].items[this_menu[a].children[c]].children;
                        for (var g = 0; g < nested_children.length; g++) {
                            slug = getSlug(menus[m].items[nested_children[g]],g,"g",nested_children,g)
                            grandchildren.push( // data for childe menus
                                {
                                    "title": menus[m].items[nested_children[g]].title,

                                    "slug": slug,
                                    "object": menus[m].items[nested_children[g]].object,
                                    "object_id": menus[m].items[nested_children[g]].object_id, // the post id

                                }
                            )

                        }

                        
                    slug = getSlug(menus[m].items[this_menu[a].children[c]],"c",this_menu[a].children[c],c)
                      //console.log('bad slug', menus[m].items[this_menu[a].children[c]])
                        children.push( // data for child menus
                            {
                                "title": menus[m].items[this_menu[a].children[c]].title,
                                "slug": slug,
                                "object": menus[m].items[this_menu[a].children[c]].object,
                                "object_id": menus[m].items[this_menu[a].children[c]].object_id, // the post id
                                "children": grandchildren
                            }
                        )

                    }
                    //console.log('outer', this_menu[a].object_id,  this_menu[a])
                    slug = getSlug(this_menu[a],"o",this_menu,a)
                    data.push({ // data for top level
                        "title": this_menu[a].title,
                        //"id": this_menu[a].id,
                        "slug": slug,
                        "object": this_menu[a].object,
                        "object_id": this_menu[a].object_id, //the post_id
                        "children": children
                    })

                }
                menus[m].menu_levels = data
                //menu_levels = data;
                setLinearDataNav(m,data);
                setLinearNav(m)
                //console.log('makeouterwheel',menu_levels);





                //circleMenu('.circle a')
            }
            
        }

    }

}
//window.onload = init;
//console.ward = function() {}; // what warnings?
/*
function initParticleTranstion(dest) {
  var root = new THREERoot({
    createCameraControls: !true,
    antialias: (window.devicePixelRatio === 1),
    fov: 80
  });

  root.renderer.setClearColor(0x000000, 0);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 60);

  var particleSlides = []
  var slideLoader = []
  var width = 100;
  var height = 60;
  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 1.0,
    yoyo: true
  });
  for (var i = 0; i < state.screen_images.length; i++) {
    particleSlides[i] = new Slide(width, height, 'out');
    slideLoader[i] = new THREE.ImageLoader();
    slideLoader[i].setCrossOrigin('Anonymous');
    console.log("SRC"+state.screen_images[i].src)
    slideLoader[i].load(state.screen_images[i].src, function (img) {
     particleSlides[i].setImage(img);
    })

    
    root.scene.add(slide[0]);
    tl.add(slide[i].transition(), 0);
  }

  createTweenScrubber(tl);

  window.addEventListener('keyup', function(e) {
    if (e.keyCode === 80) {
      tl.paused(!tl.paused());
    }
  });
}

////////////////////
// CLASSES
////////////////////

function Slide(width, height, animationPhase) {
  var plane = new THREE.PlaneGeometry(width, height, width * 2, height * 2);

  THREE.BAS.Utils.separateFaces(plane);

  var geometry = new SlideGeometry(plane);

  geometry.bufferUVs();

  var aAnimation = geometry.createAttribute('aAnimation', 2);
  var aStartPosition = geometry.createAttribute('aStartPosition', 3);
  var aControl0 = geometry.createAttribute('aControl0', 3);
  var aControl1 = geometry.createAttribute('aControl1', 3);
  var aEndPosition = geometry.createAttribute('aEndPosition', 3);

  var i, i2, i3, i4, v;

  var minDuration = 0.8;
  var maxDuration = 1.2;
  var maxDelayX = 0.9;
  var maxDelayY = 0.125;
  var stretch = 0.11;

  this.totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;

  var startPosition = new THREE.Vector3();
  var control0 = new THREE.Vector3();
  var control1 = new THREE.Vector3();
  var endPosition = new THREE.Vector3();

  var tempPoint = new THREE.Vector3();

  function getControlPoint0(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.1, 0.3) * 50;
    tempPoint.y = signY * THREE.Math.randFloat(0.1, 0.3) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  function getControlPoint1(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.3, 0.6) * 50;
    tempPoint.y = -signY * THREE.Math.randFloat(0.3, 0.6) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < geometry.faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
    var face = plane.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(plane, face);

    // animation
    var duration = THREE.Math.randFloat(minDuration, maxDuration);
    var delayX = THREE.Math.mapLinear(centroid.x, -width * 0.5, width * 0.5, 0.0, maxDelayX);
    var delayY;

    if (animationPhase === 'in') {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, 0.0, maxDelayY)
    }
    else {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, maxDelayY, 0.0)
    }

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v]     = delayX + delayY + (Math.random() * stretch * duration);
      aAnimation.array[i2 + v + 1] = duration;
    }

    // positions

    endPosition.copy(centroid);
    startPosition.copy(centroid);

    if (animationPhase === 'in') {
      control0.copy(centroid).sub(getControlPoint0(centroid));
      control1.copy(centroid).sub(getControlPoint1(centroid));
    }
    else { // out
      control0.copy(centroid).add(getControlPoint0(centroid));
      control1.copy(centroid).add(getControlPoint1(centroid));
    }

    for (v = 0; v < 9; v += 3) {
      aStartPosition.array[i3 + v]     = startPosition.x;
      aStartPosition.array[i3 + v + 1] = startPosition.y;
      aStartPosition.array[i3 + v + 2] = startPosition.z;

      aControl0.array[i3 + v]     = control0.x;
      aControl0.array[i3 + v + 1] = control0.y;
      aControl0.array[i3 + v + 2] = control0.z;

      aControl1.array[i3 + v]     = control1.x;
      aControl1.array[i3 + v + 1] = control1.y;
      aControl1.array[i3 + v + 2] = control1.z;

      aEndPosition.array[i3 + v]     = endPosition.x;
      aEndPosition.array[i3 + v + 1] = endPosition.y;
      aEndPosition.array[i3 + v + 2] = endPosition.z;
    }
  }

  var material = new THREE.BAS.BasicAnimationMaterial(
    {
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: {type: 'f', value: 0}
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk['cubic_bezier'],
        //THREE.BAS.ShaderChunk[(animationPhase === 'in' ? 'ease_out_cubic' : 'ease_in_cubic')],
        THREE.BAS.ShaderChunk['ease_in_out_cubic'],
        THREE.BAS.ShaderChunk['quaternion_rotation']
      ],
      shaderParameters: [
        'uniform float uTime;',
        'attribute vec2 aAnimation;',
        'attribute vec3 aStartPosition;',
        'attribute vec3 aControl0;',
        'attribute vec3 aControl1;',
        'attribute vec3 aEndPosition;',
      ],
      shaderVertexInit: [
        'float tDelay = aAnimation.x;',
        'float tDuration = aAnimation.y;',
        'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
        'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
        //'float tProgress = tTime / tDuration;'
      ],
      shaderTransformPosition: [
        (animationPhase === 'in' ? 'transformed *= tProgress;' : 'transformed *= 1.0 - tProgress;'),
        'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);'
      ]
    },
    {
      map: new THREE.Texture(),
    }
  );

  THREE.Mesh.call(this, geometry, material);

  this.frustumCulled = false;
}
Slide.prototype = Object.create(THREE.Mesh.prototype);
Slide.prototype.constructor = Slide;
Object.defineProperty(Slide.prototype, 'time', {
  get: function () {
    return this.material.uniforms['uTime'].value;
  },
  set: function (v) {
    this.material.uniforms['uTime'].value = v;
  }
});

Slide.prototype.setImage = function(image) {
  this.material.uniforms.map.value.image = image;
  this.material.uniforms.map.value.needsUpdate = true;
};

Slide.prototype.transition = function() {
  return TweenMax.fromTo(this, 3.0, {time:0.0}, {time:this.totalDuration, ease:Power0.easeInOut});
};


function SlideGeometry(model) {
  THREE.BAS.ModelBufferGeometry.call(this, model);
}
SlideGeometry.prototype = Object.create(THREE.BAS.ModelBufferGeometry.prototype);
SlideGeometry.prototype.constructor = SlideGeometry;
SlideGeometry.prototype.bufferPositions = function () {
  var positionBuffer = this.createAttribute('position', 3).array;

  for (var i = 0; i < this.faceCount; i++) {
    var face = this.modelGeometry.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(this.modelGeometry, face);

    var a = this.modelGeometry.vertices[face.a];
    var b = this.modelGeometry.vertices[face.b];
    var c = this.modelGeometry.vertices[face.c];

    positionBuffer[face.a * 3]     = a.x - centroid.x;
    positionBuffer[face.a * 3 + 1] = a.y - centroid.y;
    positionBuffer[face.a * 3 + 2] = a.z - centroid.z;

    positionBuffer[face.b * 3]     = b.x - centroid.x;
    positionBuffer[face.b * 3 + 1] = b.y - centroid.y;
    positionBuffer[face.b * 3 + 2] = b.z - centroid.z;

    positionBuffer[face.c * 3]     = c.x - centroid.x;
    positionBuffer[face.c * 3 + 1] = c.y - centroid.y;
    positionBuffer[face.c * 3 + 2] = c.z - centroid.z;
  }
};


function THREERoot(params) {
  params = utils.extend({
    fov: 60,
    zNear: 10,
    zFar: 100000,

    createCameraControls: true
  }, params);

  this.renderer = new THREE.WebGLRenderer({
    antialias: params.antialias,
    alpha: true
  });
  this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  document.getElementById('#screen-image-container').appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener('resize', this.resize, false);
}
THREERoot.prototype = {
  tick: function () {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function () {
    this.controls && this.controls.update();
  },
  render: function () {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

////////////////////
// UTILS
////////////////////

var utils = {
  extend: function (dst, src) {
    for (var key in src) {
      dst[key] = src[key];
    }

    return dst;
  },
  randSign: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  ease: function (ease, t, b, c, d) {
    return b + ease.getRatio(t / d) * c;
  },
  fibSpherePoint: (function () {
    var vec = {x: 0, y: 0, z: 0};
    var G = Math.PI * (3 - Math.sqrt(5));

    return function (i, n, radius) {
      var step = 2.0 / n;
      var r, phi;

      vec.y = i * step - 1 + (step * 0.5);
      r = Math.sqrt(1 - vec.y * vec.y);
      phi = i * G;
      vec.x = Math.cos(phi) * r;
      vec.z = Math.sin(phi) * r;

      radius = radius || 1;

      vec.x *= radius;
      vec.y *= radius;
      vec.z *= radius;

      return vec;
    }
  })(),
  spherePoint: (function () {
    return function (u, v) {
      u === undefined && (u = Math.random());
      v === undefined && (v = Math.random());

      var theta = 2 * Math.PI * u;
      var phi = Math.acos(2 * v - 1);

      var vec = {};
      vec.x = (Math.sin(phi) * Math.cos(theta));
      vec.y = (Math.sin(phi) * Math.sin(theta));
      vec.z = (Math.cos(phi));

      return vec;
    }
  })()
};

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 1, {timeScale:0});
  }

  function resume() {
    TweenMax.to(tween, 1, {timeScale:1});
  }

  function seek(dx) {
    var progress = tween.progress();
    var p = THREE.Math.clamp((progress + (dx * seekSpeed)), 0, 1);

    tween.progress(p);
  }

  var _cx = 0;

  // desktop
  var mouseDown = false;
  document.body.style.cursor = 'pointer';

  window.addEventListener('mousedown', function(e) {
    mouseDown = true;
    document.body.style.cursor = 'ew-resize';
    _cx = e.clientX;
    stop();
  });
  window.addEventListener('mouseup', function(e) {
    mouseDown = false;
    document.body.style.cursor = 'pointer';
    resume();
  });
  window.addEventListener('mousemove', function(e) {
    if (mouseDown === true) {
      var cx = e.clientX;
      var dx = cx - _cx;
      _cx = cx;

      seek(dx);
    }
  });
  // mobile
  window.addEventListener('touchstart', function(e) {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener('touchend', function(e) {
    resume();
    e.preventDefault();
  });
  window.addEventListener('touchmove', function(e) {
    var cx = e.touches[0].clientX;
    var dx = cx - _cx;
    _cx = cx;

    seek(dx);
    e.preventDefault();
  });
}
*/
function psConsole(){

}
function setProject(post_id){
    
    if(state.object_id != post_id){
        var slug = posts[post_id].slug
        var slide = menus['projects'].slug_nav[slug]
    //  console.log("set project",post_id,posts[post_id].slug,posts[post_id],"slugnum="+menus['projects'].slug_nav[slug])
        
        jQuery('#wheel-menu-content').fadeOut();
        jQuery('#projects-content').fadeIn();
        setSlideContent(slide,post_id)
        setImage(post_id, //post id (ideally)
            "featured", // @string destination = id of empty tag and template waiting for its goodness
            'featured_media', //@string the attr of the objectg that we're passing, in this case, this is featured media
            "flip" // @string the type of effect that awaits
        );
        var video_path = uploads_path + "" + posts[post_id].featured_video.video_path;

        
        setVideo(posts[post_id].featured_video.video_id,"#bg-video")
        projectInfo(post_id)
        state.object_id = post_id
    }
}
function projectInfo(post_id){
    var template = jQuery('#project-info-template').html()
    var project_info = posts[post_id].project_info
    var loc = '#project-info'
    jQuery(loc).html(template)
   // console.log(posts[post_id].project_info,template)
    var link = '<a href="'+project_info.url+'" target="_blank">Go to </a>'
    jQuery(loc + " .client").html(project_info.client)
    jQuery(loc + " .agency").html(project_info.agency)
    jQuery(loc + " .project-url").html(link)
    jQuery(loc + " .era").html(project_info.era)
    jQuery('project-info').html(template).fadeIn();
    var s = project_info.client;
    var client_wrap = []
    for (var i = 0; i < s.length; i++) {
        client_wrap.push(s[i]);
    }
    //console.log("client",client_wrap)
}
function setRelated(post) {

  /*
  
      This is fun! 
      This sets the related variable as an object of taxonomies, 
      containing an array of related post ids
  
    */

  var this_post = null,
    this_cat = null //defaults

  related = {} // create empty object
  related.cats = {} //vessel for related categories
  related.tags = {} //vessel for related tags 
  //if you put in another taxonomy, add it to the loop above.

  var local_data = {
    'cats': categories,
    'tags': tags
  } //put taxonomies into object using alias in post


  /*
    ready for a ridiculous triple summersault? Let's do this!
    You see, the nested loop for related content will work the same for categories and tags, so why not put an outer loop of the local data to loop through them, so if this function changes, it does so once. 
  */
  for (var r in related) { //loop through related taxonomy aliases to get name dynamically
    // r is the taxonomy alias =>string

    for (var t = 0; t < post[r].length; t++) { // loop through array of taxonomies of the post object that got passed in.
      //t is the array key of the taxonomy =>int
      // console.log(r,posts[r])
      for (var p = 0; p < local_data[r][post[r][t]].posts.length; p++) {
        //p is the post_id of the related post from the taxonomy
        this_post = local_data[r][post[r][t]].posts[p] // id of post in question
        if (post.id != this_post) { // exclude self
          if (posts[this_post] != undefined) { //proceed if post exists
            var type = posts[this_post].type // set the post type locally
            if (related[r][type] == undefined) { // if this related post type doesn't have an object yet
              related[r][type] = [] //then create an array to stuff the posts ids in 

            }
            related[r][type].push(this_post); // by using an object by id prevents duplicates, the post id can be used


          }

        }
      }
    }
  }

  delete local_data // no reason keeping the aliased taxonomies in memory

  displayRelated()


  //console.log("related",related)

}

function displayRelated() {
  jQuery("#related").html('');
  rel_list = ''
  var aspect = getAspect(jQuery("#related ul li").width(), jQuery("#related ul li").height())


  for (var tax in related) { // loop through Taxonomies
    rel_list += '<ul class="' + tax + '">' //

    for (var type in related[tax]) {
      for (var p = 0; p < related[tax][type].length; p++) {
        post_id = related[tax][type][p] // post_id of related content
        var bg_image = ''; // default empty
        var src = '' // default empty
        var media_id = getMediaID(post_id, 'featured_media') // returns media id or zero if media object is undefined
       // console.log(media_id)
        if (media_id > 0) {
            src = getImageSRC(media_id,'#related ul li','thumbnail')
        }
        // console.log("set related","src="+src,post_id,media_id);
        if (src != '') {

          bg_image = ' style="background-image:url(' + src + ')"'
        }
        rel_list += '<li ' + bg_image + ' class="ui-widget ' + type + '" data-rel="' + post_id + '">'
        // console.log("related post",post_id)
        rel_list += post_id
        rel_list += '</li>'

      }
    }
    rel_list += '</ul>'
  }
  jQuery("#related").html(rel_list);

}



function tipHoverContent(id) {
  //console.log("hover tip",id)
  var tipContent = '';
  if (posts[id].type == 'project') {
    tipContent += '<span class="hover-title">' + posts[id].project_info.client + '</span>'
    if (posts[id].project_info.agency != '') {
      tipContent += '<span class="hover-sub">' + posts[id].project_info.agency + '</span>'
    }
  }
  return tipContent
}

function selectRelatedPost(post_id) {

  if (posts[post_id].type == 'project') {
    setProject(post_id)
    // setSliderNotch(1)//Projects hardset to notch one.
    // setContent(1, post_id, posts[post_id].type)

  }






}


(function ($) {




  $(document).tooltip({
    items: "[data-rel]", // tootip for related data
    //  tooltipClass:'rel-tip',
    content: function () {
      var post_id = $(this).data('rel');
      var tip = ''
      var bg_image = ''; // default empty
      var src = '' // default empty
      var media_id = getMediaID(post_id, 'featured_media') // returns media id or zero if media object is undefined

      if (media_id != 0) {
        src = getImageSRC(media_id, '.rel-tooltip', 'thumbnail');
      }
     // console.log("set related", src, post_id, media_id);
      if (src != '') {

        bg_image = ' style="background-image:url(' + src + ')"'
      }
      $(this).on("click", function (e) {
        e.preventDefault();
        selectRelatedPost(post_id);

      }).on("mouseover", function (e) {
        console.log("related1" + post_id, "mouseover");
        e.preventDefault();
        console.log("related" + post_id, "mouseover");
      }).on("mouseout", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mouseoout");
      }).on("mousedown", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mousedown");
      }).on("mouseup", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mouseup");
      });

      tip += '<div class="rel-tooltip"' + bg_image + '>'

      //tip += tipHoverContent(id)

      tip += '</div>'
      console.log(tip)
      //return tip
    }
  });
})(jQuery);
var gotoslide = function(slide){
  //console.log("click on slick dot ", slide);
   setSlideContent(notch, menus['wheel-menu'].linear_nav[slide].object_id)
    $( '.slideshow' ).slickGoTo(parseInt(slide));
}

jQuery('.slick-dots li button').on('click', function (e) {
   e.stopPropagation(); // use this
  //console.log("slick dot clicked")
});

function setSlideShow(menu){
  jQuery('.slideshow').slick({
  //	autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase:  'linear',
    focusoOnSelect: true,
    //nextArrow: '<i class="slick-arrow slick-next"></i>',
    //prevArrow: '<i class="slick-arrow slick-prev"></i>',
  });

   //console.log("set slideshow")
}
function setSlide(slide,id){
  /*
  these carousel slides are created here, but their content is populated dynamically
  because it was unreliable populating the content in a loop
  see setSlideContent in app.js
  */
  slide = '\n<div><div id="slide'+id+'" data-id="'+id+'" class="slide-wrap">'
  slide += '\n\t<h2></h2>'
  slide += '\n\t<div class="img-wrap"></div>'
  slide += '\n\t<section><div class="content"></div></section>'
  slide +='\n</div></div>\n';
  return slide
}

function setSlides(m){
  var id="0"
  var content = ''
  var title = ''
  var slides = ''
//console.log("Begin Render Slides",m,"|")
 
  if(posts == undefined){
    //console.log("No Posts Data Yet",  posts)
    window.setTimeout(setSlides(m), 100);//without this, we cannot relay that the post data is available yet
  } else {
  
  for(i=0;menus[m].linear_nav[i];i++){
    //console.log("slides", menus[m].linear_nav[i])
     id = menus[m].linear_nav[i].object_id.toString()
  
      slides += setSlide(i,id)
   
  }
 //console.log("slides rendered",slides)

  jQuery('#'+m+'-content').html(slides);
 
  }
}

var $carousel = jQuery('.slideshow');
jQuery(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});

jQuery('a[data-slide]').click(function(e) {
       // console.log("click on slick dot ", slide);
  e.preventDefault();
  var slide = jQuery(this).data('slide');
  //console.log("click on slick dot ", slide);
  setSlideContent(notch, menus['wheel-menu'].linear_nav[slide].object_id)
  //$carousel.slick('slickGoTo', slideno);

});
function setSlider() {
// console.log("slider", oriented, menus, menus[m], m)


 // console.log("slider_oritentation", slider_orientation)
  if(menus['wheel-menu'] != undefined){
    jQuery("#slider").slider({
      orientation: slider_orientation,
      range: "max",
      min: 0,
      max: menus['wheel-menu'].linear_nav.length,
      value: 0,
      slide: function (event, ui) {
        setSliderNotch(ui.value)
        //   console.log("slider",ui.value)
        // jQuery( "#amount" ).val( ui.value );
      }



    });

    jQuery('.slick-dots li button').on('click', function (e) {
      e.stopPropagation(); // use this
      //console.log("slick dot clicked")
    });
  }

}
/**/
  jQuery('#slider').on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
    
    value = jQuery( "#slider" ).slider( "value" );
    if(value == undefined || value == NaN){
      value=0
    }
    var event = e.originalEvent
    console.log(jQuery("#slider").slider);
  
   
    if (event.deltaY == -150) { //Mousewheel Scrolled up
        
         if (value < menus['wheel-menu'].linear_nav.length) {
           value = value+1
         } else {
           value = 0; // jump to bottom from top
         }
        setSliderNotch(value)
    }
    
    else if (event.deltaY == 150) { //Mousewheel Scrolled down
     
        if (value == 0){
          value = menus['wheel-menu'].linear_nav.length // jump to top from bottom
        } else {
          value = value - 1;
        }


        setSliderNotch(value)
        
    }
    
  });

(function ($) {
 

  $('div.arrow').on('click', function (e) {
    e.stopPropagation(); // use this
    var id = $(this).attr("id");

    var next_notch = current_notch;

    if (id == 'down-arrow') {

      if (next_notch == 0) {
        next_notch = menus['wheel-menu'].linear_nav.length - 1
      } else {
        next_notch--
      }



    } else if (id == 'up-arrow') {



      if (next_notch == menus['wheel-menu'].linear_nav.length - 1) {
        next_notch = 0
      } else {
        next_notch++
      }
    }
    //console.log('arrow_next',next_notch)
    setSliderNotch(next_notch)




  });

})(jQuery)


function setSliderNotch(notch) {
  var m = 'wheel-menu'
  if (state.circle_delay != undefined) {
      ///console.log("delay", state.circle_delay)
    clearInterval(state.circle_delay);
     //console.log("stop delay", state.circle_delay)
  }
  
 // console.log("notch", menus[m].data_nav[notch], notch, getSlug(menus[m].data_nav[notch]))
 
  
  location.hash = getSlug(menus[m].data_nav[notch])
  //console.log("set slider notch", notch,location.hash)
  jQuery("#slider").slider('value', notch);
  if (menus['wheel-menu'].linear_nav[notch] != undefined) {

    setContent(notch, menus[m].data_nav[notch].object_id, menus[m].data_nav[notch].object)
   // console.log("trigger notch=", notch, location.hash)
    triggerWheelNav(notch)
    //selectNavItem(notch);
  }
  current_notch = notch;
  // document.title = linear_nav[notch].title+" | "+site_title
}
function setSocial(){
    
    var social_menu = menus['social-links'].items
    var menu_items = ''
    for(s in social_menu){
        var item = posts[social_menu[s].object_id]
        var src = getImageSRC(item.featured_media)
       
        menu_items += '<li><a href="'+item.social_url+'" target="_blank"><img src="'+src+'" alt="'+item.title+'"></a></li>'
    }
    console.log("s",menu_items)
    jQuery('#social-links ul').html(menu_items)
}
// Declare three.js variables
var camera, scene, renderer, stars = []

// assign three.js objects to each variable
function initStars() {

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 5

    // scene
    scene = new THREE.Scene()

    // renderer
    renderer = new THREE.WebGLRenderer()
        // set the size of the renderer
    renderer.setSize(window.innerWidth, window.innerHeight)

    // add the renderer to the html document body
    jQuery('#stars').append(renderer.domElement)
}

function addSphere() {

    // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
    for (var z = -1000; z < 1000; z += 20) {

        // Make a sphere (exactly the same as before). 
        var geometry = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff })
        var sphere = new THREE.Mesh(geometry, material)

        // This time we give the sphere random x and y positions between -500 and 500
        sphere.position.x = Math.random() * 1000 - 500
        sphere.position.y = Math.random() * 1000 - 500

        // Then set the z position to where it is in the loop (distance of camera)
        sphere.position.z = z

        // scale it up a bit
        sphere.scale.x = sphere.scale.y = 2

        // add the sphere to the scene
        scene.add(sphere)

        // finally push it to the stars array 
        stars.push(sphere)
    }
}

function animateStars() {

    // loop through each star
    for (var i = 0; i < stars.length; i++) {
        star = stars[i]

        // and move it forward dependent on the mouseY position. 
        star.position.z += i / 10

        // if the particle is too close move it to the back
        if (star.position.z > 1000) star.position.z -= 2000
    }
}

function render() {
    // get the frame
    requestAnimationFrame(render)

    // render the scene
    renderer.render(scene, camera)
    animateStars()
}

/*initStars()
addSphere()
render()
*/
jQuery(window).on('resize', function() {
        //BRING THIS BACK  
        //  renderer.setSize(window.innerWidth, window.innerHeight)

    })
    //renderer.setSize(window.innerWidth, window.innerHeight)
function setChildCategories(data) {
    for (var i = 0; i < data.length; i++) {
        categories[data[i].id] = data[i]
    }
    // console.log('categories', categories)

    return data
}

function setCategories(data) {
    // console.log("categories json", data)
    if (data != null) {
        for (var i = 0; i < data.length; i++) { //creates object of categories by key
            categories[data[i].id] = data[i]
        }
    }
    //  console.log('categories', categories)

    return data
}

function setTags(data) {
    for (var i = 0; i < data.length; i++) {
        tags[data[i].id] = data[i]
    }
    //console.log('tags', tags)

    return data
}

var layerSource;

function initWebGLProgram() {
    layerSource = document.getElementById("webgl-canvas");

    console.log("webgl")
        // Compile shaders...
        // Load textures...
        // Create geometry...
        // Save attributes and uniform locations

}

function getVR() {
    if (navigator.getVRDisplays) {

        navigator.getVRDisplays().then(function(displays) {

            if (displays.length > 0) {
                // We reuse this every frame to avoid generating garbage
                frameData = new VRFrameData();

                vrDisplay = displays[0];

                // We must adjust the canvas (our VRLayer source) to match the VRDisplay
                var leftEye = vrDisplay.getEyeParameters("left");
                var rightEye = vrDisplay.getEyeParameters("right");

                // update canvas width and height based on the eye parameters.
                // For simplicity we will render each eye at the same resolution
                layerSource.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
                layerSource.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

                // Code for showing an 'Enter VR' button should go here

            }

            // There are no VR displays connected.
        }).catch(function(err) {
            // VR Displays are not accessible in this context.
            // Perhaps you are in an iframe without the allowvr attribute specified.
        });
        return true;

    } else {
        console.log("no-web vr");
        // WebVR is not supported in this browser.
        return false;
    }
}
last_outer_notch = 0,
    last_inner_notch = 0
var menu_raphael = {}
var wheels = {}




function makeWheelNav(dest, data, _p) {
    setWheelNavParams()
    _p = wheel_nav_params

    if (dest == "outer-nav") {
        child_dest = "inner-nav"
            //console.log("makeWheelNav", dest, data, _p);
        child_params = wheel_nav_params;
    } else if (dest == "inner-nav") {
        child_dest = 'inner-subnav'
        child_params = wheel_nav_params;
    }

    //console.log("makeWheelNav", dest, data, _p);


    var titles = [];
    var ids = []
    wheels[dest] = new wheelnav(dest);
    //console.log(dest,data,_p);
    wheels[dest].spreaderEnable = false;
    //    WebSlice.titleRotateAngle -45;
    wheels[dest].cssMode = true;
    wheels[dest].navAngle = 270;
    wheels[dest].selectedNavItem = 2;
    wheels[dest].selectedNavItemIndex = null;
    wheels[dest].maxPercent = _p.maxPercent;
    // wheels[dest].clickModeRotate = false;
    //  wheels[dest].slicePathFunction = slicePath().CogSlice;
    //wheels[dest].slicePathCustom = slicePath().CogSliceCustomization();
    wheels[dest].slicePathFunction = slicePath().DonutSlice;
    wheels[dest].slicePathCustom = slicePath().PieSliceCustomization();
    wheels[dest].slicePathCustom.minRadiusPercent = _p.min;
    wheels[dest].slicePathCustom.maxRadiusPercent = _p.max;
    wheels[dest].sliceSelectedPathCustom = slicePath().PieSliceCustomization();
    //    wheels[dest].sliceSelectedPathCustom = slicePath().CogSliceCustomization();

    wheels[dest].sliceSelectedPathCustom.minRadiusPercent = _p.sel_min;
    wheels[dest].sliceSelectedPathCustom.maxRadiusPercent = _p.sel_max;

    wheels[dest].titleSelectedAttr = {};
    for (i = 0; i < data.length; i++) {
        //console.log(data[i]);
        titles.push(data[i].title);
        ids.push(data[i].id)
    }
    wheels[dest].initWheel(titles) // init before creating wheel so we can define the items.


    var rotation = 90; //first item is is the default rotation
    var degrees = (360 / wheels[dest].navItemCount); //divide circle by number of items
    var tilt = rotation // default the tilt of text to the rotation
    for (i = 0; i < wheels[dest].navItemCount; i++) { // loop through items
        // console.log("tilt"+i,titles[i],tilt);


        wheels[dest].navItems[i].titleRotateAngle = tilt; // set tilt
        tilt = degrees + (rotation - degrees) // rotate angle is additive using this formula


    }

    if (dest == 'outer-nav') {
        //console.log("inner child", data[0].children)
        if (data[0].children.length > 0) {
            //   console.log("inner child", data[0].children)
            makeWheelNav("inner-nav", data[0].children, wheel_nav_params)
        }
    }

    // console.log("wheel"+dest,wheels[dest])

    wheels[dest].createWheel();

    counter = 0;
    //console.log("NAV ITEMS",data);
    for (var i = 0; i < wheels[dest].navItemCount; i++) {


        // console.log("local-data",i,data[i]);
        /*
        type = data[i].type // set the type for the log
        if(type == "category"){
            data[i].object = "category"
    
            data[i].object_id = data[i].id  
        }
        */
        wheels[dest].navItems[i].data = data[i];



        wheels[dest].navItems[i].navigateFunction = function() { // Click event for wheel - JSHint doesn't like it when you set events in a loop, but whaddyagonnado? Fuhgetaboudit, the browser doesn't seem to care. and you can't click on the wheel without this.

            console.log()
            jQuery("#slider").slider("option", "value", this.data.notch) //positions the slider handle
            setSliderNotch(menus['wheel-menu'].slug_nav[this.data.slug]) // triggers the notch

        }

    }
    menu_raphael[dest] = wheels[dest].raphael // raphael makes it all happen

    reposition_screen()

    // console.log(dest,menu_raphael[dest]);
}

function triggerWheelNav(notch) {
    var data_nav = menus['wheel-menu'].data_nav
    var this_notch = data_nav[notch]
    var this_dest = this_notch.dest;

    //console.log("trigger wheel, notch:", this_notch, " | dest:", this_dest, "last outer notch:"+ last_outer_notch);






    if (this_dest == 'outer-nav') {
        if (wheels["inner-nav"] != undefined) {
            wheels[this_dest].navigateWheel(this_notch.slice)

        }
        popAWheelie("inner-nav")
        if (this_notch.children.length > 0) {

            makeWheelNav("inner-nav", this_notch.children, wheel_nav_params)
        }





        last_outer_notch = notch;

    } else if (this_dest == 'inner-nav') {


        // console.log(last_outer_notch, last_inner_notch,notch,this_notch)
        if (last_outer_notch != this_notch.parent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice) //dialback the outer ring to its slice
            makeWheelNav("inner-nav", data_nav[this_notch.parent].children, wheel_nav_params) //receate the inner ring for the parent
            wheels[this_dest].navigateWheel(this_notch.slice) //now we can dial the inner ring where it belongs
            last_outer_notch = this_notch.parent //who's your daddy?

        } else {

            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            if (wheels["inner-nav"] != undefined) { //if the inner nav exists

                // console.log(' != undefined')
                wheels[this_dest].navigateWheel(this_notch.slice)
                if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
                    wheels["inner-subnav"].raphael.remove() //destroy it

                }

            } else {

                // console.log('  undefined')
                makeWheelNav("inner-nav", data_nav[this_notch.parent].children, wheel_nav_params)
                wheels[this_dest].navigateWheel(this_notch.slice)
            }


            if (this_notch.children.length > 0) { //if there are children 
                makeWheelNav("inner-subnav", this_notch.children, wheel_nav_params) //make a ring for them
            } else {
                popAWheelie("inner-subnav") //blow up the ring that that's there.
            }
        }
        last_inner_notch = notch


    } else if (this_dest == 'inner-subnav') { // onto the third inner ring
        //congratulations outer-ring you're a grandparent.
        console.log(' innersubnav')



        if (last_outer_notch != this_notch.grandparent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.grandparent].slice) //dialback the outer ring to its slice
            console.log("naviate outer", this_notch, "grand:", data_nav[this_notch.grandparent], "parent", data_nav[this_notch.parent]);
            last_outer_notch = this_notch.grandparent // set the outer notch back so we can go forward again.
            popAWheelie("inner-nav")

            makeWheelNav("inner-nav", data_nav[this_notch.grandparent].children, wheel_nav_params) //receate the inner ring for the parent
            wheels["inner-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            if (data_nav[this_notch.parent].children.length > 0) {
                makeWheelNav("inner-subnav", data_nav[this_notch.parent].children, wheel_nav_params) //receate the inner ring for the parent
                wheels["inner-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            }



        }

        if (last_inner_notch != this_notch.parent) { //who's your daddy?
            console.log("where have I gone wrong?", this_notch, data_nav[this_notch.parent]);
            //receate the inner ring for the parent
            wheels["inner-nav"].navigateWheel(data_nav[this_notch.parent].slice)
                //now we can dial the inner ring where it belongs
            makeWheelNav("inner-subnav", data_nav[this_notch.parent].children, wheel_nav_params) //receate the inner ring for the parent
            wheels["inner-subnav"].navigateWheel(this_notch.slice) //steer to right slice

            last_inner_notch = this_notch.parent //I am your father
        } else {
            console.log(wheels["inner-subnav"])

            if (wheels["inner-subnav"].raphael == undefined) {
                console.log("make innersubnav", this_notch, last_inner_notch, data_nav[this_notch.parent]);
                makeWheelNav("inner-subnav", data_nav[this_notch.parent].children, wheel_nav_params) //birth of the inner ring

            } else {
                console.log("navigate innersubnav", this_notch, last_inner_notch, data_nav[this_notch.parent]);
                wheels[this_dest].navigateWheel(this_notch.slice) //steer inner ring
            }
        }

    }





    last_dest = this_dest;

    //console.log("trigger_wheelNav",this_notch);

}

function popAWheelie(dest) { // this removes the inner rings when you click on navigation and reloads them as necessary
    if (dest == "outer-nav") { // if outer ring
        if (wheels["inner-nav"] != undefined) { //and inner ring exists
            wheels["inner-nav"].raphael.remove(); // destroy it

            if (wheels["inner-subnav"] != undefined) { //if  inner subnav
                wheels["inner-subnav"].raphael.remove() //destoy that too.
            }
        }

    } else if (dest == "inner-nav") { // if you select from the inner nave
        if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
            wheels["inner-subnav"].raphael.remove() //destroy it
        }
    }



}
function initLanguageMenu(container){
    
       // console.log("languages",languages)
        state.language = languages.default;
        var language_menu = "<ul>"
        for(var code in languages){
            if(code != 'default'){
                var active_language = ''
                if (code == state.language)
                {
                    active_language = ' class="active-language"'
                }
                language_menu += '<li id="'+code+'"'+active_language+'>'+languages[code].native+'</li>'

                

            }        
        
        //language_menu += "</ul>"//FIX
    }
 //console.log(container + " ul li")
    jQuery(container).on("click",'li',function(e){
        
        state.language = jQuery(this).attr('id');
         for (var code in languages) {
            if(code == state.language){
                //console.log(code+' add')
                if (code != languages.default) { // not the default language

                    if (languages[code].data == undefined) { // tests to see if this language data is loaded or not
                        //console.log("fetch language for the first time ", code)
                        getStaticJSON(code, setLanguage, code)//load language data. Passing language code as first param
                        
                    } else {
                       // console.log(code + "already loaded ", languages[code].data)
                    
                    }
                }
                state.language = code
                changeLanguage(code)
                jQuery('#'+code).addClass('active-language') // set the class on the language switcher to active
            } else {
                //console.log(code+ ' remove')
                jQuery('#'+code).removeClass('active-language') // remove the active class
            }
         }
    
       // console.log(language_menu,state.language)

    })
    //console.log(language_menu, state.language)
    jQuery(container).html(language_menu)


}
function retreiveML(struct,field,id,language){

    if(struct == 'posts'){
        if (posts[id].languages != undefined){
           
            if (posts[id].languages[language]!= undefined) {
                var translation_id = posts[id].languages[language].id
                return posts[translation_id][field]
            }
        } 
        return posts[id][field]

    }

}


// retrieves language specific data


function setLanguage(data,code) {
    
    languages[code].data = data;
    //console.log(code,"data", data)
    for(var d in data){
        if (data[d].type == 'page' || data[d].type == 'post' || data[d].type == 'project'){
        //console.log(data[d].type, d, data[d].of )
        posts[d] = data[d];
        }
    
    }
    //console.log("set", menus['wheel-menu'].linear_nav);
    changeLanguage(code);
   
}
function changeLanguage(code){
 //console.log("change language", code)
}
if(typeof languages !== 'undefined') {
    initLanguageMenu("#language-menu");
}