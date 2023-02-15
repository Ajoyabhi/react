// import Heading from "./components/heading";
import { Component  } from "react";
import Heading from "./headingprops";
// import Banner from './components/banner';
// import Headingclass from "./components/headingClass";
// function App(){
//     return(
//         <>
//             <Heading />
//             {/* <Headingclass /> */}
//             <Banner />

//         </>
//     )
    
    
// }

// export default App;

// function handleClick(event){
//     console.log("Button is clickde", event.target.id);
// }

// function App(){
//     return (
//         <>
//         <Heading/>
//         <button onClick={handleClick} id= "button-1">Click me</button>
//         <button onClick={handleClick} id= "button-2">Primary</button>
//         <input
//       onBlur={(e) => {
//         console.log('Triggered because this input lost focus');
//       }}
//       placeholder="onBlur is triggered when you click this input and then you click outside of it."
//     />
//         </>
//     )
// }

// export default App;



// Event handelling topic codes


// class App extends Component {
//     handleClick(event){
//         console.log("Button is clickde", event.target.id);
//     }

//     render(){
//         return (
//             <>
//             <Heading/>
//             <button onClick={this.handleClick} id= "button-1">Click me</button>
//             <button onClick={this.handleClick} id= "button-2">Primary</button>
//             <input
//           onBlur={(e) => {
//             console.log('Triggered because this input lost focus');
//           }}
//           placeholder="onBlur is triggered when you click this input and then you click outside of it."
//         />
//             </>
//         )
//     }

// }
// export default App;


// States in Class Components

// class App extends Component {
//     state = {
//         counter: 1,
//         heading:"welcome to React"
//     }

//     handelClick = (event)=>{
//         let localCounter = this.state.counter;
//         this.setstate({
//             counter : localCounter+1,
//             heading : "Learning States in React"

//         })
//     }
//     handelInputChange = (event)=>{
//         this.setstate({
//             inputText : event.target.value
//         })
//     }

//     render(){
//         return(
//             <>
//             <h1>{this.state.heading}</h1>
//             <button onClick={this.handelClick}>Add</button>
//             <p>{this.state.counter}</p>
//             <input onChange={this.state.inputText}/>
//             <p>{this.state.inputText} </p>
//             </>
//         )
//     }

// }
// export default App;

// props in react

class App extends Component {

    state = {
        heading : "welcome to React course"

    }

    render() {
        return(
            <>
            <Heading heading = {this.state.heading} />

            </>
        )
    }
}
export default App;