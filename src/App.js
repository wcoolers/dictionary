
import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Definitions } from './definitions/Definitions';

function App() {

    const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([])
    const [category, setCategory] = useState("en")

    const dictionaryApi = async() => {
        try {
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
        
            setMeanings(data.data)
        } catch (error) {
            console.error(error)
            
        }
    }
    console.log(meanings)

    useEffect(() => {
        dictionaryApi()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [word, category])
    return (
        <div 
            className="App" 
            style={{height: '100vh', backgroundColor:"#282c34", color:"white"}}
        >
            <Container 
                maxWidth='md' 
                style={{display:'flex', flexDirection:"column", height:"100vh" }}
            >
                <Header 
                    category={category} 
                    setCategory={setCategory} 
                    word={word} 
                    setWord={setWord} 
                />
                <Definitions word={word} category={category} meanings={meanings}/>

            </Container>

        </div>
    );
   
}

export default App;
