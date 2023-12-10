import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    whiteText: {
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
    descriptionText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default styles;