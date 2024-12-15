import {Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white justify-center items-center">
            <Text className="text-blue-600 font-bold text-3xl bg-green-300">
                Creating app with expo
            </Text>
        </SafeAreaView>
    );
}
