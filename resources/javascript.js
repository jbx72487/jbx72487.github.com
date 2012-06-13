// Your Javascript will go here!
$(document).ready(function() {
	// wrapping all the code in here makes sure it only runs when the browser has read our doc and is ready to act on it
	
	// writing this in jQuery
	/* 
	$("#copyright").click(function(){
		$(this).css('color', 'purple');
	}); */

	// writing this in straight javascript
	document.getElementById('copyright').onclick = function () {
		this.style.color = 'red';
	}
	/* this is less awesome than jQuery for a few reasons:
		1) more typing
		2) harder to read
		3) easily breakable (yo can only set an element's onclick attribute to one thing, so it might get overwritten by another script on the page and not work later)
			jQuery works differently, by listening for events, so diff functions can all be listening for hte same evnet, so you can add a new response to event w/o worrying about overwriting an existing one
			*/
			

});