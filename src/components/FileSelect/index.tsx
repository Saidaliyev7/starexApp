import './fileSelect.scss';

import { ReactComponent as RemoveIcon } from 'assets/images/icons/remove.svg';
import clsx from 'classnames';
import * as React from 'react';

const FileSelect: React.FC<{
    message?: string;
    type?: boolean;
    onChange?: (fileList: FileList | File[]) => void;
    error?: string;
    value?: FileList | File[];
}> = ({ message, type, onChange, error, value }) => {
    const fileInput = React.useRef();
    const [inputFiles, changeFiles] = React.useState<FileList | File[]>(value);
    const [files, changeFilenames] = React.useState(null);
    const openFileInput = () => {
        const target = fileInput.current as HTMLInputElement;
        target.click();
    };

    React.useEffect(() => {
        if (inputFiles) {
            onFileChanges(inputFiles);
        }
    }, [inputFiles]);

    const onFileChanges = (fileList: FileList | File[]) => {
        const fileNames = [];
        fileList.length > 0 &&
            Array.from(fileList).map((fileName) => fileNames.push(fileName.name));

        changeFilenames(fileNames);
    };

    const onFileChange = (event) => {
        const input = event.target as HTMLInputElement;
        onChange?.(input.files);
        changeFiles(input.files);
    };

    const onFileRemove = (fileName) => {
        const newFiles = Array.from(inputFiles).filter((file) => file.name !== fileName);
        changeFiles(newFiles);
    };

    return (
        <>
            <div className="file-select-holder">
                <input
                    ref={fileInput}
                    type="file"
                    onChange={onFileChange}
                    multiple={type ?? true}
                    style={{ display: 'none' }}
                />
                <div className={clsx('file-input', { 'file-input--error': !!error })}>
                    <div className="check-files" onClick={openFileInput}>
                        {type === null
                            ? 'Faylları seçin'
                            : type === false
                            ? 'Faylı seçin'
                            : 'Faylları seçin'}
                    </div>
                    <div className="files">
                        <ul>
                            {files &&
                                files.map((file, index) => (
                                    <li key={index}>
                                        {file}

                                        <div
                                            className="remove-icon"
                                            onClick={() => onFileRemove(file)}
                                        >
                                            <RemoveIcon />
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                {message && <div className="file-message">{message}</div>}
            </div>
        </>
    );
};

export default FileSelect;
