import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';



import './RegisterForm.scss';

export default function RegisterForm() {


    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false

    });

    const changeForm = e => {

        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }

    };

    const register = e => {
        e.preventDefault();

        console.log(inputs)
    };

    return (

        <Form className="register-form" onSubmit={register} onChange={changeForm}>
            <Form.Item>
                <Input prefix={<UserOutlined type="user" style={{ color: "rgba(0,0,0,.25" }} />}

                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="register-form__input"
                    value={inputs.email}


                />
            </Form.Item>
            <Form.Item>
                <Input prefix={<UnlockOutlined type="lock" style={{ color: "rgba(0,0,0,.25" }} />}

                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password}



                />
            </Form.Item>
            <Form.Item>
                <Input prefix={<UnlockOutlined type="lock" style={{ color: "rgba(0,0,0,.25" }} />}

                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword}



                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leido y acepto la politica de privacidad
                  </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>

        </Form>
    );
}