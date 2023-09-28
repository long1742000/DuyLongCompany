import '../styles/contact.scss';

const Contact = () => {
    return (
        <>
            <div className='infor email'>
                <div className='icon'>
                    <i className="fa-regular fa-envelope i"></i>
                </div>
                <p>phamduylong1742000@gmail.com</p>
            </div>

            <div className='infor phone'>
                <div className='icon'>
                    <i className="fa-solid fa-headset i"></i>
                </div>
                <p>0366310650 - 0933694478</p>
            </div>

            <div className='infor text'>
                <div className='icon'>
                    <i className="fa-regular fa-message i"></i>
                </div>
                <p>Want to send us something ?</p>
            </div>
        </>
    )
}

export default Contact;