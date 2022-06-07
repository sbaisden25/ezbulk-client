import './product.css';

function Product({ id, name, price, caloriesPerServing, proteinPerServing, totalFatPerServing, carbsPerServing, servingsPerProduct, img, link}) {


    function getCalsPerDol () {
      return (caloriesPerServing * servingsPerProduct / price).toFixed()
    }

    function getProtPerDol () {
      return (proteinPerServing * servingsPerProduct / price).toFixed()
    }

    function getFatPerDol () {
      return (totalFatPerServing * servingsPerProduct / price).toFixed()
    }

    function getCarbsPerDol () {
      return (carbsPerServing * servingsPerProduct / price).toFixed()
    }
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


    <div class="prodCard">


      <h6>{name}</h6>

      <a href={link}>
        <img src={img} alt="product"  />
      </a>

      <div class="stats">

        <div class="calss">

        <h6>{getCalsPerDol()} calories</h6>

        </div>

        <div class="prots">

        <h6>{getProtPerDol()}g protein</h6>

        </div>

        <div class="fats">

        <h6>{getFatPerDol()}g fat</h6>

        </div>

        <div class="carbss">

        <h6>{getCarbsPerDol()}g carbs</h6>

        </div>

      </div>

      {/* <a href="#" onClick={() => { deleteProduct(id) }}>Delete</a> */}


    </div>



);
}

export default Product;