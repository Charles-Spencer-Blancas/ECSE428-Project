import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { useState } from 'react';
import {get, post} from "../utils/client";

const SignupStyle = styled.div`
    .signup-button {
        width: 100%;
    }

    .signup-container {
        max-width: 600px;
        min-height: 100vh;
        margin-top: 200px;
    }

    .border-light {
        border-color: white !important;
    }

    .signup-title {
        font-size: 2rem;
    }

    .login-link {
        margin-top: 20px;
    }

    .login-link-btn {
        color: var(--primary)
    }
`;

export function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleChangeFirstName = (e) => setFirstName(e.target.value);
    const handleChangeLastName = (e) => setLastName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const submitForm = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let result = await post('person', {firstName, lastName, email, password, username});

        console.log(result);
    }
    return (
        <SignupStyle>
            <Container className='signup-container'>
                <Card border="light">
                    <Card.Body>
                        <Card.Title className="text-center signup-title"><b>Create Account</b></Card.Title>
                        <Form onSubmit={submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" onChange={handleChangeFirstName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" onChange={handleChangeLastName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" onChange={handleChangeUsername} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" onChange={handleChangeConfirmPassword} />
                            </Form.Group>

                            <Button variant="dark" type="submit" className='signup-button'>
                                Sign up
                            </Button>
                            <Card.Text className='text-center login-link'>Already a member? <Card.Link className="login-link-btn" href="/login">Login here</Card.Link></Card.Text>                     
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </SignupStyle>
    );
};