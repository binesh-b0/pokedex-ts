import { State } from "./state";

export async function commandPokedex(state:State,...args:string[]) {
    console.log("Your Pokedex:")
    for(const pokemonName in state.caughtPokemon){
        console.log(` - ${pokemonName}`);
    }
}