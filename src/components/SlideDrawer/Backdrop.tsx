import React from 'react';
import './Backdrop.css';

interface IProps {
  close: () => void;
}

const Backdrop: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="backdrop" onClick={props.close}/>
  );
}

export default Backdrop;
