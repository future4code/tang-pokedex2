import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useRequestData(url,initialState) {
    
    const [data, setData] = useState(initialState)

    useEffect(() => { 
        axios.get(url).then((response) => {
            setData(response)
        }).catch(error => { console.log(error)})
              
        

    }, [url])



    return data
}
