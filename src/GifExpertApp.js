import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Fullmetal Alchemist', 'Demon slayer', 'Jujutsu Kaisen'];

    const [categories, setCategories] = useState(['Yoda']);

    // const handleAdd = () => {
    //     // setCategories(['SAO', ...categories]);
    //     setCategories(cat  => [...cat, 'SAO']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />


            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category} 
                            category = {category} 
                        />
                    ))
                }
            </ul>
        </>

    );
}

export default GifExpertApp;