import {Request, Response} from 'express';
import {ITodo} from '../../types/todo';
import Todo from '../../model/todo';

const getTodo = async(req: Request, res:Response): Promise<void> => {
    try{
        const todos: ITodo[] = await Todo.find();
        res.status(200).json({todos});
    } catch(e){
        throw(e)
    }
}

const addTodo = async(req: Request, res: Response): Promise<void> =>{
    try{
        const body = req.body as Pick<ITodo, "name" | "description" | "status">

        const todo :ITodo = new Todo({
            "name": body.name,
            "description": body.description,
            "status": body.status
        })
        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();

        res.status(201).json({message: "successfully added", todo: newTodo, todos: allTodos})

    }catch(e){
        throw(e)
    }
}

const updateTodo = async(req: Request, res:Response): Promise<void> => {
    try{
        // const {
        //     params: { id },
        //     body,
        // } = req

        const id:string = req.params.id;
        const todo  =  req.body as Pick<ITodo, "name" | "description" | "status">;
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({_id: id}, todo)
        const allTodos: ITodo[] = await Todo.find();
        res.status(200).json({
            message: "Todo updates",
            todo: updateTodo,
            todos: allTodos,
        })
    }catch(e){
        throw(e)
    }
}

const deleteTodo = async(req: Request, res: Response): Promise<void> => {
    try{
        const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(
            req.params.id)
        const allTodos: ITodo[] = await Todo.find();
        res.status(200).json({
            message: "todo deleted successfully",
            todo: deletedTodo,
            todos: allTodos
        })
    }catch(e){
        throw(e)
    }
}

export {getTodo, addTodo, updateTodo, deleteTodo}
