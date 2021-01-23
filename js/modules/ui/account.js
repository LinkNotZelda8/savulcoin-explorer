$("#app").on("render", (e, page) => {
    if (page !== "/hesap") {
        return;
    }

    if (!window.main.storage.userData.isLoggedIn()) {
        return;
    }

    function displayAccountData() {
        window.main.api.fetchAddresses(window.main.storage.userData, (addresses) => {
            var done = 0;
            var totalBalance = 0;
            var addressBalance = {};
    
            for (const address of addresses) {
                window.main.api.fetchAddressBalance(address, (balance) => {
                    if (balance === undefined)
                        balance = 0;
                        
                    done ++;
                    totalBalance += parseFloat(balance);
                    addressBalance[address] = balance;
                });
            }
    
            var int = setInterval(() => { // Check regularly if requests are done
                if (done === addresses.length) { // If so render 
                    clearInterval(int);
                    
                    $("#account-balance").html(
                        window.main.nunjucksEnv.render("element-account-balance.html", { balance: totalBalance, balanceML: totalBalance / 1000000 })
                    );
                    
                    $("#account-addresses").html(
                        window.main.nunjucksEnv.render("element-account-addresses.html", { addresses: addresses, addressBalance: addressBalance })
                    );
                }
            }, 200);
        });
    }

    function otherButtons() {
        $(document).on("click", "#backup-account", () => {
            window.main.ui.modalYesNo("Uyarı", "Hesabınızı yedeklemek istediğinize emin misiniz? <strong>Bu yedeğe sahip herkes hesabınıza erişebilir.</strong>", () => {
                window.main.storage.export();
            });
        });

        $(document).on("click", "#log-off", () => {
            window.main.ui.modalYesNo("Uyarı", "Emin misiniz? <strong>Eğer yedeğiniz yoksa hesabınızı SONSUZA KADAR kaybedeceksiniz!</strong>", () => {
                window.main.storage.logoff();
                window.location.reload();
            });
        });
    }

    displayAccountData();
    otherButtons();
})