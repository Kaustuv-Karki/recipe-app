import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  const key = "8423c2508ea74d399d82ed01b6935eb6";
  const getPopular = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
      setLoading(false);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Items</h3>
      <div>{loading && <h3>Loading...</h3>}</div>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            768: {
              perPage: 2,
            },
          },
        }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
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
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
