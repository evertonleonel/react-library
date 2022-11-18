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

export function BOOKS_POST (body){
  return {
    url: API_URL + '/books/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(body),
    }
  }
}

export const getUser = () => {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : {};
};

export const converterEmBase64 = (raw) => {
  return new Promise( (resolve, reject) => {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(raw)
    fileReader.onload = () => {
      resolve(fileReader.result)
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};