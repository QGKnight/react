import React, { Component } from 'react';
import Cells from './Cells'
import './style.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['111']
        }
    }
    render() {
        return (
            <div>
                {/* {坚实的高房价看到过} */}
                <div>
                    <input className="input" value={this.state.inputValue} onChange={this.handleChange} />
                    <button onClick={this.handBtn}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, key) => {
                            return (
                                <Cells key={key} item={item} index={key} handDele={this.deteItem.bind(this)}></Cells>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handBtn = () => {
        this.setState({
            inputValue: "",
            list: [...this.state.list, this.state.inputValue]
        })
    }
    deteItem(index) {
        console.log(index)
        const list = [...this.state.list];
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}
export default Todo;



