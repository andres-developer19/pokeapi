import Index from "./components/pokeapi/Index"

/*const fetchPoke = () => {
   const maxPoke = 21;
  const api = 'https://pokeapi.co/api/v2/pokemon'

  return fetch(`${api}/?limit=${maxPoke}`) */
 /* return fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then(res => res.json())
   datos = data.results 
  

  data.forEach((item, i) => {
      item.id = i + 1;
  })

}*/

export default async function Home() {

  return (
    <>
    <div>index</div>
    <Index/>
    </>
  )
}
