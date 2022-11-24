import React from 'react';
import TextArea from '../../Components/Forms/TextArea';
import { InputGeral } from '../../Components/Forms/FormStyles';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { BOOKS_POST } from '../../Services/api';
import { InputContainer, NovoLivro } from './CadastroStyles';
import CadastroImagem from './CadastroImagem';
import CadastroBotoes from './CadastroBotoes';
import { converterEmBase64 } from '../../Services/api';
import { v4 as uuidv4 } from 'uuid';

const CadastroDados = () => {
    const titulo = useForm();
    const autor = useForm();
    const genero = useForm();
    const sinopse = useForm();
    const dataEntrada = useForm();
    const [img, setImg] = React.useState('');
    const { request } = useFetch();

    function formatarData(dataAtual) {
        let formatarData = dataAtual.value;
        return formatarData.split('-').reverse().join('/');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!img) return alert('Escolha uma imagem');

        const novoLivro = {
            id: uuidv4(),
            tittle: titulo.value,
            author: autor.value,
            genre: genero.value,
            status: {
                isActive: true,
                description: '',
            },
            image: img,
            systemEntryDate: formatarData(dataEntrada),
            synopsis: sinopse.value,
            rentHistory: [],
        };

        const { url, options } = BOOKS_POST(novoLivro);
        request(url, options);

        alert('Livro cadastrado com sucesso');
    }

    async function handleImgChange({ target }) {
        const raw = target.files[0];
        const baseImg = await converterEmBase64(raw);
        setImg(baseImg);
    }

    return (
        <section>
            <NovoLivro onSubmit={handleSubmit}>
                <CadastroImagem
                    alt={titulo.value}
                    src={img}
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImgChange}
                />
                <div>
                    <InputContainer>
                        <div style={{ maxWidth: '350px' }}>
                            <InputGeral
                                required
                                className="titulo"
                                type="text"
                                placeholder="Título"
                                {...titulo}
                            />
                            <TextArea
                                required
                                className="sinopse"
                                placeholder="Sinopse"
                                {...sinopse}
                            />
                        </div>
                        <div style={{ maxWidth: '350px' }}>
                            <InputGeral
                                required
                                className="autor"
                                type="text"
                                placeholder="Autor"
                                {...autor}
                            />
                            <InputGeral
                                required
                                className="genero"
                                type="text"
                                placeholder="Gênero"
                                {...genero}
                            />
                            <InputGeral
                                required
                                className="dataEntrada"
                                type="date"
                                {...dataEntrada}
                            />
                        </div>
                    </InputContainer>
                    <CadastroBotoes />
                </div>
            </NovoLivro>
        </section>
    );
};

export default CadastroDados;
