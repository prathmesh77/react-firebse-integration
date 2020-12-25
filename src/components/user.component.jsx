import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionPreview } from '../redux/user/user.selector';

const User = ({ users }) => {
    return (
        <div>
            {   
                <ul>
                    {users.map(user =>
                        <div>
                             <li key={user.id}>{user.name}</li>
                            <p>{user.account}</p>
                        </div>
                       
                    )}
                </ul>
            }
        </div>
    );
};


const mapStateToProps = (state) => {
    return {users:selectCollectionPreview(state)}
}

export default connect(mapStateToProps)(User);