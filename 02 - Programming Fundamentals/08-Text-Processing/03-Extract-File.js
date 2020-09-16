function extractFile(path) {
    let fileNameStart = path.lastIndexOf("\\");
    let fileNameEnd = path.lastIndexOf(".");
    let fileName = path.substring(fileNameStart + 1, fileNameEnd);
    let extract = path.substring(fileNameEnd+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extract}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')