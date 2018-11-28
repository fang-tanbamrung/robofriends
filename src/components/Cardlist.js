import React from 'react';
import Cards from './Cards';

const Cardlist = ({robots}) => {
    const card = robots.map((user,i) => {
        return <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div className=''>
            <div className='ma3 flex'>
                {card}
                {/* <Cards id={robots[0].id} name={robots[0].name} email={robots[0].email} /> */}
    
            </div>
        </div>
    );

}

export default Cardlist