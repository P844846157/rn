
export const RESTORE_USER_INFO = 'RESTORE_USER_INFO';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const authReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case RESTORE_USER_INFO:
            return {
                ...prevState,
                userInfo: action.data,
                isLoading: false,
            };
        case SIGN_IN:
            return {
                ...prevState,
                isSignout: false,
                userInfo: action.data,
            };
        case SIGN_OUT:
            return {
                ...prevState,
                isSignout: true,
                userInfo: {},
            };
    }
};

export interface AuthStateProps {
    isLoading: boolean;
    isSignout: boolean;
    userInfo: any
}

export const authState: AuthStateProps = {
    isLoading: true,
    isSignout: false,
    userInfo: {},
}