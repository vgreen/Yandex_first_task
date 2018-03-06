function Progress( link ) {
			var element = document.getElementById(link);
			var pie = document.getElementById('pie');
			
			this.setValue = function ( value ) {
				this.value = value;
				this.updateProgress();
			}

			this.setMod = function( property , value ){
				element.setAttribute( property , value );
			}
			
			this.updateProgress = function ( ) {
				var total = Math.PI*380;
				var val = ((this.value * total) / 100);
				result = val + ' ' + total;
				pie.setAttribute('stroke-dasharray',result);
			}
};

window.onload = function () {		
			
	var switch_rotation = document.getElementById('switch-1');
	var switch_hide = document.getElementById('switch-2');
			
	progress = new Progress('progress');
	progress.setValue(5);
			
	switch_rotation.onchange = function() {
		if(switch_rotation.checked){
			progress.setMod('animated','yes');
		}
		else{
			progress.setMod('animated','');
		}
	};
	switch_hide.onchange = function(){
		if(switch_hide.checked){
			progress.setMod('display','none');
		}
		else{
			progress.setMod('display','');
			switch_rotation.checked = false;
		}
	};
}; 
		
		
