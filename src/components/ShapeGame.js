import React, {Component} from 'react';
import * as THREE from "three";
import ExpoTHREE from "expo-three";
import {GLView} from 'expo-gl';
import { Asset } from 'expo-asset'
import {
    StyleSheet,
    View,
    PanResponder,
    Animated
} from "react-native";
import { TextureLoader } from 'expo-three';


export default class ShapeGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pan: new Animated.ValueXY()
        };
    }

    componentWillMount() {
        this._val = {x: 0, y: 0}
        // this.state.pan.addListener((value) => this._val = value);
        // this.panResponder = PanResponder.create({
        //     onStartShouldSetPanResponder: (e, gesture) => true,
        //     onPanResponderMove: Animated.event([
        //         null, {dx: this.state.pan.x, dy: this.state.pan.y}
        //     ]),
        //     // adjusting delta value
        //     this.state.pan.setValue({x: 0, y: 0})
        // });
    }

    _onGLContextCreate = async gl => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
        );
        const renderer = new ExpoTHREE.Renderer({gl});
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const geometry = new THREE.SphereBufferGeometry(1, 36, 36);
        const material = new THREE.MeshBasicMaterial({
            map: new TextureLoader().load(require('../assets/img/space.jpg'))
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        camera.position.z = 2;
        const render = () => {
            requestAnimationFrame(render);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };
        render();
    }

    render() {
        return (
            <GLView
                style={{flex: 1}}
                onContextCreate={this._onGLContextCreate}
            />
        );
    }
}
