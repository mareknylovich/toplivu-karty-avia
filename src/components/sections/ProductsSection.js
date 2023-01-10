import Card from '../../assets/images/card.jpg'
import { useState } from 'react'

import ReactModal from 'react-modal';
import ProductCard from '../ProductCard'

const products = [
{
    price: '25',
    balance: '50',
    notAvailable: true
},{
    price: '50',
    balance: '100'
},{
    price: '100',
    balance: '200'
},{
    price: '250',
    balance: '500'
},{
    price: '750' ,
    balance: '1 500'
},{
    price: '1 000',
    balance: '2 000'
},]

ReactModal.setAppElement(document.getElementById('root'));

function ProductsSection() {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function setProduct(product) {
        if (!product) return
        setCurrentProduct(product)
        openModal()
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setCurrentProduct(null)
        setIsOpen(false);
    }

    return (
        <section className="Products section" id="products">
            <div className="Products__inner container">
                <h1 className="Products__title title">
                    Wählen Sie die Stückelung der Tankkarte:
                </h1>
                <div className="Products__content">
                    {products.map(product => {
                        return (
                            <div
                                className="Products__item"
                                key={product?.price}
                            >
                                <ProductCard
                                    product={product}
                                    image={product.image}
                                    price={product.price}
                                    balance={product.balance}
                                    notAvailable={product.notAvailable}
                                    setProduct={setProduct}
                                />
                            </div>
                        )
                    })}

                </div>

                {currentProduct && <ReactModal
                    ariaHideApp={true}
                    closeTimeoutMS={200}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Products Modal"
                >
                    <div className="ProductsModalContent">
                        <button
                            className="ProductsModalContent__close"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <h2 className="ProductsModalContent__title">
                            Die von Ihnen gewählte Karte:
                        </h2>
                        <div className="ProductsModalContent__image">
                            <img src={Card} alt="" />
                            <div className="ProductsModalContent__image-balance">
                                {currentProduct.balance} &euro;
                            </div>
                        </div>
                        <div className="ProductsModalContent__price">
                            Preis: {currentProduct.price} &euro;
                        </div>
                        <div className="ProductsModalContent__balance">
                            Saldo der Karte: {currentProduct.balance} &euro;
                        </div>
                        <form className="ProductsModalContent__form">
                            <div className="ProductsModalContent__form-item">
                                <input className="form-input" type="text" placeholder="Ihr Name"/>
                            </div>
                            <div className="ProductsModalContent__form-item">
                                <input className="form-input" type="text" placeholder="Rufnummer"/>
                            </div>
                            <button
                                type="submit"
                                className="ProductsModalContent__action button"
                            >
                                Kaufen
                            </button>
                        </form>
                        <div className="ProductsModalContent__description">
                            Nach der Bezahlung wird sich unser Mitarbeiter mit Ihnen in Verbindung setzen und Ihnen mitteilen, wie Sie eine Tankkarte erhalten können.
                        </div>
                    </div>
                </ReactModal>}
            </div>
        </section>
    );
}

export default ProductsSection;
