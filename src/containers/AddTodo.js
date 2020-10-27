import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = (props) => {
  let input
  console.log(props);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodoItem(input.value)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
const mapStateToProps = (state) =>{
  return state;
};
const mapDispatchToProps = (dispatch,ownProps) => ({
  addTodoItem: (item) => dispatch(addTodo(item))
});
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)