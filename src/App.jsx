import React from 'react'
import Board from './components/Board'
import FilterBar from './components/FilterBar'


export default function App() {
return (
<div className="min-h-screen bg-gray-50">
<header className="p-4 bg-white shadow">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold">Creative Upaay - Dashboard</h1>
</div>
</header>


<main className="max-w-6xl mx-auto p-4">
<FilterBar />
<Board />
</main>
</div>
)
}