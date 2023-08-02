

export const downloadFile = (url: string, fileName: string) => {
    fetch(url).then(res => res.blob()).then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', `${fileName}.pdf`);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    });

};