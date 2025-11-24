import React, { useEffect, useState } from 'react'
import { getSeries, deleteSerie, updateSerie } from '../api/seriesService'

export default function SerieListPage(){
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingTitulo, setEditingTitulo] = useState('')

  async function load(){
    try{
      const data = await getSeries()
      setSeries(data)
    }catch(err){
      alert('Erro ao carregar séries: '+err.message)
    }
  }

  useEffect(()=>{ load() }, [])

  async function handleDelete(id){
    if(!confirm('Confirma exclusão?')) return
    await deleteSerie(id)
    load()
  }

  function filtered(){
    const q = query.trim().toLowerCase()
    if(!q) return series
    return series.filter(s=> s.titulo.toLowerCase().includes(q) || s.categoria.toLowerCase().includes(q) || s.diretor.toLowerCase().includes(q))
  }

  async function startEdit(s){
    setEditingId(s.id)
    setEditingTitulo(s.titulo)
  }

  async function saveEdit(s){
    await updateSerie({...s, titulo: editingTitulo})
    setEditingId(null)
    load()
  }

  return (
    <div className="card">
      <h2>Lista de séries</h2>
      <div style={{marginBottom:12}}>
        <input placeholder="Pesquisar por título, categoria ou diretor" value={query} onChange={e=>setQuery(e.target.value)} style={{width:'60%',padding:8}} />
        <button onClick={load} style={{marginLeft:8}}>Atualizar</button>
      </div>
      <div>
        {filtered().length===0 && <div>Nenhuma série encontrada.</div>}
        <ul>
          {filtered().map(s=>(
            <li key={s.id} style={{marginBottom:8}}>
              {editingId===s.id ? <input value={editingTitulo} onChange={e=>setEditingTitulo(e.target.value)} /> : <strong>{s.titulo}</strong>}
              <div><small>{s.categoria} • {s.temporadas} temporadas • Lanç.: {s.lancamento}</small></div>
              <div>
                {editingId===s.id ? <button onClick={()=>saveEdit(s)}>Salvar</button> : <button onClick={()=>startEdit(s)}>Editar</button>}
                <button onClick={()=>handleDelete(s.id)} style={{marginLeft:8}}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
