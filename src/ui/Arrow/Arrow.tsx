import React from 'react';

interface ArrowProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const Arrow: React.FC<ArrowProps> = ({ startX, startY, endX, endY }) => {
  const headSize = 10;
  const dx = endX - startX;
  const dy = endY - startY;
  const angle = Math.atan2(dy, dx);

  const headX1 = endX - headSize * Math.cos(angle - Math.PI / 6);
  const headY1 = endY - headSize * Math.sin(angle - Math.PI / 6);
  const headX2 = endX - headSize * Math.cos(angle + Math.PI / 6);
  const headY2 = endY - headSize * Math.sin(angle + Math.PI / 6);

  return (
    <svg
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: '22',
        // backgroundColor: 'gray',
      }}
    >
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke='black'
        strokeWidth='20'
      />
      <polygon
        points={`${endX},${endY} ${headX1},${headY1} ${headX2},${headY2}`}
        fill='black'
      />
    </svg>
  );
};

export default Arrow;
