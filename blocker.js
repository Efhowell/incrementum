"use strict";
document.getElementById('blockSite').addEventListener('click', function() {
    let url = document.getElementById('siteToBlock').ariaValueText;

    chrome.storage.set({[url]: true}, function() {
        console.log(siteToBlock + ' is blocked.');
    });
});