        

        function init_birthdaycake(){
            // 初始化高度并设置背景bg
            $("#div_dbcake").height($(window).height());
            $("#div_dbcake_inner").height($(window).height());
            var start_bg_img=start_content['bg_img'];
            if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
                if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
                    $("#div_dbcake").css({"background-image": 'url('+start_bg_img+')'}); 
                    $("#div_dbcake_inner").css({"background":"rgba(130,130,130,.8)"});
                }
            } 

            if(typeof(start_content['dbcake_question'])!='undefined' && start_content['dbcake_question']!=''){
                $('#input_award').attr('placeholder',start_content['dbcake_question']); //加载自定义内容
            }else{
                $('#input_award').attr('placeholder','今天过生日的小可爱叫什么名字'); //设置默认值
            } 

            if(typeof(start_content['dbcake_title'])!='undefined' && start_content['dbcake_title']!=''){
                $('.div_dbcake_text h1').html(start_content['dbcake_title']); //加载自定义内容
            }else{
                $('.div_dbcake_text h1').html('Happy Birthday!'); //设置默认值
            }

            if(typeof(start_content['dbcake_wishes'])!='undefined' && start_content['dbcake_wishes']!=''){
                $('.div_dbcake_text p').html(start_content['dbcake_wishes']); //加载自定义内容
            }else{
                $('.div_dbcake_text p').html('又长大一岁啦，祝你开心快乐每一天，运气爆表，活出自己想要的样子'); //设置默认值
            }
        }


        function show_dbcake_btn(){
            if(typeof(start_content['dbcake_answer'])=='undefined' || start_content['dbcake_answer']==''){
                if($("#input_award").val().length>0){
                    console.log('he is typing words');
                    $("#input_award_btn").show();
                }else{
                    $("#input_award_btn").hide();
                }
            }else{
                if($("#input_award").val()==start_content['dbcake_answer']){
                    console.log('he is typing words');
                    $("#input_award_btn").show();
                }else{
                    $("#input_award_btn").hide();
                }
            }
        }

        function show_dbcake(){
            console.log('show_cake');
            $("#div_dbacke_access").remove();
            $("#div_dbcake_cake").fadeIn(1500,"swing");            
                       
            setTimeout(function(){
                document.getElementsByTagName("animate")[4].beginElement();
            },1000);
            setTimeout(function(){
                $("#div_dbcake_wish").fadeIn(1000,"swing");
            },6000);
        }
        
        function dbcake_show_note(){
            $("#div_wish_note").fadeIn(100,"swing"); 
        }

        function dbcake_hide_note(){
            $("#div_wish_note").hide(); 
        }

        function dbcake_go_next(){
            console.log('dbcake_go_next now');
            init_theme(); 
            $('#div_dbcake').fadeOut();
            setTimeout(function(){
                $('#div_dbcake').remove();
            },1000);
        }




        