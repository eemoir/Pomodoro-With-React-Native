import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 50,
    borderRadius:5,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 6,
    paddingRight: 3,
    position: 'absolute',
    top: 100
  },
  label: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center'
  },
  smallLabel: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 25,
    alignSelf: 'center',
  },
  labelContainer: {
    height: 60,        
    justifyContent: 'flex-start',
  },
  button: {
    marginHorizontal: 5,
    marginBottom: 20
  },
  menu: {
    marginLeft: 10,
    marginRight: 10,
    width: 90,
    height: 35,
  },
  menuContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  infoBox: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 60
  },
  infoText: {
    fontSize: 15
  },
  image: {
    width: 50, 
    height: 50,
    position: 'absolute',
    bottom: 8
  }
});