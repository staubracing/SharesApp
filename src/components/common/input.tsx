import { StyleSheet, TextInput } from 'react-native';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType: 'default' | 'numeric';
};

export default function CustomInput({
  value,
  onChangeText,
  placeholder,
  keyboardType,
}: InputProps) {
  return (
    <TextInput
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
