import { ThemeProvider } from '@emotion/react';
import { TextField, createTheme, MenuItem } from '@mui/material'
import './Header.css'
import categories from '../../data/Category'

export const Header = ({category, setCategory, word, setWord}) => {

    const darkTheme = createTheme({
        
        palette: {
            primary: {
                main: "#fff"
            },
            mode: 'dark',
        },
    })

    const handleChange = (language) => {
        setCategory(language)
        setWord("")
    }

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Chase"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Search a word" 
                        variant="standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        className="select"
                        select
                        label="Language" 
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}                     
                        
                    >
                        
                        {categories.map(option => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>))
                        }
                       
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}
