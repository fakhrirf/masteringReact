import React from "react";
import "./assets/css/style.css";
import Images from "./components/Images";


// function App({title}) {
// return ( 
//     <div>
//         <div className="bg-gray-600 text-white p-5 border"> {title} </div>
//     </div>
//     );
// }

class App extends React.Component {
    constructor(props){
        console.log("App constructor");

        super(props);
        this.state = { title : "Hello React 2", isShowing: false};
        // this.handleClick = this.handleClick.bind(this);
    }

    // states are Immutable
    componentDidMount() {
        console.log("App Mounted");
        // this.setState({title: "hello LifeCycle"});
    }


    




    handleClick = () =>{
        this.setState({ isShowing:!this.state.isShowing });
    } 



    render() {
        console.log("App Render");
        return (
        <section className="flex justify-center">
            <div className="w-1/2">
                <div className="text-center">
                    <div className="my-4">{this.state.title}</div>
                        <button 
                            className="p-2 my-2 bg-blue-700 text-white" 
                            onClick = {this.handleClick}
                            // onClick= {() => (this.setState({ isShowing:!this.state.isShowing }))}
                            >
                            Toggle Image
                            </button>
                    </div>
                    {
                            this.state.isShowing ? (
                            <Images/>
                            ): null
                    }
            </div>
        </section>
        );
    }
}

export default App;