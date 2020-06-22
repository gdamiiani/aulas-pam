import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
  },

  header: {
    paddingTop: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 21,
    color: '#f8f8f2',
    fontWeight: 'bold',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 30,
    backgroundColor: '#bd93f9',
    borderRadius: 15,
  },
  buttonText: {
    color: '#f8f8f2',
    fontSize: 15,
  },
});

export default styles;
