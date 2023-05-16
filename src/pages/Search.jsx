import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searches/" + input);
    };

    return (
        <FormStyled onSubmit={submitHandler}>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search"
                value={input}
            />
        </FormStyled>
    );
};

const FormStyled = styled.form`
    margin: 1rem 2rem;
    position: relative;
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;

    input {
        border: none;
        background: rgb(63, 96, 76);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 70%;
    }
`;

export default Search;
