import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'
import { useSelector, useDispatch } from 'react-redux'
import { moveTask } from '../store/tasksSlice'


export default function Board() {
const columns = useSelector(state => state.tasks.columns)
const columnOrder = useSelector(state => state.tasks.columnOrder)
const tasks = useSelector(state => state.tasks.tasks)
const filter = useSelector(state => state.tasks.filter)
const dispatch = useDispatch()


const onDragEnd = (result) => {
const { source, destination } = result
if (!destination) return
if (source.droppableId === destination.droppableId && source.index === destination.index) return
dispatch(moveTask({ source, destination }))
}


return (
<DragDropContext onDragEnd={onDragEnd}>
<div className="d-flex flex-row justify-content-around">
{columnOrder.map(colId => (
<Droppable key={colId} droppableId={colId}>
{(provided) => (
<div ref={provided.innerRef} {...provided.droppableProps}>
<Column column={columns[colId]} tasks={columns[colId].taskIds.map(id => tasks[id])} filter={filter} />
{provided.placeholder}
</div>
)}
</Droppable>
))}
</div>
</DragDropContext>
)
}
