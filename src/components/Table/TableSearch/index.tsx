// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './tableSearch.scss';

import * as React from 'react';

import { ITableSearch } from '../table.interface';

const TableSearch: React.FC<{ tableSearch: ITableSearch,onSearchAddClick? }> = React.memo(({ tableSearch,onSearchAddClick }) => {
    return (
        <>
            <div className="table-search-holder">
                <div className="left">
                    <div className="input">
                        <input type="text" placeholder={tableSearch.placeholder} />
                    </div>
                    <div className="icon">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.9268 11.2197L8.44084 7.73383C9.10202 6.91757 9.50001 5.87985 9.50001 4.75002C9.50001 2.13087 7.36914 0 4.74999 0C2.13085 0 0 2.13087 0 4.75002C0 7.36916 2.13087 9.50004 4.75002 9.50004C5.87985 9.50004 6.91757 9.10202 7.73383 8.44087L11.2197 11.9268C11.3174 12.0244 11.4757 12.0244 11.5733 11.9268L11.9268 11.5733C12.0244 11.4757 12.0244 11.3174 11.9268 11.2197ZM4.75002 8.50002C2.68215 8.50002 1.00001 6.81789 1.00001 4.75002C1.00001 2.68215 2.68215 1.00001 4.75002 1.00001C6.81789 1.00001 8.50002 2.68215 8.50002 4.75002C8.50002 6.81789 6.81789 8.50002 4.75002 8.50002Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
                {tableSearch.isNewAdd && (
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
                                <div className="text">
                                    {tableSearch.isNewAddText}
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
});

export default TableSearch;
