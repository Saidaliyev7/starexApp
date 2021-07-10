import { APIDataRender } from 'components/APIDataRender';
import Chat from 'components/Chat';
import { FullScreenLoading } from 'components/FullLoading';
import { useAPIData } from 'hooks';
import { IApplication } from 'models';
import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ROUTES } from 'routes/consts';
import { applicationService } from 'services/application';

const ApplicationChat: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { push } = useHistory();
    const [application, changeApplication] = useAPIData<IApplication>();

    React.useEffect(() => {
        changeApplication(() => applicationService.getTicket(id)).catch(() =>
            push(ROUTES.APPLICATIONS),
        );
    }, []);

    const handleChange = (data: FormData) => {
        applicationService.sendMessage(id, data);
    };

    return (
        <APIDataRender
            branch={application}
            deps={[]}
            successRender={(data) => <Chat application={data} onChange={handleChange} />}
            pendingRender={() => <FullScreenLoading isLoading={true} />}
        />
    );
};

export default ApplicationChat;
