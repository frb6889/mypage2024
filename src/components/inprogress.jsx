import React from 'react';

const InProgressComponent = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(214, 229, 238)',  // 设置浅蓝色背景
    borderRadius:'1rem',
    paddingTop: '2px',  // 添加一些内边距
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '2px',  // 添加一些内边距

    marginTop:'14px',
    width: 'max-content',  // 设置容器的宽度为 max-content
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: 'rgb(104, 150, 186)',  // 设置蓝色圆点颜色
    borderRadius: '50%',
    marginRight: '8px',  // 设置圆点与文字之间的间距
  };
  const textStyle = {
    fontSize: '13px',

  };

  return (
    <div style={containerStyle}>
      <span style={dotStyle}></span>
      <p style={textStyle}>In Progress</p>
    </div>
  );
};

export default InProgressComponent;
