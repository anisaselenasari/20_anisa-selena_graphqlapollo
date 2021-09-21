export default function Todo({      /// dibaris ini adalah ada hubungan nya dgn yang di app.js yg keterangan props itu
  id,
  title,
  checked,     ///berfungsi utk mengubah classname... kalo dia true , dia akan done, kalo false dia akan to do item. hubungannya sama baris ke 9
  onClickItem, /// hubungannya sama baris ke 10. kalo di klik checkbox. dia akan menjalankan baris 5
  onDeleteItem, // hubungannya sama baris ke 13
}) {
  return (
    <li className={checked ? 'done todo-item' : 'todo-item'} data-key={id}>
      <input onChange={onClickItem} id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>
      <span>{title}</span>
      <button onClick={onDeleteItem} className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}
