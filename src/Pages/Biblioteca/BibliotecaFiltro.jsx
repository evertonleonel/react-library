import React from 'react'
import Options from '../../Components/Filtro/Options'
import { SelectionFiltro } from './BibliotecaStyles'

const BibliotecaFiltro = ( {item, value, id}) => {
  return (
    <>
      <SelectionFiltro id={id}>
       <Options   disabled  item='Filtrar'/>
       <Options   item='Selecione'/>
      </SelectionFiltro>
    </>
  )
}

export default BibliotecaFiltro