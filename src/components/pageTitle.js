import '../styles/pageTitle.scss';

const PageTitle = (props) => {
    return (
        <div id='header' className="pageTitle">

            <div className='decoreA'>
                <div className='decoreB'>
                    <i className={`${props.icon} a`}></i>
                    <i className={`${props.icon} b`}></i>
                    <i className={`${props.icon} c`}></i>
                    <i className={`${props.icon} d`}></i>
                    <i className={`${props.icon} e`}></i>
                    <i className={`${props.icon} f`}></i>
                    <i className={`${props.icon} g`}></i>
                    <i className={`${props.icon} h`}></i>
                </div>
            </div>

            <div className='title'>
                {props.category &&
                    <h3>Category:</h3>
                }
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default PageTitle;