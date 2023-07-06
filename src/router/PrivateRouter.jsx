import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import TokenService from "../service/token.service";

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const user = TokenService.getUser() || false
    if (user?.tokens?.access) {
      return <Navigate to="/" state={{ from: location.pathname }} />;
    }return children
}

export default PrivateRouter