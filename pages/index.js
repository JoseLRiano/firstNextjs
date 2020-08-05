import React, { Component } from "react";

class Index extends Component {
    constructor(props){
        super(props);
    }
    static async getInitialProps(){
        return {res: console.log("FETCHING YOUR DATA INSINE GETINITIALPROPS!")};
    }
    render() {
        return (  
            <div>
                <h1>Our Index page</h1>
            </div>
        );
    }
}
export default Index;