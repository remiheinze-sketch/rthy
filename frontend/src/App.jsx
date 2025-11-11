
import { useEffect, useState } from 'react'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 border">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}

function Notes() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const load = async () => {
    const { data } = await axios.get(`${API}/notes/`)
    setNotes(data)
  }
  useEffect(() => { load() }, [])

  const create = async () => {
    await axios.post(`${API}/notes/`, { title, content })
    setTitle(''); setContent('')
    load()
  }

  return (
    <Card title="🗒️ Notes">
      <div className="flex gap-2 mb-3">
        <input className="border rounded px-2 py-1 flex-1" placeholder="Titre"
               value={title} onChange={e=>setTitle(e.target.value)} />
      </div>
      <textarea className="border rounded w-full p-2 mb-2" rows="3"
                placeholder="Contenu (utilisez @date, #todo, @contact)"
                value={content} onChange={e=>setContent(e.target.value)} />
      <button onClick={create} className="bg-black text-white rounded px-3 py-1 mb-4">Ajouter</button>
      <ul className="space-y-2">
        {notes.map(n => (
          <li key={n.id} className="p-2 border rounded">
            <div className="font-medium">{n.title}</div>
            <div className="text-sm text-gray-700 whitespace-pre-wrap">{n.content}</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const load = async () => {
    const { data } = await axios.get(`${API}/tasks/`)
    setTasks(data)
  }
  useEffect(() => { load() }, [])

  const create = async () => {
    await axios.post(`${API}/tasks/`, { title })
    setTitle('')
    load()
  }

  return (
    <Card title="✅ To‑Do (MVP)">
      <div className="flex gap-2 mb-3">
        <input className="border rounded px-2 py-1 flex-1" placeholder="Nouvelle tâche"
               value={title} onChange={e=>setTitle(e.target.value)} />
        <button onClick={create} className="bg-black text-white rounded px-3 py-1">Ajouter</button>
      </div>
      <ul className="space-y-2">
        {tasks.map(t => (
          <li key={t.id} className="p-2 border rounded flex items-center justify-between">
            <span>{t.title}</span>
            <span className="text-xs uppercase bg-gray-100 rounded px-2 py-0.5">{t.status}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function Agenda() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const load = async () => {
    const { data } = await axios.get(`${API}/agenda/`)
    setEvents(data)
  }
  useEffect(() => { load() }, [])

  const create = async () => {
    await axios.post(`${API}/agenda/`, { title, start, end })
    setTitle(''); setStart(''); setEnd('')
    load()
  }

  return (
    <Card title="📅 Agenda (MVP)">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3">
        <input className="border rounded px-2 py-1" placeholder="Titre" value={title} onChange={e=>setTitle(e.target.value)} />
        <input type="datetime-local" className="border rounded px-2 py-1" value={start} onChange={e=>setStart(e.target.value)} />
        <input type="datetime-local" className="border rounded px-2 py-1" value={end} onChange={e=>setEnd(e.target.value)} />
        <button onClick={create} className="bg-black text-white rounded px-3 py-1">Créer</button>
      </div>
      <ul className="space-y-2">
        {events.map(ev => (
          <li key={ev.id} className="p-2 border rounded">
            <div className="font-medium">{ev.title}</div>
            <div className="text-sm text-gray-700">{ev.start} → {ev.end}</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function App() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">OrganiHub Starter</h1>
        <a href="https://github.com/new" className="text-sm underline">Créer un dépôt GitHub</a>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        <Notes />
        <Tasks />
        <Agenda />
      </div>
      <footer className="text-xs text-gray-500 mt-10">© 2025 OrganiHub</footer>
    </div>
  )
}
