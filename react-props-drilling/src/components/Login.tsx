import User from 'types/User';

interface LoginProps {
    User: User | null;
    setUser: (user: any) => void;
    }

function Login({ User, setUser }: LoginProps) {
    const handleLogin = () => {
            const userData = {
                    id: 1,
                    name: 'Aphisorn Suwanno',
                    email: 'aphisorn2003@gmail.com'
            };
            setUser(userData);
            if (!User) {
                return <></>
            }
}
return (    
<button onClick = {handleLogin}>เข้าสู่ระบบ</button>
)
}
export default Login