import { useEffect } from "react";

const Toast = (props) => {

    useEffect(() => {
        const toast = document.getElementsByClassName('toast')[0];

        if (props.toast !== '') {            // If something was wrong
            toast.classList.add('error');
        }
        else {
            toast.classList.remove('error');
        }
    }, [props]);

    return (
        <>
            <div className="toast">
                {/* Icon */}
                <div className="logo">
                    <div className="icon">
                        <i className={props.toast.icon}></i>
                    </div>
                </div>

                {/* Messsage */}
                <div className="message">
                    <p>{props.toast.mess}</p>
                </div>

                {/* Timer */}
                <div className="time">

                </div>
            </div>
        </>
    )
}

export default Toast;