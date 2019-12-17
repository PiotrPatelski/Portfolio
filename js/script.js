/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
       var frontendIsOn = 0;
       var backendIsOn = 0;
       var otherIsOn = 0;
        
     
    
   $(document).ready(function(){
       
       
       $(".frontend").click(function() 
       {
           if(window.frontendIsOn == 0)
           {
            $("#frontend_content").css("display","block");
                    window.frontendIsOn = 1;
                    $(".frontend").css("opacity","1");
           }else
           {
            $("#frontend_content").css("display", "none");
             window.frontendIsOn = 0;
             $(".frontend").css("opacity","0.6");
           }
               
       });
        $(".backend").click(function() 
       {
           if(window.backendIsOn == 0)
           {
            $("#backend_content").css("display","block");
                    window.backendIsOn = 1;
                    $(".backend").css("opacity","1");
           }else
           {
            $("#backend_content").css("display", "none");
            
             window.backendIsOn = 0;
             $(".backend").css("opacity","0.6");
           }
               
       });
        $(".other").click(function() 
       {
           if(window.otherIsOn == 0)
           {
            $("#other_content").css("display","block");
                    window.otherIsOn = 1;
                    $(".other").css("opacity","1");
           }else
           {
            $("#other_content").css("display", "none");
             window.otherIsOn = 0;
             $(".other").css("opacity","0.6");
           }
               
       });

});

