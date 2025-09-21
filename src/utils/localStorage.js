export const loadState = () => {
try {
const serialized = localStorage.getItem('creative_upaay_state')
if (!serialized) return undefined
return JSON.parse(serialized)
} catch (e) {
console.warn('Failed to load state', e)
return undefined
}
}


export const saveState = (state) => {
try {
const serialized = JSON.stringify(state)
localStorage.setItem('creative_upaay_state', serialized)
} catch (e) {
console.warn('Failed to save state', e)
}
}
