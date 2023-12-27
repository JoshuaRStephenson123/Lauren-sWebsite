

function addBasket(){

}

function ProductCard () {
    return(
        <div>
            <div className="product__card">
                <img src="#" alt="image goes here" className="product__card__img" />
                <h4 className="product__card__title">Product Name Goes Here</h4>
                <button onClick={addBasket} className="product__card__btn"><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
        </div>
    )
}

export default ProductCard;