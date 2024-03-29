import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import '@styles/form.css';
import { encodeRequestBody } from '@utils/formatting-util';

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        "bot-field": '',
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeRequestBody({
                "form-name": event.target.getAttribute("name"),
                ...this.state,
            })
        })
            .then(() => console.log("Successfully submitted form"))
            .catch((error) => console.log("Error submitting form" + error))
    };

    render() {
        return (
            <form
                name="comissions"
                method="POST"
                data-netlify="true"
                // data-netlify-recaptcha="true"
                netlify-honeypot="bot-field"
                action="/"
                onSubmit={this.handleSubmit}
            >
                <input hidden name="form-name" value="comissions" readOnly/>
                <div hidden><input name="bot-field" onChange={this.handleChange}/></div>
                <div className='form_column'>
                    <div className='form_row'>
                        <input
                            className='input_text'
                            type='text'
                            name='firstName'
                            placeholder='First name'
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <input
                            className='input_text'
                            type='text'
                            name='lastName'
                            placeholder='Last name'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input
                        className='input_text'
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <TextareaAutosize
                        className='textarea'
                        type='text'
                        name='message'
                        minRows='5'
                        resize='vertical'
                        placeholder='Tell me about your dream art'
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                </div>
                {/* <div data-netlify-recaptcha="true"></div> */}
                <button type='submit' className='submit_button'>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
