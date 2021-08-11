import React from "react"
import Categories from "../Components/Categories"
import MenuItems from "../Components/MenuItems"
import researchWork from "../Components/ResearchData"
import { useState } from "react"
import Title from "../Components/Title"

const allCategories = [
  "All",
  ...new Set(researchWork.map((item) => item.category)),
]

const categories = allCategories

function ResearchPage() {
  const [menuItems, setMenuItems] = useState(researchWork)

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(researchWork)
      return
    }
    const filteredData = researchWork.filter((item) => {
      return item.category === category
    })
    setMenuItems(filteredData)
  }

  return (
    <div className='research-page'>
      <div className='research-title'>
        <Title title={"Research"} />
      </div>
      <div className='research-container'>
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  )
}

export default ResearchPage
