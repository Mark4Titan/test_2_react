import BG_DEMO from "../../img/mp4/map.mp4";
import {  Video, VideoBG } from "./DEMODG.styled";

const VideoComponent = ()=> {
  return (
    <VideoBG>      
      <Video playsInline poster="/assets/poster.png" src={BG_DEMO} />
    </VideoBG>
  );
}

export default VideoComponent;
