import React, { createContext, useState, useEffect } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (userToken !== null) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': '__cfduid=df9b865983bd04a5de2cf5017994bbbc71618565720',
          'Authorization': `Bearer ${userToken}`,
        },
      };
      fetch('https://testa2.aisle.co/V1/users/test_profile_list', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUserDetails(data);
        }).catch((err) => {
          console.log(err);
        })
    }
  }, [userToken]);

  return (
    <UserDataContext.Provider value={{ userDetails, setUserDetails, userToken, setUserToken }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

