$(function() {

    /***
     * USE FOR:
     *   - Quick Equal Heights
     */
    /*
     $(window).on('load resize', function() {
         $('.match-height').matchHeight({
             byRow: true
         });
     });
     */

    /***
     * USE FOR:
     *   - blog_footer_cta_Oct2021_v1
     */
    (function() {

        let listWidth = $('.exp ul').outerWidth();
        let wWidth = $(window).width();

        $(window).on('load resize', function() {
            listWidth = $('.exp ul').outerWidth();
            console.log(wWidth);
            wWidth = $(window).width();
            $('.link-expander ul').animate({
                marginLeft: '-' + listWidth + 'px'
            });

            if (wWidth >= 767) {
                $('.mobile-btn-expander').removeClass('expanded');
                $('.expanded-panel').slideUp(100);
                $('.mobile-btn-expander').animate({
                    right: '0px'
                });
                $('.mobile-btn-expander').parent('div').animate({
                    width: '120px'
                });
            }
        });

        //Desktop
        $('.btn-expander').on('click', function(e) {
            console.log(wWidth);
            e.preventDefault();
            e.stopPropagation

            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $('.link-expander ul').animate({
                    marginLeft: '-' + listWidth + 'px'
                }, 400);
            } else {
                $(this).addClass('expanded');
                $('.link-expander ul').animate({
                    marginLeft: 0 + 'px'
                }, 400);
            }
        });
        //Mobile
        $('.mobile-btn-expander').on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $('.expanded-panel').slideUp(100);
                $(this).animate({
                    right: '0px'
                });
                $(this).parent('div').animate({
                    width: '120px'
                });
            } else {
                $(this).addClass('expanded');
                $(this).parent('div').animate({
                    width: wWidth + 55 + 'px'
                });
                $(this).animate({
                    right: '-95%'
                });
                $('.expanded-panel').delay(500).slideDown();
            }
        });

    })();

    /***
     * USE FOR:
     *  - sub_nav_img_Oct2021_v1
     *  - sub_nav_txt_Oct2021_v1
     */
    (function() {
        let wWidth = $(window).width();

        let expandBtn = $('button.expand-sub-nav');
        $(expandBtn).on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.page-nav').slideUp();
            } else {
                $(this).addClass('active');
                $(this).next('.page-nav').slideDown();
            }
        });

        $(window).on('load resize', function() {
            if (wWidth >= 787) {
                $(expandBtn).removeClass('active');
                $('.page-nav').removeAttr('style');
            }
        });

    })();

    /***
     * USE FOR:
     *  -  faqs_Oct2021_v1
     *
     *  Accessible Accordions
     */
    (function() {

        let jsAccordTrigger = $('.js_accordion_trigger--single');
        let jsAccordPanel = $('.js_accordion_panel--single');

        $(jsAccordTrigger).on('keypress click', function() {
            if ($(this).hasClass('is-expanded')) {
                $(this).removeClass('is-expanded').attr('aria-expanded', 'false');
                $(this).next(jsAccordPanel).slideUp().attr('aria-hidden', 'true');
            } else {
                $(this).addClass('is-expanded').attr('aria-expanded', 'true');
                $(this).next(jsAccordPanel).slideDown().attr('aria-hidden', 'false');
            }
        });
    })();

    /***
     * USE FOR:
     *   - resources_nav_Oct2021_v1
     */
    (function() {
        let resourceSlider = function() {
            let $resourceSlider = $('.resource-cards');

            $resourceSlider.each(function() {
                $(this).slick({
                    dots: false,
                    infinite: false,
                    draggable: false,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.prev-slide-arrow'),
                    nextArrow: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.next-slide-arrow'),
                    appendDots: $(this).parents('.resources_nav_Oct2021_v1').next('.section').find('.dots-controls'),
                    dots: false,
                    dotsClass: 'custom-dots',
                    customPaging: function(slider, i) {
                        var slideNumber = (i + 1),
                            totalSlides = slider.slideCount;
                        return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
                    },
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                dots: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                dots: true,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });

            $('.resource-cards').on('setPosition', function() {
                $(this).find('.slick-slide').height('auto');
                var slickTrack = $(this).find('.slick-track');
                var slickTrackHeight = $(slickTrack).height();
                $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
            });
        };
        resourceSlider();

        /****
         * Resources slider BG:
         * Used to calculate the position of the background at different breakpoints
         */
        $(window).on('load resize', function() {
            let rCardHeight = $('.resource-card-img img').height() + 30;
            $('.resources_nav_Oct2021_v1 .bg').css({
                'top': rCardHeight + 'px'
            });
        });

    })();

    /***
     * USE FOR:
     *   - carousel_multi_Oct2021_v1
     */
    (function() {

        let $multiSlider = $('.multi-slider');
        $multiSlider.each(function() {
            $(this).slick({
                autoplay: true,
                dots: false,
                arrows: false,
                draggable: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                asNavFor: '.multi-slider-thumb',
                infinite: true
            });
        });

        let $multiSliderThumb = $('.multi-slider-thumb');
        $multiSliderThumb.each(function() {
            $(this).slick({
                arrows: true,
                draggable: false,
                dots: false,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.multi-slider',
                focusOnSelect: true,
                infinite: true,
                centerMode: true,
                centerPadding: '40px',
                prevArrow: $(this).prev('.custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(this).prev('.custom-arrows').find('.next-slide-arrow'),
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });

            //Play Button
            $('.slider-play').on('click', function() {
                $('.multi-slider').slick('slickPlay');
                $('.multi-slider-thumb').slick('slickPlay');
            });

            //Pause Button
            $('.slider-pause').on('click', function() {
                $('.multi-slider').slick('slickPause');
                $('.multi-slider-thumb').slick('slickPause');
            });
        });

    })();

    /***
     * USE FOR:
     *   - video_single_Oct2021_v1
     *   - video_double_Oct2021_v1
     */
    (function() {
        $('.video-play-btn').on('click', function(e) {
            e.preventDefault();
            $(this).prev('iframe').addClass('active');
            $(this).parent('.video-wrapper').find('.video-poster').fadeOut();
            $(this).fadeOut();
            $(this).prev('iframe')[0].src += "?autoplay=1";
        })
    })();

    //Tabs to Accordions
    /*
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        //width: 'auto', //auto or any width like 600px
        //fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    */

    /***
     * USE FOR:
     *   - single_slider_Oct2021_v1
     */
    (function() {

        let $singleSlider = $('.single-slider');
        $singleSlider.each(function() {

            let thisSlider = $(this);

            let currentSlideNum = $(thisSlider).parent().next().children('.single-dots-controls').find('.currentSlide');
            let slidesTotal = $(thisSlider).parent().next().children('.single-dots-controls').find('.slidesTotal');

            //Count the number of Slides
            $(this).on('init', function(event, slick) {
                $(currentSlideNum).text(slick.slickCurrentSlide() + 1);
                $(slidesTotal).text(slick.slideCount);
            })

            //Setup slider
            $(this).slick({
                autoplay: true,
                dots: true,
                arrows: true,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                prevArrow: $(this).parent().next().children('.single-custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(this).parent().next().children('.single-custom-arrows').find('.next-slide-arrow'),
                appendDots: $(this).parent().next().children('.single-dots-controls').find('.dots-controls'),
		        dotsClass: 'custom-dots',
		        customPaging: function(slider, i) {
		            var slideNumber = (i + 1),
		                totalSlides = slider.slideCount;
		            return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
		        }
            });

            //Update current slide count
            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(this).parent().next().children('.single-dots-controls').find('.currentSlide').text(nextSlide + 1);
            });

            //Play Button
            $(this).parent().next().children('.single-custom-arrows').find('.single-slider-play').on('click', function() {
                $(thisSlider).slick('slickPlay');
            });

            //Pause Button
            $(this).parent().next().children('.single-custom-arrows').find('.single-slider-pause').on('click', function() {
                $(thisSlider).slick('slickPause');
            });
        });

    })();

    /***
     * USE FOR:
     *   - mega_slider_Oct2021_v1
     */
    (function() {
        let megaSlider = $('.mega-slider');

        $(megaSlider).each(function() {

            let thisSlider = $(this);

            let currentSlideNum = $(this).parent().next().children('.mega-dots-controls').find('.currentSlide');
            let slidesTotal = $(this).parent().next().children('.mega-dots-controls').find('.slidesTotal');

            //Count the number of Slides
            $(this).on('init', function(event, slick) {
                $(currentSlideNum).text(slick.slickCurrentSlide() + 1);
                $(slidesTotal).text(slick.slideCount);
            })

            $(this).slick({
                autoplay: true,
                dots: true,
                arrows: true,
                draggable: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                prevArrow: $(this).parent().next().children('.mega-custom-arrows').find('.prev-slide-arrow'),
                nextArrow: $(this).parent().next().children('.mega-custom-arrows').find('.next-slide-arrow'),
                appendDots: $(this).parent().next().children('.mega-dots-controls').find('.controls'),
		        dotsClass: 'dots-controls',
		        customPaging: function(slider, i) {
		            var slideNumber = (i + 1),
		                totalSlides = slider.slideCount;
		            return '<button type="button" class="dot" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + ' of ' + totalSlides + ' slides</span></button>';
		        }
            });

            //Update current slide count
            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(this).parent().next().children().children('.mega-dots-controls').find('.currentSlide').text(nextSlide + 1);
            });

            //Play Button
            $(this).parent().next().children('.mega-custom-arrows').find('.mega-slider-play').on('click', function() {
                $(thisSlider).slick('slickPlay');
            });

            //Pause Button
            $(this).parent().next().children('.mega-custom-arrows').find('.mega-slider-pause').on('click', function() {
                $(thisSlider).slick('slickPause');
            });

        });

    })();

    /***
     * USE FOR:
     *   - before_after_Oct2021_v1

     $(window).on('load', function() {
         $('.twentytwenty-container').twentytwenty({
             no_overlay: true,
             move_with_handle_only: false,
             click_to_move: false
         });
     });
     */

    (function() {
        $(window).on('load', function() {
            $('.ba-slider').beforeAfter();
        });
    })();



    /***
     * USE FOR:
     *   - form_salesforce_Oct2021_v1
     */
    $('.form-submit').on('click', function(e) {
        var form = $(this).closest('form');

        var isValid = true;

        //Validate Fields
        $('.js-validate', form).each(function() {
            if($.trim($(this).val()) == '' && !$(this).parents('.form-group').hasClass('hidden') ){
                var $thisId = $(this).attr('id');
                isValid = false;

                $(this).prev().addClass('has-error');
                $(this).next().show();
                $(this).attr({
                    'aria-invalid' : 'true',
                    'aria-describedby' : $thisId + '-error'
                });
            } else {
                $(this).prev().removeClass('has-error');
                $(this).next().hide();
                $(this).attr({
                    'aria-invalid' : 'false',
                    'aria-describedby' : ''
                });
            }
        });

        $('.js-email', form).each(function() {
            var email = $(this).val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            if( $.trim($(this).val()) == '' || !emailReg.test( email ) ){
                var $thisId = $(this).attr('id');
                isValid = false;

                $(this).prev().addClass('has-error');
                $(this).next().show();
                $(this).attr({
                    'aria-invalid' : 'true',
                    'aria-describedby' : $thisId + '-error'
                });
            } else {
                $(this).prev().removeClass('has-error');
                $(this).next().hide();
                $(this).attr({
                    'aria-invalid' : 'false',
                    'aria-describedby' : ''
                });
            }
        });

        //Submit the data OR jump to first error
        if ( isValid == false ) {
            $('.form [aria-invalid="true"]:first', form).focus();
            e.preventDefault();
        }

    });


});

// Easy Responsive Tabs Plugin
(function($) {
    $.fn.extend({
        easyResponsiveTabs: function(options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                //width: 'auto',
                //fit: true,
                closed: false,
                //activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options,
                jtype = opt.type,
                vtabs = 'vertical',
                accord = 'accordion';

            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function() {
                //Setup the Tabs
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('.resp-tabs-list');
                $respTabs.find('.resp-tabs-list button').addClass('resp-tab-item');
                /*
                $respTabs.css({
                    'display': 'block',
                    //'width': jwidth
                });
                */

                //Setup the Tab Content
                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();

                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    /*
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    */
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<button type='button' class='resp-accordion' role='tab'></span></button>");

                //Create the Accordion
                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function() {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').html();
                    $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function() {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab, keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                    if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                        $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
                        $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');
                    }

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function() {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function() {
                    var $currentTab = $(this);
                    $currentTab.click(function() {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function() {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                    });

                    //Window resize function
                    $(window).resize(function() {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);


//Accessible Tabs to Accordions
(function() {
    'use strict';

    const keyboardSupport = function(container, hasTabs) {
        const tablist = container.querySelectorAll('[role="tablist"]')[0];
        let tabs;
        let panels;

        const generateArrays = function() {
            panels = container.querySelectorAll('[role="tabpanel"]');
            tabs = container.querySelectorAll('[role="tab"]');
        };

        generateArrays();

        // For easy reference
        const keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46,
            enter: 13,
            space: 32
        };

        // Add or subtract depending on key pressed
        const direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
        };

        // Deactivate all tabs and tab panels
        const deactivateTabs = function() {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].setAttribute('tabindex', '-1');
                tabs[t].setAttribute('aria-selected', 'false');
            }
        };

        // Activates any given tab panel
        const activateTab = function(tab, setFocus) {
            setFocus = setFocus || true;
            // Deactivate all other tabs
            deactivateTabs();

            // Remove tabindex attribute
            tab.removeAttribute('tabindex');

            // Set the tab as selected
            tab.setAttribute('aria-selected', 'true');

            // Set focus when required
            if (setFocus) {
                tab.focus();
            }
        };

        const triggerTabClick = function(e) {
            const clickedId = e.target.getAttribute('id');
            if (clickedId) {
                const clickedTab = container.querySelector('[aria-controls="' + clickedId + '"]');
                clickedTab.click();
                document.getElementById(clickedId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        };

        const accordionClickEventListener = function(event) {
            triggerTabClick(event);
        };

        // When a tab is clicked, activateTab is fired to activate it
        const clickEventListener = function(event) {
            const tab = event.target;
            activateTab(tab, false);
        };

        // Make a guess
        const focusFirstTab = function() {
            const target = hasTabs ? tabs : panels;
            target[0].focus();
        };

        // Make a guess
        const focusLastTab = function() {
            const target = hasTabs ? tabs : panels;
            target[target.length - 1].focus();
        };

        // Either focus the next, previous, first, or last tab
        // depending on key pressed
        const switchTabOnArrowPress = function(event) {
            const pressed = event.keyCode;

            if (direction[pressed]) {
                const target = event.target;
                const targetElems = hasTabs ? tabs : panels;
                if (target.index !== undefined) {
                    if (targetElems[target.index + direction[pressed]]) {
                        targetElems[target.index + direction[pressed]].focus();
                    } else if (pressed === keys.left || pressed === keys.up) {
                        focusLastTab();
                    } else if (pressed === keys.right || pressed == keys.down) {
                        focusFirstTab();
                    }
                }
            }
        };

        // When a tablist's aria-orientation is set to vertical,
        // only up and down arrow should function.
        // In all other cases only left and right arrow function.
        const determineOrientation = function(event) {
            const key = event.keyCode;
            const vertical = tablist ? tablist.getAttribute('aria-orientation') === 'vertical' : null;
            let proceed = false;

            if (vertical || !hasTabs) {
                if (key === keys.up || key === keys.down) {
                    event.preventDefault();
                    proceed = true;
                }
            } else {
                if (key === keys.left || key === keys.right) {
                    proceed = true;
                }
            }

            if (proceed) {
                switchTabOnArrowPress(event);
            }
        };

        // Handle keydown on tabs
        const keydownEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.end:
                    event.preventDefault();
                    // Activate last tab
                    focusLastTab();
                    break;
                case keys.home:
                    event.preventDefault();
                    // Activate first tab
                    focusFirstTab();
                    break;

                    // Up and down are in keydown
                    // because we need to prevent page scroll >:)
                case keys.up:
                case keys.down:
                    determineOrientation(event);
                    break;
            }
        };

        // Handle keyup on tabs
        const keyupEventListener = function(event) {
            const key = event.keyCode;
            switch (key) {
                case keys.left:
                case keys.right:
                    determineOrientation(event);
                    break;
                case keys.enter:
                case keys.space:
                    if (hasTabs) {
                        activateTab(event.target);
                    } else {
                        triggerTabClick(event);
                    }
                    break;
            }
        };

        const addListeners = function(index) {
            const target = hasTabs ? tabs[index] : panels[index];
            tabs[index].addEventListener('click', clickEventListener);
            if (target) {
                if (!hasTabs) {
                    target.addEventListener('click', accordionClickEventListener);
                }
                target.addEventListener('keydown', keydownEventListener);
                target.addEventListener('keyup', keyupEventListener);
                // Build an array with all tabs (<button>s) in it
                target.index = index;
            }
        };

        // Bind listeners
        for (let i = 0; i < tabs.length; ++i) {
            addListeners(i);
        }

        // Accordion mode
        if (!hasTabs) {
            for (const panel of panels) {
                panel.onclick = function(e) {
                    triggerTabClick(e);
                };
            }
        }
    };

    const toggleClass = function(otherElems, thisELem, className = 'is-active') {
        for (const otherElem of otherElems) {
            otherElem.classList.remove(className);
        }
        thisELem.classList.add(className);
    };

    const toggleVerticalTabs = function(tabContainer, tabs, items, item) {
        item.onclick = function(e) {
            const currId = item.getAttribute('id');
            const tab = tabContainer.querySelector('.ootb-tabcordion--tabs [aria-controls="' + currId + '"]');
            toggleClass(tabs, tab);
            toggleClass(items, item);
        };
    };

    const toggleTabs = function(tabContainer) {
        const tabs = tabContainer.querySelectorAll('.ootb-tabcordion--tabs .tab');
        const items = tabContainer.querySelectorAll('.ootb-tabcordion--entry');
        for (const tab of tabs) {
            tab.onclick = function() {
                const target = tab.getAttribute('aria-controls');
                const content = document.getElementById(target);
                toggleClass(tabs, tab);
                toggleClass(items, content);
            };
        }
        for (const item of items) {
            toggleVerticalTabs(tabContainer, tabs, items, item);
        }
    };

    const hasTabs = function(container) {
        return container.classList.contains('has-tabs');
    };

    const modeSwitcher = function(tabContainer, containerWidth) {
        const tabs = tabContainer.querySelectorAll('.tab');
        const container = tabs[0].closest('.ootb-tabcordion');
        let totalW = 0;
        for (const tab of tabs) {
            totalW += tab.offsetWidth;
        }
        if (totalW >= containerWidth) {
            container.classList.remove('has-tabs');
        } else {
            container.classList.add('has-tabs');
        }
        keyboardSupport(tabContainer, hasTabs(container));
    };

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            modeSwitcher(entry.target, entry.contentRect.width);
        }
    });

    const tabContainers = document.querySelectorAll('.ootb-tabcordion');
    for (const tabContainer of tabContainers) {
        const tabList = tabContainer.querySelector('.ootb-tabcordion--tabs');
        resizeObserver.observe(tabList);
        toggleTabs(tabContainer);
        keyboardSupport(tabContainer, hasTabs(tabContainer));
    }
})();
