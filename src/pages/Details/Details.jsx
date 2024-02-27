
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';


const Details = () => {
    const [items, setItems] = useState();
    const [details, setDetails] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [,refetch]=useCart()

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3000/gallery`)
            .then(res => res.json())
            .then(data => {
                const x = data.find(d => d._id === id)
                setItems(x)
            })
        setLoading(false)
    }, [])

    // const cardData = items.find(item => id == item._id)
    // setDetails(cardData)

    const handleClick = () => {
        // console.log(id);
        // const cardData = items.find(item => id == item._id)
        // setDetails(cardData)
        const cart = {
            title: items.title,
            img: items.img
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
                    refetch()
                    Swal.fire({
                        title: 'WOW!',
                        text: 'Item added cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        // setLoading(false)
    }

    return (
        <div>
            <h2 className='text-center text-2xl'>Product Details</h2>
            {
                <div className="card card-side bg-green-100 shadow-xl w-max mx-auto">
                    <figure><img className='w-72' src={items && items.img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{items && items.title}</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <Link onClick={() => handleClick()}><button className="btn btn-info">Buy now</button></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;