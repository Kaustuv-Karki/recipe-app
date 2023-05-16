import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cusine = () => {
    const [cusine, setCusine] = useState([]);

    let params = useParams();

    const key = "8423c2508ea74d399d82ed01b6935eb6";
    const getCusines = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=9&cuisine=${name}`
        );
        const recipes = await data.json();
        setCusine(recipes.results);
    };

    useEffect(() => {
        getCusines(params.type);
        console.log(params.type);
    }, [params.type]);
    return (
        <div>
            <h3>{params.type}</h3>
            <Grid>
                {cusine.map((item) => {
                    return (
                        <Card key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    );
                })}
            </Grid>
        </div>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 1rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cusine;
