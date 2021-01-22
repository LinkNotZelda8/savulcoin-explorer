$(document).on("click", "#create-new-address", function () {
    var button = $(this);

    window.main.ui.fadeAndDisable(button);

    window.main.api.createAddress(window.main.storage.userData, (address) => {
        button.hide();
        $("#create-address-1").show();
        $("#create-address-1 input").val(address);
    })
});