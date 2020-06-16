import React from 'react';
import { withFirebase } from  '../Firebase';

function ActivityList(props) {
    
    return (
        <>
            <h1>Hello ActivityList</h1>
        </>
    )
};
export default withFirebase(ActivityList);