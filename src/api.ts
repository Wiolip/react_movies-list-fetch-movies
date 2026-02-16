import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '4d729f71';

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  const url = `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(query.trim())}`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    })
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
