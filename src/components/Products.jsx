import './Products.css';

const products = [
    { id: 1, name: 'Cat', price: '$20', img: 'https://images.unsplash.com/photo-1642303073834-95cf6aac1477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Dog', price: '$10', img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww' },
    { id: 3, name: 'Bird', price: '$50', img: 'https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D' }
];

const Products = () => {
    return (
        <section className="products">
            <h2> Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
