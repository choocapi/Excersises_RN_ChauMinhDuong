import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "@/config/firebase";
import { Appbar, TextInput } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import Todo from "@/components/Todo";
import { colors } from "@/utils/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ToDoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const todoRef = collection(firestore, "todos");

  useEffect(() => {
    const unsubscribe = onSnapshot(todoRef, (snapshot) => {
      const list: any[] = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          title: doc.data().title,
          completed: doc.data().completed,
        });
      });
      setTodos(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (todo: string) => {
    try {
      await addDoc(todoRef, {
        title: todo,
        completed: false,
      });
      setTodo("");
      return { success: true, msg: "Thêm todo thành công" };
    } catch (error: any) {
      console.log(error);
      return { success: false, msg: "Thêm todo thất bại" };
    }
  };

  const handleAddTodo = async () => {
    const res = await addTodo(todo);
    if (res.success) {
      Alert.alert("Thành công", res.msg);
    } else {
      Alert.alert("Thất bại", res.msg);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <Appbar>
        <Appbar.Content title="TODOs List" />
      </Appbar>
      <FlatList
        style={styles.todoList}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        placeholder="New TODO"
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoList: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
