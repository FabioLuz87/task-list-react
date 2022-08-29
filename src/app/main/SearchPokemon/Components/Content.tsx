import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/store/hooks';
import { fetchPokemon } from '../store/pokemonsSlice';

export default function Content() {
  const [name, setName] = React.useState<string | number>('');
  const pokemonRedux = useSelector(({ pokemon }: RootState) => pokemon);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchPokemon({ value: name }));
  };

  useEffect(() => {
    console.log(pokemonRedux);
  }, [pokemonRedux]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Paper className="max-w-[50%] p-[20px] ">
        <TextField
          className="w-full"
          InputProps={{ className: 'rounded-b-none' }}
          id="outlined-name"
          label="Name or Id"
          value={name}
          onChange={handleChange}
        />
        <Button
          disabled={
            (typeof name === 'string' && !name.length) || (typeof name === 'number' && name > 0)
          }
          onClick={handleClick}
          className="w-full rounded-t-none"
          variant="contained"
        >
          Search
        </Button>
      </Paper>
      {pokemonRedux && (
        <Paper className="flex justify-center flex-col items-center max-w-[50%] p-[20px] ">
          <Typography>{pokemonRedux.name}</Typography>
          <Avatar alt={pokemonRedux.name} src={pokemonRedux.sprites.front_default} />
        </Paper>
      )}
    </>
  );
}
