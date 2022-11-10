export const API_URL = 'http://localhost:5000';
export const BOOKS_KEY = '@BOOKS';

export function GET_LOGS(body){
  return {
    url: API_URL + '/login',
    options: {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    }
  }
}

export function GET_BOOKS(body){
  return {
    url: API_URL + '/books',
    options: {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    }
  }
}


export const getBooks = () => {
  const data = localStorage.getItem(BOOKS_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveBooks = (data) => {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(data));
};