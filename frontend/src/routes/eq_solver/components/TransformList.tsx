import React from 'react';
import { Matrix } from '../models/matrix';
import RenderMatrix from './RenderMatrix';

type TransformListProps = {
  transforms: Matrix[];
}

const TransformList: React.FC<TransformListProps> = ({transforms}) => {
  return (
    <div>
      {transforms.length > 0 ? (
        <h3>
          途中式
        </h3>
      ) : null}
      {transforms.map((transform, index) => (
        <div key={index}>
          <RenderMatrix matrix={transform} />
        </div>
      ))}
    </div>
  );
}

export default TransformList;
