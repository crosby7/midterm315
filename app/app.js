import {changePage} from "../services/services.js";

function initializeSite() {
    $(window).on("hashchange", newRoute);
    newRoute();
}

function newRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    changePage(pageID);
}

$(document).ready(function () {
    initializeSite();
})