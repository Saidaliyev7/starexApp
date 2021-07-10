import { APIDataRender } from 'components/APIDataRender';
import { FullScreenLoading } from 'components/FullLoading';
import { useAPIData } from 'hooks';
import { IApplicationCategories } from 'models';
import * as React from 'react';
import { applicationService } from 'services/application';

interface IApplicationCategoriesContext {
    categories: IApplicationCategories;
}

export const ApplicationCategoriesContext = React.createContext<IApplicationCategoriesContext>({
    categories: null,
});

export const ApplicationCategoriesProvider: React.FC = ({ children }) => {
    const [applicationCategories, changeApplicationCategories] = useAPIData<
        IApplicationCategories
    >();

    React.useEffect(() => {
        changeApplicationCategories(() => applicationService.getTicketCategories());
    }, []);

    return (
        <APIDataRender
            branch={applicationCategories}
            deps={[]}
            successRender={(data) => (
                <ApplicationCategoriesContext.Provider value={{ categories: data }}>
                    {children}
                </ApplicationCategoriesContext.Provider>
            )}
            pendingRender={() => <FullScreenLoading isLoading={true} />}
        />
    );
};
