import { signIn } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import { User } from "@/types/login";

const useHandleSignIn = async (provider: string) => {
  if (provider !== "credentials") {
      await signIn(provider, { callbackUrl: '/mission/createMission' }, { prompt: 'login' });
  } else {
    let user: User;
  
    if (typeof window !== "undefined") {
      const guestUserInLocalStorage = localStorage.getItem('guestUser');
      const guestUserData = guestUserInLocalStorage ? JSON.parse(guestUserInLocalStorage) : null;
      
      if (guestUserData) {
        user = {
          id: guestUserData.id,
          name: guestUserData.name,
          email: guestUserData.email,
        }
      } else {
        user = {
          id: uuidv4(),
          name: 'ゲストユーザー',
          email: `${uuidv4()}@guest.com`,
        };
        localStorage.setItem('guestUser', JSON.stringify(user));
      }
    } else {
      // userの未初期化エラー防止
      user = {
        id: uuidv4(),
        name: 'ゲストユーザー',
        email: `${uuidv4()}@guest.com`,
      };
    };
  
    await signIn(provider, {
      callbackUrl: '/mission/createMission',
      id: user.id,
      username: user.name,
      email: user.email
    });
  }
};

export default useHandleSignIn;