import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4a660;
  transition: 0.125s all ease-in;
  &:hover {
    background: #ef9952;
  }
  &:active {
    background: #9f75c1;
  }
  ${props => 
    props.open && css `
      background: #966dc2;
      &:hover {
        background: #bb8bbe;
      }
      &:active {
        background: #f4a660;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); 
    dispatch({
      type : 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    // 초기화
    setValue('')
    setOpen(false)
    nextId.current += 1
  }

  return (
    <>
      { open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input 
            autoFocus 
            placeholder="할 일 입력 후, Enter를 누르세요" 
            onChange={onChange} 
            value={value} 
            />
          </InsertForm>
        </InsertFormPositioner>
      )}

      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate;