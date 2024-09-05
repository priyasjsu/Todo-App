import axios, {AxiosResponse} from 'axios';
const baseUrl: string = "http://localhost:8080";

export const getTodos = async(): Promise<AxiosResponse<ApiDataType>> => {
    try{
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
          )
          return todos
    }catch (e) {
        console.log(e)
        throw e;
    }
}

export const addTodo = async(formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try{
        const data: Omit<ITodo, '_id'> = {
            name : formData.name,
            description: formData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> =  await axios.post(baseUrl+'/add-todo', data)
        return saveTodo
    }catch(e){
        console.log(e)
        throw e;
    }
}

export const updateTodo = async(formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try{
        const data: Pick<ITodo, 'status'> = {
            status: true,
          };
        const todo: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/edit-todo/${formData._id}`, data);
        return todo
    }catch(e){
        console.log(e)
        throw e;
    }
}

export const deleteTodo = async(_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try{
        const todoDeleted: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/delete-todo/${_id}`);
        return todoDeleted;
    }catch(e){
        console.log(e)
        throw e;
    }
}