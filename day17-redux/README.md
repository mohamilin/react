<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->

#### DOCUMENTATION

1. Instal react : yarn create react-app <nama app>
2. Instal Redux : yarn add redux react-redux
3. Buat Folder untk setup reduxnya : redux => {actions, reducers, store}. didalam folder2x tsb buat file dengan type : <namafile.namafolder.js> untuk file dalam folder store cukup dengan <store.js>
4. Hapus component dalam Index.js dan App.js yang tidak dibutuhkan ya....

##### HAPPY CODING <CART FUNCTION>

```js

1. `Siapkan file-file yang diperlukan :
    - src/redux/actions/cart.actions.js
    - src/redux/reducers/cart.reducers.js
    - src/redux/store/store.js
    - src/components/Header.js
    - src/components/Container.js`
2. `Styling dasar dalam file-file di component `
3. `Hal-hal yang perlu diperhatikan yaitu :
    - file pada folder actions di export ke reducers kemudian file pada reducer di export ke store
    -  sehingga kita perlu menyusun konsep dasar bagaimana aplikasi kita kan berjalan.
    - KONSEP :
        - Kita akan membuat aplikasi terdiri dari header dan container yang berisikan mengenai fungsi cart dimana ketika kita akan menambahkan jumlah barang pada bagian container secara otomatis akan tampil pada bagian header atau biasanya oada bagian wishlist. `

        `Codingan awal Container.js : `
        import React from 'react'
        function Container() {
            return (
                <div>
                    <p>Jumlah barang yang dibeli : </p>
                    <button>Tambah barang</button>
                    <button>Kurangi barang</button>
                </div>
            )
        }
        export default Container

           `Codingan awal Header.js : `
           import React from 'react'
            function Header() {
                return (
                    <div>
                        <p>Jumlah Product : </p>
                    </div>
                )
            }
            export default Header

        `- Maka dibutuhkan dua buah fungsi untuk counter (menambahkan dan mengurangkan) tapi untuk penguranganya tidak boleh minus ya...
                action type :
                    - menambahkan : UP_PRODUCT
                    - mengurangkan : DOWN_PRODUCT
                function :
                    - UP_PRODUCT : addProduct
                    - DOWN_PRODUCT : minProduct
    `
4.`Configurasikan Index.js dengan menambahkan :`
    - <Provider store={store}> .... </Provider>
    - import {Provider} from 'react-redux';
    - import {store} from './redux/store/store';

5. `Pada file store.js kita dapat mengimpor file cart.reducers.js :`
    - import {createStore} from 'redux';
    - import Cart from '../reducers/cart.reducers';
    <br/>
    `- panggil Cart dengan cara berikut :`
    - export default createStore(Cart);

6. `nah, sekarang kita akan lakukan redux pada bagian action terlebh dahulu kemudian pada reducernya... `

    6.1.  `Pada cart.actions.js : `
        export const UP_PRODUCT = 'UP_PRODUCT'
        export const DOWN_PRODUCT = 'DOWN_PRODUCT'

        export const addproduct = () => {
            return {
                type: UP_PRODUCT,
            }
        }

        export const minProduct = () => {
            return {
                type: DOWN_PRODUCT,
            }
        }

    6.2. `Pada cart.reducers.js`
        -  `Kita lakukan import terhadap variable UP_PRODUCT dan DOWN_PRODUCT`
            <br/> `Kemudian memberikannya perintah untuk melakukan penambahan atau penguranganya.`
        - `Tahap pertama, kita perlu memberikan sebuah nilai default untuk state yang dibuat `
        - `Tahap kedua, membuat fungsi dengan parameter state yang dibuat dan action didalamnya kita berikan condition (switch) berdasarkan dua case yang telah dibuat pada action  `

        import {UP_PRODUCT, DOWN_PRODUCT } from '../actions/cart.actions';

        const defaultProduct = {
            cart : 0,
        }

        const counterProduct = (state = defaultProduct, action) => {
            switch (action.type) {
                case UP_PRODUCT:
                    return {
                        ...state,
                        cart : state.cart + 1
                    }
                case DOWN_PRODUCT: 
                    return {    
                        ...state,
                        cart : state - 1
                    }
                default:
                    return state;
            }
        }

        export default counterProduct;

7. `Nah, setelah codingan untuk redux nya selesai, kita kembali ke Container.js dan Header.js untuk menyambungkan dengan redux (istilahanya : connect) `

    7.1.  `Pada Container.js`
        - `import connect dari react-redux dan fungsi dari action type pada cart.action.js`
        - import {connect} from 'react-redux';
        - import {addProduct, minProducr} from '';
        - `untuk callback dengan function yang telah dibuat pada reduce gunakan :
                - mapStateToProps : memanggil value  
                - mapDispatchToProps : memanggil function addProduct dan minProduct
        - Kemudian dalam button buat property onClick yang dihubungkan dengan function addProduct dan minProduct
        - dan jangan lupa untuk panggil argument mapStateToProps dan mapDispatchToProps dengan connect  sehingga : `
        
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
8. `Nah sekarang untuk bagian headernya lebih mudah yaitu tinggal gunakan mapStateToProps untuk memanggil nilainya`
<br/> `dan jangan lupa connect dengan react-redux nya ya.... liat pada container, kalo bingung.....`
    - 

9. `setelah kita medapatkan sebagaimana yang kita konsepkan di awal tadi... langkah berikutnya adalah styling` <br/>
    `utk styling bisa gunakan freamwork atau sass/css, suka-suka kalian saja sih, klo saya lebh suka pake material UI.`