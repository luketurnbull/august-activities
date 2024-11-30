import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function StarBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <color attach="background" args={["#000"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

function Experience() {
  const mousePosition = useMousePosition();
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    if (mousePosition) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let x = mousePosition.x / screenWidth;
      let y = mousePosition.y / screenHeight;

      const xRange = [-1, 1];
      const yRange = [-1, 1];

      x = xRange[0] + x * (xRange[1] - xRange[0]);
      y = yRange[0] + y * (yRange[1] - yRange[0]);

      camera.position.x = x;
      camera.position.y = y;
    }
  });

  return (
    <Stars
      radius={1}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}
