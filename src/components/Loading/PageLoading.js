import React from 'react';


/**
 * 加载效果示例
 */
export default ({loading, style = 'style1'}) => 
  loading ? <div className={`loading-spinner loading-spinner-${style}`}></div> : null;
