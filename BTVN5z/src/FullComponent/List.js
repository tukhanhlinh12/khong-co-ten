import React, { useState } from 'react';

const products = [
    {
        name: 'Product1',
        price: '$10',
        description: 'Máy ảnh'
    },
    {
        name: 'Product2',
        price: '$20',
        description: 'Tàu'
    },
    {
        name: 'Product3',
        price: '$30',
        description: 'Xe'
    },
    {
        name: 'Product4',
        price: '$40',
        description: 'Cơm'
    }
];

export default function List() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };
    const filterProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm)    
    );
    return (
        <>
            <div>
                <input type="search" onChange={handleInputChange}></input>
            </div>
            {filterProducts.length > 0 ? (
                filterProducts.map((product) => (
                    <div key={product.name}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                ))
            ) : (
                <div>
                    <p>Not found</p>
                </div>
            )}
        </>
    );
}
