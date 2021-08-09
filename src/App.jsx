import "./App.css";
// import Demo1 from "./component/Demo1";
import MapList from './component/Map'
function App() {
  return (
    <div className="App">
      <h3>高德地图</h3>
      <div id="map">
      <MapList />
      </div>
      {/* <h3>异形轮播图: 默认展示3张图片，左右各叠加显示一张图</h3>
      <div className="demo1-container">
        <Demo1 />
      </div> */}
    </div>
  );
}

export default App;
