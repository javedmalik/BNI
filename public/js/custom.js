/*'use client'; */ // if using App Router

/* Safety Sciences Advantage Slider */
$( document ).ready(function() {

    /*Sticky Header*/
    //$("#sticky-header").sticky({topSpacing:0});

    $(".main-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true, 
        arrows:false,
    });

    /* Case Study Slider */
    $(".case-study-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });

    /* Employee Slider */
    $(".empolyee-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });

    /* Our Golden Clients Slider */
    $(".clients-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* Industry leaders Slider */
    $(".leaders-slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* Google Reviews Slider */
    $(".reviews-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

 
   /* Our Brands Slider */
   $(".our-team-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    pauseOnHover:true,
    arrows:false,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ] 
    });

    /* Our Brand Slider */
    $(".our-brands-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* News Insights Slider */
    $(".insights-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /********************** Dropdown Menu on hover *********************/
    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });

    /********************** wow animation *********************/
    // wow animation off on Mobile
    wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
    }
    )
    wow.init();

});

// Start Counter 
/*var counted = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
        },

        {

        duration: 2000,
        easing: 'swing',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
            //alert('finished');
        }

        });
    });
    counted = 1;
}

});
// End Counter 
*/

/*$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    const target = $($.attr(this, 'href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    } else {
        console.warn("Target element not found:", $.attr(this, 'href'));
    }
});


/********************** Strat Timeline JS *********************/
$(document).ready(function($){
	var timelines = $('.cd-horizontal-timeline'),
		eventsMinDistance = 60;

	(timelines.length > 0) && initTimeline(timelines);

	function initTimeline(timelines) {
		timelines.each(function(){
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a top postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a height to the timeline
			var timelineTotheight = setTimelineheight(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotheight, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotheight, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
				event.preventDefault();
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotheight);
				updateVisibleContent($(this), timelineComponents['eventsContent']);
			});

			//on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipetop', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotheight, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotheight, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function(event){
				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
					showNewContent(timelineComponents, timelineTotheight, 'prev');
				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotheight, 'next');
				}
			});
		});
	}

	function updateSlide(timelineComponents, timelineTotheight, string) {
		//retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperheight = Number(timelineComponents['timelineWrapper'].css('height').replace('px', ''));
		//translate the timeline to the top('next')/right('prev') 
		(string == 'next') 
			? translateTimeline(timelineComponents, translateValue - wrapperheight + eventsMinDistance, wrapperheight - timelineTotheight)
			: translateTimeline(timelineComponents, translateValue + wrapperheight - eventsMinDistance);
	}

	function showNewContent(timelineComponents, timelineTotheight, string) {
		//go from one event to the next/previous one
		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
			
			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotheight);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotheight);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents, timelineTotheight) {
		//translate timeline to the top/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventtop = Number(eventStyle.getPropertyValue("top").replace('px', '')),
			timelineheight = Number(timelineComponents['timelineWrapper'].css('height').replace('px', '')),
			timelineTotheight = Number(timelineComponents['eventsWrapper'].css('height').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventtop > timelineheight - timelineTranslate) || (string == 'prev' && eventtop < - timelineTranslate) ) {
        	translateTimeline(timelineComponents, - eventtop + timelineheight/2, timelineheight - timelineTotheight);
        }
	}

	function translateTimeline(timelineComponents, value, totheight) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = ( !(typeof totheight === 'undefined') &&  value < totheight ) ? totheight : value; //do not translate more than timeline height
		setTransformValue(eventsWrapper, 'translateY', value+'px');
		//update navigation arrows visibility
		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totheight ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totheight) {
		//change .filling-line length according to the selected event
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventtop = eventStyle.getPropertyValue("top"),
			eventheight = eventStyle.getPropertyValue("height");
		eventtop = Number(eventtop.replace('px', '')) + Number(eventheight.replace('px', ''))/2;
		var scaleValue = eventtop/totheight;
		setTransformValue(filling.get(0), 'scaleY', scaleValue);
	}

	function setDatePosition(timelineComponents, min) {
		for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
		    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
		    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
		    timelineComponents['timelineEvents'].eq(i).css('top', distanceNorm*min+'px');
		}
	}

	function setTimelineheight(timelineComponents, height) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalheight = timeSpanNorm*height;
		timelineComponents['eventsWrapper'].css('height', totalheight+'px');
		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalheight);
	
		return totalheight;
	}

	function updateVisibleContent(event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-top';
		} else {
			var classEnetering = 'selected enter-top',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			visibleContent.removeClass('leave-right leave-top');
			selectedContent.removeClass('enter-top enter-right');
		});
		eventsContent.css('height', selectedContentHeight+'px');
	}

	function updateOlderEvents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
         		timelineStyle.getPropertyValue("-moz-transform") ||
         		timelineStyle.getPropertyValue("-ms-transform") ||
         		timelineStyle.getPropertyValue("-o-transform") ||
         		timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
        	var timelineTranslate = timelineTranslate.split('(')[1];
    		timelineTranslate = timelineTranslate.split(')')[0];
    		timelineTranslate = timelineTranslate.split(',');
    		var translateValue = timelineTranslate[4];
        } else {
        	var translateValue = 0;
        }

        return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property+"("+value+")";
		element.style["-moz-transform"] = property+"("+value+")";
		element.style["-ms-transform"] = property+"("+value+")";
		element.style["-o-transform"] = property+"("+value+")";
		element.style["transform"] = property+"("+value+")";
	}

	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	function parseDate(events) {
		var dateArrays = [];
		events.each(function(){
			var dateComp = $(this).data('date').split('/'),
				newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function parseDate2(events) {
		var dateArrays = [];
		events.each(function(){
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function daydiff(first, second) {
	    return Math.round((second-first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) { 
		    var distance = daydiff(dates[i-1], dates[i]);
		    dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}


});
/********************** End Timeline JS *********************/