parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NesY":[function(require,module,exports) {
(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["404.html"]={b_body:function(n,e,a,t,r){var o="";try{a=a.push(!0),r(null,o+='\n<h1 class="mt-4">Bu sayfa bulunamadı</h1>\n<a href="#/">Ana sayfaya dön</a>\n')}catch(l){r(t.handleError(l,2,3))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"404.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["account.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{if(a=a.push(!0),s+='\n<h1 class="mt-4">SavulCoin hesabın</h1>\n<hr>\n\n',o=5,l=25,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[]))s+='\n    Cüzdan ID ( BURAYA <strong>SAVULCOIN GÖNDERİLEMEZ</strong> ): <input type="text" value="',s+=t.suppressValue(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"walletId"),n.opts.autoescape),s+='" disabled style="cursor: text;" class="form-control">\n    <br>\n    <div id="account-balance">\n        <div class="spinner-border text-primary" role="status">\n            <span class="sr-only">Yükleniyor...</span>\n        </div>\n    </div>\n\n    <br>\n    <h5>Adreslerin</h5>\n    <div id="account-addresses">\n        <div class="spinner-border text-primary" role="status">\n            <span class="sr-only">Yükleniyor...</span>\n        </div>\n    </div>\n    <br>\n    <h5>Diğer</h5>\n    <a href="javascript:void(0)" id="backup-account" class="btn btn-success">Hesabını Yedekle</a>\n    <a href="javascript:void(0)" id="log-off" class="btn btn-danger">Çıkış Yap</a>\n\n';else{s+="\n    ";var i=[];i.push(function(e){n.getTemplate("error-not-logged-in.html",!1,"account.html",!1,function(n,a){n?r(n):e(null,a)})}),i.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),i.push(function(n,e){s+=n,e(null)}),n.waterfall(i,function(){s+="\n"})}r(null,s+="\n\n")}catch(d){r(t.handleError(d,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"account.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["default.html"]={b_body:function(n,e,a,t,r){var o="";try{a=a.push(!0),r(null,o+="\n            ")}catch(l){r(t.handleError(l,14,15))}},root:function(n,e,a,t,r){var o="";try{o+='\n<div class="d-flex" id="wrapper">\n\n\n    \x3c!-- Sidebar --\x3e\n    ';var l=[];l.push(function(e){n.getTemplate("sidebar.html",!1,"default.html",!1,function(n,a){n?r(n):e(null,a)})}),l.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),l.push(function(n,e){o+=n,e(null)}),n.waterfall(l,function(){o+='\n    \x3c!-- /#sidebar-wrapper --\x3e\n\n    \x3c!-- Page Content --\x3e\n    <div id="page-content-wrapper">\n\n        ';var l=[];l.push(function(e){n.getTemplate("navbar.html",!1,"default.html",!1,function(n,a){n?r(n):e(null,a)})}),l.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),l.push(function(n,e){o+=n,e(null)}),n.waterfall(l,function(){o+='\n\n        <div class="container-fluid" id="main-panel">\n            ',e.getBlock("body")(n,e,a,t,function(n,e){n?r(n):(o+=e,r(null,o+='\n        </div>\n    </div>\n</div>\n\n\n<script>\n$("#menu-toggle").click(function(e) {\n    e.preventDefault();\n    $("#wrapper").toggleClass("toggled");\n});\n<\/script>\n'))})})})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["element-account-addresses.html"]={root:function(n,e,a,t,r){var o="";try{if(0==t.memberLookup(t.contextOrFrameLookup(e,a,"addresses"),"length"))o+='\n    Hiç adresin yok. Para göndermek veya para almak için adres oluşturman lazım. <a href="#/yeni-adres">Adres oluşturmak için bana tıkla.</a>\n';else{o+='\n\n    <ul class="list-group list-group-flush">\n        ',a=a.push();var l=t.contextOrFrameLookup(e,a,"addresses");if(l)for(var s=(l=t.fromIterator(l)).length,i=0;i<l.length;i++){var d=l[i];a.set("address",d),a.set("loop.index",i+1),a.set("loop.index0",i),a.set("loop.revindex",s-i),a.set("loop.revindex0",s-i-1),a.set("loop.first",0===i),a.set("loop.last",i===s-1),a.set("loop.length",s),o+='\n        <li class="list-group-item"><a href="javascript:void(0)" data-copy-to-clipboard="',o+=t.suppressValue(d,n.opts.autoescape),o+='">Kopyala</a> - <a href="#/adres/',o+=t.suppressValue(d,n.opts.autoescape),o+='">',o+=t.suppressValue(d,n.opts.autoescape),o+="</a> (<strong>",o+=t.suppressValue(t.memberLookup(t.contextOrFrameLookup(e,a,"addressBalance"),d),n.opts.autoescape),o+="</strong> Savulcoin)</li>\n        "}a=a.pop(),o+="\n    </ul>\n\n"}r(null,o)}catch(u){r(t.handleError(u,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["element-account-balance.html"]={root:function(n,e,a,t,r){var o="";try{o+='<div class="card" style="width: 25rem;">\n    <div class="card-body">\n        <h5 class="card-title">Hesap Bakiyesi</h5>\n        \n        <p class="card-text">Hesap bakiyen: <strong>',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"balance"),n.opts.autoescape),r(null,o+=' SAVUL</strong></p>\n        <a href="#/savulcoin-gonder" class="card-link">SavulCoin gönder</a>\n    </div>\n</div>')}catch(l){r(t.handleError(l,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["element-send-savulcoin.html"]={root:function(n,e,a,t,r){var o="";try{if(t.memberLookup(t.contextOrFrameLookup(e,a,"addressList"),"length")<1)o+='\n  Para göndermek için ilk önce SavulCoin adresi oluşturman gerekiyor. <a href="#/yeni-adres">Oluşturmak için bana tıkla.</a>\n';else{o+='\n<form id="send-savulcoin-form" class="row g-3 needs-validation" novalidate>\n    \x3c!-- To Address --\x3e\n    <div class="col-md-10">\n        <label for="validationCustom01" class="form-label">Göndereceğinin kişinin adresi</label>\n        <input type="text" name="toAddress" minlength="64" maxlength="64" class="form-control" id="validationCustom01" required>\n        <div class="valid-feedback">\n            Doğru gibi!\n        </div>\n        <div class="invalid-feedback">\n            Doğru düzgün bir adres girin.\n        </div>\n    </div>\n    <div class="col-md-2"></div>\n\n    \x3c!-- From Address --\x3e\n    <div class="col-md-10">\n        <label for="validationCustom01" class="form-label">Hangi adresinden gönderilsin</label>\n\n        <select class="form-control" name="fromAddress" required>\n            ',a=a.push();var l=t.contextOrFrameLookup(e,a,"addressList");if(l)for(var s=(l=t.fromIterator(l)).length,i=0;i<l.length;i++){var d=l[i];a.set("address",d),a.set("loop.index",i+1),a.set("loop.index0",i),a.set("loop.revindex",s-i),a.set("loop.revindex0",s-i-1),a.set("loop.first",0===i),a.set("loop.last",i===s-1),a.set("loop.length",s),o+='\n                <option value="',o+=t.suppressValue(d,n.opts.autoescape),o+='">',o+=t.suppressValue(d,n.opts.autoescape),o+="</option>\n            "}a=a.pop(),o+='\n            \n        </select>\n\n        <div class="valid-feedback">\n            Doğru gibi!\n        </div>\n        <div class="invalid-feedback">\n            Doğru düzgün bir adres girin.\n        </div>\n    </div>\n    <div class="col-md-2"></div>\n\n    <div class="col-md-4">\n      <label for="validationCustom03" class="form-label">Miktar</label>\n      <input type="number" step="0.00000001" name="amount" class="form-control" id="validationCustom03" required> \n      <span> + 0.00000001 SavulCoin aktarım ücreti</span>\n      <div class="invalid-feedback">\n          Doğru düzgün bir miktar girin.\n      </div>\n    </div>\n    <div class="col-12">\n      <div class="form-check">\n        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>\n        <label class="form-check-label" for="invalidCheck">\n          Göndereceğim adresi yeminlen doğru yazdım\n        </label>\n        <div class="invalid-feedback">\n          Kabul etmeden gönderemezsin maalesef.\n        </div>\n      </div>\n    </div>\n    <div class="col-12">&nbsp;</div>\n    <div class="col-12">\n      <button class="btn btn-primary" type="submit">Savulcoin Gönder</button>\n    </div>\n  </form>\n\n<script>\n    // Example starter JavaScript for disabling form submissions if there are invalid fields\n(function () {\n  \'use strict\'\n\n  // Fetch all the forms we want to apply custom Bootstrap validation styles to\n  var forms = document.querySelectorAll(\'.needs-validation\')\n\n  // Loop over them and prevent submission\n  Array.prototype.slice.call(forms)\n    .forEach(function (form) {\n      form.addEventListener(\'submit\', function (event) {\n        if (!form.checkValidity()) {\n          event.preventDefault()\n          event.stopPropagation()\n        }\n\n        form.classList.add(\'was-validated\')\n      }, false)\n    })\n})()\n<\/script>\n'}r(null,o)}catch(u){r(t.handleError(u,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["error-already-logged-in.html"]={root:function(n,e,a,t,r){var o="";try{r(null,o+='Zaten giriş yapmışsın. <a href="#/hesap">Hesap sayfana girmek için tıkla</a>.')}catch(l){r(t.handleError(l,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["error-not-logged-in.html"]={root:function(n,e,a,t,r){var o="";try{r(null,o+='Bu sayfaya girmek için giriş yapman lazım. <a href="#/yeni-hesap">Hesap oluşturmak için tıkla</a> veya <a href="#/giris-yap">giriş yapmak için tıkla.</a> ')}catch(l){r(t.handleError(l,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["index.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{a=a.push(!0),s+='\n<h1 class="mt-4">SavulCoin</h1>\n<hr>\n\n<h2>SavulCoin nedir?</h2>\nSavulCoin bir kripto para birimidir. Hiçbir banka / kuruluş / devlet tarafından yönetilmemektedir. YapSavun kurucusu <strong>zelda</strong> tarafından başlatılmıştır.\n\n<br>\n<br>\n<h2>SavulCoin hesabı nasıl oluşturabilirim?</h2>\n<a href="#/yeni-hesap" class="btn btn-primary">Hesap oluştur</a>\n<a href="#/giris-yap" class="btn btn-info">Giriş yap</a>\n<br><br>\n\n',o=15,l=25,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[])&&(s+='\n    <a href="#/hesap" class="btn btn-primary">Hesabına geçmek için tıkla</a>\n'),r(null,s+="\n\n")}catch(i){r(t.handleError(i,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"index.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["login.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{if(a=a.push(!0),s+='\n<h1 class="mt-4">Giriş Yap</h1>\n<hr>\n\n',o=5,l=25,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[])){s+="\n";var i=[];i.push(function(e){n.getTemplate("error-already-logged-in.html",!1,"login.html",!1,function(n,a){n?r(n):e(null,a)})}),i.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),i.push(function(n,e){s+=n,e(null)}),n.waterfall(i,function(){s+="\n"})}else s+='\n\n<form autocomplete="off" id="login-form" class="row g-3 needs-validation" novalidate>\n    \x3c!-- Password --\x3e\n    <div class="col-md-10">\n        <label for="validationCustom01" class="form-label">Şifren</label>\n        <input type="text" name="password" minlength="10" maxlength="250" class="form-control" id="validationCustom01" required>\n        <div class="valid-feedback">\n            Doğru gibi!\n        </div>\n        <div class="invalid-feedback">\n            Doğru düzgün bir şifre girin.\n        </div>\n    </div>\n\n     \x3c!-- Wallet ID --\x3e\n     <div class="col-md-10">\n        <label for="validationCustom01" class="form-label">Cüzdan ID</label>\n        <input type="text" name="walletId" minlength="64" maxlength="64" class="form-control" id="validationCustom01" required>\n        <div class="valid-feedback">\n            Doğru gibi!\n        </div>\n        <div class="invalid-feedback">\n            Doğru düzgün bir Cüzdan ID\'si girin.\n        </div>\n    </div>\n    <div class="col-md-2"></div>\n\n    <div class="col-12">&nbsp;</div>\n    <div class="col-12">\n      <button class="btn btn-primary" type="submit">Giriş Yap</button>\n    </div>\n  </form>\n\n<script>\n    // Example starter JavaScript for disabling form submissions if there are invalid fields\n(function () {\n  \'use strict\'\n\n  // Fetch all the forms we want to apply custom Bootstrap validation styles to\n  var forms = document.querySelectorAll(\'.needs-validation\')\n\n  // Loop over them and prevent submission\n  Array.prototype.slice.call(forms)\n    .forEach(function (form) {\n      form.addEventListener(\'submit\', function (event) {\n        if (!form.checkValidity()) {\n          event.preventDefault()\n          event.stopPropagation()\n        }\n\n        form.classList.add(\'was-validated\')\n      }, false)\n    })\n})()\n<\/script>\n    \n';r(null,s+="\n\n")}catch(d){r(t.handleError(d,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"login.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["modal-yes-no.html"]={root:function(n,e,a,t,r){var o="";try{o+='<div class="modal fade" id="',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"modal_id"),n.opts.autoescape),o+='" tabindex="-1" role="dialog" aria-labelledby="',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"modal_id"),n.opts.autoescape),o+='" aria-hidden="true">\n    <div class="modal-dialog" role="document">\n        <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"modal_id"),n.opts.autoescape),o+='">',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"title"),n.opts.autoescape),o+='</h5>\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n            </button>\n        </div>\n        <div class="modal-body">\n            ',o+=t.suppressValue(n.getFilter("safe").call(e,t.contextOrFrameLookup(e,a,"body")),n.opts.autoescape),o+='\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hayır</button>\n            <button type="button" id="yes-button-',o+=t.suppressValue(t.contextOrFrameLookup(e,a,"modal_id"),n.opts.autoescape),r(null,o+='" class="btn btn-primary">Evet</button>\n        </div>\n        </div>\n    </div>\n</div>')}catch(l){r(t.handleError(l,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["navbar.html"]={root:function(n,e,a,t,r){var o="";try{r(null,o+='<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">\n    <button class="btn btn-primary" id="menu-toggle">Menüyü aç/kapat</button>\n\n    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n    </button>\n\n    <div class="collapse navbar-collapse" id="navbarSupportedContent">\n        \x3c!--\n        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">\n        <li class="nav-item active">\n            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n        </li>\n        <li class="nav-item">\n            <a class="nav-link" href="#">Link</a>\n        </li>\n        <li class="nav-item dropdown">\n            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n            Dropdown\n            </a>\n            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">\n            <a class="dropdown-item" href="#">Action</a>\n            <a class="dropdown-item" href="#">Another action</a>\n            <div class="dropdown-divider"></div>\n            <a class="dropdown-item" href="#">Something else here</a>\n            </div>\n        </li>\n        </ul>\n        --\x3e\n    </div>\n</nav>\n')}catch(l){r(t.handleError(l,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["new-account.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{if(a=a.push(!0),s+='\n<h1 class="mt-4">SavulCoin hesabı oluştur</h1>\n<hr>\n\n',o=5,l=25,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[])){s+="\n";var i=[];i.push(function(e){n.getTemplate("error-already-logged-in.html",!1,"new-account.html",!1,function(n,a){n?r(n):e(null,a)})}),i.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),i.push(function(n,e){s+=n,e(null)}),n.waterfall(i,function(){s+="\n"})}else s+='\n    <button id="create-new-wallet" class="btn btn-primary">İşlemi başlat</button>\n\n    <div id="create-wallet-1" style="display: none">\n        <textarea style="cursor: text" class="form-control" disabled cols="75" rows="2"></textarea>\n\n        Üstteki 12 rastgele kelime senin şifren. Bu 12 kelimeyi bir yere kaydet, <strong>unutursan hesabının içindeki tüm Savulcoin\'ler kaybolur</strong>.\n        <br><br>\n        <button type="button" data-loading-text="Hesap oluşturuluyor..." id="create-new-wallet-api" class="btn btn-primary">Şifreyi kaydettim ve devam ediyorum</button>\n    </div>\n\n    <div id="create-wallet-2" style="display: none">\n        SavulCoin hesabın başarıyla oluşturuldu! <br>\n        <a href="#/hesap">Hesabını kullanmaya başlamak için tıkla.</a>\n    </div>\n';r(null,s+="\n\n")}catch(d){r(t.handleError(d,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"new-account.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["new-address.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{if(a=a.push(!0),s+='\n<h1 class="mt-4">SavulCoin adresi oluştur</h1>\n<hr>\n\n',o=5,l=29,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[]))s+='\n    <button id="create-new-address" class="btn btn-primary">İşlemi başlat</button>\n\n    <div id="create-address-1" style="display: none">\n        Adresin başarıyla oluşturuldu.\n        <input type="text" value="" disabled style="cursor: text;" class="form-control">\n    </div>\n';else{s+="\n    ";var i=[];i.push(function(e){n.getTemplate("error-not-logged-in.html",!1,"new-address.html",!1,function(n,a){n?r(n):e(null,a)})}),i.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),i.push(function(n,e){s+=n,e(null)}),n.waterfall(i,function(){s+="\n"})}r(null,s+="\n\n")}catch(d){r(t.handleError(d,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"new-address.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["send-savulcoin.html"]={b_body:function(n,e,a,t,r){var o=1,l=3,s="";try{if(a=a.push(!0),s+='\n<h1 class="mt-4">SavulCoin Gönder</h1>\n<hr>\n\n',o=5,l=29,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[]))s+='\n\n<div id="send-savulcoin-form-container">\n  <div class="spinner-border text-primary" role="status">\n      <span class="sr-only">Yükleniyor...</span>\n  </div>\n</div>\n\n';else{s+="\n    ";var i=[];i.push(function(e){n.getTemplate("error-not-logged-in.html",!1,"send-savulcoin.html",!1,function(n,a){n?r(n):e(null,a)})}),i.push(function(n,t){n.render(e.getVariables(),a,function(n,e){n?r(n):t(null,e)})}),i.push(function(n,e){s+=n,e(null)}),n.waterfall(i,function(){s+="\n"})}r(null,s+="\n\n")}catch(d){r(t.handleError(d,o,l))}},root:function(n,e,a,t,r){var o="";try{var l=null;n.getTemplate("default.html",!0,"send-savulcoin.html",!1,function(s,i){if(s)r(s);else{for(var d in(l=i).blocks)e.addBlock(d,l.blocks[d]);o+="\n",(l?function(n,e,a,t,r){r("")}:e.getBlock("body"))(n,e,a,t,function(s,i){s?r(s):(o+=i,l?l.rootRenderFunc(n,e,a,t,r):r(null,o))})}})}catch(s){r(t.handleError(s,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["sidebar.html"]={root:function(n,e,a,t,r){var o=0,l=0,s="";try{var i=t.makeMacro(["name","url"],[],function(e,r,o){var l=a;a=new t.Frame,o=o||{},Object.prototype.hasOwnProperty.call(o,"caller")&&a.set("caller",o.caller),a.set("name",e),a.set("url",r);var s="";return s+='<a href="',s+=t.suppressValue(r,n.opts.autoescape),s+='" class="list-group-item list-group-item-action bg-light">',s+=t.suppressValue(e,n.opts.autoescape),s+="</a>",a=l,new t.SafeString(s)});e.addExport("render_list_item"),e.setVariable("render_list_item",i),s+='\n\n<div class="bg-light border-right" id="sidebar-wrapper">\n    <div class="sidebar-heading">SavulCoin</div>\n    <div class="list-group list-group-flush">\n        ',s+=t.suppressValue((o=7,l=27,t.callWrap(i,"render_list_item",e,["Ana Sayfa","#/"])),n.opts.autoescape),s+="\n\n        ",o=9,l=33,t.callWrap(t.memberLookup(t.contextOrFrameLookup(e,a,"userData"),"isLoggedIn"),'userData["isLoggedIn"]',e,[])?(s+="\n            ",s+=t.suppressValue((o=10,l=31,t.callWrap(i,"render_list_item",e,["Hesap Detayları","#/hesap"])),n.opts.autoescape),s+="\n            ",s+=t.suppressValue((o=11,l=31,t.callWrap(i,"render_list_item",e,["SavulCoin Gönder","#/savulcoin-gonder"])),n.opts.autoescape),s+="\n            ",s+=t.suppressValue((o=12,l=31,t.callWrap(i,"render_list_item",e,["Adres oluştur","#/yeni-adres"])),n.opts.autoescape),s+="\n        "):(s+="\n            ",s+=t.suppressValue((o=14,l=31,t.callWrap(i,"render_list_item",e,["Hesap Oluştur","#/yeni-hesap"])),n.opts.autoescape),s+="\n            ",s+=t.suppressValue((o=15,l=31,t.callWrap(i,"render_list_item",e,["Giriş Yap","#/giris-yap"])),n.opts.autoescape),s+="\n        "),r(null,s+="\n    </div>\n</div>")}catch(d){r(t.handleError(d,o,l))}}};
},{}]},{},["NesY"], null)
//# sourceMappingURL=/templates.e6231fbe.js.map