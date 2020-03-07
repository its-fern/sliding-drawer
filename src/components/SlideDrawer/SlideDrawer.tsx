import React from 'react';
import './SlideDrawer.css';

interface IProps {
  show: boolean;
}

const SlideDrawer: React.FC<IProps> = (props: IProps) => {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <div className={drawerClasses}>
      <h1>Sup.</h1>
    </div>
  );
}

export default SlideDrawer;
