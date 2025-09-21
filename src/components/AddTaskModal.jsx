import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'


export default function AddTaskModal({ columnId, onClose }) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [priority, setPriority] = useState('medium')
const dispatch = useDispatch()


const submit = (e) => {
e.preventDefault()
if (!title.trim()) return
dispatch(addTask({ columnId, title, description, priority }))
onClose()
}


return (
<div className="fixed inset-0 flex items-center justify-center z-50">
<div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>
<form className="bg-white p-4 rounded shadow z-10 w-96" onSubmit={submit}>
<h3 className="font-semibold mb-2">Add Task</h3>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded mb-2" />
<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border rounded mb-2" />
<select value={priority} onChange={e=>setPriority(e.target.value)} className="w-full p-2 border rounded mb-3">
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>
<div className="flex justify-end gap-2">
<button type="button" className="px-3 py-1 border rounded" onClick={onClose}>Cancel</button>
<button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Add</button>
</div>
</form>
</div>
)
}
