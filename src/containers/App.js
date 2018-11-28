import React,{Component} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField,requestRobots} from '../actions';

const mapStateToProps = state => {
    return{
        searchField:state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }

}

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange,robots,isPending} = this.props;
        const robotSearch = robots.filter(robot => {
            // return robot.name.toLocaleUpperCase().includes(this)
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending?
            <h1>Loading...</h1>
        :
            
            <div className='tc'>
                <h1 className='robofriends'>{'robofriends'.toUpperCase()}</h1>
                <SearchBox searchChange={onSearchChange}/>
                {/* {console.log(typeof(this.onSearchChange))} */}
                <Scroll>
                    <Cardlist robots={robotSearch}/>
                </Scroll>
                
                {/* {console.log(typeof(this.state.robots))} */}
            </div>
            
        
}
   
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
