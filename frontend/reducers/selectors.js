export const selectAllPokemon = (state) => { //state.pokemon
  const pokes = state.entities.pokemon;
  return Object.values(pokes);
}