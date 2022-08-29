import { Button, Snackbar, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CreateAccount from 'app/services/recadosAPI';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

export default function LoginRecados() {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<String>('');
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleSubmit() {
    const data = {
      name: user,
      pass: password,
      Rpass: confirmPassword,
    };
    const resposta = await CreateAccount(data);

    if ((resposta as AxiosResponse).status === 201) {
      setMessage((resposta as AxiosResponse).data.data);
      setOpen(true);
    } else {
      setMessage((resposta as any).response.data.error);
      setOpen(true);
    }
  }

  return (
    <>
      <Box display="flex" flexDirection="column" margin="160px 500px" gap="40px">
        <Typography variant="h3" textAlign="center">
          Criar Usuario
        </Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          label="Confirme a Senha"
          variant="outlined"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Criar Usuario
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} message={message} />
    </>
  );
}
