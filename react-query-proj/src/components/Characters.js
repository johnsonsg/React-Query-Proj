import React from 'react';
import { useQuery } from 'react-query';

export default function Characters() {
  // const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    // const data = await response.json();
    // console.log(data);
    // setCharacters(data.results);
    return response.json();
  };

  // useEffect(() => {
  //   fetchCharacters();
  // }, [])

  const {data, status} = useQuery('characters', fetchCharacters);
  console.log(data);

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error</div>
  }

  return (
    <div>
    {/* {characters?.map((character, index) => (
      // eslint-disable-next-line react/jsx-key
      <div key={index}>{character.name}</div>
    ))} */}

      {data.results.map((character, index) => (
        <div key={index}>{character.name}</div>
      ))}
    </div>
  );
}
