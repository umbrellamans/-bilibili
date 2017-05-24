/**
 * 
 * @authors umbrellaman (you@example.org)
 * @date    2017-05-19 17:55:30
 * @version $1.0$
 */

$(document).ready(function(){

	$('.head_left_in_s').mouseenter(function(){      //左标题效果
		$(this).animate({opacity:0.5},200);
	});
	$('.head_left_in_s').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.head_right_in_s').mouseenter(function(){      //右标题效果
		$(this).animate({opacity:0.5},200);
	});
	$('.head_right_in_s').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});
	

	$('.navigation_filter').mouseenter(function(){    //导航效果
		$(this).animate({opacity:0},300);
	});
	$('.navigation_filter').mouseout(function(){
		$(this).animate({opacity:0.5},300);
	});

	$('.info_right').mouseenter(function(){                               //一览效果
		$(this).animate({opacity:0.5},200);
	});
	$('.info_right').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.info_middle_botton').mouseenter(function(){                       //信息效果
		$(this).animate({opacity:0.5},200);
	});
	$('.info_middle_botton').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.riyou_content_bottom_item_down').mouseenter(function(){           //详情效果
		$(this).animate({opacity:0.5},200);
	});
	$('.riyou_content_bottom_item_down').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	var flag=1;                                                           //其他信息收起效果
	$('.riyou_header').click(function(){
		if(flag==1){
			$(".riyou_content").hide();
			flag=0;
		}
		else{
			$(".riyou_content").show();
			flag=1;
		}
	});
	//$(".riyou_content").hide();

	$('.share_img').mouseenter(function(){           //分享效果
		$(this).animate({opacity:0.5},200);
	});
	$('.share_img').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.footer_pointer').mouseenter(function(){           //脚注效果
		$(this).animate({opacity:0.5},200);
	});
	$('.footer_pointer').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('#myCarousel1').carousel({
                interval: 2000
            });

});

/*var aImg = $('div.mainvisual_list_in');		//图像集合
var iSize = 3;		//图像个数
var index = 0;		//切换索引
function change(index){
	aImg.stop();
	//隐藏除了当前元素，所以图像
	aImg.eq(index).siblings().animate({
		opacity:0
	},1000)
	//显示当前图像
	aImg.eq(index).animate({
	opacity:1
	},1000)
}

	 
function autoshow() {
	index=index+1;
	if(index<=iSize-1){
		change(index);
	}
	else{
		index=0;
		change(index);
	}
			
}
int=setInterval(autoshow,5000);   //切换动画*/