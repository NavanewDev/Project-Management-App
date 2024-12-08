import {useRef} from 'react';

import Input from "./Input"
import Modal from './Modal';

export default function NewProject({onAdd, onClose}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modal = useRef();

    function handleSave() {
        const userTitle = title.current.value;
        const userDescription = description.current.value;
        const userDueDate = dueDate.current.value;

        if(userTitle.trim() === "" || userDescription.trim() === "" || userDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAdd({
            title: userTitle,
            description: userDescription,
            dueDate: userDueDate
        })
    }

    return (
        <>
            <Modal buttonOption="Close" ref={modal}>
                <h2 className="text-xl font-bold text-stone-500 my-4">Error...!!!</h2>
                <p className="text-stone-800 mb-2">Empty Input fields...</p>
                <p className="text-stone-600 mb-2">Please enter valid inputs into the input fields.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onClose} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}