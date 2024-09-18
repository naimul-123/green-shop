import React from 'react'
import Card from './Card'

const Featured = ({ featured }) => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-[#222222]">Featured Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
                {featured?.map((product, id) => <Card key={id} product={product} />)}
            </div>
        </div>

    )
}

export default Featured