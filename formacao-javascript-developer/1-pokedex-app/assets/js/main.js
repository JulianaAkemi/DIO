const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const detailsSection = document.getElementById("detailsSection");
const pokemonDetails = document.getElementById("pokemonDetails");
const goBackButton = document.getElementById("goBackButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}" onclick="openDetails(${
    pokemon.number
  })">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>

            <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>
    `;
}

function convertDetailsToHtml(pokemon) {
  const stats = {};
  pokemon.stats.forEach((stat) => {
    stats[stat.stat.name] = stat.base_stat;
  });

  return `
          <div class="pokemon">
              <span class="name">${pokemon.name}</span>
              <span class="number">#${pokemon.id}</span>
          </div>

          <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map(
                      (type) =>
                        `<li class="type ${type.type.name}">${type.type.name}</li>`
                    )
                    .join("")}
              </ol>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                pokemon.id
              }.svg">
          </div>

          <div class="details">
              <p class="detailsTitle">Atributos Básicos</p>

              <ol class="statsDetail">
                  <li>HP: ${stats.hp}</li>
                  <li>Ataque: ${stats.attack}</li>
                  <li>Defesa: ${stats.defense}</li>
                  <li>Ataque Especial: ${stats["special-attack"]}</li>
                  <li>Defesa Especial: ${stats["special-defense"]}</li>
                  <li>Velocidade: ${stats.speed}</li>
              </ol>
          </div>`;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

async function openDetails(pokemonId) {
  detailsSection.classList.remove("hidden");

  if (!pokemonId) return;

  let pokemon = await pokeApi.getPokemonInfo(pokemonId);
  pokemonDetails.innerHTML = convertDetailsToHtml(pokemon);
}

goBackButton.addEventListener("click", () => {
  detailsSection.classList.add("hidden");
  pokemonDetails.innerHTML = "";
});
