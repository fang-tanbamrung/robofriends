import React from 'react';

const Cards = ({id, name, email}) => {
    return (
        <div className='flex'>
            <div style={{width:'300px'}} className='bg-light-silver dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
                <div>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
                    
            </div>

        </div>
    );
}

export default Cards;