import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from '@angular-redux/store'
import {IAppState} from '../redux/store'
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from '../redux/actions'
import {ITodo} from  '../redux/todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;
  model:ITodo={
    id:0,
    description:"",
    responsible:"",
    priority:"low",
    isCompleted:false
  }
  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ngRedux.dispatch({type:ADD_TODO,todo:this.model})
  }

  toggleTodo(todo){
    this.ngRedux.dispatch({type:TOGGLE_TODO,id:todo.id})
  }

  removeTodo(todo){
    this.ngRedux.dispatch({type:REMOVE_TODO,id:todo.id})
  }

}
