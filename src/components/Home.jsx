import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
const data = async () => {
    const res = await fetch("/data.json");
    return res.json();
};

const pages = data();

const Home = () => {

    const [added,setAdded]=useState(null)
const [cart,setCart]=useOutletContext();
const add=(item)=>{
    setCart([...cart,item])
    setAdded(item.id)
      toast.success(`${item.name} added to Cart!🎉`)
}

    const pagess = use(pages);

    return (
        <div className="bg-slate-950 text-white">

  
            <section className="min-h-[500px] flex items-center px-6">

                <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
                    <div>

                        <p className="text-pink-500 font-semibold mb-4">
                            DISCOVER THE FUTURE OF AI
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Explore Powerful
                            <span className="text-pink-500"> AI Tools</span>
                            <br />
                            In One Place
                        </h1>

                        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
                            Discover, explore and compare the latest AI tools.
                            Find the perfect AI solution for your work,
                            creativity and productivity.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <NavLink
                                to="/pages"
                                className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Explore Now
                            </NavLink>

                            <NavLink
                                to="/add"
                                className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Categories
                            </NavLink>

                        </div>

                    </div>

                    <div className="flex justify-center">

                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">

                            <div className="w-60 h-60 md:w-80 md:h-80 bg-slate-900 rounded-full flex items-center justify-center">

                                <span className="text-7xl md:text-9xl">
                                    🤖
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="max-w-6xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold text-center mb-10">
                    Explore AI Tools
                </h1>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        pagess.slice(0,3).map((item) => {

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

                                        <h2 className="text-2xl font-bold">
                                            {item.name}
                                        </h2>

                                        <p className="text-pink-400 font-semibold mt-2">
                                            ${item.price}/month
                                        </p>

                                        <p className="text-gray-400 mt-3">
                                            {item.description}
                                        </p>

      

                                  <button onClick={()=>add(item)} className="mt-5 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg">{added===item.id?"Added":item.button}</button>
                              
                                    </div>

                                </div>
        );

                        })
                    }

                </div>


<div className="flex justify-center mt-10">

    <NavLink
        to="/pages"
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition"
    >
        Explore All AI Tools
    </NavLink>

</div>
            </section>

        </div>
    );
};

export default Home;