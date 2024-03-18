
document.getElementById('dropzone-file').addEventListener('change', function() {
    const maxWidth = 1080;
    const maxHeight = 720;
    const files = this.files;
    if (files.length > 0) {
        const file = files[0];
        const image = new Image();
        image.onload = function() {
            if (this.width > maxWidth || this.height > maxHeight) {
                document.getElementById('alert').classList.remove('hidden');
                document.getElementById('dropzone-file').value = ''; // Reset the input to clear the selected file
            }
        };
        image.src = URL.createObjectURL(file);
    }
});
