import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export default function CartWidget() {
    const { countCartItems } = useContext(cartContext)
    const totalItems = countCartItems()

    return (
        <div className="cart-widget">
            {totalItems > 0 && (
                <span>({totalItems})</span>
            )}
        </div>
    )
}
