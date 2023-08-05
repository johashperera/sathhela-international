import React, { useState } from "react";
import LadiesBriefs from "./LadiesBriefs/LadiesBriefs";
import Leggings from "./Leggings/Leggings";

const Products = () => {
  const initialCategories = [
    {
      label: "Ladies Briefs",
      value: 1,
      selected: true,
    },
    {
      label: "Ladies Leggings",
      value: 2,
      selected: false,
    },
    {
      label: "Men's Briefs/ Boxer Shorts",
      value: 3,
      selected: false,
    },
    {
      label: "Men's Vests",
      value: 4,
      selected: false,
    },
    {
      label: "T-Shirts",
      value: 5,
      selected: false,
    },
    {
      label: "Sarongs",
      value: 6,
      selected: false,
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategories.find((category) => category.selected)
  );

  const onClick = (value) => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      selected: category.value === value,
    }));
    setCategories(updatedCategories);
    setSelectedCategory(
      updatedCategories.find((category) => category.selected)
    );
  };

  const renderSelectedCategoryComponent = () => {
    switch (selectedCategory.value) {
      case 1:
        return <LadiesBriefs />;
      case 2:
        return <Leggings />;
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="px-60 py-20">
        <div className="text-center">
          <span className="text-primary">WHAT WE CREATE</span>
          <h2 className="text-4xl text-secondary font-semibold">
            Our Products
          </h2>
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center gap-7">
            {categories.map((category) => {
              return (
                <button
                  key={category.value}
                  className={
                    category.selected
                      ? "bg-primary px-5 py-2 rounded text-white transition-all text-lg"
                      : "bg-transparent transition-all"
                  }
                  onClick={() => onClick(category.value)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
          <div className="mt-9">{renderSelectedCategoryComponent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Products;
