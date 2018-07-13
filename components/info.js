import React from 'react';
import { Linking, View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Info extends React.Component {
	render() {
	return (
		<View style={styles.infoBox}>
			<Text style={styles.infoText}>Read about the Pomodoro Technique 
				<Text style={{color: 'blue'}}
      				onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Pomodoro_Technique')}> here
      			</Text>.
			</Text>
		</View>
	)
	}
}