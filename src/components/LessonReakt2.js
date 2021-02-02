import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from "axios";


import {Modal, ModalBody, ModalFooter} from 'reactstrap'

class LessonOttizUch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: [],
            modalOpen: false,
            selectedIndex: -1
        }
    }

    // con

    render() {

        const changeModal = () => {
            this.setState({modalOPen: !this.state.modalOpen})
        };


        const exampleFunctions = () => {
            let numbers = [34, 45, 75, -55, -23, 34];

            for (let i = 0; i < numbers.length; i++) {
                console.log(numbers[i]);
            }

            numbers.forEach((item, index, array) => {
                // item <==========> numbers[i]
                // index <========>  i
                // array <========> numbers
                console.log(item + " - " + index);
                console.log(array)
            });
            // forEach - arrayni har bir elementi bo'yicha siklni takrorlantirib berish uchun

            let mappedNumbers = numbers.map((item, index) => {
                if (item % 2 == 0) {
                    return (item + 2);
                } else {
                    return (item * 3);
                }
                // return (index + 1) + " - element: " + item;
            });
            // map - berilgan arrayning uzunligiga teng bo'lgan yangi array hosil qilish uchun,
            // bunda yangi arrayning har bir elementi returndagi qiymatga teng bo'ladi

            console.log(mappedNumbers);

            let filteredNumbers = numbers.filter((item, index) => {
                return item > 0;
            });
            // filter - return da berilgan shartga mos keluvchi elementlardan iborat bo'lgan yangi
            // array hosil qilish uchun;

            console.log(filteredNumbers);

            let sortedNumbers = numbers.sort((a, b) => {
                return b - a;
            });

            console.log(sortedNumbers);
        };

        exampleFunctions();

        const addStudent = (event, values) => {
            // console.log(errors);
            console.log(values);

            this.state.students.push(values);
            this.setState({students: this.state.students});


            this.form && this.form.reset();
            console.log(this.state.students);
        };

        const deleteStudent = (index) => {
            this.state.students.splice(index, 1);

            this.setState({students: this.state.students});
        };

        const editStudent = (index) => {

            this.setState({selectedIndex: index});
            changeModal();

        };

        const saveStudent = (event, value) => {
            this.state.students[this.state.selectedIndex] = value;
            this.setState({students: this.state.students});
            changeModal();
        };

        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={addStudent} ref={c => (this.form = c)}>
                                        <AvField name="firstName" type="text"
                                                 errorMessage="Bu maydon to'ldirilishi shart" label="Student's name"
                                                 required/>
                                        <AvField name="lastName" type="text" label="Student's surname" required/>
                                        <AvField name="address" type="text" label="Student's address" required/>
                                        <AvField name="birthday" type="date" label="Student's birthday" required/>

                                        <AvField name="studyType" type="select" label="Study type" required>
                                            <option>Choose</option>
                                            <option value="Grant">Grant</option>
                                            <option value="Contract">Contract</option>
                                        </AvField>

                                        <button type='submit' className='btn btn-success btn-block'>Add student</button>

                                    </AvForm>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card">
                                <div className="card-body">


                                    <table className='table table-striped table-hover'>
                                        <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Address</th>
                                            <th>Birthday</th>
                                            <th>Study type</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.students.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{(index + 1)}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.birthday}</td>
                                                    <td>{item.studyType}</td>
                                                    <td>
                                                        <button type='button' className='btn btn-primary'
                                                                onClick={() => editStudent(index)}>E
                                                        </button>
                                                        <button type='button' className='btn btn-danger'
                                                                onClick={() => deleteStudent(index)}>D
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modalOPen} toggle={changeModal}>
                    <AvForm model={this.state.students[this.state.selectedIndex]}>
                    <ModalBody>
                        <AvField onValidSubmit={saveStudent} name="firstName" type="text"
                                 errorMessage="Bu maydon to'ldirilishi shart" label="Student's name"
                                 required/>
                        <AvField name="lastName" type="text" label="Student's surname" required/>
                        <AvField name="address" type="text" label="Student's address" required/>
                        <AvField name="birthday" type="date" label="Student's birthday" required/>

                        <AvField name="studyType" type="select" label="Study type" required>
                            <option>Choose</option>
                            <option value="Grant">Grant</option>
                            <option value="Contract">Contract</option>
                        </AvField>
                    </ModalBody>
                    </AvForm>
                    <ModalFooter>
                        <button type='submit' className='btn btn-success'>Save</button>
                        <button type='button' className='btn btn-secondary' onClick={changeModal}>Cancel</button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default LessonOttizUch;