import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getProducts} from '../redux/actions/products.actions';


function Products(props) {
    console.log('componenet', props)

    const getProducts = props.getProducts;

    useEffect(() => {
        getProducts();
    }, [getProducts])

    return (
        <div>
            <h1>Produk</h1>
            {props.product.map((item, index) => (
                <div key={index}>
                    <p>Product : {item.name} </p>
                </div>
            ))}
        </div> 
    )
}


const mapStateToProps = (props) => {
    console.log("data props", props);
    return {
      product: props.productReducers.data,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () =>  dispatch(getProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)
