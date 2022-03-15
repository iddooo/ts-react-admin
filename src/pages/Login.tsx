import React from "react";
import { Form, Input, Button, Checkbox, FormProps } from 'antd';
import { useAlita } from 'redux-alita'
import { RouteComponentProps } from "react-router-dom";
import { json } from "stream/consumers";

type LoginProps = FormProps & RouteComponentProps


const Login:React.FC<LoginProps> = (props:LoginProps):JSX.Element =>{
    const [auth, setAlita] = useAlita({ auth: { } }, { light: true });
    console.log('props :>> ', props);
    const { history } = props;

    const onFinish = (values: any) => {
        console.log('Success:', values);
        localStorage.setItem('auth',JSON.stringify({ ...values, permissions:[1,2,3,4,5] }))
        setAlita('auth', { ...values, permissions:[1,2,3,4,5] } )
        history.push('/')
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}


export default Login