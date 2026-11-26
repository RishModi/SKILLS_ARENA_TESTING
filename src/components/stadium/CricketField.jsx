import { useMemo } from 'react'
import * as THREE from 'three'

function CricketField() {
  const grassGeometry = useMemo(() => {
    const geometry = new THREE.CircleGeometry(7.2, 128)
    geometry.rotateX(-Math.PI / 2)
    return geometry
  }, [])

  const boundaryGeometry = useMemo(() => {
    const points = []
    const segments = 128

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2

      points.push(
        new THREE.Vector3(
          Math.cos(angle) * 7.2,
          0.035,
          Math.sin(angle) * 7.2
        )
      )
    }

    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  return (
    <group>
      {/* Main grass field */}
      <mesh
        geometry={grassGeometry}
        receiveShadow
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#477b3d"
          roughness={0.95}
        />
      </mesh>

      {/* Outer boundary */}
      <line geometry={boundaryGeometry}>
        <lineBasicMaterial
          color="#e8d7a8"
          transparent
          opacity={0.9}
        />
      </line>

      {/* Inner playing circle */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.025, 0]}
      >
        <ringGeometry args={[3.1, 3.14, 96]} />
        <meshBasicMaterial
          color="#d8d0a0"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Cricket pitch */}
      <mesh
        position={[0, 0.055, 0]}
        receiveShadow
      >
        <boxGeometry args={[0.85, 0.035, 4.8]} />
        <meshStandardMaterial
          color="#b99b70"
          roughness={1}
        />
      </mesh>

      {/* Pitch creases */}
      {[ -1.8, 1.8 ].map((z) => (
        <mesh
          key={z}
          position={[0, 0.08, z]}
        >
          <boxGeometry args={[1.15, 0.012, 0.035]} />
          <meshBasicMaterial color="#fff4dc" />
        </mesh>
      ))}

      {/* Centre pitch marking */}
      <mesh position={[0, 0.079, 0]}>
        <boxGeometry args={[0.035, 0.012, 0.25]} />
        <meshBasicMaterial color="#fff4dc" />
      </mesh>

      {/* Ground underneath */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.08, 0]}
      >
        <circleGeometry args={[7.25, 128]} />
        <meshStandardMaterial
          color="#263b25"
          roughness={1}
        />
      </mesh>
    </group>
  )
}

export default CricketField