
$(function() {
	//点击右上方的×关闭弹出
	$('.mui-icon-closeempty').click(function(){
		$('#YuYue').hide();
		$('#DingDan').hide();
		$('.mui-backdrop').hide();
	})
	$('.position').click(function(){
		$('#YuYue').hide();
		$('#DingDan').hide();
		$('.mui-backdrop').hide();
	})
	$('.cancel').click(function(){
		$('#ShangZhong').hide();
		$('#XiaZhong').hide();
		$('.mui-backdrop').hide(); 
	})
	$('.xiazhong').click(function(){
		$('#XiaZhong').show();
		$('.mui-backdrop').show(); 
	})
	
    $('.start').click(function(){
		var count = 0;
		var  min=5;
		var time=60000*min;
	
	      var countdown = setInterval(CountDown, time*0.01 );
	      $('.xiazhong').show();
	      $('.shangzhong').hide();
	      $(".xiazhong").css('display','block');
	      $('#ShangZhong').hide();
		  $('.mui-backdrop').hide();

      function CountDown() {
            $(".time").html(count);
            count++;
            var num=count*3.6;

            function outtime(){
               $(".chaoshi").html(((count-100)/100*min).toFixed(2));
               }
                        
           if (num <= 180) {
       						   $('.circle').find('.right').css('transform', "rotate(" + num + "deg)");
       					 } 
                
       			else  if(num<=360){
          					$('.circle').find('.right').css('transform', "rotate(180deg)");
          					$('.circle').find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
                 }

            else if (num <= 540) {
                    $('.circle').find('.left').css('transform', "rotate(0deg)");
                    $('.circle').find('.right').css('transform', "rotate(" + (num - 360) + "deg)");
                     outtime();
                 } 
            else if (num <= 720){
                    $('.circle').find('.right').css('transform', "rotate(540deg)");
                    $('.circle').find('.left').css('transform', "rotate(" + (num - 540) + "deg)");
                       outtime();
                 }
            else(
                       outtime()
                   )
                
            if (count == 100) {
                    $(".circle").css("background","rgb(237, 120, 120)");
                 }
            if (count == 150) {
                    $(".circle").css("background","red");
                  }
            if (count == 280) {
                          // alert("严重超时3")
                            // clearInterval(countdown);
                 }
               stop();
                
      }


		function stop(){
	  		$('.sure_stop').click(function(){
	          	$('#XiaZhong').hide();
	          	$('.mui-backdrop').hide();
	          	clearInterval(countdown);
	    	})
		}
   })     
});