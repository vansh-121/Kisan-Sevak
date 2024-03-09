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
            axios.post("https://classify.roboflow.com/cotton-taeon/2", imageBase64, {
                params: {
                    api_key: "GPmxatlpNqt25rsSHFe1"
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                const myJSON = JSON.stringify(response.data["predictions"][0]["class"]);
                loadingMessage.innerHTML = "Your Crop has " +myJSON + " disease";
                console.log(response.data);
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