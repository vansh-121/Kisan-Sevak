 // Your JavaScript code using Axios

 function uploadImage() {
    // document.querySelector('.upload-section').style.display = 'none';
    // document.querySelector('.result-section').style.display = 'block';

    const fileInput = document.getElementById('imageInput');
    const resultSection = document.querySelector('.result-section');
    const loadingMessage = resultSection.querySelector('p');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        // Display loading message
        loadingMessage.innerHTML = 'Loading...';

        // Read the file as base64 using FileReader
        reader.onload = function () {
            const imageBase64 = reader.result.split(',')[1];

            // Send the image to the API using Axios
            axios.post("https://classify.roboflow.com/corn-bo7gd/1", imageBase64, {
                params: {
                    api_key: "RD7WPPYtJXzJ7wmZsowu"
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                const myJSON = JSON.stringify(response.data["predictions"][0]["class"]);
                loadingMessage.innerHTML = "Your Crop has " +myJSON + " disease";
            
                console.log(response.data);
                speak(myJSON)
            })
            .catch(function(error) {
                console.log(error.message);
                loadingMessage.innerHTML = 'Error occurred. Please try again.';
            });
        };

        // Read the file as base64
        reader.readAsDataURL(file);
    } else {
        loadingMessage.innerHTML = 'Please select an image.';
    }
}


function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance
    var msg = new SpeechSynthesisUtterance();
    
    // Set the text to be spoken
    msg.text = text;
    
    // Optionally set the language (default is the user's browser language)
    msg.lang = 'en-US'; // Change to the language you want
    
    // Use Google's TTS engine (if available)
    msg.voiceURI = 'Google UK English Male'; // Change to the desired voice
    
    // Optionally set other parameters such as pitch and rate
    // msg.pitch = 1;
    // msg.rate = 1;
    
    // Use the SpeechSynthesis API to speak the text
    window.speechSynthesis.speak(msg);

  }
  speak("helllllllllllllllllllllllllllllllllloooooooooooooooo")