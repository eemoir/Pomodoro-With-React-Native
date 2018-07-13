import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Label extends React.Component {
	render() {
		return (
			<View>
			<View style={styles.labelContainer}>{(!this.props.paused && !this.props.playing) &&
				<Text style={styles.smallLabel}>press play to start</Text>}
					{this.props.paused && 
						<Text style={styles.smallLabel}>
						paused
				</Text>}
						</View>
			<Text style={styles.label}>{this.props.working ? "work time" : "break time"}</Text>
			</View>
		)
	}
}