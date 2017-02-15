// app/translate/translation.ts
"use strict";
var core_1 = require("@angular/core");
// import translations
var lang_en_1 = require("./lang-en");
var lang_ru_1 = require("./lang-ru");
var lang_bs_1 = require("./lang-bs");
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all traslations
var dictionary = (_a = {},
    _a[lang_en_1.LANG_EN_NAME] = lang_en_1.LANG_EN_TRANS,
    _a[lang_ru_1.LANG_RU_NAME] = lang_ru_1.LANG_RU_TRANS,
    _a[lang_bs_1.LANG_BS_NAME] = lang_bs_1.LANG_BS_TRANS,
    _a);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translations.js.map