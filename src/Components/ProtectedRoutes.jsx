import { Navigate } from "react-router-dom";

export function ProtectedRoutest({children, user}) {
    if (user) {
        return children
    } else {
        return <Navigate to="/login"/>
    }
}