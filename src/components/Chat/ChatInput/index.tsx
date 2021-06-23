// import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg';
import './chatInput.scss';

import { ReactComponent as AttachIcon } from 'assets/images/icons/attach.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/icons/remove.svg';
import { ReactComponent as SendIcon } from 'assets/images/icons/send.svg';
import * as React from 'react';

const ChatInput: React.FC = React.memo(() => {
    const fileInput = React.useRef();
    const [inputFiles, changeFiles] = React.useState<FileList|File[]>(null);
    const [textAreaOptions, changeTextAreaOptions] = React.useState<{
        name: string;
        rows: number;
        value: string;
        files: string[];
    }>({
        name: 'Cavablandır',
        rows: 1,
        value: '',
        files: null,
    });

    const onTextAreValueChange = (event) => {
        const value = event.target.value.trim();
        changeTextAreaOptions((oldstate) => ({
            ...oldstate,
            value,
        }));
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

        changeTextAreaOptions((oldstate) => ({
            ...oldstate,
            rows: fileList.length>0?5:1,
            files: fileNames,
        }));
    };

    const onFileChange = (event) => {
        const input = event.target as HTMLInputElement;
        changeFiles(input.files);
    };

    const openFileInput = () => {
        const input = fileInput.current as HTMLInputElement;
        input.click();
    };

    const onFileRemove = (fileName, index) => {
        const newFiles = Array.from(inputFiles).filter((file, i) => file.name!== fileName);
        changeFiles(newFiles);
    };
    return (
        <>
            <div className="chat-input-holder">
                <div className="top">
                    <div className="name">Telli İsrafilbayli</div>
                </div>
                <div className="bottom">
                    <div className="chat-content">
                        <ul>
                            <li>
                                <div className="date">17.07.2019</div>
                                <div className="message">
                                    <div className="text">Test</div>
                                    <div className="time">11:53</div>
                                </div>
                                <div className="message income">
                                    <div className="text">Lorem ipsum lorem ips</div>
                                    <div className="time">11:53</div>
                                </div>
                                <div className="message">
                                    <div className="text">Lorem ipsum lorem ips</div>
                                    <div className="time">11:53</div>
                                </div>
                                <div className="message income">
                                    <div className="text">Test</div>
                                    <div className="time">11:53</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="input-content">
                        <textarea
                            placeholder={textAreaOptions.name}
                            rows={textAreaOptions.rows}
                            onChange={onTextAreValueChange}
                            className={textAreaOptions?.files?.length > 0 ? 'file-added' : ''}
                        ></textarea>
                        <input
                            type="file"
                            ref={fileInput}
                            onChange={onFileChange}
                            multiple
                            style={{ display: 'none' }}
                        />
                        {textAreaOptions.files &&textAreaOptions.files.length>0&& (
                            <div className="files">
                                <ul>
                                    {textAreaOptions.files.map((fileName, index) => (
                                        <li key={index}>
                                            {fileName}
                                            <div
                                                className="remove-icon"
                                                onClick={() => onFileRemove(fileName, index)}
                                            >
                                                <RemoveIcon />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="icons">
                            <ul>
                                <li onClick={openFileInput}>
                                    <AttachIcon />
                                </li>
                                <li className={textAreaOptions.value.length > 0 && 'active-add'}>
                                    <SendIcon />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default ChatInput;
