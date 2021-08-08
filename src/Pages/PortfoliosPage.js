import React from "react"
import Categories from "../Components/Categories"
import MenuItems from "../Components/MenuItems"
import portfolios from "../Components/PortfoliosData"
import { useState } from "react"
import Title from "../Components/Title"

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
]

const categories = allCategories

function PortfoliosPage() {
  const [menuItems, setMenuItems] = useState(portfolios)

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios)
      return
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category
    })
    setMenuItems(filteredData)
  }

  return (
    <div className='PortfolioPage'>
      <div className='title'>
        <Title title={"Portfolios"} span={"portfolios"} />
      </div>
      <div className='portfolios-data'>
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  )
}

export default PortfoliosPage
