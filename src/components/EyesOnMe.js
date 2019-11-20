import React from 'react';

class EyesonMe extends React.Component {
    
    handleOnFocus = () => {
        console.log('Good!')
    }

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    

    render() {
        return (
            <button 
                onFocus={this.handleOnFocus} 
                onBlur={this.handleOnBlur}> 
            </button>
        )
    }
}

export default EyesonMe
