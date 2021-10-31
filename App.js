/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TouchableOpacity,
	TextInput,
	Dimensions,
	PixelRatio
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').width;
const SIZE_BUTTON = WINDOW_WIDTH/4;

const SCALE = PixelRatio.getFontScale();
const FONT_SIZE = 50;
const NEW_FONT_SIZE = FONT_SIZE * SCALE;

const App = () => {

	return (
		<View style={{flex: 1, backgroundColor: "#000000", justifyContent: "space-between"}}>
		<View style={{backgroundColor: "#000000", flex: 1}}>
			<Text style={{color: "#FFFFFF", fontSize: NEW_FONT_SIZE, position: "absolute", bottom: 0, right: 0}}>0</Text>
		</View>
		<View style={{flexDirection: "column"}}> 
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.formatButton]}>
		<Text style={styles.formatText}>C</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.formatButton]}>
		<Text style={styles.formatText}>+/-</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.formatButton]}>
		<Text style={styles.formatText}>%</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]}>
		<Text style={styles.operationsText}>/</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>7</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>8</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>9</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]}>
		<Text style={styles.operationsText}>x</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>4</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>5</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>6</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]}>
		<Text style={styles.operationsText}>-</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>1</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>2</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>3</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]}>
		<Text style={styles.operationsText}>+</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton, styles.zeroButton]}>
		<Text style={styles.numbersText}>0</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]}>
		<Text style={styles.numbersText}>.</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]}>
		<Text style={styles.operationsText}>=</Text>
		</TouchableOpacity>
		</View>
		</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#A5A5A5", 
		width: SIZE_BUTTON, 
		height: SIZE_BUTTON, 
		borderRadius: 100, 
		justifyContent: "center", 
		alignItems: "center"
	},
	operationsButton: {
		backgroundColor: "#FE9500", 
	},
	numbersButton: {
		backgroundColor: "#333333", 
	},
	formatButton: {
		backgroundColor: "#A5A5A5", 
	},
	zeroButton: {
		width: 2 * SIZE_BUTTON
	},
	operationsText: {
		color: "#FFFFFF", fontSize: NEW_FONT_SIZE / 2
	},
	numbersText: {
		color: "#FFFFFF", fontSize: NEW_FONT_SIZE / 2
	},
	formatText: {
		color: "#000000", fontSize: NEW_FONT_SIZE / 2
	}
});

export default App;
