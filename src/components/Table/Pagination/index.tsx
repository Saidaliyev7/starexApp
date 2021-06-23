// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './pagination.scss';

import { ReactComponent as ArrowL } from 'assets/images/icons/arrow-left.svg';
import { ReactComponent as ArrowR } from 'assets/images/icons/arrow-right.svg';
import { IPagination } from 'models';
import * as React from 'react';
import ReactPaginate from 'react-paginate';

interface IProps extends Omit<IPagination<any>, 'results'> {
    onChange: (page: number) => void;
    currentPage?: number;
}

const Pagination: React.FC<IProps> = ({ pages, currentPage = 1, onChange }) => {
    return (
        <>
            <div className="pagination-holder">
                <ReactPaginate
                    forcePage={currentPage - 1}
                    onPageChange={(selectedItem) => onChange(selectedItem.selected + 1)}
                    pageCount={pages}
                    previousLabel={<ArrowL />}
                    nextLabel={<ArrowR />}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    activeClassName={'page-active'}
                />
            </div>
        </>
    );
};

export default Pagination;
