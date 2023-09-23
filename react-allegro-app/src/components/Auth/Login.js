import React from 'react';

const Login = () => {
    const handleLoginWithAllegro = () => {
        // Redirect the user to Allegro.pl authorization page
        const clientId = '2fb65c08b5654bdb991d994119661606';
        const redirectUri = 'https://react-allegro.vercel.app/callback';
        const authUrl = `https://allegro.pl/auth/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

        window.location.href = authUrl;
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLoginWithAllegro}>Login with Allegro</button>
        </div>
    );
};

export default Login;
