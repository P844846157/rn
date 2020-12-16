import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeStackScreen from './home.navagation';
import AuthStackScreen from './auth.navigation';
import MineStackScreen from './mine.navagation';
import {WelcomeScreen} from '@/screens/welcome';
import {
  authReducer,
  authState,
  RESTORE_USER_INFO,
  SIGN_IN,
  SIGN_OUT,
} from '@/reducer/auth.reducer';
import {AuthContext} from '@/provider/auth.provider';

export type AppNavigatorParams = {
  BottomTab: undefined;
  HomeLayout: undefined;
  MineLayout: undefined;
  AuthLayout: undefined;
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [state, dispatch] = useReducer(authReducer, authState);
  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        global.stroage.save({
          key: 'userInfo',
          data,
          expires: null,
        });
        dispatch({type: SIGN_IN, data});
      },
      signOut: () => {
        global.stroage.remove({key: 'userInfo'});
        dispatch({type: SIGN_OUT});
      },
      signUp: async (data: any) => {
        global.stroage.save({
          key: 'userInfo',
          data,
          expires: null,
        });
        dispatch({type: SIGN_IN, data});
      },
      userInfo: state.userInfo,
    }),
    [],
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userInfo;
      try {
        userInfo = await global.stroage.load({key: 'userInfo'});
        dispatch({type: RESTORE_USER_INFO, data: userInfo});
      } catch (e) {
        dispatch({type: RESTORE_USER_INFO});
        // Restoring token failed
      }
    };
    bootstrapAsync();
  }, []);

  const screenRender = () => {
    if (state?.isLoading) {
      return (
        <>
          <Stack.Screen
            name="Welcome"
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
            component={WelcomeScreen}></Stack.Screen>
        </>
      );
    } else {
      return state.userInfo?.phone ? (
        <>
          <Stack.Screen
            name="HomeLayout"
            component={HomeStackScreen}></Stack.Screen>
          <Stack.Screen
            name="MineLayout"
            component={MineStackScreen}></Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen
            name="AuthLayout"
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
            component={AuthStackScreen}></Stack.Screen>
        </>
      );
    }
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          headerMode="none"
          // mode="card"
          screenOptions={{
            cardStyle: {},
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          {/* <Stack.Screen
          name="BottomTab"
          component={materialBottomTabScreen}></Stack.Screen> */}
          {screenRender()}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default AppNavigation;
