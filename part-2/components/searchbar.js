import { useState } from "react"

export default function SearchBar(props) {

    const [input, setInput] = useState('')

    return (
        <div className="relative w-1/2 mb-4">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 focus:ring-blue-500 block w-full rounded-md bg-white text-gray-900"
          />
          <button onClick={() => props.handleSearch(input)}>
            <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
          </button>      
        </div>
    )
}
