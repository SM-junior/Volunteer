import { Link } from "react-router-dom";

const GalleryContent = ({ item, setItems }) => {
    const {_id, title, img } = item;

   
    return (
        <div className="card card-compact w-68 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`details/${_id}`} ><button className="btn btn-info">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GalleryContent;