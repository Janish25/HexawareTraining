const Cube = () => {

    return(
        <mesh>
            {/* cube */}
            <boxGeometry args={[50, 50, 50]} />

        
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

export default Cube;