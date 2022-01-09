import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({perPage, total, page, updateQuery}) {

    let pages = Math.ceil(total / perPage);
    // console.log(total);

    const handleClick = (e, pageNumber) => {
        updateQuery({
            offset: perPage * (pageNumber - 1)
        });
    }

    const Numbers = () => {

        let numbers = [page - 1, page, page + 1, page + 2];
        numbers = numbers.filter(number => {
            return (number >= 1) && (number <= pages)
        });
        numbers = numbers.slice(0, 3);

        return numbers.map(number => {
            let active = number === page ? "active" : "";
            return <li role="tab" key={number} onClick={(e) => handleClick(e, number)} className={`${active}`}>{number}</li>
        });

    }
    return (
        <ul className="pagination clearList" role="tablist">
            <li role="tab" onClick={(e) => handleClick(e, page - 1)} className={`page-arrow ${page === 1 ? "disabled" : ""}`} ><FontAwesomeIcon icon="angle-left" /></li>
            <Numbers />
            <li role="tab" onClick={(e) => handleClick(e, page + 1)} className={`page-arrow ${page === pages ? "disabled" : ""}`} ><FontAwesomeIcon icon="angle-right" /></li>
        </ul>
    )

}
