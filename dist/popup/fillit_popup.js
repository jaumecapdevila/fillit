const inputs = document.getElementsByTagName('input');
const saveSettingsButton = document.getElementById('save-settings');

const updateUI = storedSettings => {
    for (const input of inputs) {
        if (storedSettings.fillitSettings[input.name] !== undefined) {
            input.value = storedSettings.fillitSettings[input.name];
        }
    }
};

const currentSettingsFromView = () => {
    const settings = {};
    for (const input of inputs) {
        settings[input.name] = input.value;
    }
    return settings;
};

const onError = () => {};

const updateCurrentSettings = () => {
    browser.storage.local.set({
        fillitSettings: currentSettingsFromView(),
    });
};

browser.storage.local.get().then(updateUI, onError);
saveSettingsButton.addEventListener('click', updateCurrentSettings);
