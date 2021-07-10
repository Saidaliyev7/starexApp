import './chatInput.scss';

import { ReactComponent as AttachIcon } from 'assets/images/icons/attach.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/icons/remove.svg';
import { ReactComponent as SendIcon } from 'assets/images/icons/send.svg';
import { useUserInfo } from 'hooks';
import * as _ from 'lodash';
import { IApplicationMessage } from 'models';
import * as moment from 'moment';
import * as React from 'react';

const ChatInput: React.FC<{
    messages: IApplicationMessage[];
    canAnswer: boolean;
    onChange: (data: FormData) => void;
}> = React.memo(({ messages, onChange, canAnswer }) => {
    const fileInput = React.useRef();
    const [inputFiles, changeFiles] = React.useState<FileList | File[]>([]);
    const { user } = useUserInfo();
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
            rows: fileList.length > 0 ? 5 : 1,
            files: fileNames,
        }));
    };

    const onClick = () => {
        if (!textAreaOptions.value) {
            return;
        }

        const formData = new FormData();

        formData.append('body', textAreaOptions.value);

        if (inputFiles.length) {
            [...(inputFiles as Array<File>)].forEach((attachment) => {
                formData.append('attachments', attachment);
            });
        }

        onChange(formData);
    };

    const onFileChange = (event) => {
        const input = event.target as HTMLInputElement;
        changeFiles(input.files);
    };

    const openFileInput = () => {
        const input = fileInput.current as HTMLInputElement;
        input.click();
    };

    const onFileRemove = (fileName) => {
        const newFiles = Array.from(inputFiles).filter((file) => file.name !== fileName);
        changeFiles(newFiles);
    };
    return (
        <>
            <div className="chat-input-holder">
                <div className="top">
                    <div className="name">{user.full_name}</div>
                </div>
                <div className="bottom">
                    <div className="chat-content">
                        <ul>
                            {Object.entries(
                                _.groupBy(messages, (i) =>
                                    moment(i.created_at).format('DD.MM.YYYY'),
                                ),
                            ).map(([key, value], i) => (
                                <li key={i}>
                                    <div className="date">{key}</div>
                                    {value.map((message, i) => (
                                        <div className="message" key={i}>
                                            <div className="text">{message.body}</div>
                                            <div className="time">
                                                {moment(message.created_at).format('HH:mm')}
                                            </div>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {canAnswer && (
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
                            {textAreaOptions.files && textAreaOptions.files.length > 0 && (
                                <div className="files">
                                    <ul>
                                        {textAreaOptions.files.map((fileName, index) => (
                                            <li key={index}>
                                                {fileName}
                                                <div
                                                    className="remove-icon"
                                                    onClick={() => onFileRemove(fileName)}
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
                                    <li
                                        onClick={onClick}
                                        className={textAreaOptions.value.length > 0 && 'active-add'}
                                    >
                                        <SendIcon />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
});

ChatInput.displayName = 'Application Chat Form';

export default ChatInput;
