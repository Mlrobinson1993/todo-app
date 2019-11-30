import React, { createContext } from 'react';

const userContext = createContext({ user: {} }); //create context object for user details

//export context for use by other components
export { userContext };
