import React from 'react';

import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { BOOKS_POST, EDIT_LIVRO_POST } from '../../Services/api';
import { converterEmBase64 } from '../../Services/api';
import { v4 as uuidv4 } from 'uuid';
import {
    EditarContainer,
    EditarLivro,
    EditTextArea,
    ImgCapa,
    InputContainer,
    SelectionFiltro,
} from './EditarStyles';
import { useNavigate } from 'react-router-dom';
import EditarBotoes from './EditarBotoes';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import Adicionar from '../../Assets/adicionar.svg';
import { InputGeral } from '../../Components/Forms/FormStyles';
import Options from '../../Components/Filtro/Options';
import InputPadrao from '../../Components/Forms/InputPadrão';
import TextArea from '../../Components/Forms/TextArea';

const EditarDados = () => {
    const navigate = useNavigate();
    const { request } = useFetch();
    const [img, setImg] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const [autor, setAutor] = React.useState('');
    const [genero, setGenero] = React.useState('');
    const [sinopse, setSinopse] = React.useState('');
    const [dataEntrada, setDataEntrada] = React.useState('');
    const [livroSelecionado, setLivroSelecionado] = React.useState(() => {
        const livroAtual = localStorage.getItem(
            '@livroSelecionado:livroSelecionado'
        );
        return livroAtual ? JSON.parse(livroAtual) : {};
    });

    function formatarData(dataAtual) {
        let formatarData = dataAtual;
        return formatarData.split('-').reverse().join('/');
    }

    function formatarDataParaInput(dataAtual) {
        let formatarData = dataAtual;
        return formatarData.split('/').reverse().join('-');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!img) alert('Usar a mesma imagem?');

        const editarLivro = {
            id: uuidv4(),
            tittle: titulo ? titulo : livroSelecionado.tittle,
            author: autor ? autor : livroSelecionado.author,
            genre: genero ? genero : livroSelecionado.genero,
            status: {
                isActive: true,
                description: '',
            },
            image: img ? img : livroSelecionado.image,
            systemEntryDate: dataEntrada
                ? formatarData(dataEntrada)
                : formatarData(livroSelecionado.systemEntryDate),
            synopsis: sinopse ? sinopse : livroSelecionado.synopsis,
            rentHistory: livroSelecionado.rentHistory
                ? livroSelecionado.rentHistory
                : [],
        };

        const { url, options } = EDIT_LIVRO_POST(livroSelecionado, editarLivro);
        request(url, options);

        navigate('/biblioteca');
        alert('Livro Editado com sucesso');
    }

    async function handleImgChange({ target }) {
        const raw = target.files[0];
        const baseImg = await converterEmBase64(raw);
        setImg(baseImg);
    }

    function filtroChange(event) {
        const { value } = event.target;
        setGenero(value);
    }

    return (
        <EditarContainer>
            <LinkVoltar pagina="Editar livro" />
            <EditarLivro onSubmit={handleSubmit}>
                <div>
                    <ImgCapa tabIndex="0">
                        {img ? (
                            <img
                                src={img}
                                width={180}
                                height={206}
                                className="escolher-imagem"
                            />
                        ) : (
                            <span>
                                {' '}
                                <img
                                    src={livroSelecionado.image}
                                    width={180}
                                    height={206}
                                />
                            </span>
                        )}

                        <input
                            accept="/image/*"
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImgChange}
                            hidden
                        />
                    </ImgCapa>
                </div>
                <div>
                    <InputContainer>
                        <div style={{ maxWidth: '350px', width: '100%' }}>
                            <InputPadrao
                                required
                                label={'Título'}
                                name={titulo}
                                className="titulo"
                                type="text"
                                defaultValue={livroSelecionado.tittle}
                                onChange={(event) =>
                                    setTitulo(event.target.value)
                                }
                            />

                            <TextArea
                                required
                                label={'Sinopse'}
                                name={sinopse}
                                className="sinopse"
                                defaultValue={livroSelecionado.synopsis}
                                onChange={(event) =>
                                    setSinopse(event.target.value)
                                }
                            />
                        </div>
                        <div
                            className="inputsDireito"
                            style={{ maxWidth: '350px' }}
                        >
                            <InputPadrao
                                required
                                label={'Autor'}
                                name={autor}
                                className="autor"
                                type="text"
                                defaultValue={livroSelecionado.author}
                                onChange={(event) =>
                                    setAutor(event.target.value)
                                }
                            />

                            <SelectionFiltro
                                className="genero"
                                onChange={filtroChange}
                            >
                                <Options disabled item="Gênero" />

                                <Options
                                    defaultValue={livroSelecionado.genre}
                                    item="Fantasia"
                                />
                                <Options
                                    defaultValue={livroSelecionado.genre}
                                    item="Autoajuda"
                                />
                                <Options
                                    defaultValue={livroSelecionado.genre}
                                    item="Finanças"
                                />
                                <Options
                                    defaultValue={livroSelecionado.genre}
                                    item="Web Marketing"
                                />
                            </SelectionFiltro>

                            <InputGeral
                                required
                                className="dataEntrada"
                                type="date"
                                defaultValue={formatarDataParaInput(
                                    livroSelecionado.systemEntryDate
                                )}
                                onChange={(event) => {
                                    setDataEntrada(event.target.value);
                                }}
                            />
                        </div>
                    </InputContainer>
                    <EditarBotoes />
                </div>
            </EditarLivro>
        </EditarContainer>
    );
};

export default EditarDados;
