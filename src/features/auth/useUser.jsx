import { useContext } from "react";
import { UserContext } from "./UserProvider";

import React from 'react'

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
