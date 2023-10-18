import { useEffect, useState } from 'react';
import rickmorty from '../api/rickmorty'

export default () => {
    const [characters, setCharacters] = useState([]);
    const [ errorMessage, setErrorMessage] = useState("")

    const getCharacters = async () => {
        try {
            const response = await rickmorty.get('/')  
            setCharacters(response.data.results)
            console.log(response.data.results)      
        } catch (err) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(()=>{
        getCharacters()
    },[])

    return [characters, errorMessage]
}