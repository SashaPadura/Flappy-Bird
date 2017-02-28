function sel(a) {
	return document.querySelector(a);
}
var birg = $('.birg');
var BirgOffset;
var interval;
var ofsetPX = 130;
var bool = true;
var counter = 0;

function start() {
	document.body.addEventListener('keypress', function (e) {
		console.log(e.keyCode);
		if (e.keyCode == 32) {
			sel('.text').style.display='none';
			if (bool) {
				newBott()
				topBirg();
			}
		}
	});
};
start();

function topBirg() {
	birg.stop();
	clearInterval(interval);
	BirgOffset = sel('.birg').offsetTop - ofsetPX;
	birg.css({
		transform: 'rotate(-30deg)'
	});
	birg.animate({
		top: BirgOffset
	}, 400, 'linear', function () {
		downBirg();
	})
};

function downBirg() {
	down();
	interval = setInterval(function () {
		birg.css({
			transform: 'rotate(45deg)'
		});
		down();
	}, 400)
};

function down() {
	BirgOffset = sel('.birg').offsetTop + ofsetPX;
	birg.animate({
		top: BirgOffset
	}, 400, 'linear', function () {});
};


var validate = setInterval(function () {
	var OfBirg = sel('.birg').offsetTop;
	var topBott = sel('.topBott').offsetHeight + sel('.topBott').offsetTop - 23;
	
	var downBott = sel('.downBott').offsetTop - 83;
	
	var LeftBott = sel('.downBott').offsetLeft;
	var LeftBirg = sel('.birg').offsetLeft;
	if(downBott<OfBirg || OfBirg < topBott){
		
		if((LeftBott>(LeftBirg-50)) && (LeftBott<(LeftBirg+50))){
			console.log('stop');
		stop();
		}
	}
}, 10)


function stop(){
	    bool = false;
	    clearInterval(validate);
		clearInterval(interval);
		birg.stop();
		
		birg.css({
			transform: 'rotate(90deg)'
		});
		birg.animate({
			top: '90%'
		}, 1000, 'linear', function () {});
	
		sel('.restart').style.display='block';
};



function newBott(){
	var x;
	$('.topBott').animate({
		left: '-20%'
	},2000,'linear', function () {
		var min = 100;
		var max = 500;
		x = Math.round(min + Math.random() * (max - min));
		$('.topBott').css({
			height: x+'px',
			left:'100%'
		});
		if(bool){
			newBott();
			counter++;
			sel('.count').innerHTML = counter;
		}else{
			$('.downBott').stop(true,false);
		    $('.topBott').stop(true,false);
		}
		
	});
	$('.downBott').animate({
		left: '-20%'
	},2000,'linear', function () {
		
		$('.downBott').css({
			left:'100%'
		});
	});
	
};


sel('.restart').addEventListener('click',function(){
	
	location.reload();
});
