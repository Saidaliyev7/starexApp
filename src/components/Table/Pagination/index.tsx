// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './pagination.scss';

import { ReactComponent as ArrowL } from 'assets/images/icons/arrow-left.svg';
import { ReactComponent as ArrowR } from 'assets/images/icons/arrow-right.svg';
import * as React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination: React.FC = () => {
    const onPageChange = () => 0;
    return (
        <>
            <div className="pagination-holder">
                <ReactPaginate
                    forcePage={1}
                    onPageChange={onPageChange}
                    pageCount={5}
                    previousLabel={ArrowL}
                    nextLabel={ArrowR}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    activeClassName={'page-active'}
                />
            </div>
        </>
    );
};

export default Pagination;
