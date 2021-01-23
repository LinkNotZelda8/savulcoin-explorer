const DEFAULT_NODES = [
    "https://savul-n2.yapsavun.com"
]

const BLOCKCHAIN_CONSTANT = 100000000;

export default class APIManager {
    nodeUrl = null;
    _nodeList = []

    constructor() {
        this.nodeUrl = DEFAULT_NODES[0];
/*
        this.getPeers().then(list => {
            this._nodeList = list;
            this.nodeUrl = "https://" + this._nodeList[Math.floor(Math.random() * this._nodeList.length)].url; // Choose random peer from the peer list 
        });   */
    }

    getPeers() {
        return this._get("/node/peers");
    }

    createWallet(words, callback) {
        this._post(`/operator/wallets`, { password: words.join(" ") }).then((result) => {
            callback(result.id);
        });
    }

    fetchBalance(userData, callback) {
        this._get(`/operator/wallets/${userData.walletId}`, (result) => {
            let addresses = result.addresses;

            var totalBalance = 0;
            for (const address of addresses) {
                this.fetchAddressBalance(address, (balance) => { totalBalance += balance });
            }

            callback(totalBalance / BLOCKCHAIN_CONSTANT);
        });
    }

    fetchAddresses(userData, callback) {
        this._get(`/operator/wallets/${userData.walletId}/addresses`, (result) => {
            callback(result);
        });
    }

    fetchAddressBalance(addressId, callback) {
        this._get(`/operator/${addressId}/balance`, (result) => {
            callback(result != null ? (result.balance / BLOCKCHAIN_CONSTANT).toFixed(8) : 0);
        }, true);
    }

    createAddress(userData, callback) {
        this._post(`/operator/wallets/${userData.walletId}/addresses`, { walletId: userData.walletId }, userData.password).then((result) => {
            callback(result.address);
        });
    }

    createTransaction(userData, fromAddress, toAddress, amount, callback) {
        amount *= BLOCKCHAIN_CONSTANT;

        this._post(`/operator/wallets/${userData.walletId}/transactions`, {
            fromAddress: fromAddress,
            toAddress: toAddress,
            amount: amount,
            changeAddress: fromAddress
        }, userData.password).then((result) => {
            toastr.success("İşlem başarıyla gönderildi. 5 dakika ile 1 saat arasında SavulCoin gönderdiğiniz kişiye ulaşacaktır.", {
                showDuration: 10000
            });
            callback(true);
        });
    }

    getTransactionFee() {
        return 1 / BLOCKCHAIN_CONSTANT;
    }

    _error(err) {
        toastr.error("İşleminiz yaparken bir hata oluştu. Sonra tekrar deneyin.");
    }

    _get(path, callback, suppressErrors=false) {
        return $.getJSON(this.nodeUrl + path)
            .then((result) => {
                callback(result);
            })
            .fail((error) => {
                if (!suppressErrors)
                    this._error(error);
                
                callback(null);
            });
    }

    _post(path, data, password=null) {
        return $.ajax({
            url: this.nodeUrl + path,
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: (xhr) => {
                if (password != null)
                    xhr.setRequestHeader("password", password)
            }   
          }).fail((error) => {
              this._error(error);
          });
    }
}