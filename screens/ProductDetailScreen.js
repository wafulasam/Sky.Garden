import { StyleSheet, Text, View } from 'react-native';
import MainLayout from '../layouts/mainlayout';

export default function ProductDetailScreen() {
  return (
    <MainLayout>
        <View style={styles.container}>
            <Text>Product list</Text>
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
