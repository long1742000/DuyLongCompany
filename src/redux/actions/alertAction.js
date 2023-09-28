const turnOn = (mess, button, controller, icon) => {
    return {
        type: 'turnOn',
        payload: { mess: mess, button: button, controller: controller, icon: icon },
    }
}
const turnOff = () => {
    return {
        type: 'turnOff',
        payload: '',
    }
}

export { turnOn, turnOff };