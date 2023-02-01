import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


export class LoginForm extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center align-content-center'>
                <Card className='border border-dark' style={{ width: '25em' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form>
                            <Form.Group className=''>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' />
                            </Form.Group>
                            <Form.Group className=''>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' />
                            </Form.Group>
                            <Form.Group className='d-flex justify-content-end mt-2' >
                                <Button type='submit' size='sm'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}