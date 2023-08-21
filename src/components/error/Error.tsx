import './Error.css';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <h1 className="error">{message}</h1>
  )
}

export default Error;