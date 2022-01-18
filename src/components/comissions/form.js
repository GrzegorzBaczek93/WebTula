import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import '@styles/form.css';

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify(event));
    };

    render() {
        return (
            <form method="POST" data-netlify="true" data-netlify-recaptcha="true" name="comissions">
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
                <button type='submit' className='submit_button'>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
