import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
    return (
        <form className="flex bg-white text-black p-1 rounded-md">
            <input type="text" className="grow px-2 border-none outline-none" />
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