import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MovieService from "../services/MovieService";
import ChildContainer from "./childComponents/SearchContainer";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  left: 35%;
  margin-top: 1rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
const SubmitButton = styled.button`
  line-height: 1;
  display: ${props => (props.barOpened ? "auto" : "none")};
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};

  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
const Search = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();
  const [data, setData] = useState([]);
  const onFormSubmit = e => {

    e.preventDefault();
    const _MovieService = new MovieService();
    var parsedData =   _MovieService.getMoviesByFilter({query : input}).then((res)=>{
        console.log("data: ",res.data)
       var dataset = res.data;
       dataset = dataset.map((item) => {
         return {
           name: item.primaryName,
           year: item.year,
           type: item.type,
           image: item.poster,
           imdb: item.rating.imdb.score
         };
       });
       setData(
        dataset
     )    ;
   })
    
    // setBarOpened(false);
    // setInput("");
  

  };

  return (
      <>
      <Form
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
        //   console.log("data: ")

          inputFocus.current.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onBlur={() => {
          setBarOpened(false);
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >


        <Button  barOpened={barOpened}>
          Search  
        </Button>
        {/* <SubmitButton onClick={onFormSubmit} barOpened={barOpened}>
          post  
        </SubmitButton> */}
       
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Search for a movie..."
        />
        
      </Form>
      <ChildContainer data={data}/>
      </>
  );
}

export default Search;
