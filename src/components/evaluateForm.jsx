import {React} from 'react';
import {Form, Input, Button, Switch, Select} from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';

const EvaluateForm = ({onFormSubmit}) => {
    const [form] = Form.useForm();
    const { Option } = Select;

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
        id="evaluationForm"
        onFinish={onFormSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
            'user_id': '88c95a81-0a5b-412a-8f34-72d2dd0600f6'
        }}>
            <Form.Item
                label="User ID"
                name="user_id"
                rules={[{ required: true, message: 'Please provide an user identification.' }]}>
                 <Input />
            </Form.Item>

            <Form.Item
                label="Authentication Success"
                name="authentication_success">
                 <Switch />
            </Form.Item>

            <Form.Item 
                name="device_type" 
                label="Device Type" 
                rules={[{ required: true, message: 'Please provide a device type.' }]}>
                <Select
                    placeholder="Select an option"
                    allowClear>
                    <Option value="device1">Desktop - macOS</Option>
                    <Option value="device2">Desktop - Windows</Option>
                    <Option value="device3">Desktop - Ubuntu Linux</Option>
                    <Option value="device4">Mobile - Android</Option>
                    <Option value="device5">Mobile - IPhone</Option>
                    <Option value="device6">Tablet - Android</Option>
                    <Option value="unknwon">Unknown</Option>
                </Select>
            </Form.Item>

            {/* <Form.Item 
                name={'context'}
                rules={[{required: true, message:'This field is required'}]}>
                    <TextArea placeholder='User Context' rows={12}/>
            </Form.Item> */}

            <Button type="primary" htmlType='submit' block>
                Evaluate
                <RightCircleOutlined />
            </Button>
    </Form>);
}

export default EvaluateForm;