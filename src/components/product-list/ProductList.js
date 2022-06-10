import { setTimeout, useState, useEffect } from "react";
import axios from "axios"
import './productlist.css';
import Product from '../product/Product';
import Footer from "../footer/Footer";

import Lottie from "react-lottie";

import * as preloader from "./preloader.json";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [tag, setTag] = useState('');
  const [sortBy, setSortBy] = useState('protPerDol');

  // Loading Animation
  const [done, setDone] = useState(undefined);


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: preloader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


// get products by tag and sortBy

    useEffect(() => {

    // if no tag and no sortBy, return all products
    if (tag === "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products',
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    } 

    if (tag !== "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    }

    if (tag === "" && sortBy !== "") {
        axios.get('https://ezbulk-backend.herokuapp.com/products/sort/' + sortBy,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data);
        })
    }

    if (tag !== '' && sortBy !== '') {
        axios.get('https://ezbulk-backend.herokuapp.com/products/sort/' + sortBy + '/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setDone(true)
            setProducts(res.data)
        })
    }


    }, [tag, sortBy])


    var div = document.getElementsByClassName('dropdown-content');

    for(var  i =0;i<div.length;i++){

    for(var  j =0;j<div[i].children.length;j++){

    div[i].children[j].addEventListener('click',function(){

        this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
    })
    }
    }

    window.onload = function() {
        document.getElementById("default-tag").focus();
      };



  return (

    <div>

        
    <div class="header">

    <h4><strong>Stats <u>per dollar spent</u></strong> 💵</h4>

    </div>


    <div class="row">

    
    <div class="tags">


        <button class="button-35 tagbutt" id="default-tag" role="button" onClick={() => { setTag("") }}>All</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("nuts") }}>Nuts</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("meat") }}>Meat</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("dairy") }}>Dairy</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("bread") }}>Bread</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("breakfast") }}>Breakfast</button> 

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("potatoes") }}>Potatoes</button> 

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("pasta") }}>Pasta</button>

       {/*  <button class="button-35 tagbutt" role="button" onClick={() => { setTag("creatine") }}>Creatine</button>

        <button class="button-35 tagbutt" role="button" onClick={() => { setTag("whey") }}>Whey</button> 

        <button class="button-35 tagbutt research" role="button" onClick={() => { setTag("posts") }}>Research</button> */}

        <button class="button-35 tagbutt gains" role="button" onClick={() => { setTag("gains") }}>Gains</button>

    </div>



    <div class="sort">

    <a class="feedback-button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf6hY-gmnjw29oxaBhc5S19n6j8AYUWo1AAIop0U_RNcaNfSw/viewform?usp=sf_link">Give Feedback 💜</a>

  <button class="dropdown-toggle sortbutt" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Protein Per $
  </button>

    <div class="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">

        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("calsPerDol") }}>Calories Per $</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("fatPerDol") }}>Fat Per $</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("protPerDol") }}>Protein Per $</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("carbPerDol") }}>Carbs Per $</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("") }}>None</button>
    </div>


    </div>

    </div>

    {!done ? (
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        speed={2.2}
      /> ) : (


        <div className="list">
            
            {products.map(product => (

                <Product 
                key={product._id}
                id={product._id}
                name = {product.name}
                price = {product.price}
                caloriesPerServing = {product.caloriesPerServing}
                proteinPerServing = {product.proteinPerServing}
                totalFatPerServing = {product.totalFatPerServing}
                carbsPerServing = {product.carbsPerServing}
                servingsPerProduct = {product.servingsPerProduct}
                img = {product.img}
                link = {product.link}
                tag = {product.tag}


                 />

            ))}



     </div>

    )}


    <Footer />

    </div>
    
);
}

export default ProductList;