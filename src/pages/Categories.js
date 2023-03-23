import React, { useState } from "react";
import "./Categories.css";
import Category from "../Components/Category"
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lunch");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "Lunch":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Lunch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        );
      case "Dinner":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Dinner"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        );
      case "both":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Lunch & Dinner"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="cat-section-wrapper">
        <div className="cat-section-top">
          <h1 className="primary-sheading">Categories</h1>
        </div>
        <div className="">
          <div className="btnWrapper">
            <button onClick={() => handleClick("Lunch")}>Lunch</button>
            <button onClick={() => handleClick("Dinner")}>Dinner</button>
            <button onClick={() => handleClick("both")}>Both</button>
          </div>
          {renderCategoryComponent()}
        </div>
      </div>
    </div>
  );
};



export default Categories;
