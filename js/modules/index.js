import Navigation from "./ui/navigation.js";
import APIManager from "./api/api_manager.js";
import UIManager from "./ui/ui_manager.js";
import Storage from "./storage.js";

import "./ui/new_account.js";
import "./ui/new_address.js";
import "./ui/account.js";
import "./ui/send_savulcoin.js";
import "./ui/general.js";
import "./ui/login.js";

class Main {
    api = new APIManager(); 
    navigation = new Navigation();
    nunjucksEnv = new nunjucks.Environment();
    storage = new Storage();
    ui = new UIManager();

    constructor() {
        this.navigation.addPage("", "index.html");
        this.navigation.addPage("/", "index.html");
        this.navigation.addPage("/404", "404.html");
        this.navigation.addPage("/yeni-hesap", "new-account.html");
        this.navigation.addPage("/yeni-adres", "new-address.html");
        this.navigation.addPage("/savulcoin-gonder", "send-savulcoin.html");
        this.navigation.addPage("/hesap", "account.html");
        this.navigation.addPage("/giris-yap", "login.html");

        this.nunjucksEnv.globals["userData"] = this.storage.userData;
    }
}

window.main = new Main();