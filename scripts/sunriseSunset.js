//create a new function and attach it to jQuery ($)
$.fn.sunriseSunset = function (){ 

// var startime = setInterval(function(){setup()}, 1000);

	var updateTime = function (){
			var time = moment().format("h:mm a");
			$('#time').html(time);
			
	}

	var updateDate = function(){
		var date = moment().format("MMMM Do, YYYY");
		$('#date').html(date);
	}

	var datetoday;
	var timenow;


	function checkAndChangeStuff() {

		datetoday = new Date();
		timenow = datetoday.getHours();


		$('body').removeClass();

		if ( timenow == 17) {
			$('body').addClass('sunset_rise_17');
		} else if (timenow === 18 ) {
			$('body').addClass('sunset_rise_18');
		} else if (timenow === 19){
			$('body').addClass('sunset_rise_19');
		} else if (timenow === 20){
			$('body').addClass('sunset_rise_20');
		} else if (timenow === 21){
			$('body').addClass('sunset_rise_21');
		} else if (timenow === 22){
			$('body').addClass('sunset_rise_22');
		} else if (timenow === 23){
			$('body').addClass('sunset_rise_23');
		} else if (timenow === 24){
			$('body').addClass('sunset_rise_00_24');
		} else if (timenow === 00){
			$('body').addClass('sunset_rise_00_24');
		} else if (timenow === 01){
			$('body').addClass('sunset_rise_01');
		} else if (timenow === 02){
			$('body').addClass('sunset_rise_02');
		} else if (timenow === 03){
			$('body').addClass('sunset_rise_03');
		} else if (timenow === 04){
			$('body').addClass('sunset_rise_04');
		} else if (timenow === 05){
			$('body').addClass('sunset_rise_05');
		} else if (timenow === 06){
			$('body').addClass('sunset_rise_06');
		} else if (timenow === 07){
			$('body').addClass('sunset_rise_07');
		} else if (timenow === 08){
			$('body').addClass('sunset_rise_08');
		} else if (timenow === 09){
			$('body').addClass('sunset_rise_09');
		} else if (timenow === 10){
			$('body').addClass('sunset_rise_10');
		} else if (timenow === 11){
			$('body').addClass('sunset_rise_11');
		} else if (timenow === 12){
			$('body').addClass('sunset_rise_12');
		} else if (timenow === 13){
			$('body').addClass('sunset_rise_13');
		} else if (timenow === 14){
			$('body').addClass('sunset_rise_14');
		} else if (timenow === 15){
			$('body').addClass('sunset_rise_15');
		} else if (timenow === 16){
			$('body').addClass('sunset_rise_16');
		} else{

		}

	}

	function setup(){
		updateTime();
		updateDate();
		checkAndChangeStuff();
	}

	window.setInterval(function(){
		setup(); 
	},1000);

	 // return setup();
	}
