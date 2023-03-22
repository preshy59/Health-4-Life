import React from "react";
// import { TextInput } from "react-native-web";
// import { StyleSheet, View } from "react-native";
// import { QueryClient, QueryClientProvider } from "react-query";
import Header from '../../Header/index';
import Index from './index';


export default function AppBMI() {
	return (<>
		<Header />
		<View>
			<Index />
		</View>
	</>
	);
}