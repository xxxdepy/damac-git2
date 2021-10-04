

	$(document).ready(function(){
		// Using jQuery just to test UI interactions

		console.log('hello world');

		$('body').on('click', '.mainmenutoggle', function(e){
			e.preventDefault();
			$('.main-menu-slideout').toggleClass('active');
		});
		


	});
