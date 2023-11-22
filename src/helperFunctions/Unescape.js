export default function htmlUnescape(url) {
    var tempElement = document.createElement('textarea');
    tempElement.innerHTML = url;
    return tempElement.textContent;
};