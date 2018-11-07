import React,{Component} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import { setSearchField } from '../action';

const mapStateToProps = (state) => {
    return  {
        searchField:state.searchField
            }
    }
const mapDispatchToProps = (dispatch) => {
    return {onSearchChange: (event) => dispatch(setSearchField(event.target.value))}
}


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            // searchfeild:''
        }
        // console.log('constructor');

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}))
        // console.log('componentDidMount');
    }

    // onSearchChange = (event) => {
    //     this.setState({searchfeild: event.target.value});
        
    // }

    render(){
        const {robots} = this.state;
        const {searchField,onSearchChange} = this.props;
        const robotSearch = robots.filter(robot => {
            // return robot.name.toLocaleUpperCase().includes(this)
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots === 0){
            return(<h1>Loading...</h1>)
        }else{
            // console.log('render');
            return( <div className='tc'>
                        <h1>robofriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                        {/* {console.log(typeof(this.onSearchChange))} */}
                        <Scroll>
                            <Cardlist robots={robotSearch}/>
                        </Scroll>
                        
                        {/* {console.log(typeof(this.state.robots))} */}
                    </div>
                    );
        }
}
   
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
