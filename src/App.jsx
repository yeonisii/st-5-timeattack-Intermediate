import "./App.css";

// yarn 용량 부족으로 설치가 안되서 못했어요..! ㅠ
// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button>더할게요</button> <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
