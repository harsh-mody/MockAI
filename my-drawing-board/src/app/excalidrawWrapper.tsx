"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";


const ExcalidrawWrapper: React.FC = () => {
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
    id: "rect-1",
    width: window.innerWidth,
    height: window.innerHeight,
  },]));
  return (
    <div style={{height:window.innerHeight, width:window.innerWidth}}>  
      <Excalidraw />
    </div> 
  );
};
export default ExcalidrawWrapper;