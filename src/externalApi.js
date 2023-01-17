import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'



const ExternalApi = () => {
    const [message, setMessage] = useState('')
    //const url = process.env.REACT_APP_SERVER_URL

    const { getAccessTokenSilently } = useAuth0()

    const callApi = async () => {
        try {
            const response = await fetch("http://localhost:4000/publica")
            const responseData = await response.json()
            setMessage(responseData.msg)
        } catch (error) {
            setMessage(error.msg)
        }
    }

    const callSecureApi = async () => {
        try {
            const token = await getAccessTokenSilently()
            //console.log('token'+ token);
            const response = await fetch("http://localhost:4000/privada", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const responseData = await response.json()
            console.log(responseData);
            setMessage(responseData.msg)
        } catch (error) {
            setMessage('logueate')
            
        }
    }
    return (
        <>
        <p>{message}</p>
            <button onClick={callApi}>Llamada pública</button>
            <button onClick={callSecureApi}>Llamada privada</button>
        </>
    )
}

export default ExternalApi