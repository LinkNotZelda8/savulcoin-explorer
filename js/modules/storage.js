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

    constructor() {
        this.load();
    }
}