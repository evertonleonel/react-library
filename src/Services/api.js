export const API_URL = 'http://localhost:5000';

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

export function BOOKS_POST (formData, body){
  return {
    url: API_URL + '/books',
    options: {
      method: 'POST',
      headers: {
        
      },
      body: formData,
    }
  }
}

export const getUser = () => {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : {};
};
