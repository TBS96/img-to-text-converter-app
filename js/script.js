const extractTexts = () => {
    const imgFileInput = document.getElementById('imgInput');
    const outputDiv = document.getElementById('output');

    const imagesFiles = imgFileInput.files[0];

    if(!imagesFiles)
    {
        outputDiv.textContent = 'Please select an image file!';
        return;
    }

    Tesseract.recognize(imagesFiles,'eng')
    .then( ({data}) => {
        outputDiv.textContent = data.text;
    })
    .catch( (error) => {
        console.error('Error!',error);
        outputDiv.textContent = 'Error!!';
    })
};