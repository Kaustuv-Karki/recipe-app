import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    const key = "8423c2508ea74d399d82ed01b6935eb6";
    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`
        );
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    };

    useEffect(() => {
        getPopular();
    }, []);

    return (
        <Wrapper>
            <h3>Popular Items</h3>
            <Splide>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img {
        border-radius: 2rem;
    }
`;

export default Popular;
