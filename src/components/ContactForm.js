import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import butterflys from '../images/fabric/butterflys.jpg';
import MyModal from './MyModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InventoryData from './Data/InventoryData';
import { useInventoryContext } from './Context/AppContext';
import Cart from './Cart';



export default function ContactForm() {
    
    const [selectedItem, setSelectedItem] = useState();
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.send("service_3qciw9y","template_wwurhxt",{
        message: document.querySelector('#floatingTextArea').value,
        Name: document.querySelector('#floatingName').value,
        reply_to: document.querySelector('#floatingEmail').value,
        },
        'dTGtGo1_I0ESELnMg')
        .then((result) => {
            console.log(result.text);
            setShow(true)
        }, (error) => {
            console.log(error.text);
        });

        
    //   emailjs.sendForm('service_6xiqkyp', 'template_te9hpm9', form.current, 'ChUYKVVUT3MpRwQ5j')
            
      e.target.reset()
    };

    // function han(selectedItemName) {
    //   setSelectedItem(inventory.find(item => item.name === selectedItemName))
    // }

   

    

    

    return (
        <div id="contact" className="fullscreen bg-opacity-75 deskPicture" >
            <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container">
        <div className="row h-100 d-flex align-content-center ">
          <div className="col mt-5 p-5 width-50-100 h-50 align-left rounded-4 bg-light">
              <h2 className="pb-4 font-36 bold">Your Order</h2>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-floating contact-form__container">
                      <input type="text" name="user_name"  className="form-control contact-form__input" id="floatingName" placeholder="Name" required />
                      <label for="floatingInput" className="contact-form__label">Name</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <input type="email" name="user_email" className="form-control contact-form__input" id="floatingEmail" placeholder="name@example.com" required />
                      <label for="floatingInput" className="contact-form__label">Email</label>
                  </div>

                  
                <div className="mb-3 form-floating">
                <textarea name="message" className="form-control contact-form__input contact-form__message-input"
                        id="floatingTextArea"
                        placeholder="Message"
                        rows="4"
                         required></textarea>
                      <label for="floatingTextarea" className="contact-form__label">Message</label>
                </div>
              <input type="submit" className="btn btn-primary py-2 px-5 rounded-pill text-dark font-24 bold contact-form__submit-btn hover-grow" value="Send" />
              </form>
              <div className="pt-3">
              We do not take payments through our website. Please send an e-transfer to EMAIL once you have completed the order. Shipping may cost extra<br/>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thanks For Reaching Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>We will contact you soon!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    OK
                </Button>
                </Modal.Footer>
            </Modal>
          </div>
          <div className="col">
            <Cart/>
          

          </div>
        
        </div>
        
      </div>
      
            </div>

            
            
            
        </div>
    )
}
