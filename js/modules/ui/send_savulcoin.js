$(document).on("submit", "#send-savulcoin-form", function () {
    var button = $(this).find("button");

    button.animate({ opacity: 0.75 }, 100); // Fade a little bit
    button.prop("disabled", true);

    button.html("Gönderiliyor...");
});