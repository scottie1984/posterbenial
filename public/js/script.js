var menu = false;

jQuery(function($) {
    
    $(window).load(function() {
            $('#charger-status').fadeOut();
            $('#charger').delay(350).fadeOut('slow');
            $('#main-content').delay(350).css({'overflow':'visible'});
    });
    
    $(document).ready( function() {

        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 500});
    
    $("#m-btn").click(function(){
        $("#responsive").toggle();
    });
    
        var mainMenuList = $('#menu-body').html();
        $('#responsive').html(mainMenuList);
    
    $("#menu-body a, #responsive a, #upload-body a").on('click',function(e){
            e.preventDefault();
            if (menu == false)
            {
                menu = true;
                
                var name = $(this).attr('href');
                $('#menu-body li').removeClass('active');
                $('#responsive li').removeClass('active');
                $('#upload-body li').removeClass('active');

                var menuClass = $(this).parent('li').attr('class');
                $('.'+menuClass).addClass('active');

                $("#responsive").hide();

                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 500}); 
                
                $("section.active").animate({left:$("section.active").outerWidth()}, 400,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'},400,function(){
                        $(this).addClass("active");
                        $.backstretch("resize");
                        menu = false;
                    });
                });
                
            }
            return;
    });
        
    });

});