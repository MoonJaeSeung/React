import React from 'react';
import { useState } from 'react';
import InputField from './InputField';

const MovieForm = ({addMovie}) =>{
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    
    const resetForm = () =>{
        setMovieTitle('');
        setMovieYear('');
    }

    const resetErrors = () =>{
        setTitleError('');
        setYearError('');
    };
  
    const validateForm = () =>{
        resetErrors();
        let validated = true;
        if (!movieTitle){
            setTitleError('영화제목을 넣어주세요');
            validated = false;
        }

        if(!movieYear){
            setYearError('개봉년도를 넣어주세요');
            validated = false;
        }

        return validated;
    }
    
      const onSubmit = (event) =>{
        event.preventDefault();
        if(validateForm()){  //함수면 괄호를 써줘야 한다.
            addMovie({
                id: Date.now(),
                title : movieTitle,
                year : movieYear,
            });
            resetErrors();
            resetForm();
        }
      };
    return (
     
       <form onSubmit={onSubmit} className='movie-form'>
        <InputField
            type="text"
            value={movieTitle}
            placeholder="영화 제목"
            onChange={e => setMovieTitle(e.target.value)}
            errorMessage={titleError}
            />
        {/* <input
        type="text"
        value={movieTitle}
        placeholder="영화 제목"
        onChange={e => setMovieTitle(e.target.value)}
        />
        <div style={{color:'red'}}>{titleError}</div> */}
        <InputField
            type="number"
            value={movieYear}
            placeholder="개봉 년도"
            onChange={e => setMovieTitle(e.target.value)}
            errorMessage={yearError}
            />
        {/* <input
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={e => setMovieYear(e.target.value)}
        />
        <div style={{color:'red'}}>{yearError}</div> */}
        <button>영화 추가</button>
       </form>
     
    );
};

export default MovieForm;