import {React} from 'react';

const EvaluationResult = ({evaluation}) => {
    return (
        <div>
            {JSON.stringify(evaluation)}
        </div>
    )
};

export default EvaluationResult;