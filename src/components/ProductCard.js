import Card from '../assets/images/card.jpg'

function ProductCard({product, price, balance, notAvailable, setProduct}) {
    return (
        <div className="ProductCard">
            <div className="ProductCard__image">
                <img src={Card} alt=""/>
                <div className="ProductCard__image-balance">
                    {balance}  &euro;
                </div>
            </div>
            <div className="ProductCard__body">
                <div className="ProductCard__price">
                    Preis: <span>{price} &euro;</span>
                </div>
                <div className="ProductCard__balance">
                    Saldo der Karte: <b>{balance} &euro;</b>
                </div>

                {
                    !notAvailable
                        ? <button className="ProductCard__more button" onClick={setProduct.bind(null, product)}>Kaufen</button>
                        : <div className="ProductCard__not-available">Fertige</div>
                }

            </div>
        </div>
    );
}

export default ProductCard;