import React, {Component} from 'react';
import './main.css';

class Trello extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCardShow: false,
            boards: [],
            boardTitle: "",
            selectedIndex: -1
        }
    }


    render() {

        const changeCardVisible = () => {
            this.setState({isCardShow: !this.state.isCardShow})
        };

        const addBoard = () => {

            // if (this.state.selectedIndex >= 0) {
            //     this.state.boards.splice[this.state.selectedIndex].title = this.
            //


            this.state.boards.push({
                // title,
                title: this.state.boardTitle,
                items: []
            });


            changeCardVisible();
            this.setState({boards: this.state.boards, boardTitle: ""});

        };

        const deleteBoard = (index) => {
            this.state.boards.splice(index, 1);
            this.setState({addBoard: this.state.boards})
        };

        const handleChange = (e) => {
            this.setState({boardTitle: e.target.value})
        };

        const editBoard = (index) => {
            this.setState({boardTitle: this.state.boards[index].title, isCardShow: true, selectedIndex: index});


        };


        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <button type='button' onClick={changeCardVisible} className='btn btn-success'>Add board
                            </button>

                            <div className={`card mt-3 ${this.state.isCardShow ? '' : 'd-none'}`}>
                                <div className="card-body">
                                    {/*<form onSubmit={addBoard}>*/}
                                    <textarea value={this.state.boardTitle} className='form-control' name='boardTitle'
                                              onChange={handleChange} placeholder='Type here'/>

                                    <button type='button' onClick={addBoard}
                                            className={this.state.selectedIndex >= 0 ? "Edit" : "Add"}>
                                    </button>
                                    {/*</form>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index) => (
                                    <div className="col-4 mb-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 onClick={() => editBoard}>{item.title}</h5>
                                                <div className="close" onClick={() => deleteBoard(index)}>&times;</div>
                                            </div>
                                            <div className="card-body">

                                            </div>
                                            <div className="card-footer">
                                                <form>
                                                    <textarea name="item-title" className='form-control'/>
                                                    <button type='submit'
                                                            className="btn btn-success mt-3 d-block ml-auto">Add
                                                    </button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Trello;