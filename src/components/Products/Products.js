import React, { forwardRef, useState } from "react";
import LadiesBriefs from "./LadiesBriefs/LadiesBriefs";
import Leggings from "./Leggings/Leggings";
import TShirts from "./TShirts/TShirts";
import Boxers from "./Boxers/Boxers";
import Select from "react-select";

const Products = forwardRef((props, ref) => {
  const initialCategories = [
    {
      label: "Ladies Briefs",
      value: 1,
      selected: false,
    },
    {
      label: "Ladies Leggings",
      value: 2,
      selected: true,
    },
    {
      label: "Tee Shirts",
      value: 3,
      selected: false,
    },
    {
      label: "Men's Briefs/ Boxer Shorts",
      value: 4,
      selected: false,
    },
    {
      label: "Men's Vests",
      value: 5,
      selected: false,
    },

    {
      label: "Sarongs",
      value: 6,
      selected: false,
    },
  ];

  const options = [
    { value: 1, label: "Ladies Briefs" },
    { value: 2, label: "Ladies Leggings" },
    { value: 3, label: "Tee Shirts" },
    { value: 4, label: "Men's Briefs/ Boxer Shorts" },
    { value: 5, label: "Men's Vests" },
    { value: 6, label: "Sarongs" },
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

  const onChange = (selection) => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      selected: category.value === selection.value,
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
      case 3:
        return <TShirts />;
      case 4:
        return <Boxers />;
      default:
        return null;
    }
  };

  return (
    <section ref={ref}>
      <div className="px-7 md:px-8 lg:px-14 xl:px-28 2xl:px-60 py-20">
        <div className="text-center">
          <span className="text-primary">WHAT WE CREATE</span>
          <h2 className="md:text-2xl xl:text-4xl text-secondary font-semibold">
            Our Products
          </h2>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="hidden md:flex items-center md:gap-4 lg:gap-7 h-16">
            {categories.map((category) => {
              return (
                <button
                  key={category.value}
                  className={
                    category.selected
                      ? "bg-primary px-5 py-2 rounded text-white transition-all md:text-sm lg:text-lg"
                      : "bg-transparent transition-all md:text-sm lg:text-lg"
                  }
                  onClick={() => onClick(category.value)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
          <div className="block md:hidden w-full">
            <Select
              options={options}
              defaultValue={options[0]}
              onChange={(value) => onChange(value)}
            />
          </div>
          <div className="mt-9">{renderSelectedCategoryComponent()}</div>
        </div>
      </div>
    </section>
  );
});

export default Products;
