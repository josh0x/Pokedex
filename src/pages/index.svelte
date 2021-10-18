<script>
  // import { goto } from "@roxi/routify";
  import { random } from "lodash";
  import { addPokemonToStore } from "../components/Pokemon.svelte";
  import { getPokemonById } from "../services";
  // import { Autocomplete, Button, Loading, ListItem } from "../components";
  // import { user } from "../components/Auth.svelte";

  let isLoading = false;
  let list = [];
  // let _user;

  // user.subscribe((v) => (_user = v));
  const getRandomPokemons = async () => {
    list = new Array();
    isLoading = true;
    for (let i = 0; i < 5; i++) {
      let randomId = random(0, 806);
      await getPokemonById(randomId)
        .then((pokemon) => {
          console.log(pokemon);
          list.push({ id: randomId, ...pokemon });
          addPokemonToStore(pokemon);
        })
        .catch((err) => {
          console.log(err);
    });
  }
    // isLoading = false;
  };
  // const goToPokemon = function (id) {
  //   $goto(`/pokemon/${id}`);
  // };
  getRandomPokemons();
</script>

<main>
  <p>index</p>
</main> 

