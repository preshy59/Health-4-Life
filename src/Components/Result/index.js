import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
// import "./styles.css";

Chart.register(CategoryScale);

function Result(props) {
 
    
    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* <div>
                <span className="circle-1">Protein</span>
                <span className="circle-2">Fat</span>
                <span className="circle-3">Carbonhydrate</span>
            </div> */}
            <ul>
                <li>
                    <div>
                        <div>
                            <div>
                                <p> {props.name}</p>
                            </div>
                            <div>
                                <p> Protein : {props.protein}</p>
                                <p> Fat:  {props.fat}</p>
                                <p> Carbs: {props.carbs}</p>
                                <p> Calroies: {props.carlories}</p>
                            </div>
                        </div>
                        <hr className="seprator"></hr>
                        {/* <div>
                            <div className="chart-container">
                                <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
                                <Pie
                                    data = {[
                                        { value: {props.proteinData}},
                                        { value: 22.5 },
                                        { value: 6.8 },
                                       
                                      ]}
                                    options={{
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: "Nutrient Value"
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div> */}
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    );
}

export default Result;