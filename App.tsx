import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.numericLayout}>
          <View style={styles.row}>
            <Button title=";" />
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
            <Button title="+" />
          </View>
          <View style={styles.row}>
            <Button title="4" />
            <Button title="5" />
            <Button title="6" />
            <Button title="-" />
          </View>
          <View style={styles.row}>
            <Button title="7" />
            <Button title="8" />
            <Button title="9" />
            <Button title="*" />
          </View>
          <View style={styles.row}>
            <Button title="." />
            <Button title="0" />
            <Button title=" " />
            <Button title="BACKSPACE" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  numericLayout: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default App;
