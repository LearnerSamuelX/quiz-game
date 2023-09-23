import "./ReportCard.css"

interface ScoreProps {
    correct: number;
    total: number;
}

const ReportCard = ({ correct, total }: ScoreProps): JSX.Element => {
    return (
        <div className="report-card-frame">
            <h1>Your Score</h1>
            <h2>{correct + "/" + total}</h2>
        </div>
    )
}

export default ReportCard