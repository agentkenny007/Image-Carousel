var slide, slider = $('.slider'), leftArrow = slider.find('.left'), rightArrow = slider.find('.right');

carouselImages.forEach(function(obj){
    var content = $('<li><img src="' + obj.image_url + '"><span>"' + obj.title + '" by <a href="#">' + obj.photographer_id + '</a></span></li>');
    $('.slider').append(content);
});

slides = $('.slider li');
slides.last().addClass('active');

leftArrow.click(function(){
    if ($('.active').prev().prop('tagName') === "LI") $('.active')
        .removeClass('active')
        .addClass('hidden')
        .prev().addClass('active');
    else slides.removeClass('active hidden').last().addClass('active');
});

rightArrow.click(function(){
    console.log($('.active').next().length);
    if ($('.active').next().length) $('.active')
        .removeClass('active')
        .next().removeClass('hidden')
        .addClass('active');
    else slides.removeClass('active').addClass('hidden')
            .first().removeClass('hidden').addClass('active');
});
