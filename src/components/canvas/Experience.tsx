"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import type * as THREE from "three";

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (meshRef.current) {
            gsap.to(meshRef.current.rotation, {
                y: Math.PI * 2,
                duration: 5,
                repeat: -1,
                ease: "linear",
            });
        }
    }, []);

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="" />
        </mesh>
    );
}

export default function Experience() {
    return (
        <main className="w-full h-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Scene />
                <OrbitControls />
            </Canvas>
        </main>
    );
}
