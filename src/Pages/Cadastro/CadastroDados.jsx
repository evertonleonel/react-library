import React from 'react';
import TextArea from '../../Components/Forms/TextArea';
import { InputGeral } from '../../Components/Forms/FormStyles';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { BOOKS_POST } from '../../Services/api';
import { CadastroContainer, InputContainer, NovoLivro } from './CadastroStyles';
import CadastroBotoes from './CadastroBotoes';
import { converterEmBase64 } from '../../Services/api';
import { v4 as uuidv4 } from 'uuid';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import { ImgCapa } from './CadastroStyles';
import Adicionar from '../../Assets/adicionar.svg';
import { useNavigate } from 'react-router-dom';
import Options from '../../Components/Filtro/Options';
import { SelectionFiltro } from '../Cadastro/CadastroStyles';
import InputPadrao from '../../Components/Forms/InputPadrão';

const CadastroDados = () => {
    const navigate = useNavigate();
    const titulo = useForm();
    const autor = useForm();
    const sinopse = useForm();
    const dataEntrada = useForm();
    const [img, setImg] = React.useState('');
    const [selectFiltro, setSelectFiltro] = React.useState('');
    const { request } = useFetch();

    function formatarData(dataAtual) {
        let formatarData = dataAtual.value;
        return formatarData.split('-').reverse().join('/');
    }

    function filtroChange(event) {
        const { value } = event.target;
        setSelectFiltro(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!img) return alert('Escolha uma imagem');

        const novoLivro = {
            id: uuidv4(),
            tittle: titulo.value,
            author: autor.value,
            genre: selectFiltro,
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
        navigate('/biblioteca');
    }

    async function handleImgChange({ target }) {
        const raw = target.files[0];
        const baseImg = await converterEmBase64(raw);
        setImg(baseImg);
    }

    return (
        <CadastroContainer>
            <LinkVoltar pagina="Cadastrar novo livro" />
            <NovoLivro onSubmit={handleSubmit}>
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
                                <img src={Adicionar} />
                                Capa
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
                                {...titulo}
                            />

                            <TextArea
                                label={'Sinopse'}
                                name={sinopse}
                                required
                                className="sinopse"
                                {...sinopse}
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
                                {...autor}
                            />
                            <SelectionFiltro
                                className="genero"
                                onChange={filtroChange}
                            >
                                <Options disabled item="Gênero" />
                                <Options value="Fantasia" item="Fantasia" />
                                <Options
                                    value="Ação e Aventura"
                                    item="Ação e Aventura"
                                />
                                <Options value="Horror" item="Horror" />
                                <Options value="Romance" item="Romance" />
                            </SelectionFiltro>

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
        </CadastroContainer>
    );
};

export default CadastroDados;
