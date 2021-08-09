
import './index.scss'
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useCallback } from "react";
import { Amap, Polyline, usePlugins } from "@amap/amap-react";
import MarkerList from './Marker'

const MapList = () => {
  useStyle();
  const [stop, setStop] = useState(null)

  usePlugins("AMap.MoveAnimation");

  const handleAnim = useCallback((type) => {
    setStop(type)
  }, [])

  return (
    <div className="App">
      <div className="map-container">
        <Amap
          zoom={17}
          onComplete={(map) => {
            map.setFitView();
          }}
          api
        >
          <Polyline
            path={LINE_ARR}
            showDir
            strokeColor="#28F" //线颜色
            strokeWeight={8} //线宽
          />
          {MarkerListData.map((item, index) => {
              return <MarkerList data={item} stop={stop} key={index}/>
          })}
        </Amap>

        <div className="input-card">
          <h4>轨迹回放控制</h4>
          <div className="input-item">
            <input
              type="button"
              className="btn"
              value="开始动画"
              onClick={() => handleAnim('start')}
            />
            <input
              type="button"
              className="btn"
              value="暂停动画"
              onClick={() => handleAnim('pause')}
            />
          </div>
          <div className="input-item">
            <input
              type="button"
              className="btn"
              value="继续动画"
              onClick={() => handleAnim('resume')}

            />
            <input
              type="button"
              className="btn"
              value="停止动画"
              onClick={() => handleAnim('stop')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapList

const MarkerListData = [
  {
    position: [116.478935, 39.997761],
    name: "WT1"
  },
  {
    position: [116.478935, 39.996761],
    name: "WT12"
  }
]

const LINE_ARR = [
  [116.478935, 39.997761],
  [116.478939, 39.997825],
  [116.478912, 39.998549],
  [116.478912, 39.998549],
  [116.478998, 39.998555],
  [116.478998, 39.998555],
  [116.479282, 39.99856],
  [116.479658, 39.998528],
  [116.480151, 39.998453],
  [116.480784, 39.998302],
  [116.480784, 39.998302],
  [116.481149, 39.998184],
  [116.481573, 39.997997],
  [116.481863, 39.997846],
  [116.482072, 39.997718],
  [116.482362, 39.997718],
  [116.483633, 39.998935],
  [116.48367, 39.998968],
  [116.484648, 39.999861]
];

function useStyle() {
  useEffect(() => {
    const tag = document.createElement("link");
    tag.setAttribute("rel", "stylesheet");
    tag.setAttribute(
      "href",
      "https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css"
    );
    document.head.appendChild(tag);

    return () => {
      document.head.removeChild(tag);
    };
  }, []);
}


