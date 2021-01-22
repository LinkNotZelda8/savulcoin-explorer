$(document).on("submit", "#send-savulcoin-form", function () {
    var button = $(this).find("button");

    window.main.fadeAndDisable(button);

    button.html("Gönderiliyor...");
});

$("#app").on("render", (e, page) => {
    if (page !== "/savulcoin-gonder") {
        return;
    }

    window.main.api.fetchAddresses(window.main.storage.userData, (addresses) => {
        $("#send-savulcoin-form").html(
            window.main.nunjucksEnv.render("element-send-savulcoin.html", { addressList: addresses })
        );
    });
})