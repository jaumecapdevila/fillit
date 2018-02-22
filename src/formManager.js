function findFormsInCurrentView() {
    return document.getElementsByTagName('form');
}

function defaultValueForType(type) {
    const defaultValues = {
        text: 'Sample text',
        password: 'password',
        email: 'john@doe.com',
        tel: '+00123123123',
        url: 'https://sample-domain.test',
        number: 1,
        range: 1,
        date: Date(),
        color: '#FFFFFF'
    }
    return defaultValues[type];
}

function hasToBeChecked(input) {
    const availableTypes = [
        'text',
        'password',
        'email',
        'tel',
        'url',
        'number',
        'range',
        'date',
        'color',
    ];
    if (availableTypes.indexOf(input.type) != -1) {
        return true;
    }
    return false;
}

function fillForms(forms) {
    for (const form of forms) {
        const inputs = form.getElementsByTagName('input');
        for (const input of inputs) {
            if (!hasToBeChecked(input)) {
                continue;
            }
            const inputPlaceholder = input.placeholder || defaultValueForType(input.type);
            input.value = inputPlaceholder;
        }
    }
}

export {
    fillForms,
    findFormsInCurrentView
};
