import React, { useState } from "react";
import Card from "./Card";
const Category = ({ selectedCategory, name, description }) => {

  return (
    <div className="categoryWrapper">
      <Card name={name} pack="Lite" />
      <Card name={name} pack="Regular" />
      <Card name={name} pack="Mega" />
    </div>
  );
};

export default Category;
