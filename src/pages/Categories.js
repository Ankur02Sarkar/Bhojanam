import React, { useState } from "react";
import "./Categories.css";
import Category from "../Components/Category"
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("day");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "day":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Day"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        );
      case "night":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Night"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        );
      case "both":
        return (
          <Category
            selectedCategory={selectedCategory}
            name="Day & Night"
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
            <button onClick={() => handleClick("day")}>Day</button>
            <button onClick={() => handleClick("night")}>Night</button>
            <button onClick={() => handleClick("both")}>Both</button>
          </div>
          {renderCategoryComponent()}
        </div>
      </div>
    </div>
  );
};



export default Categories;
