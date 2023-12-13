import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the type for your props
type ButtonProps = {
    title: string;
    onPress: () => void; // This is a function that gets called when the button is pressed
};

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

// Define the styles
const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    text: {
        color: 'black',
        textAlign: 'center',
    },
});

export default CustomButton;
