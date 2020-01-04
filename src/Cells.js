import React, { Component } from 'react';
class Cells extends Component {
    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this);
    }
    render() {
        return (
            < div onClick={this.handClick}>{this.props.item}</div >
        )
    }
    handClick(){
        alert(this.props.index)
        this.props.handDele(this.props.index)
    }
}
export default Cells;