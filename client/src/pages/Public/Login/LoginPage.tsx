import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../../redux/authActions';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css'
import Button from '@mui/material/Button';
import { RootState } from '../../../redux/indexReducer';

export default function Login() {

  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSignIn = async () => {
    const success = await (dispatch as any)(login(email, password))
    if (!success) {
      alert('Неверный логин или пароль')
    }

  }

  const handleLogOut = () => {
    (dispatch as any)(logout());
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, height:'100%'}}
      noValidate
      autoComplete="off"
    > {!isAuth ? (
      <div className='auth_box'>
        <TextField
          required
          id="standard-required"
          label="Логин"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" sx={{marginTop:'15px'}} onClick={handleSignIn} disabled={isLoading} >
        {isLoading ? 'Загрузка...' : 'Войти'}
          </Button>
      </div>
    ) : (
      <div>
          <Button onClick={handleLogOut}>Выйти</Button>
          
        </div>
    )}
    </Box>
  );
}
