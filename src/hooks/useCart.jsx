import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/cart')
            return res.json();
        },
    })
    return [cart, refetch]
}
export default useCart;