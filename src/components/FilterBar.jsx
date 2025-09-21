import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../store/tasksSlice'


export default function FilterBar() {
const filter = useSelector(s => s.tasks.filter)
const dispatch = useDispatch()


return (
<div className="flex gap-3 p-4 bg-gray-100 items-center">
<input value={filter.query} onChange={e=>dispatch(setFilter({ query: e.target.value }))} placeholder="Search tasks..." className="p-2 border rounded" />
<select value={filter.priority} onChange={e=>dispatch(setFilter({ priority: e.target.value }))} className="p-2 border rounded">
<option value="all">All Priorities</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>
</div>
)
}
