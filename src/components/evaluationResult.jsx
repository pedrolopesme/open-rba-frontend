import {React} from 'react';
import { Card } from 'antd';

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
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title={translateClassification(evaluation)} description={translateScore()} />
                </Card> 
            </div>
        )
    }
};

export default EvaluationResult;