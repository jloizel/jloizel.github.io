"use client"

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { PerspectiveCamera } from '@react-three/drei'
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { useEffect } from 'react';

export function Object({ ...props }) {
  const gltf = useLoader(GLTFLoader, '/office_scene.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
      loader.setDRACOLoader(dracoLoader);
    })
    const { nodes, materials } = gltf;

    useEffect(() => {
      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.clipAction(gltf.animations[0]); // Play the first animation
        action.play();
      }
    }, [gltf]);

    const color = new THREE.Color('#FF9A03').convertSRGBToLinear();
    
    const ellipseMaterial = new THREE.MeshPhongMaterial({
          color: color.getHex(),
          transparent: false, opacity: 0.5,
          specular: 0x050505,
          shininess: 100
    });
    const textMaterial = new THREE.MeshPhongMaterial({
          color: 0x000000,
          transparent: false, opacity: 0.5,
          specular: 0x050505,
          shininess: 100
    });
      
    const woodenFloor = nodes.Wooden_floor as THREE.Mesh;
    const text = nodes.Text as THREE.Mesh;
    const screen = nodes.screen as THREE.Mesh;
    const clock = nodes.clock as THREE.Mesh;

    console.log(gltf.nodes);

  return (
    <>
      {/* <color attach="background" args={['#74757a']} /> */}
      <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Wooden_floor"
            geometry={woodenFloor.geometry}
            material={ellipseMaterial}
            castShadow
            receiveShadow
            position={[-84.04, -20.72, 44.39]}
            scale={[0, 0, 0.97]}
            visible={true}
          />
          <group name="Clock Digital" position={[-235.27, 418.76, -26.43]} scale={0}>
            <mesh
              name="Text"
              geometry={text.geometry}
              material={textMaterial}
              castShadow
              receiveShadow
              position={[5.79, 84, 80.66]}
              rotation={[0, 0, 0]}
              scale={4.3}
              visible={true}

            />
            <mesh
              name="screen"
              geometry={screen.geometry}
              material={materials.Clock}
              castShadow
              receiveShadow
              position={[-4.83, 82.53, 64.93]}
              scale={[0.46, 0.43, 0.46]}
              visible={true}

            />
            <mesh
              name="clock"
              geometry={clock.geometry}
              material={materials.Clock}
              castShadow
              receiveShadow
              position={[1.47, 85.68, 7.74]}
              scale={[1.24, 0.51, 0.51]}
              visible={true}

            />
          </group>
          {/* <group name="Shelves" position={[-245.61, 204.62, 74.31]}>
            <group name="shelf_01" position={[0.27, 19.65, 1258]} scale={0}>
              <group name="Plant Tea-1" position={[0.58, -29.25, -34.38]} rotation={[0, 0, 0]} scale={0.19}>
                <mesh
                  name="Cube 26"
                  geometry={nodes['Cube 26'].geometry}
                  material={materials.green}
                  castShadow
                  receiveShadow
                  position={[60.3, 137.14, 8.16]}
                  rotation={[-1.65, 0.96, -2.32]}
                  scale={[-0.26, 0.29, 0.25]}
                />
                <mesh
                  name="Cube 23"
                  geometry={nodes['Cube 23'].geometry}
                  material={materials.green}
                  castShadow
                  receiveShadow
                  position={[-60.15, 200.94, 24.06]}
                  rotation={[-1.38, -0.75, 0.97]}
                  scale={[-0.27, 0.26, 0.25]}
                />
                <mesh
                  name="Cube 22"
                  geometry={nodes['Cube 22'].geometry}
                  material={materials.green}
                  castShadow
                  receiveShadow
                  position={[33.46, 183.96, -50.1]}
                  rotation={[-2.37, 0.47, -0.53]}
                  scale={[-0.29, 0.28, 0.28]}
                />
                <mesh
                  name="Cube"
                  geometry={nodes.Cube.geometry}
                  material={materials.brown}
                  castShadow
                  receiveShadow
                  position={[0, 39.13, 0]}
                />
              </group>
              <group name="Tube" position={[-5.5, 1.77, 25.07]} rotation={[-1.73, 1.27, 1.74]} scale={0.04}>
                <mesh
                  name="Boolean"
                  geometry={nodes.Boolean.geometry}
                  material={nodes.Boolean.material}
                  castShadow
                  receiveShadow
                  position={[-4.22, -1.09, -54.17]}
                  scale={[0.55, 0.2, 0.55]}
                />
                <mesh
                  name="Boolean1"
                  geometry={nodes.Boolean1.geometry}
                  material={nodes.Boolean1.material}
                  castShadow
                  receiveShadow
                  position={[-1.73, 0, -3.88]}
                  scale={[1, 0.37, 1]}
                />
                <mesh
                  name="Text1"
                  geometry={nodes.Text1.geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-3.36, -23.19, 132.82]}
                />
                <group name="Group" position={[0, -25.24, -1.73]}>
                  <mesh
                    name="Rectangle 2"
                    geometry={nodes['Rectangle 2'].geometry}
                    material={materials.Gear1}
                    castShadow
                    receiveShadow
                    position={[0, 0, -128.91]}
                    scale={[0.97, 0.86, 0.86]}
                  />
                  <mesh
                    name="Rectangle"
                    geometry={nodes.Rectangle.geometry}
                    material={materials.Keyboard}
                    castShadow
                    receiveShadow
                    position={[0, 0, -121.82]}
                  />
                </group>
                <mesh
                  name="Boolean2"
                  geometry={nodes.Boolean2.geometry}
                  material={nodes.Boolean2.material}
                  castShadow
                  receiveShadow
                  position={[-1.73, 0, -2.15]}
                />
              </group>
              <mesh
                name="Rectangle 9"
                geometry={nodes['Rectangle 9'].geometry}
                material={materials.Shelf_wood}
                castShadow
                receiveShadow
                position={[-0.03, -31.86, -3.24]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.38, 1.39, 0.85]}
              />
            </group>
            <group name="shelf_02" position={[-11.96, -28.63, 1137.8]} scale={0}>
              <mesh
                name="Rectangle 10"
                geometry={nodes['Rectangle 10'].geometry}
                material={materials.Shelf_wood}
                castShadow
                receiveShadow
                position={[7.26, -20.09, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.38, 1.28, 0.85]}
              />
              <group name="Group1" position={[-0.14, 0.09, -0.99]} rotation={[0.21, -0.23, 0.25]} scale={0.03}>
                <group name="Left" position={[179.8, 83.21, 616.07]} rotation={[-3.08, 1.29, 2.93]} scale={4.09}>
                  <mesh
                    name="Shape"
                    geometry={nodes.Shape.geometry}
                    material={materials.Gear2}
                    castShadow
                    receiveShadow
                    position={[-125.94, 125.94, -14.13]}
                    scale={[0.68, 0.68, 1.88]}
                  />
                </group>
                <group name="Right" position={[-98.41, 0, -375.5]} rotation={[-3.08, 1.29, 2.93]} scale={4.09}>
                  <mesh
                    name="Shape 0"
                    geometry={nodes['Shape 0'].geometry}
                    material={materials.Gear1}
                    castShadow
                    receiveShadow
                    position={[-99.27, 179.59, -16.28]}
                    rotation={[0, 0, -0.28]}
                    scale={[0.68, 0.68, 1.88]}
                  />
                </group>
              </group>
            </group>
            <group name="shelf_03" position={[11.23, 2.04, 1055.28]} scale={0}>
              <mesh
                name="Eiffel tower 2"
                geometry={nodes['Eiffel tower 2'].geometry}
                material={materials.Keyboard}
                castShadow
                receiveShadow
                position={[-9.47, 40.65, 24.43]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.93]}
              />
              <group
                name="Plant_05"
                position={[-8.52, 8.26, -19.54]}
                rotation={[-Math.PI, -0.39, -Math.PI]}
                scale={0.35}
              >
                <group name="Group2" position={[-31.84, -75.17, 12.43]} scale={0.45}>
                  <mesh
                    name="Cylinder 4"
                    geometry={nodes['Cylinder 4'].geometry}
                    material={materials.green}
                    castShadow
                    receiveShadow
                    position={[98.7, 252.49, 5.87]}
                    rotation={[Math.PI, -1.4, Math.PI]}
                    scale={1}
                  />
                  <mesh
                    name="Cylinder 3"
                    geometry={nodes['Cylinder 3'].geometry}
                    material={materials.green}
                    castShadow
                    receiveShadow
                    position={[53.79, 252.49, 82.06]}
                    rotation={[Math.PI, -1.4, Math.PI]}
                    scale={1}
                  />
                  <mesh
                    name="a-plant 2"
                    geometry={nodes['a-plant 2'].geometry}
                    material={materials.green}
                    castShadow
                    receiveShadow
                    position={[-17.32, 282.08, 58.13]}
                    rotation={[-1.55, 0.12, -2.54]}
                    scale={1}
                  />
                  <mesh
                    name="a-plant"
                    geometry={nodes['a-plant'].geometry}
                    material={materials.green}
                    castShadow
                    receiveShadow
                    position={[54.66, 245.78, 83.06]}
                    rotation={[-Math.PI / 2, 0, -1.75]}
                    scale={1}
                  />
                  <mesh
                    name="earth"
                    geometry={nodes.earth.geometry}
                    material={materials.dark}
                    castShadow
                    receiveShadow
                    position={[76.23, 249.91, -22.32]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
                  />
                  <mesh
                    name="Cylinder 5"
                    geometry={nodes['Cylinder 5'].geometry}
                    material={materials.brown}
                    castShadow
                    receiveShadow
                    position={[76.23, 174.88, -22.32]}
                    rotation={[0, -Math.PI / 4, 0]}
                  />
                  <mesh
                    name="flowerpot"
                    geometry={nodes.flowerpot.geometry}
                    material={materials.brown}
                    castShadow
                    receiveShadow
                    position={[76.23, 210.33, -22.32]}
                    rotation={[0, -Math.PI / 4, 0]}
                  />
                </group>
              </group>
              <mesh
                name="Rectangle 7"
                geometry={nodes['Rectangle 7'].geometry}
                material={materials.Shelf_wood}
                castShadow
                receiveShadow
                position={[-9.65, 4.16, 10.13]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.38, 1.67, 0.85]}
              />
            </group>
          </group>
          <group name="Basketball animation" position={[-189.51, 500, -50.77]} scale={0}>
            <group name="Net" position={[0, 110.66, -366.59]} scale={1.41}>
              <mesh
                name="Rectangle 4"
                geometry={nodes['Rectangle 4'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[1.94, 121.11, -29]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="Cube 2"
                geometry={nodes['Cube 2'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[5.5, 2.69, 45]}
                rotation={[0, 0, 0]}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.lamp}
                castShadow
                receiveShadow
                position={[3.23, 77.97, 37.77]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Rectangle 21"
                geometry={nodes['Rectangle 21'].geometry}
                material={materials.Backboard}
                castShadow
                receiveShadow
                position={[0, 118.11, -55]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1, 1, 1.1]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[3, -140.56, -79.9]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.8, 0.75, 1.41]}
              />
            </group>
            <group name="Basketball" position={[8.46, -347.82, 378.82]}>
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-0.6, 0.05, 0.52]}
                scale={0.51}
              />
              <mesh
                name="line"
                geometry={nodes.line.geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                scale={0.51}
              />
            </group>
            <mesh
              name="Path 2"
              geometry={nodes['Path 2'].geometry}
              material={materials.Basketball}
              castShadow
              receiveShadow
              position={[-71.14, -348.82, 402.67]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </group>
          <group name="Dumm" position={[21.64, -1.98, -118.47]} scale={0}>
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials.Keyboard}
              castShadow
              receiveShadow
              position={[85.96, -0.15, 0.05]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={0.13}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials.Keyboard}
              castShadow
              receiveShadow
              position={[-86.09, -0.15, 0.05]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.13}
            />
            <group name="Bar" position={[-57.7, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 0.43, 1]}>
              <mesh
                name="Ellipse2"
                geometry={nodes.Ellipse2.geometry}
                material={materials.Keyboard}
                castShadow
                receiveShadow
                position={[0, 337.2, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.21, 0.21, 18.35]}
              />
              <group name="Group 2" position={[0, -21.16, 0]} rotation={[0, 0, 0]} scale={[0.73, 2.09, 0.73]}>
                <mesh
                  name="Ellipse 2"
                  geometry={nodes['Ellipse 2'].geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0, -14.12, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Ellipse3"
                  geometry={nodes.Ellipse3.geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0, -9.55, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
              </group>
              <mesh
                name="Ellipse 21"
                geometry={nodes['Ellipse 21'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0, -18.55, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 1, 2.63]}
              />
              <mesh
                name="Ellipse4"
                geometry={nodes.Ellipse4.geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0, -6.5, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 1, 2.63]}
              />
            </group>
            <group name="Prawy" position={[45.9, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1}>
              <group name="Group 21" position={[0, -16.82, 0]} rotation={[0, 0, 0]} scale={[0.73, 0.98, 0.73]}>
                <mesh
                  name="Ellipse 22"
                  geometry={nodes['Ellipse 22'].geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0, -14.12, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
                <mesh
                  name="Ellipse5"
                  geometry={nodes.Ellipse5.geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0, -9.55, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1}
                />
              </group>
              <mesh
                name="Ellipse 23"
                geometry={nodes['Ellipse 23'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0, -14.12, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Ellipse6"
                geometry={nodes.Ellipse6.geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0, -9.55, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
          </group>
          <group name="Lamp" position={[-217.72, 722.16, 107.45]} scale={0}>
            <group name="lamp" position={[-4.68, 103.44, 7.1]} rotation={[0, -Math.PI / 2, 0]} scale={1}>
              <spotLight
                name="Spot Light"
                intensity={5}
                angle={0.86}
                penumbra={0.3}
                decay={14.8}
                distance={526}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-fov={119.99999999999999}
                shadow-camera-near={100}
                shadow-camera-far={100000}
                color="#f9f3a0"
                position={[-43.18, 33.04, 6.2]}
                rotation={[-2.58, -1.23, -2.15]}
                scale={2.63}
              />
              <group name="Group3" position={[-40.98, 53.8, -3.7]} rotation={[-0.18, 0.55, -0.44]} scale={1}>
                <mesh
                  name="lightbulb"
                  geometry={nodes.lightbulb.geometry}
                  material={materials.Gear2}
                  castShadow
                  receiveShadow
                  position={[-0.42, -15.67, 0.54]}
                  rotation={[0, 0, 0]}
                  scale={1.19}
                />
                <mesh
                  name="toppiecehead"
                  geometry={nodes.toppiecehead.geometry}
                  material={materials.dark}
                  castShadow
                  receiveShadow
                  position={[0, 18.69, 0]}
                  rotation={[0, 0, 0]}
                  scale={0.53}
                />
                <mesh
                  name="head"
                  geometry={nodes.head.geometry}
                  material={materials.lamp}
                  castShadow
                  receiveShadow
                  position={[0, 3.09, 0]}
                  rotation={[0, 0, 0]}
                  scale={0.96}
                />
              </group>
              <mesh
                name="centraltopinteriorpiece"
                geometry={nodes.centraltopinteriorpiece.geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[51.91, 66.39, -4.83]}
                rotation={[Math.PI / 2, -0.38, Math.PI / 2]}
                scale={[0.37, 0.28, 0.37]}
              />
              <mesh
                name="supportheadlamp"
                geometry={nodes.supportheadlamp.geometry}
                material={materials.lamp}
                castShadow
                receiveShadow
                position={[-17.73, 74.02, -4.83]}
                rotation={[Math.PI / 2, 0.57, Math.PI / 2]}
                scale={[1.93, 1.46, 1.93]}
              />
              <mesh
                name="centaltopredpiece"
                geometry={nodes.centaltopredpiece.geometry}
                material={materials.lamp}
                castShadow
                receiveShadow
                position={[34.39, 73.36, -4.83]}
                rotation={[Math.PI / 2, -0.38, Math.PI / 2]}
                scale={[1.19, 0.9, 1.19]}
              />
              <mesh
                name="supportpiece"
                geometry={nodes.supportpiece.geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[73.03, 58.21, -4.83]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.88, 0.03, 0.88]}
              />
              <mesh
                name="bodylamp"
                geometry={nodes.bodylamp.geometry}
                material={materials.lamp}
                castShadow
                receiveShadow
                position={[73.03, -23.71, -4.83]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.19, 1.09, 1.19]}
              />
              <mesh
                name="base"
                geometry={nodes.base.geometry}
                material={materials.lamp}
                castShadow
                receiveShadow
                position={[51.92, -100.17, -4.83]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1.46}
              />
            </group>
          </group>
          <group name="Computer setup" position={[-218.97, 103.08, 37.28]} rotation={[0, Math.PI / 2, 0]} scale={0.54}>
            <mesh
              name="mousepad"
              geometry={nodes.mousepad.geometry}
              material={materials.Chair}
              castShadow
              receiveShadow
              position={[1.88, -59.88, 32.54]}
              scale={0}
            />
            <group name="mouse" position={[77.42, -58.22, 36.43]} scale={0}>
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -1.05, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.01, 1.04, 1]}
              />
              <mesh
                name="Rectangle 6"
                geometry={nodes['Rectangle 6'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[0.08, -2.38, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="keyboard" position={[0, 500, 31.42]} scale={0}>
              <group name="Group 22" position={[0, 0.25, -13.87]}>
                <group name="Group 3" position={[0, 0, 5.5]}>
                  <group name="Group 31" position={[0, 0, 5.53]}>
                    <group name="Group 32" position={[0, 0, 5.58]}>
                      <group name="Group 33" position={[0, 0, 5.53]}>
                        <group name="Group 34" position={[0, 0, 5.5]}>
                          <mesh
                            name="Rectangle 12"
                            geometry={nodes['Rectangle 12'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[46.89, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 121"
                            geometry={nodes['Rectangle 121'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[41.37, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 122"
                            geometry={nodes['Rectangle 122'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[35.8, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 123"
                            geometry={nodes['Rectangle 123'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[30.33, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 124"
                            geometry={nodes['Rectangle 124'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[24.82, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 125"
                            geometry={nodes['Rectangle 125'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[19.25, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 101"
                            geometry={nodes['Rectangle 101'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-5.4, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 102"
                            geometry={nodes['Rectangle 102'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-30.33, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 91"
                            geometry={nodes['Rectangle 91'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-35.8, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 8"
                            geometry={nodes['Rectangle 8'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-41.32, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                          <mesh
                            name="Rectangle 71"
                            geometry={nodes['Rectangle 71'].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[-46.89, -0.5, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.99, 0.99, 1]}
                          />
                        </group>
                        <mesh
                          name="Rectangle 126"
                          geometry={nodes['Rectangle 126'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[41.33, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 127"
                          geometry={nodes['Rectangle 127'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[24.82, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 11"
                          geometry={nodes['Rectangle 11'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[13.88, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 111"
                          geometry={nodes['Rectangle 111'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[8.36, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 112"
                          geometry={nodes['Rectangle 112'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[2.8, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 113"
                          geometry={nodes['Rectangle 113'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-2.68, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 114"
                          geometry={nodes['Rectangle 114'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-8.19, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 115"
                          geometry={nodes['Rectangle 115'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-13.76, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 103"
                          geometry={nodes['Rectangle 103'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-19.25, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 104"
                          geometry={nodes['Rectangle 104'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-24.76, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 105"
                          geometry={nodes['Rectangle 105'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-30.33, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 92"
                          geometry={nodes['Rectangle 92'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-35.8, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                        <mesh
                          name="Rectangle 72"
                          geometry={nodes['Rectangle 72'].geometry}
                          material={materials.white}
                          castShadow
                          receiveShadow
                          position={[-44.2, -0.5, 0]}
                          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.99, 0.99, 1]}
                        />
                      </group>
                      <mesh
                        name="Rectangle 128"
                        geometry={nodes['Rectangle 128'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[46.89, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 129"
                        geometry={nodes['Rectangle 129'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[41.37, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 1210"
                        geometry={nodes['Rectangle 1210'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[35.8, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 116"
                        geometry={nodes['Rectangle 116'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[13.88, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 117"
                        geometry={nodes['Rectangle 117'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[8.36, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 118"
                        geometry={nodes['Rectangle 118'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[2.8, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 119"
                        geometry={nodes['Rectangle 119'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-2.68, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 1110"
                        geometry={nodes['Rectangle 1110'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-8.19, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 1111"
                        geometry={nodes['Rectangle 1111'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-13.76, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 106"
                        geometry={nodes['Rectangle 106'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-19.25, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 107"
                        geometry={nodes['Rectangle 107'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-24.76, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 108"
                        geometry={nodes['Rectangle 108'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-30.33, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 93"
                        geometry={nodes['Rectangle 93'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-35.8, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 81"
                        geometry={nodes['Rectangle 81'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-41.32, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                      <mesh
                        name="Rectangle 73"
                        geometry={nodes['Rectangle 73'].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-46.89, -0.5, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.99, 0.99, 1]}
                      />
                    </group>
                    <mesh
                      name="Rectangle 1211"
                      geometry={nodes['Rectangle 1211'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[46.89, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1212"
                      geometry={nodes['Rectangle 1212'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[41.37, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1213"
                      geometry={nodes['Rectangle 1213'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[35.8, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1214"
                      geometry={nodes['Rectangle 1214'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[30.33, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1215"
                      geometry={nodes['Rectangle 1215'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[24.82, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1216"
                      geometry={nodes['Rectangle 1216'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[19.25, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1112"
                      geometry={nodes['Rectangle 1112'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[13.88, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1113"
                      geometry={nodes['Rectangle 1113'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[8.36, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1114"
                      geometry={nodes['Rectangle 1114'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[2.8, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1115"
                      geometry={nodes['Rectangle 1115'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-2.68, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1116"
                      geometry={nodes['Rectangle 1116'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-8.19, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1117"
                      geometry={nodes['Rectangle 1117'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-13.76, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 109"
                      geometry={nodes['Rectangle 109'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-19.25, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1010"
                      geometry={nodes['Rectangle 1010'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-24.76, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 1011"
                      geometry={nodes['Rectangle 1011'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-30.33, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 94"
                      geometry={nodes['Rectangle 94'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-35.8, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 82"
                      geometry={nodes['Rectangle 82'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-41.32, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                    <mesh
                      name="Rectangle 74"
                      geometry={nodes['Rectangle 74'].geometry}
                      material={materials.white}
                      castShadow
                      receiveShadow
                      position={[-46.89, -0.5, 0]}
                      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                      scale={[0.99, 0.99, 1]}
                    />
                  </group>
                  <mesh
                    name="Rectangle 1217"
                    geometry={nodes['Rectangle 1217'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[44.16, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1218"
                    geometry={nodes['Rectangle 1218'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[35.8, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1219"
                    geometry={nodes['Rectangle 1219'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[30.33, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1220"
                    geometry={nodes['Rectangle 1220'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[24.82, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1221"
                    geometry={nodes['Rectangle 1221'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[19.25, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1118"
                    geometry={nodes['Rectangle 1118'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[13.88, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1119"
                    geometry={nodes['Rectangle 1119'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[8.36, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1120"
                    geometry={nodes['Rectangle 1120'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[2.8, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1121"
                    geometry={nodes['Rectangle 1121'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-2.68, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1122"
                    geometry={nodes['Rectangle 1122'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-8.19, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1123"
                    geometry={nodes['Rectangle 1123'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-13.76, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1012"
                    geometry={nodes['Rectangle 1012'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-19.25, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1013"
                    geometry={nodes['Rectangle 1013'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-24.76, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 1014"
                    geometry={nodes['Rectangle 1014'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-30.33, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 95"
                    geometry={nodes['Rectangle 95'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-35.8, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 83"
                    geometry={nodes['Rectangle 83'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-41.32, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                  <mesh
                    name="Rectangle 75"
                    geometry={nodes['Rectangle 75'].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[-46.89, -0.5, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.99, 0.99, 1]}
                  />
                </group>
                <mesh
                  name="Rectangle 1222"
                  geometry={nodes['Rectangle 1222'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[46.89, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1223"
                  geometry={nodes['Rectangle 1223'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[41.37, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1224"
                  geometry={nodes['Rectangle 1224'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[35.8, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1225"
                  geometry={nodes['Rectangle 1225'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[30.33, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1226"
                  geometry={nodes['Rectangle 1226'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[24.82, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1227"
                  geometry={nodes['Rectangle 1227'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[19.25, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1124"
                  geometry={nodes['Rectangle 1124'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[13.88, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1125"
                  geometry={nodes['Rectangle 1125'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[8.36, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1126"
                  geometry={nodes['Rectangle 1126'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[2.8, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1127"
                  geometry={nodes['Rectangle 1127'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-2.68, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1128"
                  geometry={nodes['Rectangle 1128'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-8.19, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1129"
                  geometry={nodes['Rectangle 1129'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-13.76, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1015"
                  geometry={nodes['Rectangle 1015'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-19.25, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1016"
                  geometry={nodes['Rectangle 1016'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-24.76, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 1017"
                  geometry={nodes['Rectangle 1017'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-30.33, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 96"
                  geometry={nodes['Rectangle 96'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-35.8, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
                <mesh
                  name="Rectangle 76"
                  geometry={nodes['Rectangle 76'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[-44.16, -0.5, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.99, 0.99, 1]}
                />
              </group>
              <mesh
                name="Rectangle 61"
                geometry={nodes['Rectangle 61'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[0, -2.09, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <group name="computer" position={[0, 500, -31.03]} scale={0}>
              <mesh
                name="Ellipse7"
                geometry={nodes.Ellipse7.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-19.5, -14.55, 2.81]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 5"
                geometry={nodes['Rectangle 5'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -36.26, -2.47]}
                rotation={[-2.88, 0, -Math.PI / 2]}
                scale={[1, 0.99, 1]}
              />
              <mesh
                name="Rectangle 41"
                geometry={nodes['Rectangle 41'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, -58.44, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 0.99, 1]}
              />
              <mesh
                name="Rectangle 3"
                geometry={nodes['Rectangle 3'].geometry}
                material={materials.Computer_screen}
                castShadow
                receiveShadow
                position={[0, 17.45, 5.74]}
                rotation={[0, 0, 0]}
                scale={[0.97, 0.97, 1]}
              />
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0, 9.84, 4.31]}
              />
            </group>
          </group>
          <group name="Desk" scale={0.36}>
            <group name="legs" position={[-18.03, -1.43, 1.65]} scale={0}>
              <group name="leg Instance" position={[333.95, -9.88, 0.21]} rotation={[0, 0, 0]} scale={0.43}>
                <group name="Group4" position={[-67.42, 0, 0]}>
                  <mesh
                    name="Rectangle 42"
                    geometry={nodes['Rectangle 42'].geometry}
                    material={materials.Metal}
                    castShadow
                    receiveShadow
                    position={[-1.63, -236.61, -7.41]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.64, 0.62, 1.22]}
                  />
                  <mesh
                    name="Rectangle2"
                    geometry={nodes.Rectangle2.geometry}
                    material={materials.Metal}
                    castShadow
                    receiveShadow
                    position={[0, -266.5, -0.49]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.77, 0.56, 1]}
                  />
                </group>
              </group>
              <group name="leg" position={[-290.09, -9.88, 0.21]} rotation={[0, 0, 0]} scale={0.43}>
                <group name="Group5" position={[-67.42, 0, 0]}>
                  <mesh
                    name="Rectangle 43"
                    geometry={nodes['Rectangle 43'].geometry}
                    material={materials.Metal}
                    castShadow
                    receiveShadow
                    position={[-1.63, -236.61, -7.41]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.64, 0.62, 1.22]}
                  />
                  <mesh
                    name="Rectangle3"
                    geometry={nodes.Rectangle3.geometry}
                    material={materials.Metal}
                    castShadow
                    receiveShadow
                    position={[0, -266.5, -0.49]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.77, 0.56, 1]}
                  />
                </group>
              </group>
            </group>
            <mesh
              name="wood_top"
              geometry={nodes.wood_top.geometry}
              material={materials.Desk_wood}
              castShadow
              receiveShadow
              position={[-28.24, 109, 0]}
              scale={0}
            />
          </group>
          <group name="Speakers" position={[-236.05, 86.1, 41.35]}>
            <group name="left_speaker" position={[-0.91, -16.17, 98.82]} scale={0}>
              <mesh
                name="Cylinder 31"
                geometry={nodes['Cylinder 31'].geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[-0.11, 74.56, 60.59]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.08, 0.43, 2.08]}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes['Cylinder 2'].geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[-0.11, 190.22, 65.74]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.24, 0.26, 1.24]}
              />
              <mesh
                name="Cylinder 32"
                geometry={nodes['Cylinder 32'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 74.56, 60.59]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.17, 0.45, 2.17]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 190.22, 65.43]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.36, 0.28, 1.36]}
              />
              <mesh
                name="Cube 21"
                geometry={nodes['Cube 21'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-0.03, 119.2, 67.22]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.04, 1, 1]}
              />
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 119.26, -4.18]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.04, 0.98, 1.53]}
              />
            </group>
            <group name="right_speaker" position={[0.47, -15.91, -104.1]} scale={0}>
              <mesh
                name="Cylinder 33"
                geometry={nodes['Cylinder 33'].geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[-0.11, 74.56, 60.59]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.08, 0.43, 2.08]}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes['Cylinder 21'].geometry}
                material={materials.dark}
                castShadow
                receiveShadow
                position={[-0.11, 190.22, 65.74]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.24, 0.26, 1.24]}
              />
              <mesh
                name="Cylinder 34"
                geometry={nodes['Cylinder 34'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 74.56, 60.59]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.17, 0.45, 2.17]}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 190.22, 65.43]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.36, 0.28, 1.36]}
              />
              <mesh
                name="Cube 24"
                geometry={nodes['Cube 24'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-0.03, 119.2, 67.22]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.04, 1, 1]}
              />
              <mesh
                name="Cube4"
                geometry={nodes.Cube4.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-0.11, 119.26, -4.18]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.04, 0.98, 1.53]}
              />
            </group>
          </group>
          <group name="Office_chair" position={[-63.54, 938.51, 37.76]} scale={0}>
            <group name="top" position={[0.52, 60.54, -7.01]}>
              <mesh
                name="seat"
                geometry={nodes.seat.geometry}
                material={nodes.seat.material}
                castShadow
                receiveShadow
                position={[-2.58, -247.3, -28.16]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <mesh
                name="back"
                geometry={nodes.back.geometry}
                material={nodes.back.material}
                castShadow
                receiveShadow
                position={[-2.58, -247.3, -28.16]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <mesh
                name="back top"
                geometry={nodes['back top'].geometry}
                material={nodes['back top'].material}
                castShadow
                receiveShadow
                position={[-2.58, -247.3, -28.16]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <group name="armrest left" position={[115.4, -76.33, 2.78]} rotation={[0, 0, 0]} scale={0.08}>
                <mesh
                  name="armrest_cilinder_side_L"
                  geometry={nodes.armrest_cilinder_side_L.geometry}
                  material={nodes.armrest_cilinder_side_L.material}
                  castShadow
                  receiveShadow
                  position={[-1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
                <mesh
                  name="armrest_L"
                  geometry={nodes.armrest_L.geometry}
                  material={nodes.armrest_L.material}
                  castShadow
                  receiveShadow
                  position={[-1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
                <mesh
                  name="armrest_Cylinder_L"
                  geometry={nodes.armrest_Cylinder_L.geometry}
                  material={nodes.armrest_Cylinder_L.material}
                  castShadow
                  receiveShadow
                  position={[-1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
              </group>
              <group name="armrest right" position={[-120.56, -76.33, 2.78]} rotation={[0, 0, 0]} scale={0.08}>
                <mesh
                  name="armrest_cilinder_side_R"
                  geometry={nodes.armrest_cilinder_side_R.geometry}
                  material={nodes.armrest_cilinder_side_R.material}
                  castShadow
                  receiveShadow
                  position={[1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
                <mesh
                  name="armrest_R"
                  geometry={nodes.armrest_R.geometry}
                  material={nodes.armrest_R.material}
                  castShadow
                  receiveShadow
                  position={[1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
                <mesh
                  name="armrest_Cylinder_R"
                  geometry={nodes.armrest_Cylinder_R.geometry}
                  material={nodes.armrest_Cylinder_R.material}
                  castShadow
                  receiveShadow
                  position={[1447.01, -2096.91, -379.44]}
                  scale={63.64}
                />
              </group>
            </group>
            <group name="bottom" position={[0, -164.5, 0]}>
              <mesh
                name="Cylinder_in"
                geometry={nodes.Cylinder_in.geometry}
                material={nodes.Cylinder_in.material}
                castShadow
                receiveShadow
                position={[-2.06, -22.26, -35.17]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <mesh
                name="Cylinder_out"
                geometry={nodes.Cylinder_out.geometry}
                material={nodes.Cylinder_out.material}
                castShadow
                receiveShadow
                position={[-2.06, -22.26, -35.17]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <mesh
                name="sphere"
                geometry={nodes.sphere.geometry}
                material={nodes.sphere.material}
                castShadow
                receiveShadow
                position={[-2.06, -22.26, -35.17]}
                rotation={[0, 0, 0]}
                scale={5.19}
              />
              <group name="chair legs" position={[0, -68.44, 0]} rotation={[0, 0, 0]} scale={0.08}>
                <mesh
                  name="chair_leg"
                  geometry={nodes.chair_leg.geometry}
                  material={nodes.chair_leg.material}
                  castShadow
                  receiveShadow
                  position={[-25.29, 566.41, -431.4]}
                  scale={63.64}
                />
                <mesh
                  name="chair_leg1"
                  geometry={nodes.chair_leg1.geometry}
                  material={nodes.chair_leg1.material}
                  castShadow
                  receiveShadow
                  position={[-25.29, 566.41, -431.4]}
                  scale={63.64}
                />
                <mesh
                  name="chair_leg2"
                  geometry={nodes.chair_leg2.geometry}
                  material={nodes.chair_leg2.material}
                  castShadow
                  receiveShadow
                  position={[-25.29, 566.41, -431.4]}
                  scale={63.64}
                />
                <mesh
                  name="chair_leg3"
                  geometry={nodes.chair_leg3.geometry}
                  material={nodes.chair_leg3.material}
                  castShadow
                  receiveShadow
                  position={[-25.29, 566.41, -431.4]}
                  scale={63.64}
                />
                <mesh
                  name="chair_leg4"
                  geometry={nodes.chair_leg4.geometry}
                  material={nodes.chair_leg4.material}
                  castShadow
                  receiveShadow
                  position={[-25.29, 566.41, -431.4]}
                  scale={63.64}
                />
                <group name="wheels" position={[0, -115.38, 0]}>
                  <mesh
                    name="wheel"
                    geometry={nodes.wheel.geometry}
                    material={nodes.wheel.material}
                    castShadow
                    receiveShadow
                    position={[-25.29, 681.79, -431.4]}
                    scale={63.64}
                  />
                  <mesh
                    name="wheel1"
                    geometry={nodes.wheel1.geometry}
                    material={nodes.wheel1.material}
                    castShadow
                    receiveShadow
                    position={[-25.29, 681.79, -431.4]}
                    scale={63.64}
                  />
                  <mesh
                    name="wheel2"
                    geometry={nodes.wheel2.geometry}
                    material={nodes.wheel2.material}
                    castShadow
                    receiveShadow
                    position={[-25.29, 681.79, -431.4]}
                    scale={63.64}
                  />
                  <mesh
                    name="wheel3"
                    geometry={nodes.wheel3.geometry}
                    material={nodes.wheel3.material}
                    castShadow
                    receiveShadow
                    position={[-25.29, 681.79, -431.4]}
                    scale={63.64}
                  />
                  <mesh
                    name="wheel4"
                    geometry={nodes.wheel4.geometry}
                    material={nodes.wheel4.material}
                    castShadow
                    receiveShadow
                    position={[-25.29, 681.79, -431.4]}
                    scale={63.64}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="Walls" position={[-97.17, 133.27, 29.62]} scale={0}>
            <group name="Wall Instance" position={[0.89, 0.01, -182.66]} rotation={[0, Math.PI / 2, 0]}>
              <mesh
                name="Wall"
                geometry={nodes.Wall.geometry}
                material={materials.Wall}
                castShadow
                receiveShadow
                position={[-13.25, 0.07, -0.03]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={0.75}
              >
                <mesh
                  name="Rectangle 44"
                  geometry={nodes['Rectangle 44'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[0, 193.7, -6.26]}
                />
              </mesh>
            </group>
            <group name="Wall1" position={[-174.64, 0.01, 7.84]}>
              <mesh
                name="Wall2"
                geometry={nodes.Wall2.geometry}
                material={materials.Wall}
                castShadow
                receiveShadow
                position={[-13.25, 0.07, -0.03]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={0.75}
              >
                <mesh
                  name="Rectangle 45"
                  geometry={nodes['Rectangle 45'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[0, 193.7, 25.28]}
                />
              </mesh>
            </group>
          </group>
          <group name="Plant" position={[-194.7, -21.1, 1795.81]} scale={0}>
            <mesh
              name="plant"
              geometry={nodes.plant.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[2.6, 135.83, 4.26]}
            />
            <mesh
              name="ground"
              geometry={nodes.ground.geometry}
              material={materials.dark}
              castShadow
              receiveShadow
              position={[-0.09, 94.39, 3.13]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.95}
            />
            <group name="legs1" position={[-0.98, 37.96, 3.26]} scale={1.74}>
              <mesh
                name="Cylinder 41"
                geometry={nodes['Cylinder 41'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-17.07, 0, -14.16]}
                scale={0.75}
              />
              <mesh
                name="Cylinder 35"
                geometry={nodes['Cylinder 35'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[17.13, 0, -15.43]}
                scale={0.75}
              />
              <mesh
                name="Cylinder 42"
                geometry={nodes['Cylinder 42'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[-17.13, 0, 14.84]}
                scale={0.75}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes['Cylinder 22'].geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[17.13, 0, 15.43]}
                scale={0.75}
              />
            </group>
            <mesh
              name="flowerpot1"
              geometry={nodes.flowerpot1.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-0.23, 70.95, 3.45]}
              scale={1.08}
            />
          </group>
          <group name="Paintings" position={[-138.27, 164.44, -136.96]} scale={1.21}>
            <group name="painting" position={[0, -58.63, -500]} rotation={[0, 0, 0]} scale={[0.36, 0.44, 0.36]}>
              <group name="subgroup" position={[0, 133, 8.53]} scale={0}>
                <mesh
                  name="border"
                  geometry={nodes.border.geometry}
                  material={materials.dark}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="canvas"
                  geometry={nodes.canvas.geometry}
                  material={materials.frame1}
                  castShadow
                  receiveShadow
                  position={[0, 0, -3]}
                />
              </group>
            </group>
            <group name="painting1" position={[81.6, -17.07, -500]} rotation={[0, 0, 0]} scale={[0.3, 0.29, 0.24]}>
              <group name="subgroup1" position={[0, 133, 8.53]} scale={0}>
                <mesh
                  name="border1"
                  geometry={nodes.border1.geometry}
                  material={materials.dark}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="canvas1"
                  geometry={nodes.canvas1.geometry}
                  material={materials.frame2}
                  castShadow
                  receiveShadow
                  position={[0, 0, -3]}
                  rotation={[0, 0, Math.PI]}
                />
              </group>
            </group>
            <group name="painting2" position={[81.6, -61.13, -500]} rotation={[0, 0, 0]} scale={[0.3, 0.14, 0.24]}>
              <group name="subgroup2" position={[0, 133, 8.53]} scale={0}>
                <mesh
                  name="border2"
                  geometry={nodes.border2.geometry}
                  material={materials.dark}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="canvas2"
                  geometry={nodes.canvas2.geometry}
                  material={materials.frame3}
                  castShadow
                  receiveShadow
                  position={[0.59, 0, -3]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[1.34, 1, 1]}
                />
              </group>
            </group>
          </group>
          <mesh
            name="Rug"
            geometry={nodes.Rug.geometry}
            material={materials.Rug}
            castShadow
            receiveShadow
            position={[-81.1, -13.22, 35.7]}
            scale={0}
          />
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.5}
            far={10000}
            near={-100000}
            position={[562.43, 486.71, 673.2]}
            rotation={[-0.53, 0.74, 0.38]}
          />
          <mesh
            name="Ellipse8"
            geometry={nodes.Ellipse8.geometry}
            material={materials.Invisible}
            castShadow
            receiveShadow
            position={[-212.94, 525.66, 44.97]}
            rotation={[0, 0, -Math.PI]}
          />
          <pointLight
            name="Point Light 3"
            intensity={1.5}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#d900fe"
            position={[-49.88, 157.1, 41.89]}
            rotation={[0, 0, 0]}
            scale={0.75}
          />*/}
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" /> 
        </scene>
      </group>
    </>
  )
}

export default function Scene(){
  return (
    <Canvas>
      <Object></Object>
    </Canvas>
  )
}