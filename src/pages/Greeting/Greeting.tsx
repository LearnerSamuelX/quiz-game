import './Greeting.css'

interface GreetingProps {
    message: string;
}

const Greeting = ({ message }: GreetingProps): JSX.Element => {
    return (
        <div className="greeting-msg-container">
            <h1>{message}</h1>
        </div>
    )
}

export default Greeting