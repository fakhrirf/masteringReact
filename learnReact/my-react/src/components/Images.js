import React, { Component } from 'react'

export default class Images extends Component {
     componentDidMount() {
         const interval = setInterval(() => {  
            console.log("Hello");
         }, 1000);
     }


    componentWillUnmount(){
        console.log("App Unmounted");
    }


    render() {
        return (
            <div>
                 <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt="bycycle" />
            </div>
        )
    }
}
