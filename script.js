
$(function(){
    $('#top-button').click(function(){
        $('html,body').scrollTop(0);
    })

    $('#profile-button').click(function(){
        $('html,body').scrollTop(550);
    })

    $('#works-button').click(function(){
        $('html,body').scrollTop(1150);
    })

    $('#info-button').click(function(){
        $('html,body').scrollTop(5000);
    })

    $('#titanic').click(function(){
        $('.production-detail').css('display', 'None');
        $('.titanic').css('display', 'block')
        $('html,body').scrollTop(1600);
    })

    $('#house-pricing').click(function(){
        $('.production-detail').css('display', 'None');
        $('.house-pricing').css('display', 'block')
        $('html,body').scrollTop(1600);
    })

    $('#bike-sharing').click(function(){
        $('.production-detail').css('display', 'None');
        $('.bike-sharing').css('display', 'block')
        $('html,body').scrollTop(1600);
    })

    $('#data-knock').click(function(){
        $('.production-detail').css('display', 'None');
        $('.data-knock').css('display', 'block')
        $('html,body').scrollTop(1600);
    })

    $('#girl-golfer').click(function(){
        $('.production-detail').css('display', 'None');
        $('.girl-golfer').css('display', 'block')
        $('html,body').scrollTop(1600);
    })

    $('#number-identification').click(function(){
        $('.production-detail').css('display', 'None');
        $('.number-identification').css('display', 'block')
        $('html,body').scrollTop(1600);
    })
})