import { useState } from "react";
import '../styles/pagination.scss';

const Pagination = (props) => {

    // State
    const [currentPage, setCurrentPage] = useState(1);

    // Value of pagination
    const itemQuantity = props.length;
    const pageQuantity = Math.floor(itemQuantity / 3);
    const itemRemain = itemQuantity % 3;
    const excessPage = itemRemain > 0 ? 1 : 0;
    const maxPage = pageQuantity + excessPage;
    const arr = [];

    // Set item for pagination
    for (let index = 1; index <= maxPage; index++) {
        arr.push(index);
    }

    // Click change page
    const changePage = (value) => {
        let clone = currentPage;
        if (value == -1 && clone > 1) {
            setCurrentPage(clone + value);
        }
        else if (value == 1 && clone < maxPage) {
            setCurrentPage(clone + value);
        }
    }

    return (
        <>
            <div className="pagination">

                <a onClick={() => { setCurrentPage(arr[0]) }}><i className="fa-solid fa-angles-left"></i></a>

                <a onClick={() => { changePage(-1) }}><i className="fa-solid fa-angle-left"></i></a>

                <a onClick={() => { setCurrentPage(arr[0]) }} className={currentPage == 1 ? 'active' : 'pagination-item'}>{arr[0]}</a>

                {maxPage > 1 &&
                    <a onClick={() => { setCurrentPage(2) }} className={currentPage == 2 ? 'active' : 'pagination-item'}>{maxPage > 4 && currentPage > 3 ? '...' : 2}</a>
                }
                {maxPage > 2 && maxPage < 5 && currentPage > 3 &&
                    <a onClick={() => { setCurrentPage(3) }} className={currentPage == 3 ? 'active' : 'pagination-item'}>3</a>
                }
                {maxPage > 2 && currentPage <= 3 &&
                    <a onClick={() => { setCurrentPage(3) }} className={currentPage == 3 ? 'active' : 'pagination-item'}>3</a>
                }
                {maxPage > 4 && currentPage > 3 && currentPage < maxPage - 2 &&
                    <a className='active'>{currentPage}</a>
                }
                {maxPage > 5 && currentPage >= maxPage - 2 &&
                    <a onClick={() => { setCurrentPage(maxPage - 2) }} className={currentPage == maxPage - 2 ? 'active' : 'pagination-item'}>{maxPage - 2}</a>
                }
                {maxPage > 4 &&
                    <a onClick={() => { setCurrentPage(maxPage - 1) }} className={currentPage == maxPage - 1 ? 'active' : 'pagination-item'}>{currentPage < maxPage - 2 ? '...' : maxPage - 1}</a>
                }
                {maxPage > 3 &&
                    <a onClick={() => { setCurrentPage(maxPage) }} className={currentPage == maxPage ? 'active' : 'pagination-item'}>{arr[maxPage - 1]}</a>
                }

                <a onClick={() => { changePage(+1) }}><i className="fa-solid fa-angle-right"></i></a>

                <a onClick={() => { setCurrentPage(arr[maxPage - 1]) }}><i className="fa-solid fa-angles-right"></i></a>

            </div>
        </>
    )
}

export default Pagination;