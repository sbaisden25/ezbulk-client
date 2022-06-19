import { useState, useEffect } from "react";
import axios from "axios"
import './stacklist.css';
import Stack from './Stack';
import Footer from "../footer/Footer";


function StackList() {

  const [stacks, setStacks] = useState([]);
  const [tag, setTag] = useState('');
  const [sortBy, setSortBy] = useState('');


    useEffect(() => {

    // if no tag and no sortBy, return all stacks
    if (tag === "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/stacks',
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setStacks(res.data);
        })
    } 

    if (tag !== "" && sortBy === "") {
        axios.get('https://ezbulk-backend.herokuapp.com/stacks/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setStacks(res.data);
        })
    }

    if (tag === "" && sortBy !== "") {
        axios.get('https://ezbulk-backend.herokuapp.com/stacks/sort/' + sortBy,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setStacks(res.data);
        })
    }

    if (tag !== '' && sortBy !== '') {
        axios.get('https://ezbulk-backend.herokuapp.com/stacks/sort/' + sortBy + '/tags/' + tag,
        Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'})
        .then(res => {
            setStacks(res.data)
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

        
    <div className="header">

    <h3><strong>Stacks</strong> 💵</h3>

    </div>


    <div className="row">

    
    <div className="tags">

        <button class="button-35 tagbutt nav" onClick={() => { window.location.href='/' }}>Products</button>

        <button class="button-35 tagbutt nav" onClick={() => {  }}>Research</button>

        <button class="button-35 tagbutt nav" id="default-tag" onClick={() => { window.location.href='/stacks' }}>Stacks</button>

        <button class="button-35 tagbutt" onClick={() => { setTag("carbs") }}>Carbs</button>

        <button class="button-35 tagbutt" onClick={() => { setTag("protein") }}>Protein</button>

        <button class="button-35 tagbutt" onClick={() => { setTag("amazon") }}>Amazon</button>

        <button class="button-35 tagbutt" onClick={() => { setTag("walmart") }}>Walmart</button>


    </div>



    <div class="sort">

    <a class="feedback-button" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf6hY-gmnjw29oxaBhc5S19n6j8AYUWo1AAIop0U_RNcaNfSw/viewform?usp=sf_link">Give Feedback 💜</a>

  <button class="dropdown-toggle sortbutt" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>

    <div class="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">

        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("calsPerDol") }}>Calories</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("protPerDol") }}>Protein</button>
        <button class="sortbuttitem dropdown-item" onClick={() => { setSortBy("") }}>None</button>
    </div>


    {/* <div className="results">

    {products.length} results

    </div> */}


    </div>

    </div>


        <div className="list">
            
            {stacks.map(stack => (

                <Stack 
                key={stack._id}
                id={stack._id}
                name = {stack.name}
                price = {stack.price}
                caloriesWholeStack = {stack.caloriesWholeStack}
                proteinWholeStack = {stack.proteinWholeStack}
                days = {stack.days}
                pricePerDay = {stack.pricePerDay}
                calsPerDay = {stack.calsPerDay}
                protPerDay = {stack.protPerDay}
                img = {stack.img}
                link = {stack.link}
                tag = {stack.tag}


                 />

            ))}



     </div>


    <Footer />

    </div>
    
);
}

export default StackList;