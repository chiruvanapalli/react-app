import React from "react";

const WithCounter = (OriginalComponent, increment) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          clickCounter = () => {
              this.setState( prevState => {
                  return {
                      count : prevState.count + increment
                  }
              });
              console.log('hover counter')
          }
        render(){
            return <OriginalComponent count = {this.state.count} clickCounter={this.clickCounter} />
        }
    }

    return WithCounter;
}


export default WithCounter;