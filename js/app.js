export async function downloadFileFromStream(fileName, contentStreamReference)
{
    console.log('downloadFileFromStream', fileName, contentStreamReference);
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
    URL.revokeObjectURL(url);
}

export function saveTextAsFile(filename, bytesBase64) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + bytesBase64;
    document.body.appendChild(link); // Needed for Firefox
    link.click();
    document.body.removeChild(link);
}

export function getPageSize() {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    console.log(`Page width: ${pageWidth}, Page height: ${pageHeight}`);

    return { width: pageWidth, height: pageHeight };
}
