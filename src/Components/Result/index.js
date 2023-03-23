import {PieChart} from "../PieChart";
import "./style.css";


function Result(props) {


    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 result">
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
                                <p className="name"> {props.name}</p>
                            </div>
                            <div className="list">
                                <p> Protein : {props.protein}</p>
                                <p> Fat:  {props.fat}</p>
                                <p> Carbs: {props.carbs}</p>
                                <p> Calroies: {props.carlories}</p>
                                
                            </div>
                            <div className="chart">
                                <p className="pie"><PieChart
                                  protein = {props.protein}
                                  fat = {props.fat}
                                  carbs = {props.carbs}
                                  calroies = {props.carlories}
                                 /></p>
                            </div>
                            
                        </div>
                        <hr className="seprator"></hr>

                    </div>
                </li>
            </ul>
        </div>

    );
}

export default Result;