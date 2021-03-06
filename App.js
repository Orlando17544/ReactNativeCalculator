/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
	const [calculatorText, setCalculatorText] = useState("0");
	const [resultCalculated, setResultCalculated] = useState(false);

	function enterNumber(enteredNumber) {
		if (calculatorText == "0" || (resultCalculated && /\d/.test(calculatorText.slice(-1)))) {
			setCalculatorText(enteredNumber);
			setResultCalculated(false);
		} else if (calculatorText.length >= 15) {
			return;			
		} else if (/\d| |\./.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + enteredNumber);
			setResultCalculated(false);
		}
	}

	function changeSign() {
		if (calculatorText[0] == "-") {
			setCalculatorText((number) => number.slice(1));
		} else if (calculatorText == "0") {
			return;
		} else {
			setCalculatorText((number) => "-" + number);
		}
	}

	function enterDot() {
		if (calculatorText.includes(".")) {
			return;
		} else {
			setCalculatorText((number) => number + ".");
		}
	}

	function enterPercentage() {
		if (calculatorText.length >= 15) {
			return;
		} else if (/\d/.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + "%");
		}
	}

	function enterDivision() {
		if (calculatorText.length >= 15) {
			return;
		} else if (/\d|%/.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + " / ");
		}
	}

	function enterMultiplication() {
		if (calculatorText.length >= 15) {
			return;
		} else if (/\d|%/.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + " x ");
		}
	}

	function enterSubstraction() {
		if (calculatorText.length >= 15) {
			return;
		} else if (/\d|%/.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + " - ");
		}
	}

	function enterAddition() {
		if (calculatorText.length >= 15) {
			return;
		} else if (/\d|%/.test(calculatorText.slice(-1))) {
			setCalculatorText((number) => number + " + ");
		}
	}

	function calculate() {

		//Change "x" for "*"
		let goodCalculatorText = calculatorText.replace("x", "*");

		//To replace percentage operations for their results
		const percentageArray = [...goodCalculatorText.matchAll(/(\d+) ([+\-*\/]) (\d+)%/g)];

		let resultsArray = percentageArray.map((element) => {
			if (element[2] == "+") {
				return parseInt(element[1]) + parseInt(element[1]) * parseInt(element[3]) / 100;
			} else if (element[2] == "-") {
				return parseInt(element[1]) - parseInt(element[1]) * parseInt(element[3]) / 100;
			} else if (element[2] == "*") {
				return parseInt(element[1]) * parseInt(element[3]) / 100;
			} else if (element[2] == "/") {
				return parseInt(element[1]) / parseInt(element[3]) / 100;
			}
		});

		resultsArray.forEach((element) => {
			goodCalculatorText = goodCalculatorText.replace(/\d+ [+\-*\/] \d+%/, element.toString());
		});

		setCalculatorText(eval(goodCalculatorText).toString());

		setResultCalculated(true);
	}

	return (
		<View style={{flex: 1, backgroundColor: "#000000", justifyContent: "space-between"}}>
		<View style={{backgroundColor: "#000000", flex: 1}}>
			<Text style={{color: "#FFFFFF", fontSize: NEW_FONT_SIZE, position: "absolute", bottom: 0, right: 0}}>{calculatorText}</Text>
		</View>
		<View style={{flexDirection: "column"}}> 
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.formatButton]} onPress={() => {setCalculatorText("0")}}>
		<Text style={styles.formatText}>C</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.formatButton]} onPress={() => {changeSign()}}>
		<Text style={styles.formatText}>+/-</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.formatButton]} onPress={() => {enterPercentage()}}>
		<Text style={styles.formatText}>%</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]} onPress={() => {enterDivision()}}>
		<Text style={styles.operationsText}>/</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("7")}}>
		<Text style={styles.numbersText}>7</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("8")}}>
		<Text style={styles.numbersText}>8</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("9")}}>
		<Text style={styles.numbersText}>9</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]} onPress={() => {enterMultiplication()}}>
		<Text style={styles.operationsText}>x</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("4")}}>
		<Text style={styles.numbersText}>4</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("5")}}>
		<Text style={styles.numbersText}>5</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("6")}}>
		<Text style={styles.numbersText}>6</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]} onPress={() => {enterSubstraction()}}>
		<Text style={styles.operationsText}>-</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("1")}}>
		<Text style={styles.numbersText}>1</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("2")}}>
		<Text style={styles.numbersText}>2</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterNumber("3")}}>
		<Text style={styles.numbersText}>3</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]} onPress={() => {enterAddition()}}>
		<Text style={styles.operationsText}>+</Text>
		</TouchableOpacity>
		</View>
		<View style={{flexDirection: "row"}}>
		<TouchableOpacity style={[styles.button, styles.numbersButton, styles.zeroButton]} onPress={() => {enterNumber("0")}}>
		<Text style={styles.numbersText}>0</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.numbersButton]} onPress={() => {enterDot()}}>
		<Text style={styles.numbersText}>.</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, styles.operationsButton]} onPress={() => {calculate()}}>
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
