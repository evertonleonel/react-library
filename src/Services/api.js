export const API_URL = 'http://localhost:5000';

export function GET_LOGS(body) {
    return {
        url: API_URL + '/login',
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
}

export function GET_BOOKS(body) {
    return {
        url: API_URL + '/books',
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
}

export function LIVRO_GET(id) {
    return {
        url: `${API_URL}/books/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        },
    };
}

export function BOOKS_POST(body) {
    return {
        url: API_URL + '/books/',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function RENT_POST(livro, body) {
    return {
        url: API_URL + `/books/${livro.id}`,
        options: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function STATUS_POST(livro, body) {
    return {
        url: API_URL + `/books/${livro.id}`,
        options: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export const getUser = () => {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : {};
};

export const converterEmBase64 = (raw) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(raw);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export function validarData(dataRetirada, dataEntrega) {
    const dataTirar = dataRetirada.value.split('-').reverse();
    const dataEntregue = dataEntrega.value.split('-').reverse();

    const dataRetirar = new Date(
        dataTirar[2],
        dataTirar[1] - 1,
        dataTirar[0]
    ).getTime();

    const dataEntregar = new Date(
        dataEntregue[2],
        dataEntregue[1] - 1,
        dataEntregue[0]
    ).getTime();

    const dataAtual = new Date().getTime();

    if (!dataRetirar) return alert('Informe a data de Retirada');
    if (!dataEntregar) return alert('Informe a data de Entrega');
    if (dataRetirar > dataAtual) {
        return alert('Data de retirada não pode ser maior que a data atual');
    }

    if (dataEntregar < dataAtual)
        return alert(
            'Data de Entrega não pode ser menor ou igual a data atual '
        );
    return true;
}
