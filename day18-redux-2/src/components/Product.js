import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getProducts} from '../redux/actions/products.actions';



function Product(props) {
    console.log('daa', props)

    const getProducts = props.getProducts;

    useEffect(() => {
        getProducts();
    }, [getProducts])

    return (
        <div>
            <p>Product : </p>
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        product: props.product.dataProduct,
        isLoading: props.product.isLoading,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
