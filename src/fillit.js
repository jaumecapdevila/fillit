import {
    fillForms,
    findFormsInCurrentView
} from './formManager.js';

browser.storage.local.get()
    .then((storedSettings) => {
        if (storedSettings.automaticCheck) {
            fillForms(findFormsInCurrentView())
        }
    })
    .catch(() => {});
