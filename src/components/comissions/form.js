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

    encode = data => {
        return Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
      

    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitting comission form")
        console.log(this.state);
        console.log(event.target)
        const data =
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
                "form-name": event.target.getAttribute("name"),
                "bot-field": event.target.getAttribute("bot-field"),
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
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                action="/"
            >
                <input hidden name="form-name" value="comissions" />
                <div hidden><input name="bot-field" value=""/></div>
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
                <div data-netlify-recaptcha="true"></div>
                <button type='submit' className='submit_button'>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
