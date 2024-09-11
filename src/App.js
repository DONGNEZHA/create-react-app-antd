import React, { useState } from 'react';
import { Button } from 'antd';

const App = () => {
  // 使用useState钩子来控制第二个按钮的显示
  const [showButton2, setShowButton2] = useState(true);

  const handleButtonClick = () => {
    // 点击按钮时，更新状态，从而隐藏第二个按钮
    setShowButton2((show) => !show);
  };

  return (
    <div className="App">
      <Button type="primary" onClick={handleButtonClick}>
        Button
      </Button>
      {showButton2 && <Button type="primary">Button2</Button>}
    </div>
  );
};

export default App;