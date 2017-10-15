
import {
  Platform, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingVertical:16
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  heading:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'left'
  },
  description:{
    fontSize:16,
    fontWeight:'normal',
  },
  descriptionBox:{
    padding:10, 
    backgroundColor:'#F5FCFF', 
    marginHorizontal:16
  },
  card:{
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: (Platform.OS === 'ios') ? 0 : 3,
  },
  listItem:{
    flex:1, 
    flexDirection:'row', 
    width:'100%', 
    justifyContent:'space-between', 
    marginVertical:10, 
    padding:10, 
    backgroundColor:'#F5FCFF'
  },
  list:{paddingHorizontal:16, marginTop:6, marginBottom:20}
});

export default styles;
