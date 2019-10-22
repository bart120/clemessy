import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        onLogin: PropTypes.func.isRequired
    }

    state = {
        user: {
            username: this.props.username || '',
            password: this.props.password || ''
        },
        errors: {
            errorUsername: '',
            errorPassword: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.checkValues();
        this.props.onLogin(this.state.user);
    }

    onChange = (event) => {

        this.setState({ user: Object.assign(this.state.user, { [event.target.name]: event.target.value }) });
    }

    checkValues() {
        const errors = {
            errorUsername: '',
            errorPassword: ''
        };
        if (this.state.user === '') {
            Object.assign(errors, { errorUsername: 'Le username est obligatoire' });
        } else {
            const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexp.test(this.state.user.username)) {
                Object.assign(errors, { errorUsername: 'Le username doit être une adresse mail' });
            }
        }

        if (this.state.password === '') {
            Object.assign(errors, { errorPassword: 'Le mot de passe est obligatoire' });
        } else {
            const regexp = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]){6,25}.*$/;
            if (!regexp.test(this.state.user.password)) {
                Object.assign(errors, { errorPassword: 'Le mot de passe ne respect pas les règles de sécurité.' });
            }

        }
        this.setState({ errors });
    }

    render() {
        return (
            <Form onSubmit={(event) => this.onSubmit(event)} noValidate>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="username" id="email" placeholder="votre mail"
                        onChange={this.onChange} value={this.state.user.username} />
                    <TextError message={this.state.errors.errorUsername} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Mot de passe</Label>
                    <Input type="password" name="password" id="password" placeholder="votre mot de passe"
                        onChange={this.onChange} value={this.state.user.password} />
                    <TextError message={this.state.errors.errorPassword} />
                </FormGroup>
                <Button>Se connecter</Button>
            </Form>
        );
    }
}

class TextError extends Component {
    render() {
        return (
            this.props.message !== '' ?
                (<div className='alert alert-danger'>{this.props.message}</div>) :
                (<></>)
        );
    }
}

export default LoginForm;