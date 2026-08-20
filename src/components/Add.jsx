import { toast } from "react-toastify";
import { useOutletContext } from "react-router-dom";

const Add = () => {

    const [cart, setCart] = useOutletContext();

    // Remove one specific card
    const remove = (index) => {
        const removeItem = cart.filter((item, i) => i !== index);
        setCart(removeItem);
     toast.error( "removed from cart!😊");
    };

    // Calculate total price
    const totalPrice = cart.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    const checkout=()=>{
        toast.success("Congratulations!🎊 Completed Proceed to Checkout")
    }

    return (
        <div className="bg-slate-950 min-h-screen text-white p-10">

            <h1 className="text-4xl font-bold text-center mb-10">
                Your Categories
            </h1>

            {
                cart.length === 0 ? (

                    <p className="text-center text-gray-400 text-xl">
                        No AI tools added yet.
                    </p>

                ) : (

                    <>
                       
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {
                                cart.map((item, index) => (

                                    <div
                                        key={index}
                                        className="bg-slate-900 rounded-xl overflow-hidden shadow-lg"
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-5">

                                            <h2 className="text-2xl font-bold">
                                                {item.name}
                                            </h2>

                                            <p className="text-pink-400 font-semibold mt-2">
                                                ${item.price}/month
                                            </p>

                                            <p className="text-gray-400 mt-3">
                                                {item.description}
                                            </p>

                                            <button
                                                onClick={() => remove(index)}
                                                className="mt-5 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>


                     
                        <div className="max-w-md mx-auto mt-12 bg-slate-900 p-6 rounded-xl text-center">

                            <h2 className="text-3xl font-bold">
                                Total Price: ${totalPrice}
                            </h2>

                            <button  onClick={checkout}
                                className="mt-5 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold"
                            >
                              Proceed to Checkout
                            </button>

                        </div>

                    </>

                )
            }

        </div>
    );
};

export default Add;