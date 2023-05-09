import { Component } from "react";
import check from './checkmark-white.png';


export class ToDo extends Component {
    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({ userInput: e });
        console.log(e);
    }
    addItem(input) {
        if (input === '') {
            alert('Please enter an item')
        } else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({ toDoList: listArray, userInput: '' });
        }
    }
    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({ toDoList: listArray });
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" placeholder="Write your task here"
                            onChange={(e) => { this.onChangeEvent(e.target.value) }}
                            value={this.state.userInput} />
                    </div>
                    <div className="container">
                        <button className="container btn btn-add" onClick={() => this.addItem(this.state.userInput)} >ADD</button>
                    </div>
                    <div>
                        <ul>
                            {this.state.toDoList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}>
                                    <img src={check} width="20px" alt="checkmark" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="container">
                            <button onClick={() => this.deleteItem()} className=" btn btn-delete">DELETE</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}