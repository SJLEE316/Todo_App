import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        {/* 원하는 className 꼴 : checkbox checked */}
        {/* <div className={classNames(`checkbox`, { checked })}> 틀린 꼴
      <div className={checked ? 'checkbox checked' : 'checkbox'}> classNames이용한 꼴 */}
        <div
          className={`checkbox ${checked ? 'checked' : ''}`}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
