"use strict";

function resizeBody()
{
    var body = document.getElementsByTagName("body")[0];

    body.style.height = window.innerHeight + "px";
}

function resizeMain()
{
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];

    var main = document.getElementsByTagName("main")[0];
    var main_blur = document.getElementById("main-blur");

    main.style.top = header.offsetHeight + header.offsetTop + "px";
    main.style.bottom = window.innerHeight - footer.offsetTop + "px";

    main_blur.style.top = header.offsetHeight + header.offsetTop + "px";
    main_blur.style.bottom = window.innerHeight - footer.offsetTop + "px";
}

function setTransparent()
{
    document.getElementsByTagName("body")[0].style.opacity = "0.0";
}

function unsetTransparent()
{
    document.getElementsByTagName("body")[0].style.opacity = "1.0";
}

function initialize()
{
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];

    header.addEventListener("transitionend", resizeMain);
    footer.addEventListener("transitionend", resizeMain);

    var headerHeightObs = new MutationObserver(function(){resizeMain();alert("Observer.");});
    var footerHeightObs = new MutationObserver(function(){resizeMain();alert("Observer.");});

    headerHeightObs.observe(header, {
        attributes: true
    });
    footerHeightObs.observe(footer, {
        attributes: true
    });
}
