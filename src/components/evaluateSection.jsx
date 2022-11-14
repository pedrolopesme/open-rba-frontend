import {React, useState} from 'react';
import {Layout, Col, Row, message} from 'antd';
import EvaluateForm from './evaluateForm';
import {evaluate} from '../services/rbaService';
import EvaluationResult from './evaluationResult';

const EvaluateSection = () => {
    const {Content} = Layout;
    const [evaluation, setEvaluation] = useState([]);

    const handleFormSubmit = ({context}) => {
        console.log('Handling form submission for', context);
        evaluate(JSON.parse(context)).then(json => {
            setEvaluation(json);
            message.success("Context risk evaluated")
        });
    }

    return(
        <Layout className='layout'>
            <Content>
                <Row>
                    <Col span={14} offset={5}>

                        <EvaluateForm onFormSubmit={handleFormSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col span={14} offset={5}>
                        <EvaluationResult evaluation={evaluation} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default EvaluateSection;