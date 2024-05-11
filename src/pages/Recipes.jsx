import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const [details, setDetails] = useState({});

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();
  const key = "8423c2508ea74d399d82ed01b6935eb6";
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`
    );
    const dataValue = await data.json();
    setDetails(dataValue);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      {loading && <h3>Loading...</h3>}
      <div className="">
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />
      </div>
      {!loading && (
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}>
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}>
            Ingredients
          </Button>
          {activeTab === "instructions" ? (
            <div className="">
              <h2
                dangerouslySetInnerHTML={{
                  __html: details.summary,
                }}></h2>
              <h2
                dangerouslySetInnerHTML={{
                  __html: details.instructions,
                }}></h2>
            </div>
          ) : (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Info>
      )}
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background-color: #212121;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    backgroung: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    margin-top 1rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipes;
