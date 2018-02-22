const checkbox = document.getElementById('automatic-check');

const updateUI = storedSettings => {
    checkbox.checked = storedSettings.automaticCheck;
}

const onError = () => {}

const persistCurrentSettings = () => {
    browser.storage.local.set({
        automaticCheck: checkbox.checked,
    });
}

browser.storage.local.get().then(updateUI, onError);
checkbox.addEventListener("change", persistCurrentSettings);
