// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_TRANS } from './lang-en';
import { LANG_RU_TRANS } from './lang-ru';
import { LANG_BS_TRANS } from './lang-bs';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: { 
										'en': LANG_EN_TRANS,
										'ru': LANG_RU_TRANS,
										'bs': LANG_BS_TRANS,
										}
	 },
]; 