let id = 1;

let toDo = [
        // {id : 1, toDo : "Read", status: false},
        // {id : 2, toDo : "Code", status: false},
        // {id : 3, toDo : "Disturb Nigeria for money", status: false}
    ]

export const getAllToDo = (req, res) => {
    try {
            res.status(200).json({
            message: "Tasks retrieved successfully",
            toDo
    });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

export const submitToDo = (req, res) => {
    try {
       const {task, status} = req.body;
    
    if(!task) {
        return res.status(400).json({error: "To-Do title is required."});
    };
    
    const newToDo = {
        id: id++,
        task,
        status
    }

    toDo.push(newToDo);
    res.status(201).json({
        message: "To-Do created successfully."
    }) 
    } catch (error) {
        console.error(error);
    }
}

//* Code Logic to Delete to-do
export const deleteToDo = (req, res) => {
    try {
        //Get id of to-do
        const { id } = req.params
        // Get index of task to delete using its id
        const index = toDo.findIndex(task => task.id === parseInt(id));
        //Verify that task exists
        if(index === -1){
            return res.status(404).json({error: "Task doesn't exist."})
        }
        // Delete to-do using .splice()
        toDo.splice(index, 1);
        // Reponse message
        res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        console.error('Error', error)
    }
};

//* Code logic to update to-do
export const updateToDo = (req, res) => {
    try {
        // Retrieve id and task of task to be updated
    const {id} = req.params;
    const {task} = req.body;
    // Find task with id
    const taskToUpdate = toDo.find(task => task.id === parseInt(id));
    //Verify that task exists
    if(!taskToUpdate){
        return res.status(404).json({error: "Task doesn't exist"});
    }
    // Update task
    taskToUpdate.task = task;
    //Send response
    return res.status(200).json({message: "Task updated successfully", taskToUpdate});
    } catch (error) {
        console.error('Error', error);
    }
}







//? "The real aim of mastery isn't reaching legendary, but sustaining it." - Mrs Omoyeni Oluwakemi 