
import React, {
  createContext,
  useState,
  useEffect,
  useContext
} from 'react';

const USER_STORAGE_KEY = 'user';


const initialUser = { name: 'Adnan Borshon', coins: 2000 };

const CoinContext = createContext({
  user: initialUser,

});

export function useCoin() {
  return useContext(CoinContext);
}
export function CoinProvider({ children }) {
 
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialUser;
    } catch {
      return initialUser;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch {
   console.error('Failed to save user to localStorage');
    }
  }, [user]);


  
  const addCoins = (amount) => {
    
    setUser((u)=> ({ ...u,coins: u.coins + (+amount) }));
  };

  const removeCoins = (amount) => {
    if(user.coins >= amount){
    setUser((u) => ({ ...u, coins: u.coins - (+amount)})) 
    }
 
  };

 
  return (
    <CoinContext.Provider value={{ user, addCoins, removeCoins }}>
      {children}
    </CoinContext.Provider>
  );
}
