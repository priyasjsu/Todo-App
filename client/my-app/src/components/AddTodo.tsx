
import React, {useState} from 'react';

type Props = {
    saveTodo: (formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({saveTodo}) => {
    const [formData, setFormData] = useState<any>({name:'',
     description: ''})

    const handleChange = (e: React.FormEvent<HTMLInputElement>) : void => {
        setFormData({...formData, 
            [e.currentTarget.id]: e.currentTarget.value})
    }

    const saveData = (e: React.FormEvent) => {
        e.preventDefault();
        saveTodo(formData)
        console.log('form data has successfully saved');
        setFormData({name:'',
        description: ''})
    }

    return (
        <form className="Form" onSubmit={saveData}>
        <div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value = {formData.name} onChange={(e) => handleChange(e)}/>
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value = {formData.description} onChange={(e) => handleChange(e)} />
            </div>
        </div>
        <button disabled = {formData === undefined? true: false}>Add Todo</button>
        </form>
    )
}

export default AddTodo