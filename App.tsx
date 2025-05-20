import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  let listOfObjects = [
    {
      name: "Chioma Eme",
      github_repo: "chiomaeme",
      group_no: "3"
    },
    {
      name: "Melbourne Marsden",
      github_repo: "mlbrnm",
      group_no: "3"
    },
    {
      name: "Harsimarpreet Singh Sahota",
      github_repo: "Harsimar-Sahota",
      group_no: "3"
    }
  ]

  return (
    <View style={styles.container}>
      <View
        style={styles.list}>
        {listOfObjects.map((item) => (
          <Text
            key={item.github_repo}>
            {item.name}
          </Text>
        ))}
      </View>
      <Pressable
        onPress={() => alert("I am done with the lab")}>
        <Text
          style={styles.button}>
          Hello there!
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red'
  },
  list: {
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 15
  }
});
