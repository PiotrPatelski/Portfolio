     
        
       var frontendIsOn = 0;
       var backendIsOn = 0;
       var otherIsOn = 0;
    
   $(document).ready(function(){
        $("img").animate
                    ({
                        opacity: "1",
                        width: "6500px"
                    },2000);});
       /*
       
       $(".logo").mouseover(function()
       {
           $(".logo").css("opacity","1");
       })
       ///////////////////////////////////
       ///////animacja wysuwania//////////
       ///////////////////////////////////
       $(".frontend").click(function() 
       {
          
           if(window.frontendIsOn == 0)
           {
               //animation.pause(); 
            
                    window.frontendIsOn = 1;
                    
                    
                   
                    setTimeout(function()
                    {
                      
                       $(".frontend_logos").animate
                       ({
                           opacity:"1"
                       },2000);
                    }, 2000);
                    
           }else
           {
              // animation.pause(); 
             window.frontendIsOn = 0;
             $(".frontend_logos").animate
             ({
                 opacity: "0"
             },2000);
             
             setTimeout(function()
                    {
                        $(".frontend_logos").animate
                        ({
                            display: "none"
                        },1000);
             setTimeout(function()
                    {
                        $("#frontend_content").animate
                        ({
                            opacity:"0",
                            width: "0%"
                        });
                    },700);
             
           })
               
           };
        });   
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       $(".backend img").click(function() 
       {
           if(window.backendIsOn == 0)
           {
               //animation.pause(); 
            $("#backend_content").css("display","block");
                    window.backendIsOn = 1;
                    $("#backend_content").css("animation-name","fade_In");
                    $(".backend_logos").css("position","relative");
                    $(".backend").css("opacity","1");
                    setTimeout(function()
                    {
                       $(".backend_logos").css("display","inline-block");
                       $(".backend_logos").css("animation-name","show_logo"); 
                    }, 2000);
                    
           }else
           {
               //Animation.pause(); 
             window.backendIsOn = 0;
             
             $(".backend_logos").css("animation-name","hide_logo");
             setTimeout(function()
                    {
             $(".backend_logos").css("display","none");
                    },1000);
             setTimeout(function()
                    {
                   
             $("#backend_content").css("animation-name","fade_Out");
                    },700);
             setTimeout(function ()
             {
             $(".backend").css("opacity","0.6");
             }, 2000); 
           }
               
       });
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        $(".other img").click(function() 
       {
           if(window.otherIsOn == 0)
           {
               //animation.pause(); 
            $("#other_content").css("display","block");
                    window.otherIsOn = 1;
                    
                    $("#other_content").css("animation-name","fade_In");
                    $(".other_logos").css("position","relative");
                    $(".other").css("opacity","1");
                    setTimeout(function()
                    {
                        $(".other_logos").css("display","inline-block");
                       $(".other_logos").css("animation-name","show_logo"); 
                    }, 2000);
                    
           }else
           {
               //animation.pause(); 
             window.otherIsOn = 0;
             
             $(".other_logos").css("animation-name","hide_logo");
             setTimeout(function()
                    {
             $(".other_logos").css("display","none");
                    },1000);
             setTimeout(function()
                    {
                   
             $("#other_content").css("animation-name","fade_Out");
                    },700);
             setTimeout(function ()
             {
             $(".other").css("opacity","0.6");
             }, 2000); 
           }
               ///////////////////UZALEŻNIĆ DISPLAY ELEMENTÓW OD WYBRANEJ SEKCJI///////////////////
       });
       ///////////////////////////////////
       ///////////////////////////////////
       ///////////////////////////////////
       
       
       
});

*/