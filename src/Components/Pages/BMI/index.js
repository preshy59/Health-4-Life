// import library to create a state variable
import React, { useState } from "react";
// import library to make API calls
import { useQuery } from "react-query";
// import function to build API URLs
import URI from "urijs";
// import library to create the user interface and text input fields
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
// import the style
import './style.css';
// import the image logo
import Logo from '../../assets/images/_Health-4-Life-1.png';

//Create a function with two parameters
const fetchBMI = async (weight, height) => {
		// create a variable that store the URL of the API endpoint we want to call
	const url = URI("https://mega-fitness-calculator1.p.rapidapi.com/bmi")
		.query({
			weight,
			height,
		})
		.toString();
	// Create a variable that stores the result of calling the API endpoint
	const response = await fetch(url, {
		method: "GET",
		headers: {
			'X-RapidAPI-Key': '7986c133bemsh5ec2132fcc9184ep1df58fjsn993ce4ff363b',
			'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
		},
	});
	// Return the result of calling the API endpoint
	return response.json();
};

// Create a function component
export default function BMI() {
	// Use the useState hook to create a state variable. A object with two keys
	// Create a function to update the value of bodyParams
	const [bodyParams, setBodyParams] = useState({
		weight: 0,
		height: 0,
	});
	// Create a new query string that returns the result of calling fetchBMI
	let bmiQuery = useQuery(["bmi", bodyParams.weight, bodyParams.height], () =>
		fetchBMI(bodyParams.weight, bodyParams.height)
	);
	// onWeightChange and onHeightChange are functions that update the value of bodyParams in the state
	// The input displays the new value
	const onWeightChange = (text) => {
		setBodyParams({
			...bodyParams,
			weight: parseInt(text),
		});
	};

	const onHeightChange = (text) => {
		setBodyParams({
			...bodyParams,
			height: parseInt(text),
		});
	};
	// Check if there is a height and weight in the bodyParams object
	const BMI =
		bodyParams.height && bodyParams.weight
			// if there is, then use the bmi.Query.data.info.bmi value
			? bmiQuery?.data?.info?.bmi
			// Then display the value
			: "-----";

	// Return the user interface
	return (<>
		<View style={styles.container}>
			{/* Render an image */}
			<Image
				source=  {{ uri: Logo }}
				style={styles.imageLogo}
				 />
			{/* Render a text */}
			<Text style={{ fontSize: 30, fontWeight: "bold", color: "#77BB3F" }}>
				BMI Calculator
			</Text>
			{/* Render a text input */}
			<TextInput
				placeholder="Enter your weight in kg"
				style={styles.input}
				onChangeText={onWeightChange}
			/>
			{/* Render a text input */}
			<TextInput
				placeholder="Enter your height in cm"
				style={styles.input}
				onChangeText={onHeightChange}
			/>
			{/* Render a text */}
			<Text style={{ fontSize: 20, fontWeight: "bold", marginTop: "10px" }}>
				Your BMI is: {BMI}
			</Text>
			{/* Conditional statement. If the BMI state variable is not equal to the default value of the BMI state variable,
			then the following code will be executed  */}
			{BMI !== "-------" && (
				<View>
					{/* If the bmiQuery is not null and the bmiQuery.data.info.bmi is less than 18.5, then the following code will be executed. */}
					{bmiQuery?.data?.info?.bmi < 18.5 && (
						<>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>
								You are Underweight
							</Text>
						</>
					)}
					{/* If the bmiQuery is not null and the bmiQuery.data.info.bmi is greater than or equal to 18.5 and less than 24.9, then the following code will be executed. */}
					{bmiQuery?.data?.info?.bmi >= 18.5 &&
						bmiQuery?.data?.info?.bmi < 24.9 && (
							<>
								<Text
									style={{ fontSize: 20, fontWeight: "bold" }}
								>
									Normal weight
								</Text>
							</>
						)}
					{/* is greater than or equal to 25 and less than 29.9 */}
					{bmiQuery?.data?.info?.bmi >= 25 &&
						bmiQuery?.data?.info?.bmi < 29.9 && (
							<>
								<Text
									style={{ fontSize: 20, fontWeight: "bold" }}
								>
									You are Overweight
								</Text>
							</>
						)}
					{/* is greater than or equal to 30 and less than 39.9 */}
					{bmiQuery?.data?.info?.bmi >= 30 &&
						bmiQuery?.data?.info?.bmi < 39.9 && (
							<>
								<Text
									style={{ fontSize: 20, fontWeight: "bold" }}
								>
									Obesity class II
								</Text>
							</>
						)}
					{/* is greater than 40 */}
					{bmiQuery?.data?.info?.bmi > 40 && (
						<>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>
								You are Morbidly Obese
							</Text>
						</>
					)}
				</View>
			)}
		</View>
	</>
	);
}

// variale that stores the styles and create a container, input and image.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 1,
		position: "relative",
		top: "60px",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 3,
		borderRadius: "25px",
		borderColor: '#77BB3F',
		padding: 10,
	},
	imageLogo: {
		width: '400px',
    height: '400px',
	}
});

