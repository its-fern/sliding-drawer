import React from 'react';

interface IProps {
  toggle: () => void;
}

const Clicker: React.FC<IProps> = (props: IProps) => {

  return (
    <div>
      <button onClick={props.toggle}>Click me daddy</button>
    </div>
  );
}

export default Clicker;
