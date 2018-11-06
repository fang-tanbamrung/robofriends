import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfeild:''
        }
        console.log('constructor');

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}))
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value});
        
    }

    render(){
        const robotSearch = this.state.robots.filter(robot => {
            // return robot.name.toLocaleUpperCase().includes(this)
            return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        if(this.state.robots === 0){
            return(<h1>Loading...</h1>)
        }else{
            console.log('render');
            return( <div className='tc'>
                        <h1>robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
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

export default App;
