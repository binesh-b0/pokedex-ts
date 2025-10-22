import { State } from "./state";

export async function commandInspect(state:State,...args:string[]) {
    if(args.length!=1){
        console.log("Provide pokemon name");
    }
    if(!(args[0] in state.caughtPokemon)){
        console.log("you have not caught that pokemon");
        return;
    }
    const pokemon = await state.pokeAPI.fetchPokemon(args[0]);
    console.log("Name:",pokemon.name);
    console.log("Height:",pokemon.height);
    console.log("Weight:",pokemon.weight);
    console.log("Stats: ");
    for(const stat of pokemon.stats){
        console.log(` - ${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log("Types: ");
    for(const type of pokemon.types){
        console.log(` - ${type.type.name}`);
    }

}