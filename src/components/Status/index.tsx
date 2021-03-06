import './status.scss';

import * as React from 'react';

interface Status {
    isActive: boolean;
    name: string;
    date: string;
}
const statuses: Status[] = [
    {
        isActive: true,
        name: 'Kuryer sifarişi yaradıldı',
        date: '10.07.2020',
    },
    {
        isActive: true,
        name: 'Hazırlanır',
        date: '10.07.2020',
    },
    {
        isActive: true,
        name: 'Bağlama kuryerə təhvil verildi',
        date: '10.07.2020',
    },
    {
        isActive: false,
        name: 'Kuryer bağlamanı təhvil verdi',
        date: '',
    },
];
const Status: React.FC = () => {
    const [allStatus, changeStatus] = React.useState<Status[]>(statuses);
    return (
        <>
            <div className="status-holder">
                <div className="status">
                    <div className="close">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M10.3312 9.01459L17.6817 1.48784C18.0289 1.13776 18.0289 0.612642 17.6817 0.262561C17.3344 -0.0875203 16.8135 -0.0875203 16.4662 0.262561L9.11576 7.7893L1.47588 0.262561C1.12862 -0.0875203 0.607717 -0.0875203 0.26045 0.262561C-0.0868167 0.612642 -0.0868167 1.13776 0.26045 1.48784L7.90032 9.01459L0.26045 16.5413C-0.0868167 16.8914 -0.0868167 17.4165 0.26045 17.7666C0.434084 17.9417 0.665595 18 0.897106 18C1.12862 18 1.36013 17.9417 1.53376 17.7666L9.17363 10.2399L16.5241 17.7666C16.6977 17.9417 16.9293 18 17.1608 18C17.3923 18 17.6238 17.9417 17.7395 17.7666C18.0868 17.4165 18.0868 16.8914 17.7395 16.5413L10.3312 9.01459Z"
                                    fill="#002240"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="status-list">
                        <ul>
                            {allStatus.map((status) => (
                                <li key={status.name}  className={
                                    status.isActive ? 'active' : ''
                                }>
                                    <div
                                        className={
                                            status.isActive ? 'left-side active' : 'left-side'
                                        }
                                    >
                                        <div className="ball"></div>
                                    </div>
                                    <div className="text">{status.name}</div>
                                    <div className="date">{status.date}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Status;
