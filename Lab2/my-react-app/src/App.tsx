const App = () => {
  const msg = "สวัสดีดีตอนเย็น พวกเราชอบเรียนเขียนโค้ด";
  const num1 = 500;
  const isTest2 = false;
  return (
    <body className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">สวัสดีครับ ยินดีต้อนรับ</h1>
      <p style={{ color: "Red", fontSize: "24" }}>{msg}</p>
      <p className="test1" >{((num1+3)^2)/4}</p>

      <p className= {isTest2 ? "test1" : "test2"} > condition Rendering </p>
    </body>

  );
};

export default App;
