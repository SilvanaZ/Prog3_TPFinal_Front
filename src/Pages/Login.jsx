import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Store";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const setToken = useAuthStore((state) => state.setToken);

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
    } catch (error) {
        setError('Credenciales incorrectas. Intenta de nuevo.');
        console.error('Error al iniciar sesión:', error);
    }
    };

    return (
    <Container maxWidth="xs">
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
        }}
        >
        <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" onSubmit={handleLogin} sx={{mt: 1}}>
        <TextField
        margin="normal"
        required
        fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}>
            Ingresar
            </Button>
        </Box>
    </Box>
</Container>
    );
};

export default LoginPage;
