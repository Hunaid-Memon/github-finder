import React, {Fragment} from 'react';
import Search from '../Users/Search';
import Users from '../Users/Users'

const Home = () => {
    return (
        <Fragment>
            <Search></Search>
            <Users></Users>
        </Fragment>
    )
}

export default Home;