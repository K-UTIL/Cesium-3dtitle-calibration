function copy(copyText) {
    let input = document.createElement("input");
    input.style.visibility = false;
    document.body.appendChild(input);
    input.value = copyText;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}

export {
    copy
}