import React from 'react';
import Button from '../../../Components/Forms/Button';
import {
    ContainerDireito,
    ContainerEsquerdo,
    ContainerPrincipal,
    ImagemLivro,
    Modal,
    ModalLivroContent,
} from './ModalLivro';
import IconeLivro from '../../../Assets/icone_livro.png';
import ModalBotoes from './ModalBotoes';
import ModalInfo from './ModalInfo';
import FecharModal from '../../../Assets/x-fechar.png';
import ModalExtra from './ModalExtra';
import ModalExtraInativar from './ModalExtraInativar';
import ModalEmprestarLivro from '../../../Components/Modais/ModalEmprestar/ModalEmprestarLivro';
import { RENT_POST, STATUS_POST } from '../../../Services/api';
import useFetch from '../../../Hooks/useFetch';
import ModalInativarLivro from '../../../Components/Modais/ModalInativar/ModalInativarLivro';
import ModalHistoricoAluno from '../../../Components/Modais/ModalHistorico/ModalHistoricoALuno';

const ModalLivros = ({ livroSelecionado, onClick }) => {
    const [livros, setLivros] = React.useState(null);
    const [modalLivro, setModalLivro] = React.useState(true);
    const [historicoLivro, setHistoricoLivro] = React.useState(null);
    const [statusLivro, setStatusLivro] = React.useState(null);
    const [modalEmprestar, setModalEmprestar] = React.useState(false);
    const [modalInativar, setModalInativar] = React.useState(false);
    const [modalHistoricoAluno, setModalHistoricoAluno] = React.useState(false);
    const [ultimaInativacao, setUltimaInativacao] = React.useState('');
    const [ultimoEmprestimo, setUltimoEmprestimo] = React.useState([]);

    const [devolvido, setDevolvido] = React.useState(false);
    const { request } = useFetch();

    function abrirModalInativar() {
        setModalInativar(true);
        setModalLivro(false);
    }

    function fecharModalInativar() {
        setModalInativar(false);
        setModalLivro(true);
        setStatusLivro(true);
    }

    function abrirModalEmprestar() {
        setModalEmprestar(true);
        setModalLivro(false);
    }

    function fecharModalEmprestar() {
        setModalEmprestar(false);
        setModalLivro(true);
    }

    function abriModalHistoricoALuno() {
        setModalHistoricoAluno(true);
        setModalLivro(false);
    }
    function FecharModalHistoricoALuno() {
        setModalHistoricoAluno(false);
        setModalLivro(true);
    }

    const fetchLivro = async () => {
        const response = await fetch(
            `http://localhost:5000/books/${livroSelecionado.id}`
        );
        const json = await response.json();
        setLivros(json);
        setHistoricoLivro(json.rentHistory);

        json.status.isActive ? setStatusLivro(false) : setStatusLivro(true);

        if (json.rentHistory.length > 0) {
            emprestar(json.rentHistory);
            let historico = json.rentHistory;
            setUltimoEmprestimo(historico[historico.length - 1]);
        }
    };

    React.useEffect(
        () => {
            fetchLivro();
        },
        [livroSelecionado.id],
        [historicoLivro],
        [statusLivro],
        [ultimaInativacao]
    );

    function emprestar(emprestismo) {
        let ultimaDatadoEmprestimo =
            emprestismo[emprestismo.length - 1].deliveryDate;
        const dataEmprestimo = new Date(
            ultimaDatadoEmprestimo.split('-').reverse().join('/')
        );
        dataEmprestimo > new Date()
            ? setModalEmprestar(true)
            : setModalEmprestar(false);
    }

    async function devolverLivro() {
        let dataAtual = new Date();
        const livroDevolvido = livros;
        livroDevolvido.rentHistory[
            livroDevolvido.rentHistory.length - 1
        ].deliveryDate = dataAtual.toLocaleDateString();

        const { url, options } = RENT_POST(livroSelecionado, livroDevolvido);
        request(url, options);
        setHistoricoLivro(livroDevolvido.rentHistory);
        fetchLivro();
        setDevolvido(!devolvido);
    }

    async function limparMotivoInativar() {
        const livroInativo = livros;

        const novoStatus = {
            isActive: true,
            description: '',
        };

        livroInativo.status = novoStatus;

        const { url, options } = STATUS_POST(livroSelecionado, livroInativo);
        request(url, options);

        setUltimaInativacao(livroInativo.status.description);

        setStatusLivro(true);
    }

    return (
        <>
            {modalLivro && (
                <Modal>
                    <ModalLivroContent>
                        <ContainerPrincipal>
                            <ContainerEsquerdo>
                                {livros && <ImagemLivro src={livros.image} />}
                                {historicoLivro && devolvido ? (
                                    <Button
                                        onClick={devolverLivro}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                        cor={'#F4F4F4'}
                                        border={'1px solid #ADB5BD'}
                                    >
                                        <img
                                            src={IconeLivro}
                                            alt="Icone do botão Emprestar / Devolver"
                                        />
                                        Devolver
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={abrirModalEmprestar}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                        disabled={statusLivro ? true : false}
                                    >
                                        <img
                                            src={IconeLivro}
                                            alt="Icone do botão Emprestar / Devolver"
                                        />
                                        Emprestar
                                    </Button>
                                )}
                            </ContainerEsquerdo>
                            <ContainerDireito>
                                {livros && (
                                    <div>
                                        <h2>{livros.tittle}</h2>
                                        <ModalInfo
                                            titulo="Sinopse"
                                            info={livros.synopsis}
                                        />
                                        <ModalInfo
                                            titulo="Autor"
                                            info={livros.author}
                                        />
                                        <ModalInfo
                                            titulo="Gênero"
                                            info={livros.genre}
                                        />
                                        <ModalInfo
                                            titulo="Data de entrada"
                                            info={livros.systemEntryDate}
                                        />
                                    </div>
                                )}
                                <ModalBotoes
                                    abrirInativar={abrirModalInativar}
                                    statusLivro={statusLivro}
                                    ativarLivro={() => {
                                        limparMotivoInativar();
                                        setStatusLivro(false);
                                    }}
                                    abrirHistoricoAluno={
                                        abriModalHistoricoALuno
                                    }
                                />

                                <div className="BotaoFecharModal">
                                    <img src={FecharModal} onClick={onClick} />
                                </div>
                            </ContainerDireito>
                        </ContainerPrincipal>
                        {historicoLivro && devolvido && (
                            <ModalExtra
                                historicoLivro={historicoLivro}
                                ultimoEmprestimo={ultimoEmprestimo}
                                setUltimoEmprestimo={() => setUltimoEmprestimo}
                            />
                        )}

                        {ultimaInativacao && (
                            <ModalExtraInativar
                                ultimaInativacao={ultimaInativacao}
                            />
                        )}
                    </ModalLivroContent>
                </Modal>
            )}
            {modalEmprestar && (
                <ModalEmprestarLivro
                    onClick={fecharModalEmprestar}
                    setModalLivro={setModalLivro}
                    livroSelecionado={livros}
                    setDevolvido={() => setDevolvido(true)}
                />
            )}
            {modalInativar && (
                <ModalInativarLivro
                    onClick={fecharModalInativar}
                    setModalLivro={setModalLivro}
                    statusLivro={statusLivro}
                    livroSelecionado={livros}
                    motivoInativacao={setUltimaInativacao}
                />
            )}
            {modalHistoricoAluno && (
                <ModalHistoricoAluno
                    onClick={FecharModalHistoricoALuno}
                    livroSelecionado={livros}
                />
            )}
        </>
    );
};

export default ModalLivros;
