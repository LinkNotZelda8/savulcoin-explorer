$(document).on("submit", "#send-savulcoin-form", function () {
    var button = $(this).find("button");

    button.animate({ opacity: 0.75 }, 100); // Fade a little bit
    button.prop("disabled", true);

    button.html("Gönderiliyor...");
});

$("#app").on("render", (e, page) => {
    if (page !== "/savulcoin-gonder") {
        return;
    }

    window.main.api.fetchAddresses(window.main.storage.userData, (addresses) => {
        $("#send-savulcoin-form").html(
            window.main.nunjucksEnv.render("send-savulcoin-form.html", { addressList: addresses })
        );
    });
})