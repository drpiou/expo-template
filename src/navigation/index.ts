import { ScreenValueList } from '@/src/screens';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreenNavigationProp = NativeStackNavigationProp<ScreenValueList>;

export const Stack = createNativeStackNavigator<ScreenValueList>();
