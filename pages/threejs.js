import Image from "next/image";
import { useEffect } from "react";
// import {
//   BoxGeometry,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   Scene,
//   WebGLRenderer,
// } from "three";

import styles from "../styles/ThreeJs.module.scss";

const threejs = () => {
  useEffect(() => {
    // const scene = new Scene();
    // const cam = new PerspectiveCamera(
    //   45,
    //   window.innerWidth / window.innerHeight,
    //   0.3,
    //   100
    // );
    // const renderer = new WebGLRenderer();
    // const boxGeometry = new BoxGeometry(1, 1, 1);
    // const boxMaterial = new MeshBasicMaterial({ color: 0x0000ff });
    // const boxMesh = new Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);
    // cam.position.z = 5;
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.getElementById("threejs").appendChild(renderer.domElement);
    // renderer.render(scene, cam);
    // const draw = () => {
    //   requestAnimationFrame(draw);
    //   boxMesh.rotation.y += 0.01;
    //   renderer.render(scene, cam);
    // };
    // draw();
  }, []);

  return <div id="threejs"></div>;
};

export default threejs;
