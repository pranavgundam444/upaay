import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../store/tasksSlice'


export default function TaskCard({ task }) {
const dispatch = useDispatch()
if (!task) return null


return (
<div className="border p-3 rounded-md bg-gray-50">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium">{task.title}</h4>
<p className="text-sm text-gray-600">{task.description}</p>
</div>
<div className="text-xs text-gray-500">{task.priority}</div>
</div>
<div className="mt-2 flex justify-end">
<button className="text-xs text-red-500" onClick={() => dispatch(deleteTask({ taskId: task.id }))}>Delete</button>
</div>
</div>
)
}
