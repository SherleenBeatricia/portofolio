$(document).ready(function(){
    let totalSlide=$('.slide').length
        let slideWidth=$('.slide').width()
        let slideHeight=$('.slide').height()
        let totalWidth=totalSlide*slideWidth

        $('.slider').css({width: slideWidth, height: slideHeight})
        $('.slides').css({width: totalWidth,marginLeft: -slideWidth})
        $('.slide:last-child').prependTo('.slides')

        $('#prev').click(function(){
            $('.slides').animate({
                left:slideWidth
            },700,function(){
                $('.slide:last-child').prependTo('.slides')
                $('.slides').css({left:''})
            })
        })

        $('#next').click(function(){
            $('.slides').animate({
                left:-slideWidth
            },700,function(){
                $('.slide:first-child').appendTo('.slides')
                $('.slides').css({left:''})
            })
        })
    })