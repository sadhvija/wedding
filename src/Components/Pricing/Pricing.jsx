import React from 'react'
import './Pricing.css'
const Pricing = () => {
    return (
        <>
        <div class="price">

            <div class="pricing-container">
                <h2 class="pricing-title">PRICING</h2>
                <div class="toggle-wrapper">
                    <input type="radio" id="monthly" name="pricing" class="toggle-input" checked />
                    <label for="monthly" class="toggle-label">Monthly</label>

                    <input type="radio" id="quarterly" name="pricing" class="toggle-input" />
                    <label for="quarterly" class="toggle-label active">Quarterly</label>

                    <input type="radio" id="lifetime" name="pricing" class="toggle-input" />
                    <label for="lifetime" class="toggle-label">Lifetime</label>

                    <div class="toggle-slider"></div>
                </div>
            </div>
            <div className='whole-div'>
                <div className="pricing-card">
                    <div className='downloads'>
                        <h3>Unlimited Downloads</h3>
                        <ul>
                            <li>Lorem ipsum dolor, sit amet consectetur.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur.</li>

                        </ul>
                    </div>
                    <div className='prices'>
                        <p className="old-price">₹ 30000</p>
                        <h2 className="new-price">₹ 22999</h2>
                        <button className='limited-access'>For Limited Time!</button>
                    </div>

                </div>
                <button className="cta-button">Try ShaadiPix for Free ✨</button>
            </div>


        </div>
        </>)
};
export default Pricing;