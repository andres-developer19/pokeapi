

const fetchPoke = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
    const data = await response.json()
    console.log(data)
    return data.results
}

export default async function Index() {
    const pokemons = await fetchPoke()

    return (
        <div>
        {pokemons.map((pokemon) => (
            <article key={pokemon.id}>
                <h3>{pokemon.id}-{pokemon.name}</h3>
            </article>
        ))}
    </div>
    )
}

