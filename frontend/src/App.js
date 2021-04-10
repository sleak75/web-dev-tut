import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /* jsx translates html-as-variable to react element */
    /* class is a reserved word, so replace it with className */
    <div className="grid-container">
        <header className="header"> 
            <div className="brand">
                <button onclick="openMenu()"> &#9776; </button>
                <a href="index.html">amazona</a>
            </div>
            <div className="header-links">
                <a href="index.html">Sign In</a>
                <a href="index.html">Cart</a>
            </div>

        </header>
    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-closebutton" onclick="closeMenu()">X</button> 
        <ul>
            <li><a href="index.html">Pants</a></li>
            <li><a href="index.html">Shirts</a></li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <ul className="products">
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
                <li> 
                    <div className="product">
                        <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                        <div className="product-name">
                            <a href="product.html">Slim shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">4 stars (15 reviews)</div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
    <footer className="footer">
    Blah blah
    </footer>
    </div>


  );
}

export default App;
