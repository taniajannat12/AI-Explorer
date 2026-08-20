import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
   Cell
} from "recharts";

import { useOutletContext } from "react-router-dom";


const Analytics = () => {

    const [cart] = useOutletContext();


    const chartData = cart.reduce((acc, item) => {

        const exist = acc.find(
            (data) => data.name === item.name
        );

        if (exist) {

            exist.count += 1;

        } else {

            acc.push({
                name: item.name,
                count: 1
            });

        }

        return acc;

    }, []);


    return (
        <div className="bg-slate-950 min-h-screen text-white p-10">

            <h1 className="text-4xl font-bold text-center mb-10">
                AI Tools Analytics
            </h1>


            {
                chartData.length === 0 ? (

                    <p className="text-center text-gray-400 text-xl">
                        No AI tools added yet.
                    </p>

                ) : (

                    <div className="flex justify-center">

                        <PieChart width={500} height={400}>

                            <Pie
                                data={chartData}
                                dataKey="count"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                label
                            >

                                {
                                    chartData.map((item, index) => (

                                        <Cell
                                            key={index}
                                            fill={[
                                                "#ec4899",
                                                "#8b5cf6",
                                                "#3b82f6",
                                                "#22c55e",
                                                "#f59e0b",
                                                "#ef4444"
                                            ][index % 6]}
                                        />

                                    ))
                                }

                            </Pie>


                            <Tooltip />

                            <Legend />

                        </PieChart>

                    </div>

                )
            }

        </div>
    );
};


export default Analytics;