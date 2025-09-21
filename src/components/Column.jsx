import React, { useState } from 'react'
import TaskCard from './TaskCard'
import { Draggable } from 'react-beautiful-dnd'
import AddTaskModal from './AddTaskModal'


export default function Column({ column, tasks = [], filter }) {
const [showAdd, setShowAdd] = useState(false)


const filtered = tasks.filter(t => {
if (!t) return false
if (filter.priority !== 'all' && t.priority !== filter.priority) return false
if (filter.query && !(t.title.toLowerCase().includes(filter.query.toLowerCase()) || t.description.toLowerCase().includes(filter.query.toLowerCase()))) return false
return true
})


return (
<div className="bg-yellow rounded-lg p-4 shadow">
<div className="flex justify-between items-center mb-3">
<h3 className="font-semibold">{column.title}</h3>
<button className="text-sm px-3 py-1 border rounded" onClick={() => setShowAdd(true)}>+ Add</button>
</div>


<div className="space-y-3 min-h-[200px]">
{filtered.map((task, index) => (
<Draggable key={task.id} draggableId={task.id} index={index}>
{(provided) => (
<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
<TaskCard task={task} />
</div>
)}
</Draggable>
))}
</div>


{showAdd && <AddTaskModal columnId={column.id} onClose={() => setShowAdd(false)} />}
</div>
)
}
