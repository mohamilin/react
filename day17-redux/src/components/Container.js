import React from 'react'
// import tambahan 

import {connect} from 'react-redux';
import {addProduct, minProduct} from '../redux/actions/cart.actions';

function Container({cart, addProduct, minProduct}) {
    return (
        <div>
            <p>Jumlah barang yang dibeli : {cart} </p>
            <button onClick = {() => {
                addProduct();
            }} >Tambah barang</button>
            <button onClick={()=> {
                minProduct();
            }}>Kurangi barang</button>
        </div>
    )
}


// agar connect dengan reduxnya
const mapStateToProps = ({cart}) => {
  return {
    cart : cart
  }
}

//agar connect dengan reduxnya dan button bisa berjalan
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: () => dispatch(addProduct()),
        minProduct: () => dispatch(minProduct()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Container)
