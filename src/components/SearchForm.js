import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
    return (
        <form className="flex justify-between bg-white text-black border-2 px-2 py-2 md:rounded-md">
            <div>
                <input type="text" placeholder="Search product" className="max-w-40 md:max-w-sm w-full outline-none" />
            </div>
            <div className="flex gap-2 justify-between">
                <select className="px-2 border-none outline-none">
                    <option>All Catagory</option>
                    <option>Frout</option>
                    <option>Bakery</option>
                    <option>Fish</option>
                    <option>Milk</option>
                    <option>Vegetable</option>
                </select>
                <button className=""><FaSearch /></button>
            </div>

        </form>
    )
}

export default SearchForm