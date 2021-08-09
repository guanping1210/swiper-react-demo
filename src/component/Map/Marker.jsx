import { Amap, Marker, Polyline, usePlugins } from "@amap/amap-react";
import React, { useEffect, useRef, useState } from 'react'
const MarketItem = ({ stop, data }) => {
  const $marker = useRef(undefined);
  const [position, setPosition] = useState([116.478935, 39.997761]);
  const [angle, setAngle] = useState(0);
  const [passedPath, setPassedPath] = useState([]);

  useEffect(() => {
    const marker = $marker.current;
    if (!marker || !stop) return;

    switch (stop) {
      case 'start': {
        marker.moveAlong(LINE_ARR, {
          // 每一段的时长
          duration: 200,
          // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
          autoRotation: true
        });
        break;
      }
      case 'pauseMove': {
        marker.pauseMove();
        break;
      }

      case 'stop': {
        marker.stopMove();
        break;
      }

      case 'resume': {
        marker.resumeMove();
        break;
      }

      default: break;
    }
  }, [stop])


  return <>
  <Marker
    title={data.name}
    ref={$marker}
    position={data.position}
    autoRotation
    angle={angle}
    anchor="center"
    onMoving={(marker, e) => {
      setPassedPath(e.passedPath);
      const p = marker.getPosition();
      setPosition([p.getLng(), p.getLat()]);
      setAngle(marker.getAngle());
    }}
  >
    <img
      src="https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"
      alt="car"
    />
  </Marker>
    {passedPath.length > 0 && (
      <Polyline
        path={passedPath}
        strokeColor="#AF5" //线颜色
        strokeWeight={8} //线宽
      />
    )}
  </>
}

export default React.memo(MarketItem)

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