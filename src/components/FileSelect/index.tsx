import './fileSelect.scss';

import * as React from 'react';

const FileSelect: React.FC<{ message: string }> = ({ message }) => {
    const fileInput = React.useRef();

    return (
        <>
            <div className="file-select-holder">
                <input ref={fileInput} type="file" multiple style={{ display: 'none' }} />
                <div className="file-input">
                    <div className="check-files">Faylları seçin</div>
                    <div className="files">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="file-message">{message}</div>
            </div>
        </>
    );
};

export default FileSelect;
