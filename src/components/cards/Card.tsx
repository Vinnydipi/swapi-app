import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  customStyle: string;
}

const Card: React.FC<CardProps> = ({ children, customStyle }) => {
  return (
    <div className={customStyle}>{children}</div>
  )
}

export default Card;