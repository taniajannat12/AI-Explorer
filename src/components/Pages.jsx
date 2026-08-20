import { use, useState } from 'react';
import {  useOutletContext} from 'react-router-dom';
import { toast } from "react-toastify";
const data = async () => {
    const res = await fetch('/data.json');
    return res.json();
};

const pages = data();

const Pages = () => {
    const pagess = use(pages);

    const [added,setAdded]=useState(null)
    const [cart,setCart]=useOutletContext();
    const add=(item)=>{
        setCart([...cart,item])
        setAdded(item.id)
        toast.success(`${item.name} added to Cart!🎉`)
    }


 
    return (
        <div className="bg-slate-950 min-h-screen p-10">

            <h1 className="text-4xl font-bold text-white text-center mb-10">
                Explore AI Tools
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    pagess.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-5">

                                    <h2 className="text-2xl font-bold text-white">
                                        {item.name}
                                    </h2>

                                    <p className="text-pink-400 font-semibold mt-2">
                                        ${item.price}/month
                                    </p>

                                    <p className="text-gray-400 mt-3">
                                        {item.description}
                                    </p>


<button onClick={()=>add(item)}className="mt-5 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg" >{added===item.id?"Added":item.button}</button>


                                </div>

                            </div>
                        );
                    })
                }

            </div>

        </div>
    );
};

export default Pages;