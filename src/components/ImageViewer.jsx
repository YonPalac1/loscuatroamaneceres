const ImageViewer = ({ image, setImageActive }) => {
    return <div className="image-viewer">
        <div className="image-backdrop" onClick={() => setImageActive(false)}></div>
        <button className="close-button" onClick={() => setImageActive(false)}>X</button>
        <img src={image} alt="" />
    </div>
}
export default ImageViewer;