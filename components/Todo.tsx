import { firestore } from "@/config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { List } from "react-native-paper";

const Todo = ({ id, title, completed }: any) => {
  const toggleComplete = async () => {
    try {
      await updateDoc(doc(firestore, "todos", id), {
        completed: !completed,
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <List.Item
      title={title}
      onPress={toggleComplete}
      left={(props) => (
        <List.Icon
          {...props}
          icon={completed ? "check" : "checkbox-blank-outline"}
        />
      )}
    />
  );
};

export default Todo;
