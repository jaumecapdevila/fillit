const checkbox = document.getElementById('automatic-check');

const updateUI = savedSettings => {
    checkbox.checked = savedSettings.automaticCheck;
}

const onError = () => {}

const persistCurrentSettings = () => {
    browser.storage.local.set({
        automaticCheck: checkbox.checked,
    });
}

browser.storage.local.get().then(updateUI, onError);
checkbox.addEventListener("change", persistCurrentSettings);
