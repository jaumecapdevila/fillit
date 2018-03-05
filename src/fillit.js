import {
    init,
} from './manager';

import {
    defaultConfig,
} from './util';

init();

browser.storage.local.get()
    .then((storedSettings) => {
        if (!storedSettings.fillitSettings) {
            browser.storage.local.set({
                fillitSettings: defaultConfig,
            });
        }
    });
