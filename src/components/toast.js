import { useEffect, useState } from "react";

const Toast = (props) => {

    useEffect(() => {
        const toast = document.getElementsByClassName('toast')[0];

        if (props.mess !== '') {            // If something was wrong
            toast.classList.add('error');
        }
        else {
            toast.classList.remove('error');
        }
    }, [props.mess]);

    return (
        <>
            <div className="toast">
                {/* Icon */}
                <div className="logo">
                    <div className="icon">
                        <i className={props.icon}></i>
                    </div>
                </div>

                {/* Messsage */}
                <div className="message">
                    <p>{props.mess}</p>
                </div>

                {/* Timer */}
                <div className="time">

                </div>
            </div>
        </>
    )
}

export default Toast;