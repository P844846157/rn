
// 获取用户信息
export const getUserInfo = async (): Promise<any> => {
    return await global.stroage.load({ key: 'userInfo' });
}