var speech = new SpeechSynthesisUtterance();

speech.lang = "en";

const voices = window.speechSynthesis.getVoices();
console.log(voices);



window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  console.log(voices);
	
	

  // (67) [SpeechSynthesisVoice, SpeechSynthesisVoice, ...]
};

var pj = "";
		
function generate(){
	
		
	genr8.disabled = true
	
	const voices = window.speechSynthesis.getVoices();
console.log(voices);

	fetch("https://official-joke-api.appspot.com/random_joke")
	.then(a => a.json())
	.then(b =>{ 
		
		speech.voice = voices[6]
		
		punchline.innerHTML = ""


		
		speech.text = b.setup
		window.speechSynthesis.speak(speech);
		
		console.log(b)
		
		joke.innerHTML = b.setup
		
//		deepai.setApiKey('f885e8ae-1615-49e1-af5e-20c60abb34ee');

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');



(async function() {
    var resp = await deepai.callStandardApi("stable-diffusion", {
            text: b.punchline,
    });
 	console.log(resp)
	imgage.src = resp.output_url

})()
		
 
	punch.addEventListener("click",function(){
		speech.text = b.punchline
		

		
		pj = b.punchline
		
		
		
		
		punchline.innerHTML = b.punchline
		
		genr8.disabled = false
		
		

		
	})	
	
	     })
	
}


speech.onend = (event) => {
  console.log(`Utterance has finished being spoken after ${event.elapsedTime} seconds.`);
		window.speechSynthesis.cancel();
		 console.log(pj)	
}

