import {React} from 'react';
import { Card } from 'antd';
import RiskLow from '../assets/img/risk_low.svg'

const EvaluationResult = ({evaluation}) => {
    const { Meta } = Card;

    const translateClassification = () => {
        switch (evaluation.Classification) {
            case "LOW": return "Low risk";
            case "MEDIUM": return "Medium risk";
            case "HIGH": return "High risk";
            default: return "";
        }  
    }

    const translateScore = () => {
        return `Score: ${Math.round(evaluation.Score)} pts`;
    }

    if (Object.keys(evaluation).length === 0) {
        return (<></>)
    } else {
        return (
            <div className='evaluationCard'>
                <Card style={{margin: '0 auto'}}
                    cover={<img alt="example" src={RiskLow} />}>
                    <Meta title={translateClassification(evaluation)} description={translateScore()} />
                </Card> 
            </div>
        )
    }
};

export default EvaluationResult;