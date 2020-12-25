import React from 'react';
import { connect } from 'react-redux';
import { firestore, convertCollectionSnapshsotToMap } from './firebase';

import { fetchUsers } from './redux/user/user.action';
import User from './components/user.component';


class App extends React.Component {
    
    componentDidMount() {
        const { fetchUsers } = this.props;
        
        const collectionUserRef = firestore.collection('users');
        collectionUserRef.onSnapshot(async snapshot => {
            const userCollectionMap=convertCollectionSnapshsotToMap(snapshot);
            fetchUsers(userCollectionMap);
        });
    }

    render() {
        return (
            <div>
               <User/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchUsers:(users)=>dispatch(fetchUsers(users))}
}

export default connect(null,mapDispatchToProps)(App);
