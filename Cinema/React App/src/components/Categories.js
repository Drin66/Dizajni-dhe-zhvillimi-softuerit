import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const addCategory = async () => {
        try {
            const response = await axios.post('/categories', { name });
            setCategories([...categories, response.data]);
            setName('');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const updateCategory = async (id, updatedName) => {
        try {
            const response = await axios.put(`/categories/${id}`, { name: updatedName });
            setCategories(categories.map(category => (category.id === id ? response.data : category)));
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`/categories/${id}`);
            setCategories(categories.filter(category => category.id !== id));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name}
                        <button onClick={() => updateCategory(category.id, prompt('Enter new name:'))}>Update</button>
                        <button onClick={() => deleteCategory(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter category name"
            />
            <button onClick={addCategory}>Add Category</button>
        </div>
    );
};

export default Categories;
