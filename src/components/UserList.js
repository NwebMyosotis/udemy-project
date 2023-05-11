import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  const handleDeleteItem = (item) => {
    props.onDeleteBtn(item.id);
  };

  return (
    <ul className="user-list">
      {props.items.length === 0 ? (
        <p>The added users are displayed here.</p>
      ) : (
        ""
      )}
      {props.items.map((item) => (
        <UserItem key={item.id} item={item} onDelete={handleDeleteItem} />
      ))}
    </ul>
  );
};

export default UserList;
