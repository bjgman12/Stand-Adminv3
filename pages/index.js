import { useState } from 'react'
import CookieStandAdmin from '../components/admin';
import LoginForm from '../components/login';
import { getToken } from '../services/data-fetcher'


export default function Home() {

    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    async function loginHandler(values) {

        const fetchedToken = await getToken(values);

        setToken(fetchedToken);

        setUsername(values.username);
    }

    function logoutHandler() {
        setToken(null);
    }

    if (!token) return <LoginForm onSubmit={loginHandler}/>

    return <CookieStandAdmin token={token} onLogout={logoutHandler} username={username}/>
}
