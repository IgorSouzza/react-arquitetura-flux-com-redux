import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button type="submit" onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
    <button type="submit" onClick={() => addTodo('Teste')}>Adicionar TODO</button>
  </>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
