import * as THREE from 'three'

function RoofSection({ angle }) {
  return (
    <group rotation={[0, angle, 0]}>
      {/* Main roof panel */}
      <mesh
        position={[0, 5.1, -11.2]}
        rotation={[0.12, 0, 0]}
      >
        <boxGeometry args={[8, 0.22, 3.2]} />
        <meshStandardMaterial
          color="#77747b"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Gold roof edge */}
      <mesh position={[0, 5.1, -12.85]}>
        <boxGeometry args={[8, 0.12, 0.12]} />
        <meshStandardMaterial
          color="#d6b77a"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Structural support */}
      <mesh
        position={[0, 3.65, -10.3]}
        rotation={[0.25, 0, 0]}
      >
        <cylinderGeometry args={[0.09, 0.16, 3.1, 12]} />
        <meshStandardMaterial
          color="#aaa5a0"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Roof brace */}
      <mesh
        position={[0, 4.35, -11.1]}
        rotation={[0.65, 0, 0]}
      >
        <boxGeometry args={[0.12, 0.12, 2.2]} />
        <meshStandardMaterial
          color="#d6b77a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  )
}

function StadiumRoof() {
  const sections = 16

  return (
    <group>
      {Array.from({ length: sections }, (_, index) => (
        <RoofSection
          key={index}
          angle={(index / sections) * Math.PI * 2}
        />
      ))}

      {/* Inner roof support ring */}
      <mesh position={[0, 4.9, 0]}>
        <torusGeometry args={[8.8, 0.12, 12, 160]} />
        <meshStandardMaterial
          color="#d6b77a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  )
}

export default StadiumRoof