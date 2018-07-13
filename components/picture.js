import React from 'react';
import { Image } from 'react-native';
import { styles } from '../stylesheet';

export default class Picture extends React.Component {
	render() {
	return (
		<Image
          style={styles.image}
          source={{uri: 'https://cdn6.aptoide.com/imgs/7/b/a/7bacf6544588a11fbb0867dd41bb0c1e_icon.png?w=256'}}
        />
	)
	}
}