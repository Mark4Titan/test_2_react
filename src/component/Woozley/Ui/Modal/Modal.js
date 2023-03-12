import { DivModal, DivTextBox } from "../Ui.styled"

const Modal = ()=>{

    return(
        <DivModal key="text">
          <h2>ByteCloud</h2>
          <h2>Object Storage</h2>
          <DivTextBox>
            <div>asia</div>
            <div>latency</div>
            <div>Download time</div>
            <div>Video streaming</div>
          </DivTextBox>
        </DivModal>
    )
}
export default Modal