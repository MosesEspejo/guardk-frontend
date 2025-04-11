import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import guardknobLogo from './assets/guardknob.svg'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleCount = () => {
    setCount((count) => count + 1)
    navigate('/count')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mb-8">
        <img src={guardknobLogo} className="h-32 hover:scale-110 transition-transform" alt="GuardKnob logo" />
      </div>
      <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white">GuardKnob</h1>
      <div className="text-center">
        <button
          onClick={handleCount}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
        >
          Dashboard
        </button>
        <p className="text-gray-600 dark:text-gray-300">
          An innovative intersection between <code className="font-mono text-red-600 bg-gray-200 dark: text-blue-400 bg-gray-700 px-2 py-1 rounded">Smart Home and Security Systems</code> ...
        </p>
      </div>
      <p className="mt-8 text-gray-500 dark:text-gray-400">
        MakeNJIT Hardware Hackathon 2025
      </p>
    </div>
  )
}

export default App