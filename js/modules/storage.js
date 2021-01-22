class UserData {
    password = "";
    walletId = "";

    isLoggedIn() {
        return this.walletId.length > 0;
    }
}

const STORAGE_USERDATA_NAME = "userData";

export default class Storage {
    userData = new UserData(); 

    load() { // Load userData;
        if (window.localStorage.getItem(STORAGE_USERDATA_NAME))
            this.userData = Object.assign(new UserData(), JSON.parse(window.localStorage.getItem(STORAGE_USERDATA_NAME)));
    }

    save() {
        window.localStorage.setItem(STORAGE_USERDATA_NAME, JSON.stringify(this.userData));
    }

    export() {
        let text =
`Hesap şifresi = ${this.userData.password}
Cüzdan ID = ${this.userData.walletId}`;

        var blob = new Blob([text], {type: "text/plain;charset=utf-8"});

        saveAs(blob, "hesap-yedek-" + new Date().toLocaleDateString() + ".txt");
    }

    logoff() {
        window.localStorage.clear();
        this.userData = new UserData();
    }

    login(password, walletId) {
        this.userData = new UserData();
        this.userData.password = password;
        this.userData.walletId = walletId;

        this.save();
    }

    constructor() {
        this.load();
    }
}