// src/components/MapComponent.js
import AMapLoader from '@amap/amap-jsapi-loader';
import React, { Component } from 'react';
import "./MapContainer.css";
import styles from "./MapContainer.css";

class MapComponent extends Component {
  constructor() {
    super();
    this.map = null;
    this.AMap = null;
  }

  componentDidMount() {
    AMapLoader.load({
      key: "6644f6488e54a17459046232a15bdfc8",
      version: "2.0",
      plugins: ['AMap.ControlBar', 'AMap.Geolocation', 'AMap.Driving'],
    }).then((AMap) => {
      this.AMap = AMap;
      this.map = new AMap.Map("container", {
        viewMode: "3D",
        zoom: 5,
      });

      // 添加地图控件
      AMap.plugin(['AMap.ControlBar', 'AMap.Geolocation'], () => {
        const controlBar = new AMap.ControlBar({
          showZoomBar: true,
          showControlButton: true,
          position: {
            right: '10px',
            top: '90px',
          },
        });
        this.map.addControl(controlBar);

        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
        });
        this.map.addControl(geolocation);

        geolocation.getCurrentPosition();
      });

      // 引入和创建驾车规划插件
      AMap.plugin(["AMap.Driving"], () => {
        const driving = new AMap.Driving({
          map: this.map,
          panel: "my-panel",
        });

        // 获取当前位置
        AMap.plugin('AMap.Geolocation', () => {
          const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            buttonOffset: new AMap.Pixel(10, 20),
            zoomToAccuracy: true,
          });

          geolocation.getCurrentPosition((status, result) => {
            if (status === 'complete') {
              const currentPosition = result.position;
              // 设置多个终点
              const endPoints = [
                [120.081968, 30.302257],
                [120.071968, 30.312257],
                [120.041968, 30.322257],
                [120.031968, 30.322257],
                [120.601968, 30.322257],
                [120.051968, 30.322257],
                [120.081979, 30.302248],
                // 添加更多终点...
              ];

              // 遍历终点，找到最近的路线
              let shortestDistance = Infinity;
              let shortestPath = null;

              endPoints.forEach((endPoint) => {
                driving.search(currentPosition, endPoint, (status, result) => {
                  if (status === "complete") {
                    const path = result.routes[0].path;
                    const distance = result.routes[0].distance;

                    if (distance < shortestDistance) {
                      shortestDistance = distance;
                      shortestPath = path;
                    }

                    if (endPoint === endPoints[endPoints.length - 1]) {
                      // 最后一个终点，绘制最短路径
                      this.drawShortestPath(shortestPath);
                    }
                  } else {
                    console.log("获取驾车数据失败：" + result);
                  }
                });
              });
            } else {
              console.log('获取当前位置失败', result);
            }
          });
        });
      });

    }).catch(e => {
      console.log(e);
    });
  }

  drawShortestPath(path) {
    // 在地图上绘制最短路径
    const polyline = new this.AMap.Polyline({
      path: path,
      borderWeight: 2,
      strokeColor: '#FF0000', // 使用红色表示最短路径
      lineJoin: 'round',
    });
    this.map.add(polyline);
  }

  render() {
    return (
      <div>
        <div id="container" className={styles.container} style={{ height: '800px' }}></div>
        {/* <div id="my-panel" style={{ position: 'fixed', top: '60px', left: '15px', width: '400px', background: 'white', zIndex: 1000 }}></div> */}
      </div>
    );
  }
}

export default MapComponent;
