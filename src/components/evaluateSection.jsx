import {React} from 'react';
import {Layout, Col, Row} from 'antd';
import EvaluateForm from './evaluateForm';

const EvaluateSection = () => {
    const {Content} = Layout;

    const handleFormSubmit = (context) => {
        console.log('Handling form submission for', context);
    }

    return(
        <Layout className='layout'>
            <Content>
                <Row>
                    <Col span={14} offset={5}>
                        <h1> Risk Based Authentication Evaluation </h1>
                        <EvaluateForm onFormSubmit={handleFormSubmit} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default EvaluateSection;