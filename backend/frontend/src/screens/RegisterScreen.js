import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';
import { validatePassword } from '../validators/passwordValidator';
import { validateEmail } from '../validators/emailValidator';  // Import the email validator

function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);  // State for showing password
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for showing confirm password

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        const validationErrors = {};

        // Validate password
        const passwordErrors = validatePassword(password, confirmPassword, name, email);
        Object.assign(validationErrors, passwordErrors);

        // Validate email
        const emailErrors = validateEmail(email);
        Object.assign(validationErrors, emailErrors);

        // Set errors if any exist, otherwise proceed with registration
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            dispatch(register(name, email, password));
        }
    };

    return (
        <FormContainer>
            <h1>Register</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label className='mt-3'>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        value={email}
                        isInvalid={!!errors.email}  // Show email validation error
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.email} 
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label className='mt-3'>Password</Form.Label>
                    <Form.Control
                        required
                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                        value={password}
                        isInvalid={!!errors.password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                    <Form.Check 
                        type="checkbox" 
                        label="Show Password" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label className='mt-3'>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type={showConfirmPassword ? 'text' : 'password'} // Toggle confirm password visibility
                        value={confirmPassword}
                        isInvalid={!!errors.confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                    <Form.Check 
                        type="checkbox" 
                        label="Show Confirm Password" 
                        checked={showConfirmPassword} 
                        onChange={() => setShowConfirmPassword(!showConfirmPassword)} 
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default RegisterScreen;
