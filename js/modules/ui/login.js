$(document).on("submit", "#login-form", function (e) {
    e.preventDefault();
    
    let button = $(this).find("button");
    let formDataRaw = $(this).serializeArray();
    let formData = {}

    for (const data of formDataRaw) {
        formData[data.name] = data.value;
    }

    window.main.ui.fadeAndDisable(button);
    window.main.storage.login(formData["password"].trim(), formData["walletId"].trim());
    window.location.hash = "#/hesap";
    
    window.location.reload();
});