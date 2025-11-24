import React, { useState } from 'react'
import { createSerie } from '../api/seriesService'
import { useNavigate } from 'react-router-dom'

const empty = { titulo:'', temporadas:1, lancamento:'', diretor:'', produtora:'', categoria:'', dataAssistiu:'' }

export default function SerieCreate(){
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function validate(){
    const e = {}
    if(!form.titulo) e.titulo = 'Título é obrigatório.'
    if(!form.temporadas || Number(form.temporadas) <= 0) e.temporadas = 'Número de temporadas deve ser maior que zero.'
    if(!form.lancamento) e.lancamento = 'Data de lançamento é obrigatória.'
    if(!form.diretor) e.diretor = 'Diretor é obrigatório.'
    if(!form.produtora) e.produtora = 'Produtora é obrigatória.'
    if(!form.categoria) e.categoria = 'Categoria é obrigatória.'
    if(!form.dataAssistiu) e.dataAssistiu = 'Data em que assistiu é obrigatória.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!validate()) return
    try{
      await createSerie({...form, temporadas: Number(form.temporadas)})
      navigate('/lista')
    }catch(err){
      alert('Erro ao criar série: '+err.message)
    }
  }

  function change(e){
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  return (
    <div className="card">
      <h2>Cadastrar nova série</h2>
      <form onSubmit={handleSubmit}>
        <label>Título
          <input name="titulo" value={form.titulo} onChange={change} />
          {errors.titulo && <div style={{color:'red'}}>{errors.titulo}</div>}
        </label>
        <label>Número de temporadas
          <input name="temporadas" type="number" value={form.temporadas} onChange={change} />
          {errors.temporadas && <div style={{color:'red'}}>{errors.temporadas}</div>}
        </label>
        <label>Data de lançamento
          <input name="lancamento" type="date" value={form.lancamento} onChange={change} />
          {errors.lancamento && <div style={{color:'red'}}>{errors.lancamento}</div>}
        </label>
        <label>Diretor
          <input name="diretor" value={form.diretor} onChange={change} />
          {errors.diretor && <div style={{color:'red'}}>{errors.diretor}</div>}
        </label>
        <label>Produtora
          <input name="produtora" value={form.produtora} onChange={change} />
          {errors.produtora && <div style={{color:'red'}}>{errors.produtora}</div>}
        </label>
        <label>Categoria
          <input name="categoria" value={form.categoria} onChange={change} />
          {errors.categoria && <div style={{color:'red'}}>{errors.categoria}</div>}
        </label>
        <label>Data em que assistiu
          <input name="dataAssistiu" type="date" value={form.dataAssistiu} onChange={change} />
          {errors.dataAssistiu && <div style={{color:'red'}}>{errors.dataAssistiu}</div>}
        </label>
        <div style={{marginTop:12}}>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}
