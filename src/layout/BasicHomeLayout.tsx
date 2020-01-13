import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import SidderComponent from '../components/SidderComponent'

const BasicHomeLayout: React.SFC = (props) => {
    return (
        <div>
            <HeaderComponent />
            3333
            {props.children}
        </div>
    )
};

export default BasicHomeLayout