import React, { useState } from "react";
import { useQuery } from "react-query";
// import { QueryClient, QueryClientProvider } from "react-query";
import URI from "urijs";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import './style.css';
import Logo from '../../assets/images/_Health-4-Life-1.png';


const fetchBMI = async (weight, height) => {
	const url = URI("https://mega-fitness-calculator1.p.rapidapi.com/bmi")
		.query({
			weight,
			height,
		})
		.toString();

	const response = await fetch(url, {
		method: "GET",
		headers: {
			'X-RapidAPI-Key': '7986c133bemsh5ec2132fcc9184ep1df58fjsn993ce4ff363b',
			'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
		},
	});

	return response.json();
};

export default function BMI() {
	const [bodyParams, setBodyParams] = useState({
		weight: 0,
		height: 0,
	});

	let bmiQuery = useQuery(["bmi", bodyParams.weight, bodyParams.height], () =>
		fetchBMI(bodyParams.weight, bodyParams.height)
	);

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

	const BMI =
		bodyParams.height && bodyParams.weight
			? bmiQuery?.data?.info?.bmi
			: "-----";

	return (<>
		<View style={styles.container}>
			<Image
				source=  {{ uri: Logo }}
				style={styles.imageLogo}
				 />
			<Text style={{ fontSize: 30, fontWeight: "bold", color: "#77BB3F" }}>
				BMI Calculator
			</Text>
			<TextInput
				placeholder="Enter your weight in kg"
				style={styles.input}
				onChangeText={onWeightChange}
			/>
			<TextInput
				placeholder="Enter your height in cm"
				style={styles.input}
				onChangeText={onHeightChange}
			/>
			<Text style={{ fontSize: 20, fontWeight: "bold", marginTop: "30" }}>
				Your BMI is: {BMI}
			</Text>

			{BMI !== "-------" && (
				<View>
					{bmiQuery?.data?.info?.bmi < 18.5 && (
						<>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>
								You are Underweight
							</Text>
						</>
					)}

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


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 10,
		position: "relative",
		top: "100px",
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
		width: '350px',
    height: '350px',
	}
});

