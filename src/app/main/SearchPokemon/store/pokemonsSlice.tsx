import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from './types';

// const adapter = createEntityAdapter<Pokemon>({
//   selectId: (item) => item.name,
// });

// export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.pokemon);

export const fetchPokemon = createAsyncThunk(
  'GET/Pokemon',
  async ({ value }: { value: string | number }, { dispatch }) => {
    const { data, status } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
    if (status === 200) {
      return data;
    }
    throw new Error('Pokemon invalido');
  }
);

const initialState: Pokemon = {
  name: 'Pikachu',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers({ addCase }) {
    addCase(fetchPokemon.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

// export const { } = examplesSlice.actions;
export default pokemonSlice.reducer;
