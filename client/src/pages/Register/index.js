
import React from 'react';
import { Header } from 'semantic-ui-react';
import UserForm from "../../components/UserForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";
import capsule from './capsule.svg';
import THECAPSULE from './THECAPSULE.svg';

const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (

        <div className="form-container register">
            <Header as='div' textAlign='center' style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: "translateY(-32px)"
            }}>
                <img style={{width: "75px"}} src={capsule} />
                <img style={{width: "150px"}} src={THECAPSULE} />
            </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="הבא"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Register;