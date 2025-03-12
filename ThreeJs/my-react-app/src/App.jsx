import {Canvas} from "@react-three/fiber"
import ProductImageDisplay from "./components/product_images";
import { OrbitControls } from "@react-three/drei";

function App() {


  return(
    <div>
      <h3>Product images</h3>
      <Canvas camera={{'position':[0,0,5]}}>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5,5,5]}/>
        {/* {/<Cube/>/} */}
        <ProductImageDisplay/>
        <OrbitControls/>
      </Canvas>
    </div>
  )
  
}

export default App;