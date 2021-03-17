import React from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import axios from "axios";

const UserModal = () => {

    const [show, setShow] = React.useState(false);

    const [users, setUsers] = React.useState([])

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        await axios.get("http://localhost:8080/api/admin/get_users").then(response => {
            console.log(response)
            setUsers(response.data.message)
        });
        setShow(true);
    }



    return (
        <>
            <button className='transparent-button' onClick={handleShow}>
                Список пользователей
            </button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Зарегистрарованные пользователи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped hover responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Возраст</th>
                            <th>Почта</th>
                            <th>Баланс</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.balance}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserModal;
