import React, {useState} from 'react';
import { Button,Modal} from 'react-bootstrap';

const NewCake = (props) => {

   const handleOpen = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleChange = (event) => {
        setCake({...cake,[event.target.name]: event.target.value});
    }

    const handleSave = () => {
        props.addCake(cake);
        handleClose();
    }

    const [show, setShow] = useState(false);
    const [cake, setCake] = useState({
        name:'', description:'', imageURL: ''
    });

    return (
              <div>
                <div className="modalClass">
                  <Button className="cakeBtn" onClick={handleOpen}>New Cake</Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>New Cake</Modal.Header>
                  <Modal.Body>
                  <div>
                    <input type="text" placeholder="Name" name="name" size="40" value={cake.name} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Description" name="description" size="40" value={cake.description} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Image URL" name="imageURL" size="40" value={cake.imageURL} onChange={handleChange}/><br/>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleSave}>Save</Button>
                  </Modal.Footer>
                </Modal>
              </div>
    );
};

export default NewCake;
