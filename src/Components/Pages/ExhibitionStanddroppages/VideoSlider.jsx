import React from 'react';
import '../ExhibitionStanddroppages/video.css';

const VideoSlider = () => {


    var pos = 0,
    slides = $('.slide'),
    numOfSlides = slides.length;

function nextSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'-100%'},500);
    pos = pos >= numOfSlides-1 ? 0 : ++pos;
    slides.eq(pos).css({left:'100%'}).animate({left:0},500);
}

function previousSlide(){
    stopCurrentVideo();
    slides.eq(pos).animate({left:'100%'},500);
    pos = pos == 0 ? numOfSlides-1 : --pos;
    slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
}

function stopCurrentVideo(){
    $('.slider-video:eq('+pos+')').load().removeAttr('controls')
    .siblings('.overlay-content').show().find('.play-button').show();
}

$('.left').click(previousSlide);
$('.right').click(nextSlide);
  return (
    <div class="video-slider">

    <div class="slide">
        <video class="slider-video" poster="http://tinyurl.com/ne24w38">
            <source src="http://tinyurl.com/npmt9td" type="video/mp4" />
            <source src="http://tinyurl.com/myowmhx" type="video/webm" />
            <source src="http://tinyurl.com/my3pdd9" type="video/ogg" />
        </video>
        <div class="overlay-content">
            <div class="play-button"></div>
        </div>
    </div>
    
    <div class="slide">
        <video class="slider-video" poster="http://tinyurl.com/ne24w38">
            <source src="http://tinyurl.com/npmt9td" type="video/mp4" />
            <source src="http://tinyurl.com/myowmhx" type="video/webm" />
            <source src="http://tinyurl.com/my3pdd9" type="video/ogg" />
        </video>
        <div class="overlay-content">
            <div class="play-button"></div>
        </div>
    </div>
   
    <div class="slide-arrow left"></div>
    <div class="slide-arrow right"></div>
</div>
  )
}

export default VideoSlider;



