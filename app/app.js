import {switchPage} from "../services/services.js";

function initializeSite() {
    $(window).on("hashchange", newRoute);
    newRoute();
}

function newRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    switchPage(pageID);
}

$(document).ready(function () {
    initializeSite();
})