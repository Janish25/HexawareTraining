import { useTexture } from "@react-three/drei"
import { useState } from "react"
import frontView from "../assets/images/frontView.jpg"; 
import rearView from "../assets/images/rearview.jpg"; 
import rightView from "../assets/images/rightview.jpg";
import leftView from "../assets/images/bottomview.jpg"; 
import topView from "../assets/images/topview.jpg";

const ProductImageDisplay = () => {

    const [index, setIndex] = useState(0)

    const productImages = [
        frontView,
        rearView,
        rightView,
        leftView,
        topView
    ]

    const texture = useTexture(productImages[index]);

    const displayNextImage = () => {
        setIndex((currentIndex) => {
            return (currentIndex + 1) % productImages.length
        })
    }
    return(
        <mesh onClick={displayNextImage}>
            <planeGeometry args={[10, 10, 2]} />
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

export default ProductImageDisplay;