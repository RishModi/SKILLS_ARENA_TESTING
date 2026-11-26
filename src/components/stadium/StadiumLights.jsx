function FloodlightTower({ position }) {
  return (
    <group position={position}>
      {/* Tower pole */}
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[0.09, 0.16, 5, 12]} />
        <meshStandardMaterial
          color="#777780"
          metalness={0.8}
          roughness={0.35}
        />
      </mesh>

      {/* Light panel */}
      <mesh position={[0, 5.15, 0]}>
        <boxGeometry args={[1.1, 0.65, 0.2]} />
        <meshStandardMaterial
          color="#fff3d5"
          emissive="#ffe2a3"
          emissiveIntensity={2.5}
          roughness={0.25}
        />
      </mesh>

      {/* Individual light bulbs */}
      {Array.from({ length: 8 }, (_, index) => (
        <mesh
          key={index}
          position={[
            (index % 4) * 0.22 - 0.33,
            5.15 + (index < 4 ? 0.14 : -0.14),
            0.12,
          ]}
        >
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#fff5d9" />
        </mesh>
      ))}

      {/* Light source */}
      <pointLight
        position={[0, 5, 0.5]}
        intensity={45}
        distance={12}
        color="#ffe7b5"
      />
    </group>
  )
}

function StadiumLights() {
  const positions = [
    [-12.5, 0, -12.5],
    [12.5, 0, -12.5],
    [-12.5, 0, 12.5],
    [12.5, 0, 12.5],
  ]

  return (
    <group>
      {positions.map((position, index) => (
        <FloodlightTower
          key={index}
          position={position}
        />
      ))}
    </group>
  )
}

export default StadiumLights