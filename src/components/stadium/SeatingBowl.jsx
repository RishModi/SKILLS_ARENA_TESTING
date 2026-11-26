import { useMemo } from 'react'
import * as THREE from 'three'

function SeatingTier({ innerRadius, outerRadius, height, color, rows }) {
  const seats = useMemo(() => {
    const items = []
    const segments = 160

    for (let row = 0; row < rows; row++) {
      const radius = innerRadius + row * 0.105
      const y = height + row * 0.075

      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2

        items.push({
          x: Math.cos(angle) * radius,
          z: Math.sin(angle) * radius,
          y,
          angle,
        })
      }
    }

    return items
  }, [innerRadius, height, rows])

  return (
    <group>
      {seats.map((seat, index) => (
        <mesh
          key={index}
          position={[seat.x, seat.y, seat.z]}
          rotation={[0, -seat.angle, 0]}
        >
          <boxGeometry args={[0.085, 0.055, 0.13]} />
          <meshStandardMaterial
            color={color}
            roughness={0.7}
          />
        </mesh>
      ))}

      <mesh
        position={[0, height - 0.08, 0]}
      >
        <cylinderGeometry
          args={[
            outerRadius,
            innerRadius,
            0.16,
            160,
            1,
            true,
          ]}
        />
        <meshStandardMaterial
          color="#303139"
          side={THREE.DoubleSide}
          roughness={0.9}
        />
      </mesh>
    </group>
  )
}

function SeatingBowl() {
  return (
    <group>
      {/* Lower seating tier */}
      <SeatingTier
        innerRadius={7.7}
        outerRadius={9.0}
        height={0.65}
        color="#315c85"
        rows={9}
      />

      {/* Middle seating tier */}
      <SeatingTier
        innerRadius={9.1}
        outerRadius={10.4}
        height={1.65}
        color="#8b263d"
        rows={9}
      />

      {/* Upper seating tier */}
      <SeatingTier
        innerRadius={10.5}
        outerRadius={11.8}
        height={2.7}
        color="#315c85"
        rows={9}
      />

      {/* Premium top tier */}
      <SeatingTier
        innerRadius={11.9}
        outerRadius={12.8}
        height={3.75}
        color="#b18b4e"
        rows={6}
      />
    </group>
  )
}

export default SeatingBowl