import { StyleSheet, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function CartScreen() {
  return (
    <MainLayout>
        <View style={styles.container}>
            <Text>cart</Text>
        </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
