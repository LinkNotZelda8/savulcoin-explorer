
import words from "../utils/word_generator.js";

// new-account.html
var wordList = [];

$(document).on("click", "#create-new-wallet", function () {
    wordList = words(12);

    $(this).hide();

    $("#create-wallet-1").show();
    $("#create-wallet-1 textarea").html(wordList.join(" "));
})

$(document).on("click", "#create-new-wallet-api", function() {
    window.main.ui.fadeAndDisable($("#create-wallet-1"));
    window.main.ui.fadeAndDisable($(this));
    
    window.main.api.createWallet(wordList, (id) => {
        window.main.storage.userData.walletId = id;
        window.main.storage.userData.password = wordList.join(" ");
        window.main.storage.save();

        $("#create-wallet-1").hide();
        $("#create-wallet-2").show(); // Done.
    });
})