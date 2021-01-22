(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["404.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "404.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">Bu sayfa bulunamadı</h1>\n<a href=\"#/\">Ana sayfaya dön</a>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "account.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">SavulCoin hesabın</h1>\n<hr>\n\n";
if((lineno = 5, colno = 25, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"isLoggedIn"), "userData[\"isLoggedIn\"]", context, []))) {
output += "\n    Cüzdan ID: <input type=\"text\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"walletId"), env.opts.autoescape);
output += "\" disabled style=\"cursor: text;\" class=\"form-control\">\n    <br>\n    <div id=\"account-balance\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n            <span class=\"sr-only\">Yükleniyor...</span>\n        </div>\n    </div>\n\n    <br>\n    <h5>Adreslerin</h5>\n    <div id=\"account-addresses\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n            <span class=\"sr-only\">Yükleniyor...</span>\n        </div>\n    </div>\n\n";
;
}
else {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("error-not-logged-in.html", false, "account.html", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
}
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["default.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"d-flex\" id=\"wrapper\">\n\n\n    <!-- Sidebar -->\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("sidebar.html", false, "default.html", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("navbar.html", false, "default.html", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n        <div class=\"container-fluid\" id=\"main-panel\">\n            ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n        </div>\n    </div>\n</div>\n\n\n<script>\n$(\"#menu-toggle\").click(function(e) {\n    e.preventDefault();\n    $(\"#wrapper\").toggleClass(\"toggled\");\n});\n</script>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 15;
var output = "";
try {
var frame = frame.push(true);
output += "\n            ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["element-account-addresses.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "addresses")),"length") == 0) {
output += "\n    Hiç adresin yok. Para göndermek veya para almak için adres oluşturman lazım. <a href=\"#/yeni-adres\">Adres oluşturmak için bana tıkla.</a>\n";
;
}
else {
output += "\n\n    <ul class=\"list-group list-group-flush\">\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "addresses");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("address", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <li class=\"list-group-item\">- <a href=\"#/adres/";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += " </a> (<strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "addressBalance")),t_4), env.opts.autoescape);
output += "</strong> Savulcoin)</li>\n        ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["element-account-balance.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"card\" style=\"width: 25rem;\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Hesap Bakiyesi</h5>\n        \n        ";
if(runtime.contextOrFrameLookup(context, frame, "balance") >= 1000) {
output += "\n            <p class=\"card-text\">Hesap bakiyen (bin): <strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "balancek"), env.opts.autoescape);
output += "K SAVUL</strong></p>\n        ";
;
}
output += "\n        \n        <p class=\"card-text\">Hesap bakiyen: <strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "balance"), env.opts.autoescape);
output += " SAVUL</strong></p>\n        <a href=\"#/savulcoin-gonder\" class=\"card-link\">SavulCoin gönder</a>\n    </div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["error-already-logged-in.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "Zaten giriş yapmışsın. <a href=\"#/hesap\">Hesap sayfana girmek için tıkla</a>.";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["error-not-logged-in.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "Bu sayfaya girmek için giriş yapman lazım. <a href=\"#/yeni-hesap\">Hesap oluşturmak için tıkla</a> veya <a href=\"#/giris-yap\">giriş yapmak için tıkla.</a> ";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "index.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">SavulCoin</h1>\n<hr>\n\n<h2>SavulCoin nedir?</h2>\nSavulCoin bir kripto para birimidir. Hiçbir banka / kuruluş / devlet tarafından yönetilmemektedir. YapSavun kurucusu <strong>zelda</strong> tarafından başlatılmıştır.\n\n<br>\n<br>\n<h2>SavulCoin hesabı nasıl oluşturabilirim?</h2>\n<a href=\"#/yeni-hesap\">Bana basarak yeni hesap oluşturabilirsin.</a>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["navbar.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<nav class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\">\n    <button class=\"btn btn-primary\" id=\"menu-toggle\">Menüyü aç/kapat</button>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <!--\n        <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n        </li>\n        </ul>\n        -->\n    </div>\n</nav>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["new-account.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "new-account.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">SavulCoin hesabı oluştur</h1>\n<hr>\n\n";
if((lineno = 5, colno = 25, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"isLoggedIn"), "userData[\"isLoggedIn\"]", context, []))) {
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("error-already-logged-in.html", false, "new-account.html", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
}
else {
output += "\n    <button id=\"create-new-wallet\" class=\"btn btn-primary\">İşlemi başlat</button>\n\n    <div id=\"create-wallet-1\" style=\"display: none\">\n        <textarea style=\"cursor: text\" class=\"form-control\" disabled cols=\"75\" rows=\"2\"></textarea>\n\n        Üstteki 12 rastgele harf senin şifren. Bu şifreyi bir yere kaydet, <strong>unutursan hesabının içindeki tüm Savulcoin'ler kaybolur</strong>.\n        <br><br>\n        <button type=\"button\" data-loading-text=\"Hesap oluşturuluyor...\" id=\"create-new-wallet-api\" class=\"btn btn-primary\">Şifreyi kaydettim ve devam ediyorum</button>\n    </div>\n\n    <div id=\"create-wallet-2\" style=\"display: none\">\n        SavulCoin hesabın başarıyla oluşturuldu! <br>\n        <a href=\"#/hesap\">Hesabını kullanmaya başlamak için tıkla.</a>\n    </div>\n";
;
}
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["new-address.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "new-address.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">SavulCoin adresi oluştur</h1>\n<hr>\n\n";
if(!(lineno = 5, colno = 29, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"isLoggedIn"), "userData[\"isLoggedIn\"]", context, []))) {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("error-not-logged-in.html", false, "new-address.html", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
}
else {
output += "\n    <button id=\"create-new-address\" class=\"btn btn-primary\">İşlemi başlat</button>\n\n    <div id=\"create-address-1\" style=\"display: none\">\n        Adresin başarıyla oluşturuldu.\n        <input type=\"text\" value=\"\" disabled style=\"cursor: text;\" class=\"form-control\">\n    </div>\n";
;
}
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["send-savulcoin-form.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<form id=\"send-savulcoin-form\" class=\"row g-3 needs-validation\" novalidate>\n    <!-- To Address -->\n    <div class=\"col-md-10\">\n        <label for=\"validationCustom01\" class=\"form-label\">Göndereceğinin kişinin adresi</label>\n        <input type=\"text\" name=\"toAddress\" minlength=\"64\" maxlength=\"64\" class=\"form-control\" id=\"validationCustom01\" required>\n        <div class=\"valid-feedback\">\n            Doğru gibi!\n        </div>\n        <div class=\"invalid-feedback\">\n            Doğru düzgün bir adres girin.\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n\n    <!-- From Address -->\n    <div class=\"col-md-10\">\n        <label for=\"validationCustom01\" class=\"form-label\">Hangi adresinden gönderilsin</label>\n\n        <select class=\"form-control\" name=\"fromAddress\" required>\n            ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "addressList");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("address", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                <option value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"address"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n            ";
;
}
}
frame = frame.pop();
output += "\n            \n        </select>\n\n        <div class=\"valid-feedback\">\n            Doğru gibi!\n        </div>\n        <div class=\"invalid-feedback\">\n            Doğru düzgün bir adres girin.\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n\n    <div class=\"col-md-4\">\n      <label for=\"validationCustom03\" class=\"form-label\">Miktar</label>\n      <input type=\"number\" name=\"amount\" class=\"form-control\" id=\"validationCustom03\" required>\n      <div class=\"invalid-feedback\">\n          Doğru düzgün bir miktar girin.\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required>\n        <label class=\"form-check-label\" for=\"invalidCheck\">\n          Göndereceğim adresi yeminlen doğru yazdım\n        </label>\n        <div class=\"invalid-feedback\">\n          Kabul etmeden gönderemezsin maalesef.\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">&nbsp;</div>\n    <div class=\"col-12\">\n      <button class=\"btn btn-primary\" type=\"submit\">Savulcoin Gönder</button>\n    </div>\n  </form>\n\n<script>\n    // Example starter JavaScript for disabling form submissions if there are invalid fields\n(function () {\n  'use strict'\n\n  // Fetch all the forms we want to apply custom Bootstrap validation styles to\n  var forms = document.querySelectorAll('.needs-validation')\n\n  // Loop over them and prevent submission\n  Array.prototype.slice.call(forms)\n    .forEach(function (form) {\n      form.addEventListener('submit', function (event) {\n        if (!form.checkValidity()) {\n          event.preventDefault()\n          event.stopPropagation()\n        }\n\n        form.classList.add('was-validated')\n      }, false)\n    })\n})()\n</script>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["send-savulcoin.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("default.html", true, "send-savulcoin.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"mt-4\">SavulCoin Gönder</h1>\n<hr>\n\n";
if(!(lineno = 5, colno = 29, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"isLoggedIn"), "userData[\"isLoggedIn\"]", context, []))) {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("error-not-logged-in.html", false, "send-savulcoin.html", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
}
else {
output += "\n\n<div id=\"send-savulcoin-form\">\n  <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Yükleniyor...</span>\n  </div>\n</div>\n\n";
;
}
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["sidebar.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["name", "url"], 
[], 
function (l_name, l_url, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("url", l_url);
var t_2 = "";t_2 += "<a href=\"";
t_2 += runtime.suppressValue(l_url, env.opts.autoescape);
t_2 += "\" class=\"list-group-item list-group-item-action bg-light\">";
t_2 += runtime.suppressValue(l_name, env.opts.autoescape);
t_2 += "</a>";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("render_list_item");
context.setVariable("render_list_item", macro_t_1);
output += "\n\n<div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\n    <div class=\"sidebar-heading\">SavulCoin</div>\n    <div class=\"list-group list-group-flush\">\n        ";
output += runtime.suppressValue((lineno = 7, colno = 27, runtime.callWrap(macro_t_1, "render_list_item", context, ["Ana Sayfa","#/"])), env.opts.autoescape);
output += "\n\n        ";
if((lineno = 9, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "userData")),"isLoggedIn"), "userData[\"isLoggedIn\"]", context, []))) {
output += "\n            ";
output += runtime.suppressValue((lineno = 10, colno = 31, runtime.callWrap(macro_t_1, "render_list_item", context, ["Hesap Detayları","#/hesap"])), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((lineno = 11, colno = 31, runtime.callWrap(macro_t_1, "render_list_item", context, ["SavulCoin Gönder","#/savulcoin-gonder"])), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((lineno = 12, colno = 31, runtime.callWrap(macro_t_1, "render_list_item", context, ["Adres oluştur","#/yeni-adres"])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 14, colno = 31, runtime.callWrap(macro_t_1, "render_list_item", context, ["Hesap Oluştur","#/yeni-hesap"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n    </div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

