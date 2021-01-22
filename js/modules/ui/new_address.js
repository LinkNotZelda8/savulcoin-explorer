$(document).on("click", "#create-new-address", function () {
    var button = $(this);

    button.animate({ opacity: 0.5 }, 100); // Fade a little bit
    button.prop("disabled", true);

    window.main.api.createAddress(window.main.storage.userData, (address) => {
        button.hide();
        $("#create-address-1").show();
        $("#create-address-1 input").val(address);
    })
});