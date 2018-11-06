import React from 'react';


const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
            className='bg-light-blue pa1 br3 ba b--blue shadow-1'
            type='search' 
            placeholder='search name of robots'
            onChange={searchChange}
            />
            {/* {console.log(searchChange)} */}
        </div>
    );
}

export default SearchBox;