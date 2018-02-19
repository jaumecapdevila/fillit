const forms = document.getElementsByTagName('form');

for (const form of forms) {
    const inputs = form.getElementsByTagName('input');
    for (const input of inputs) {
        if (!hasToBeChecked(input)) {
            continue;
        }
        const inputPlaceholder = input.placeholder || getDefaultValueFromType(input.type);
        input.value = inputPlaceholder;
    }
}


function getDefaultValueFromType(type) {
    const defaultValues = {
        text: 'Sample text',
        password: 'coolPassword',
        email: 'john@doe.com',
        tel: '123123123',
    }
    return defaultValues[type];
}


function hasToBeChecked(input) {
    const availableTypes = [
        'text',
        'password',
        'email',
        'tel',
    ];
    if (availableTypes.indexOf(input.type) != -1) {
        return true;
    }
    return false;
}
