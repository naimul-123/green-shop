import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
    return (
        <form className="flex  bg-white text-black border p-2 md:rounded-md">
            <input type="text" placeholder="Search product" className="px-2 border-none outline-none grow" />
            <select className="px-2 border-none outline-none">
                <option>All Catagory</option>
                <option>Frout</option>
                <option>Bakery</option>
                <option>Fish</option>
                <option>Milk</option>
                <option>Vegetable</option>
            </select>
            <button className="p-2 mx-2"><FaSearch /></button>
        </form>
    )
}

export default SearchForm