import React, { useEffect,useState } from 'react';

const Product=()=> {
    const [ Products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await fetch("https://fakestoreapi.com/products");
            const data=await response.json();
            setProducts([...data]);
        };
        fetchData();
    },[]);
    return (
        <div>
            <h1>Products Manual</h1>
            {Products.map((Product)=>(
                <p key={Product.id}>{Product.title}</p>
            ))
            }
        </div>
    );
};
export default Product

            
        
    
