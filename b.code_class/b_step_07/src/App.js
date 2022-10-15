// import logo from './logo.svg'; //외부에서 불러오는 데이터를 작성
import './App.css';


function App() {

  const myName = 'EDIYA'; //javascript처럼 사용
  const h1Style = { color:'#f50', textTransform:'uppercase' }
  // -------------------------------------------------------------
  return (
    <div className="App">

      <h1 style={h1Style}>{myName}</h1>
      <p>{myName}는</p>
      <dl>
        <dt>{myName} 이란</dt>
      </dl>
    </div>
  ); //컴포넌트 // 이 안에 들어가는 것을 js X라고 함
}
// 함수를 내보내기 위해서 작성
// 내보낼 때의 규칙 : html이 들어가 있는 통째의 형식을 컴퍼넌트라고 함
// 외부에서 역할 따라서 이미지를 불러와서 적용을 함
// 중괄호{}를 사용하는 것은 javascript를 사용하겠다는 의미
// 자바스크립트를 사용하기 위해서 중괄호를 쓸 때 여러줄을 작성할 경우에는 잘 안먹는 경우도 있음
// 변수는 function안, 컴포넌트 안에 return이 되기 전에 쓴다
// return보다 아래에 쓸 순 있겠지만 오류가 날 수 있음 => return 처리 후에 함수를 호출하는 경우에만 사용
// react는 오류가 날 시 수정한다고 오류내역이 사라지지 않아 새로고침해야 함
// react는 style 적용을 따로 따로 하는 것을 별로 좋아하지 않음 (아래 예시)
//  ex) <h1 style={ {color:"#f50", textTransform:'uppercase'} }> // 직접적으로 쓰고 싶을 때는 {{}} 중괄호를 이중으로 쓰고 ""/''는 필수로 써주지 않으면 오류남
// 위의 방법보다 더 좋은 방법은 아래의 방법이 가장 좋음
// function App() {
//   const h1Style = { color:'#f50', textTransform:'uppercase' }
//   return (
//     <div className="App">
//       <h1 style={h1Style}>{myName}</h1>
//     </div>
//   );
// }


export default App;


// 하나에 어떤 js파일을 쓰던 컴퍼넌트라는 형식으로 내보낼때 js는 무조건 큰 틀은 하나의 영역으로 감싸줘야 함
// 무조건 하나의 태그 안에 속해있어야 함
// Fragment라는 기법을 권장
// 싱글태그여도 닫아주는 '/' 태그가 꼭 있어야 함