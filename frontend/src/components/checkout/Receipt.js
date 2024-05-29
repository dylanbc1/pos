import React from "react";  
import { useCheckout } from '../../CheckoutContext.js';

function Receipt() {
    // costo de envio
    var shipping = 0;

    // obtenemos productos del checkout context
    const checkout = useCheckout();

    // calculamos subtotal
    const subtotal = () => {
        var sum = 0;

        checkout.map((product) => {
            sum += product.price
        })

        return sum;
    }

    // calculamos total
    const total = () => {
        return shipping + subtotal();
    }

    return (
        <div className="col-span-4 border border-gray-200 p-4 rounded">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
            <div className="space-y-2">
                {checkout.map((product) => (
                    <div className="flex justify-between" key={product.id}>
                        <div>
                        <h5 className="text-gray-800 font-medium">{product.name}</h5>
                        <p className="text-sm text-gray-600">Size: {product.size}</p>
                        </div>
                        <p className="text-gray-600"> x{product.quantity} </p>
                        <p className="text-gray-800 font-medium">${product.price}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>subtotal</p>
                <p>${subtotal()}</p>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>shipping</p>
                <p>Free</p>
            </div>

            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p className="font-semibold">Total</p>
                <p>${total()}</p>
            </div>

            <div className="flex items-center mb-4 mt-2">
                <input type="checkbox" name="aggrement" id="aggrement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"/>
                <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#"
                        className="text-primary">terms & conditions</a></label>
            </div>

            <a href="#"
                className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                order</a>
        </div>
    )

}

export default Receipt;