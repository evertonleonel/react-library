import React from 'react'
import { ModalExtraDados } from './ModalLivro'

const ModalExtra = ({livroSelecionado}) => {
	const [dadosLivroEmprestado, setLivroEmprestado] = React.useState();

	React.useEffect(()=> {
		setLivroEmprestado(livroSelecionado.rentHistory)
	} , [] )

  return (
		<>
			{
				dadosLivroEmprestado && 
				<ModalExtraDados>
							<h2>Dados do aluno</h2>
							<table >
								<thead>
									<tr>
										<th>Nome do aluno</th>
										<th>Turma</th>
										<th>Data da retirada</th>
										<th>Data de entrega</th>
									</tr>
								</thead>
								<tbody>
									{dadosLivroEmprestado.map( (aluno, index) => {
										return <tr key={index}>
															<th >{aluno.studentName}</th>
															<th >{aluno.class}</th>
															<th >{aluno.withdrawalDate}</th>
															<th >{aluno.deliveryDate}</th>
														</tr>
									} )}
									
								</tbody>
							</table>
				</ModalExtraDados>
			}
	</>
  )
}

export default ModalExtra