import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searches = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const [loading, setLoading] = useState(true);

  const key = "8423c2508ea74d399d82ed01b6935eb6";
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=9&&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    setLoading(false);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      <h3>{params.search.toUpperCase()}</h3>
      <Grid>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
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
export default Searches;
