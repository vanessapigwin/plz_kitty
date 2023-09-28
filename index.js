(()=> {
    const goKitty = document.querySelector('#plzkitty');
    const litterBox = document.querySelector('#litterbox');
    const defaultImgSrc = '.static/227.jpg';
    const url = 'https://api.thecatapi.com/v1/images/search';
    const copyArea = document.querySelector('#apiurl');
    const copyButton = document.querySelector('#copybutton');

    const findKitty = async () => {
        const response = await fetch(url);
        const data = await response.json();
        try {
            litterBox.src = data[0].url;
            copyArea.value = data[0].url;
        }
        catch (err) {
            litterBox.src = defaultImgSrc;
            copyArea.value = 'not your kitty, iz Fr0m rep0';
            console.log(err)
        }
    }

    const clipboardCopy = () => {
        copyArea.select();
        copyArea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyArea.value);
    }

    goKitty.addEventListener('click', findKitty);
    copyButton.addEventListener('click', clipboardCopy)
})();
