import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Extract the authorization code from the URL query parameters
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'date, content-length, set-cookie, set-cookie, set-cookie, x-set-wdctx, cache-control, access-control-allow-headers, pragma, allow, www-authenticate, access-control-allow-origin, vary, access-control-allow-credentials, access-control-allow-methods, age, content-security-policy, x-content-type-options, grace, x-xss-protection, x-frame-options, strict-transport-security, accept-ch',
                'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
            },
        };
        if (code) {
            // Exchange the authorization code for an access token
            const clientId = '2fb65c08b5654bdb991d994119661606';
            const clientSecret = 'R9MySlqvqr40CngPQeJbejCr2cay4ylSHFgIPN0mM9ivK4QQBEW03VMjogh6eD0A';
            const redirectUri = 'https://react-allegro.vercel.app/callback';

            axios
                .post('https://allegro.pl/auth/oauth/token', {
                    grant_type: 'authorization_code',
                    client_id: clientId,
                    client_secret: clientSecret,
                    redirect_uri: redirectUri,
                    code: code,
                }, config)
                .then((response) => {
                    console.log(response.data);
                    // Assuming you have obtained the accessToken as shown in your code
                    const accessToken = response.data.access_token;

                    // Save the accessToken to localStorage
                    localStorage.setItem('accessToken', accessToken);

                    // Store the access token securely (e.g., in localStorage or a state management library)
                    // Redirect to your application's main page
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error exchanging code for access token:', error);
                    // Handle error and redirect to an error page if needed
                });
        }
    }, [location, navigate]);

    return (
        <div>
            <p>Processing OAuth callback...</p>
        </div>
    );
};

export default Callback;
