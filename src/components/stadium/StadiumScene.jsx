import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CricketField from './CricketField'
import SeatingBowl from './SeatingBowl'
import StadiumRoof from './StadiumRoof'
import StadiumLights from './StadiumLights'

function StadiumModel() {
  return (
    <>
      {/* Background */}
      <color attach="background" args={['#080609']} />
      <fog attach="fog" args={['#080609', 30, 65]} />

      {/* Main lighting */}
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        castShadow
      />

      <directionalLight
        position={[-12, 10, -10]}
        intensity={1}
        color="#d6b77a"
      />

      {/* Stadium foundation */}
      <mesh position={[0, -0.35, 0]} receiveShadow>
        <cylinderGeometry args={[13.5, 13.5, 0.4, 160]} />
        <meshStandardMaterial
          color="#252329"
          roughness={0.85}
        />
      </mesh>

      {/* Cricket ground */}
      <CricketField />

      {/* Seating architecture */}
      <SeatingBowl />

      {/* Roof structure */}
      <StadiumRoof />

      {/* Floodlights */}
      <StadiumLights />

      {/* Ground beneath stadium */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.57, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#080609" />
      </mesh>
    </>
  )
}

function StadiumScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [23, 17, 25],
        fov: 42,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.75]}
      gl={{ antialias: true }}
    >
      <StadiumModel />

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minDistance={15}
        maxDistance={38}
        minPolarAngle={0.25}
        maxPolarAngle={1.4}
        target={[0, 1.5, 0]}
      />
    </Canvas>
  )
}

export default StadiumScene