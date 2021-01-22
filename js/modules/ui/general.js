import copyTextToClipboard from "./clipboard.js";

$(document).on("click", "[data-copy-to-clipboard]", function(event) {
    copyTextToClipboard($(this).data("copy-to-clipboard"));
    toastr.info("Kopyalandı!");
});