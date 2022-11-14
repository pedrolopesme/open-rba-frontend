import {React} from 'react';
import {Form, Input, Button} from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';

const EvaluateForm = ({onFormSubmit}) => {
    const [form] = Form.useForm();
    const {TextArea} = Input;

    const initialContext = `{
        "user_id" : "771cd43f-011d-42fb-9aa6-2b45783e0836",
        "authentication_success" : true,
        "user_agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        "ip" : "186.192.87.8",
        "country" : "BRAZIL",
        "region" : "SP",
        "os" : "Mac OS X 10.15.7",
        "browser" : "Chrome",
        "device_type" : "Other 0.0.0"
    }`;

    return (
    <Form
        form={form}
        onFinish={onFormSubmit}
        initialValues={{
            'context':initialContext,
        }}>
                <Form.Item 
                    name={'context'}
                    rules={[{required: true, message:'This field is required'}]}>
                        <TextArea placeholder='User Context' rows={12}/>
                </Form.Item>

                <Button type="primary" htmlType='submit' block>
                    Evaluate
                    <RightCircleOutlined />
                </Button>
    </Form>);
}

export default EvaluateForm;