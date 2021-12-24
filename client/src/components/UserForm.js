
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Message, Segment, Label, Checkbox } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../actions/authActions";
import CheckboxLabel from './CheckboxLabel/CheckboxLabel';

const UserForm = (props) => {

    const error = useSelector(state => state.errors);
    const [errorMessage, setErrorMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {

        if (error.message) {
            setErrorMessage(error.message)
            dispatch(clearErrors())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])


    return (
        <>

            <Form onSubmit={props.handleSubmit(props.onSubmit)} size='large'>
                <Segment>
                    <Field name="user" component={renderInput} label='שם מלא' />
                    <Field name="id" component={renderInput} label='תעודת זהות' />
                    <Field
                        name="email"
                        component={renderInput}
                        label="מייל"
                    />
                    {errorMessage ? <Label className="alertMssg" basic color='red'>{errorMessage}</Label> : ""}
                    <Field name="phone" component={renderInput} label='מספר נייד' />
                    <Field
                        name="password"
                        component={renderInput}
                        label="Password"
                    />
                    <CheckboxLabel className="check">

                        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(curr => !curr)} />
                        <p>ידוע לי בלה בלה בלה</p>

                    </CheckboxLabel>
                    <Button style={{ borderRadius: "15px", fontSize: "18px", color: "white", background: "linear-gradient(271.11deg, #F89BA4 1.06%, #F4B8C2 99.2%)" }} fluid size='large'>
                        {props.buttonText}
                    </Button>
                </Segment>
            </Form>
            <Message>
                {props.renderMessage()}
            </Message>
        </>
    )
}

const renderInput = ({ input, label }) => {

    return (

        <div className="formInput">
            <div className="ui fluid left icon input">
                <input {...input} autoComplete="off" placeholder={label} type={`${input.name === "password" ? "password" : "text"}`} />
                {/* <i aria-hidden="true" className={`${input.name === "email" ? "user" : "lock"} icon`}></i> */}
            </div>
        </div>

    )
}


export default reduxForm({
    form: "userform"
})(UserForm)