import React, { useEffect } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';

// All the components import is here

import { Link,useHistory } from "react-router-dom";

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/Categories.css';

import img1 from '../UI/CC 1.JPEG XR'
import img2 from '../UI/CC 2.JPEG XR'
import img3 from '../UI/CC 3.JPEG XR'
import img4 from '../UI/CC 4.JPEG XR'
import img5 from '../UI/CC 5.JPEG XR'
import img6 from '../UI/CC 6.JPEG XR'
import img7 from '../UI/CC 7.JPEG XR'
import img8 from '../UI/CC 8.JPEG XR'
import img9 from '../UI/CC 9.JPEG XR'
import img10 from '../UI/CC 10.JPEG XR'

const Categories = () => {
    const history = useHistory();
    const handleRowClick = () => {
      history.push(`/index/details`);
    }  

    useEffect(() => {

    })

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <fieldset>
                                <legend>CATEGORIES</legend>

                                <div className="container">
                                    <div className="row">
                                        <Link className="sub-title-categories" to="/category/details">Cryptocurrency [CC]. </Link>
                                    </div>
                                    <div className="row rowccimages">
                                        <img className="CCImages" src={img1} alt="" />
                                        <img className="CCImages" src={img2} alt="" />
                                        <img className="CCImages" src={img3} alt="" />
                                        <img className="CCImages" src={img4} alt="" />
                                        <img className="CCImages" src={img5} alt="" />
                                        <img className="CCImages" src={img6} alt="" />
                                        <img className="CCImages" src={img7} alt="" />
                                        <img className="CCImages" src={img8} alt="" />
                                        <img className="CCImages" src={img9} alt="" />
                                        <img className="CCImages" src={img10} alt="" />
                                    </div>
                                </div>
                                {/* table here   */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="trrow">
                                                <th scope="col">SYMBOL</th>
                                                <th scope="col">SIZE</th>
                                                <th scope="col">PRICE</th>
                                                <th scope="col">SUPPLY</th>
                                                <th scope="col">MARKETCAP</th>
                                                <th scope="col">SWAP FEE</th>
                                                <th scope="col">CUMULATIVE FEES</th>
                                                <th scope="col">VOLUME</th>
                                            </tr>
                                        </thead>
                                        <tbody>            
                                                <tr onClick={()=> handleRowClick()} className="trrow">
                                                    <th scope="row">CC10</th>
                                                    <td>10</td>
                                                    <td>$77.67</td>
                                                    <td>384,327.85</td>
                                                    <td>$29,850,342.27</td>
                                                    <td>%2.5</td>
                                                    <td>$536135.39</td>
                                                    <td>$2,204,485.42</td>
                                                </tr>              
                                        </tbody>
                                    </table>
                                </div>
                                {/* table here */}
                                <div className="container">
                                    <div className="row">
                                        <Link className="sub-title-categories" to="/category/details">Decentralized Finance [DEFI]</Link>
                                    </div>
                                    <div className="row rowccimages">
                                        <img className="CCImages" src={img2} alt="" />
                                        <img className="CCImages" src={img3} alt="" />
                                        <img className="CCImages" src={img4} alt="" />
                                        <img className="CCImages" src={img5} alt="" />
                                        <img className="CCImages" src={img6} alt="" />
                                    </div>
                                </div>
                                {/* table here   */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="trrow">
                                                <th scope="col">SYMBOL</th>
                                                <th scope="col">SIZE</th>
                                                <th scope="col">PRICE</th>
                                                <th scope="col">SUPPLY</th>
                                                <th scope="col">MARKETCAP</th>
                                                <th scope="col">SWAP FEE</th>
                                                <th scope="col">CUMULATIVE FEES</th>
                                                <th scope="col">VOLUME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr onClick={()=> handleRowClick()} className="trrow">
                                                <th scope="row">DEFI5</th>
                                                <td>5</td>
                                                <td>$104.82</td>
                                                <td>363,837.68</td>
                                                <td>$38,137,806.79</td>
                                                <td>%2.5</td>
                                                <td>$524831.80</td>
                                                <td>$1,512,551.56</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* table here */}
                                <br /><br />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* The Footer Component */}
            <Footer />
            {/* The Footer Component */}
        </div>
    )
}
export default Categories;