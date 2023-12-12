

import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../styles';

type Share = {
    value: number;
    description: string;
    timestamp: Date;
};


export default function SharesComponent() {
    const [shares, setShares] = useState<Share[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const createShareEntry = useCallback((inputValue: string, description: string): Share => {
        const numericValue = Number(inputValue);
        if (isNaN(numericValue)) {
            return {
                value: 0,
                description: description,
                timestamp: new Date()
            };
        }
        return {
            value: numericValue,
            description: description,
            timestamp: new Date(),
        };
    }, []);

    const addShare = useCallback(() => {
        if (inputValue && description) {
            const shareEntry = createShareEntry(inputValue, description);
            setShares((prevShares) => {
                const newShares = [...prevShares, shareEntry];
                console.log(newShares); // Log the new shares state
                return newShares;
            });
            setInputValue('');
            setDescription('');
        }
    }, [inputValue, description, createShareEntry]);

    const sharesMapped = shares.map((share, index) => (
        <Text key={index} style={styles.whiteText}>
            {share.value} (Added on: {share.timestamp.toString()})
        </Text>
    ));

    const totalShares = shares.reduce((total, share) => total + share.value, 0);

    return (
        <View>
            <TextInput
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
                style={[styles.input, styles.whiteText]}
                placeholderTextColor="white"
                placeholder="Enter share amount"
            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                style={[styles.input, styles.whiteText]}
                placeholderTextColor="white"
                placeholder="Enter description of Share"
            />

            <View>
                <Text style={styles.whiteText}> Today's Entry: {sharesMapped} </Text>
            </View>

            <View>
                <Text style={styles.whiteText}> Total of Staub's Shares: {totalShares}</Text>
            </View>

            <Button
                color="white"
                title="Add Shares"
                onPress={addShare}
            />
        </View>
    );
}