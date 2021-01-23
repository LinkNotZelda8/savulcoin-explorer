$(document).on("submit", "#send-savulcoin-form", function (e) {
    e.preventDefault();
    let button = $(this).find("button");
    let formDataRaw = $(this).serializeArray();
    let formData = {}

    for (const data of formDataRaw) {
        formData[data.name] = data.value;
    }

    window.main.ui.fadeAndDisable(button);
    window.main.api.createTransaction(window.main.storage.userData, formData.fromAddress, formData.toAddress, parseInt(formData.amount), (result) => {
        if (result)
            window.location.hash = "#/hesap"; // Return to homepage if the action was successful
    });
});

$("#app").on("render", (e, page) => {
    if (page !== "/savulcoin-gonder") {
        return;
    }

    window.main.api.fetchAddresses(window.main.storage.userData, (addresses) => {
        $("#send-savulcoin-form-container").html(
            window.main.nunjucksEnv.render("element-send-savulcoin.html", { addressList: addresses })
        );
    });
})