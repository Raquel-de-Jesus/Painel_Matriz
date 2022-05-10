function chuvinha() {
	const canvas = document.getElementById('Matrix');
	const context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const grego = "αβψδεφγηιξκλμνοπρστθωςχυζ";
	const hebraico = "זטס'הואדר/פםמצךלחןיעכקגבנש'";
	const latim = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const nums = "0123456789";

	const alphabet = grego + hebraico + latim + nums;

	const fontSize = 20;
	const columns = canvas.width/fontSize;

	const rainDrops = [];

	for( let x = 0; x < columns; x++ ) {
		rainDrops[x] = 1;
	}

	const draw = () => {
		context.fillStyle = 'rgba(0, 0, 0, 0.045)';
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.fillStyle = '#9400D3';
		context.font = fontSize + 'px monospace';

		for(let y = 0; y < rainDrops.length; y++)
		{
			const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
			context.fillText(text, y*fontSize, rainDrops[y]*fontSize);
			
			if(rainDrops[y]*fontSize > canvas.height && Math.random() > 0.975){
				rainDrops[y] = 0;
	        }
			rainDrops[y]++;
		}
	};

	setInterval(draw, 35);

};

function Snackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};
