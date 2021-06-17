import { useState } from 'react'
import SearchBar from './searchbar'
import { searchVideos } from '../pages/api/search'
import SearchList from './searchlist'


export default function SearchContainer(props) {
	const [searchResults, updateSearchResults] = useState([])

    const handleSearch = async (query) => {
        const response = await searchVideos(query)
        updateSearchResults(response.data.items)
        console.log(response.data.items) // See results in browser console
    }


    return (
        <div>
        <SearchBar handleSearch={handleSearch} />
              <SearchList data={searchResults} queueFunc={props.queueFunc} />
        </div>
        
    )
}
