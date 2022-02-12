import React from 'react';
import Navigation from '../navbar/navbar';
import BusketItem from './Sub_Component/BusketItem';

import './busket.css';

function Busket() {

    return (
    
    <>
        <Navigation></Navigation>

        <div className='BusketScreen'>
            <div className='BusketScreen__Left'>
                <h2>Book Busket</h2>
                <BusketItem></BusketItem>
            </div>
            <div className='BusketScreen__Right'>
                <div className='BusketScreen__Info'>
                    <p>Subtotal (0) items</p>
                    <p>$1</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    </>
    
    );
    }

export default Busket