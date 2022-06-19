import './stack.css';

function Stack({ id, name, price, caloriesWholeStack, proteinWholeStack, days, pricePerDay, calsPerDay, protPerDay, img, link}) {


/* 
    function editProduct(id) {
      axios.post('http://localhost:5000/products/update/'+id)
      .then(res => console.log(res.data))
    }

    function deleteProduct(id) {
      axios.delete('http://localhost:5000/products/'+id)
        .then(response => { console.log(response.data)
          window.location.reload(false)});
    }
 */


  return (


    <div class="stackCard">


      <h6>{name}</h6>

      <a href={link}>
        <img src={img} alt="product"  />
      </a>

      <div class="stats">

        <div class="calss">

        <h6>{caloriesWholeStack} calories</h6>

        </div>

        <div class="prots">

        <h6>{proteinWholeStack}g protein</h6>

        </div>


      </div>

      {/* <a href="#" onClick={() => { deleteProduct(id) }}>Delete</a> */}


    </div>



);
}

export default Stack;