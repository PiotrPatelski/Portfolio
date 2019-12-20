/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
       var contentIsOn = [0,0,0];
       var transition = [0,0,0];
     
    
   $(document).ready(function(){
       if (contentIsOn[0]==1)
        $(".frontend_logos").hover(function()
       {
           alert("huj");
           $(".frontend_logos").css("opacity","1");
           $(".frontend_logos").css("cursor","pointer");
       });
       ///////////////////////////////////
       ///////animacja wysuwania//////////
       ///////////////////////////////////
       $(".frontend img").click(function() 
       {
           if(window.contentIsOn[0] == 0 && window.transition[0] == 0)
           {
                window.transition[0] = 1;
                $("#frontend_content").css("display","block");
                window.contentIsOn[0] = 1;
                $("#frontend_content").css("animation-name","fade_In");
                $(".frontend_logos").css("position","relative");
                $(".frontend").css("opacity","1");
                setTimeout(function()
                {
                    $(".frontend_logos").css("display","inline-block");
                    $(".frontend_logos").css("animation-name","show_logo"); 
                }, 1000);
                setTimeout(function()
                {
                    window.transition[0] = 0;
                },2000);
                    
           }else if(window.contentIsOn[0] != 0 && window.transition[0] == 0)
           {
                window.transition[0] = 1; 
                window.contentIsOn[0] = 0;
                $(".frontend_logos").css("animation-name","hide_logo");
                setTimeout(function()
                {
                    $(".frontend_logos").css("display","none");
                },1000);
                setTimeout(function()
                {
                    $("#frontend_content").css("animation-name","fade_Out");
                },700);
                setTimeout(function ()
                {
                    $(".frontend").css("opacity","0.6");
                }, 2000);
                setTimeout(function()
                {
                    window.transition[0] = 0;
                },2000);
           }
              
       });
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       //////////////////////////////////////////////////////
       $(".backend img").click(function() 
       {
           if(window.contentIsOn[1] == 0 && window.transition[1] == 0)
           {
                window.transition[1] = 1; 
                $("#backend_content").css("display","block");
                window.contentIsOn[1] = 1;
                $("#backend_content").css("animation-name","fade_In");
                $(".backend_logos").css("position","relative");
                $(".backend").css("opacity","1");
                setTimeout(function()
                {
                    $(".backend_logos").css("display","inline-block");
                    $(".backend_logos").css("animation-name","show_logo");   
                }, 1000);
                setTimeout(function()
                {
                    window.transition[1] = 0;
                },2000);
                
                    
           }else if(window.contentIsOn[1] != 0 && window.transition[1] == 0)
           {
                window.transition[1] = 1; 
                window.contentIsOn[1] = 0;
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
                setTimeout(function()
                {
                    window.transition[1] = 0;
                },2000);
           }
               
       });
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        $(".other img").click(function() 
       {
           if(window.contentIsOn[2] == 0 && window.transition[2] ==0)
           {
                window.transition[2] = 1;
                $("#other_content").css("display","block");
                window.contentIsOn[2] = 1;
                $("#other_content").css("animation-name","fade_In");
                $(".other_logos").css("position","relative");
                $(".other").css("opacity","1");
                setTimeout(function()
                {
                    $(".other_logos").css("display","inline-block");
                    $(".other_logos").css("animation-name","show_logo"); 
                }, 1000);
                setTimeout(function()
                {
                    window.transition[2] = 0;
                },2000);
           }else if(window.contentIsOn[2] != 0 && window.transition[2] ==0)
           { 
                window.transition[2] = 1; 
                window.contentIsOn[2] = 0;
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
                setTimeout(function()
                {
                    window.transition[2] = 0;
                },2000);
           }
              
       });
       ///////////////////////////////////
       ///////////////////////////////////
       ///////////////////////////////////
       
       
       
});

