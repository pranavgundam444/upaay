import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'


const initialState = {
columns: {
todo: { id: 'todo', title: 'To Do', taskIds: [] },
Inprogress: { id: 'inprogress', title: 'On Progress', taskIds: [] },
done: { id: 'done', title: 'Done', taskIds: [] }
},
columnOrder: ['todo', 'inprogress', 'done'],
tasks: {},
filter: { query: '', priority: 'all' }
}


const slice = createSlice({
name: 'tasks',
initialState,
reducers: {
addTask: (state, action) => {
const { columnId, title, description, priority='medium' } = action.payload
const id = uuidv4()
const newTask = { id, title, description, priority, createdAt: Date.now() }
state.tasks[id] = newTask
state.columns[columnId].taskIds.unshift(id)
},
moveTask: (state, action) => {
const { source, destination } = action.payload
if (!destination) return
const sourceCol = state.columns[source.droppableId]
const destCol = state.columns[destination.droppableId]
const [moved] = sourceCol.taskIds.splice(source.index, 1)
destCol.taskIds.splice(destination.index, 0, moved)
},
setFilter: (state, action) => {
state.filter = { ...state.filter, ...action.payload }
},
deleteTask: (state, action) => {
const { taskId } = action.payload
delete state.tasks[taskId]
Object.values(state.columns).forEach(col => {
col.taskIds = col.taskIds.filter(id => id !== taskId)
})
},
editTask: (state, action) => {
const { id, changes } = action.payload
state.tasks[id] = { ...state.tasks[id], ...changes }
}
}
})


export const { addTask, moveTask, setFilter, deleteTask, editTask } = slice.actions
export default slice.reducer
