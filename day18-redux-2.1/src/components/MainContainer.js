import React, {useEffect} from 'react'
import {connect}  from 'react-redux';
import {getUsers} from '../redux/actions/user.actions';

function MainContainer(props) {
    console.log('component', props);

    const getUsers = props.getUsers;


    useEffect(() => {
        getUsers();
      },[]);


      return (
        <div>
          <h1>Users</h1>
          <h1>Data users</h1>
          {props.users.map((item, index) => (
              <div key={index}>
                <h3>Name: {item.nama}</h3>
              </div>
            ))
          }
        </div>
      );
    }
    
    const mapStateToProps = (props) => {
      console.log("props", props);
      return {
        users: props.data,
        // users: props.users.data,
        // isLoading: props.users.isLoading,
        // users: props
      };

    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        getUsers: () => dispatch(getUsers()),
      };
    };
    

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
