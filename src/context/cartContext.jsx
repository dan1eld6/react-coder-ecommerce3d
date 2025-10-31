// import { createContext, useState, useEffect } from 'react'

// const cartContext = createContext("default value")

// export function CartProvider({ children }) {

//     // leer el localstorage para ver los items agregados
//     const [cartItems, setCartItems] = useState(() => {
//         const savedCart = localStorage.getItem("cart")
//         return savedCart ? JSON.parse(savedCart) : []
//     })

//     // salvar el carrito en localstorage
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cartItems))
//     }, [cartItems])

//     function addToCart(newItem) {
//         const quantity = 1
//         const newCart = structuredClone(cartItems)

//         const isInCart = newCart.some(item => item.id === newItem.id)
//         if (isInCart) {
//             const itemIndex = newCart.findIndex(item => item.id === newItem.id)
//             newCart[itemIndex].quantity += quantity
//             alert("Otro más agregado al carrito")
//         } else {
//             newItem.quantity = quantity
//             newCart.push(newItem)
//             alert("Producto agregado al carrito")
//         }

//         setCartItems(newCart)
//         console.log(newCart)
//     }

//     function countCartItems() {
//         return cartItems.reduce((total, item) => total + item.quantity, 0)
//     }

//     function removeItem(id) {
//         const newCart = cartItems.filter(item => item.id !== id)
//         setCartItems(newCart)
//     }

//     //vaciar el carrito
//     function clearCart() {
//         setCartItems([])}

//     //CartTotalPrice
//     function cartTotalPrice() {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
// }



//     //removeItem





//     return (
//         <cartContext.Provider value={{ addToCart, countCartItems, cartItems, removeItem, clearCart, cartTotalPrice }}>
//             {children}
//         </cartContext.Provider>
//     )
// }

// export { cartContext }


import { createContext, useState, useEffect } from 'react'

const cartContext = createContext("default value")

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(newItem) {
        const quantity = 1
        const newCart = structuredClone(cartItems)
        const existingItem = newCart.find(item => item.id === newItem.id)

        if (existingItem) {
            existingItem.quantity += quantity
            alert("Otro más agregado al carrito")
        } else {
            newItem.quantity = quantity
            newCart.push(newItem)
            alert("Producto agregado al carrito")
        }
        setCartItems(newCart)
    }

    function removeItem(id) {
        const newCart = cartItems.filter(item => item.id !== id)
        setCartItems(newCart)
    }

    function clearCart() {
        setCartItems([])
    }

    function countCartItems() {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    function cartTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    // 🔹 NUEVO: Aumentar y disminuir cantidad
    function increaseQuantity(id) {
        const newCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        setCartItems(newCart)
    }

    function decreaseQuantity(id) {
        const newCart = cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        setCartItems(newCart)
    }

    return (
        <cartContext.Provider
            value={{
                addToCart,
                countCartItems,
                cartItems,
                removeItem,
                clearCart,
                cartTotalPrice,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export { cartContext }
