import React from 'react'
import { useLocation } from "react-router-dom"

function NotFound() {
    let location = useLocation();

    return (
        <div>
            <p>{location.pathname}</p>
        </div>
    )
}

export default NotFound
