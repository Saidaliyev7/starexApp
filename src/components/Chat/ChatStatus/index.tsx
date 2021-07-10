import './chatStatus.scss';

import Button, { EButtonSize } from 'components/Button';
import { IApplication } from 'models';
import * as moment from 'moment';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes/consts';
// import { useApplicationCategories } from 'views/Applications/hooks';

const ChatStatus: React.FC<{ application: IApplication }> = React.memo(({ application }) => {
    // const { categories } = useApplicationCategories();
    const { push } = useHistory();
    return (
        <>
            <div className="chat-status-holder">
                <div className="title">
                    {/* {categories.categories.find((x) => x.id === application.problem_category).title}{' '} */}
                    -{' '}
                    {/* {
                        Object.entries(
                            categories.countries.find(
                                (x) => Object.keys(x)?.[0] === application.problem_country,
                            ),
                        )?.[0]?.[1]
                    } */}
                    N/A
                </div>
                <div className="status">
                    <div className="top">Status</div>
                    <div className="text">{application.status}</div>
                </div>
                <div className="status">
                    <div className="top">Tarix</div>
                    <div className="text">
                        {moment(application.created_at).format('DD.MM.YYYY')}
                    </div>
                </div>
                {application.can_answer ? (
                    <div className="btn-holder">
                        <button>Həll oldu</button>
                    </div>
                ) : (
                    <Button
                        style={{ width: '100%' }}
                        size={EButtonSize.LG}
                        onClick={() =>
                            push(ROUTES.SATISFACTION.replace(':id', application.id.toString()))
                        }
                    >
                        Dəyərləndir
                    </Button>
                )}
            </div>
        </>
    );
});

ChatStatus.displayName = 'Application Chat Status';

export default ChatStatus;
