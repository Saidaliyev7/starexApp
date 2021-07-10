// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableSearch.scss';

import * as React from 'react';

const TableSearch: React.FC<{ onSearchAddClick? }> = React.memo(({ onSearchAddClick }) => {
    return (
        <div className="table-search-holder">
            {onSearchAddClick && (
                <div className="right">
                    <div className="new-add">
                        <button onClick={onSearchAddClick}>
                            <div className="icon">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM11.5 8.66663H8.66663V11.5C8.66663 11.868 8.36804 12.1666 8 12.1666C7.63196 12.1666 7.33337 11.868 7.33337 11.5V8.66663H4.5C4.13196 8.66663 3.83337 8.36804 3.83337 8C3.83337 7.63196 4.13196 7.33337 4.5 7.33337H7.33337V4.5C7.33337 4.13196 7.63196 3.83337 8 3.83337C8.36804 3.83337 8.66663 4.13196 8.66663 4.5V7.33337H11.5C11.868 7.33337 12.1666 7.63196 12.1666 8C12.1666 8.36804 11.868 8.66663 11.5 8.66663Z"
                                        fill="#005AFF"
                                    />
                                </svg>
                            </div>
                            <div className="text">Onlayn müraciət et</div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

export default TableSearch;
