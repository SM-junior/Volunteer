import { useEffect, useState } from "react";
import GalleryContent from "./GalleryContent";
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
    const [items, setItems] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const { totalGallery } = useLoaderData();

    const totalPages = Math.ceil(totalGallery / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()]

    useEffect(() => {
        fetch(`http://localhost:3000/gallery?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [currentPage, itemsPerPage])

    const handleClick = (id) => {
        const cardData = items.find(item => id == item._id)
        const cart = {
            title: cardData.title,
            img: cardData.img
        }

        fetch(`http://localhost:3000/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'WOW!',
                        text: 'Item added cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const options = [12, 24, 36, 48, 60, 76];
    const handleSelectChange = (e) => {
        setItemsPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }

    return (
        <>
            <div className="text-center py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
                {items ?
                    items.map(item =>
                        <GalleryContent
                            key={item._id}
                            item={item}
                            setItems={setItems}
                            handleClick={handleClick}
                        ></GalleryContent>
                    ) :
                    <span className="loading loading-bars loading-lg"></span>
                }
            </div>
            <div className="pagination text-center">
                {
                    pageNumbers.map(page => <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? 'active' : ""}
                    >{page}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange} className='border-solid'>
                    {
                        options.map(option =>
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    }
                </select>
            </div>
        </>
    );
};

export default Gallery;