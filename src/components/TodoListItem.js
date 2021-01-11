import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      {/* 원하는 className 꼴 : checkbox checked */}
      {/* <div className={classNames(`checkbox`, { checked })}> 틀린 꼴
      <div className={checked ? 'checkbox checked' : 'checkbox'}> classNames이용한 꼴 */}
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListItem;
