import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const {userInfo} = useContext(AuthContext);
const data = userInfo.GetPatronInfo;
let books = '0';

console.log(data);