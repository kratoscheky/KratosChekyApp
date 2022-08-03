import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

const Routes = () => {
    return (
        <NativeRouter>
            <Route exact path="/" component={Home}/>
        </NativeRouter>
    )
}

export default Routes;