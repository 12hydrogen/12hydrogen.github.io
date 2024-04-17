function displayTo(uri, element, preprocess)
{
    var ajax = new XMLHttpRequest();

    ajax.onload = function() {
        if (this.status == 200)
            element.innerHTML = preprocess == null ? this.responseText : preprocess(this.responseText);
    };

    ajax.open("get", uri);
    ajax.send();
}

function convertMD(mdText)
{
    return DOMPurify.sanitize(marked.parse(mdText));
}
