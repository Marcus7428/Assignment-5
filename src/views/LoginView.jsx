function LoginView() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default LoginView;