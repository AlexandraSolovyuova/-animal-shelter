document.querySelector('.slider-controls__left').onclick=sliderLeft;
document.querySelector('.slider-controls__right').onclick=sliderRight;
let sliders = document.querySelector('.sliders');
let value = 0;
function sliderLeft() {
	value-=320;
	if (value<-960){
		value=0;
	}
	sliders.style.left = value +"px";
};

function sliderRight(){
	value+=320;
	 if (value > 0) {
  		 value = -960;
 	}
	sliders.style.left = value +"px";
};
