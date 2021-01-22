$("#app").on("render", (e, page) => {
    if (page !== "/hesap") {
        return;
    }

    window.main.api.fetchAddresses(window.main.storage.userData, (addresses) => {
        var done = 0;
        var totalBalance = 0;
        var addressBalance = {};

        for (const address of addresses) {
            window.main.api.fetchAddressBalance(address, (balance) => {
                if (balance === undefined)
                    balance = 0;
                    
                done ++;
                totalBalance += balance;
                addressBalance[address] = balance;
            });
        }

        var int = setInterval(() => { // Check regularly if requests are done
            if (done === addresses.length) { // If so render 
                clearInterval(int);
                
                $("#account-balance").html(
                    window.main.nunjucksEnv.render("element-account-balance.html", { balance: totalBalance, balancek: totalBalance / 1000 })
                );
                
                $("#account-addresses").html(
                    window.main.nunjucksEnv.render("element-account-addresses.html", { addresses: addresses, addressBalance: addressBalance })
                );
            }
        }, 200);

    });
})