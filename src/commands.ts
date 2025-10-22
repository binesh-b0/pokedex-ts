import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";

import type { CLICommand } from "./state.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,
    },
    explore: {
        name:"explore <location>",
        description:"List all the pokemon in a given area",
        callback:commandExplore,
    },
    catch: {
      name:"catch <pokemon>",
      description:"Catch a pokemon",
      callback:commandCatch,
    },
    inspect:{
      name:"inspect <pokemon name>",
      description:"View details of seen pokemon",
      callback:commandInspect
    },
    pokedex:{
      name:"pokedex",
      description:"View all caught pokemon",
      callback:commandPokedex,
    }
  };
}
