const report = (icon, mess) => {
    return {
        type: 'report',
        payload: { icon: icon, mess: mess },
    }
}
const done = () => {
    return {
        type: 'done',
        payload: '',
    }
}

export { report, done };