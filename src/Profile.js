import React, {  useState } from "react";
import {useAuth0} from '@auth0/auth0-react';

export const Profile = () => {
    const { user, isAuthenticated, isLoading,  } = useAuth0();
    const [userMetadata, ] = useState(null);

    if (isLoading) {
        return <div>Loading...</div>
    }
    //si no
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            ) : (
            "No user metadata defined"
            )}
            </div>
        )
    )
}