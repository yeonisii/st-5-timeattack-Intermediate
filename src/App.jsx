import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// 용량부족으로 yarn 설치가 안되서 못했어요 ,,
// TODO: todos 상태를 리덕스를 이용한 전역상태로 관리한 투두리스트를 작성해 보세요.
function App() {
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}

export default App;
