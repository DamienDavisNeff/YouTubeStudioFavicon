function changeFavicon(source) { // GLOBAL CHANGE FAVICON FUNCTION
    var links = document.querySelectorAll("link"); // gets all linked "objects"
    for(let a = 0; a < links.length; a++) { // loops through all links
        if(links[a].getAttribute("rel") == "icon") links[a].remove(); // removes any that are icons
        if(links[a].getAttribute("rel") == "shortcut icon") links[a].remove(); // removes any that are shortcut icons
    }
    var favicon = document.createElement("link"); // creates own icon
    favicon.setAttribute("rel","icon"); // sets link as icon
    favicon.href = chrome.runtime.getURL(source); // set favicon as icon
    document.querySelector("head").appendChild(favicon); // append under header
}