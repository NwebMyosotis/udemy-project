const UserItem = (props) => {
  const handleDelete = () => {
    props.onDelete(props.item);
  };

  return (
    <li onClick={handleDelete}>
      {props.item.username} ({props.item.age} years old)
    </li>
  );
};

export default UserItem;
