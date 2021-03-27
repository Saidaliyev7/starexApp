import { FullScreenLoading } from 'components/FullLoading';
import { useAPIData } from 'hooks';
import { httpClient } from 'httpClient';
import { IUser } from 'models';
import * as React from 'react';

export interface IUserInfoContext {
    user: IUser;
}

export const UserInfoContext = React.createContext<IUserInfoContext>({ user: null });

UserInfoContext.displayName = 'Current User Information';

export const UserInfoProvider: React.FC = ({ children }) => {
    const [userInfo, changeUserInfo] = useAPIData<IUser>();

    React.useEffect(() => {
        changeUserInfo(() => httpClient.get('v1/user/'));
    }, []);

    return (
        <FullScreenLoading isLoading={userInfo.status === 'PENDING' || userInfo.status === 'IDLE'}>
            <UserInfoContext.Provider value={{ user: userInfo.data }}>
                {children}
            </UserInfoContext.Provider>
        </FullScreenLoading>
    );
};
