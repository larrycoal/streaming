import React from 'react'
import { Field, reduxForm } from 'redux-form'


class CreateForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return <div className="ui error message">{error}</div>
        } else {
            return <div></div>
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div className="container"style={{width:"50%"}}>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <Field name="title" component={this.renderInput} label="Title" />
                    <Field name="description" component={this.renderInput} label="Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    var errors = {}
    if (!formValues.title) {
        errors.title = 'You Need to Enter A Value'
    }
    if (!formValues.description) {
        errors.description = 'You Need to Enter A Value'
    }
    return errors
}

export default reduxForm({
    form: 'new',
    validate
})(CreateForm)

