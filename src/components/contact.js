import '../styles/contact.scss';

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className='infor'>
                    <div className='icon'>
                        <i className="fa-regular fa-envelope i"></i>
                    </div>
                    <p>phamduylong1742000@gmail.com</p>
                </div>

                <br></br>

                <div className='infor'>
                    <div className='icon'>
                        <i className="fa-solid fa-headset i"></i>
                    </div>
                    <p>0366310650 - 0933694478</p>
                </div>

                <br></br>

                <div className='infor'>
                    <div className='icon'>
                        <i className="fa-regular fa-message i"></i>
                    </div>
                    <p>Want to send us something ?</p>
                </div>
            </div>
        </>
    )
}

export default Contact;