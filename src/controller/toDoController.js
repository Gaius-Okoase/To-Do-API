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







//? "The real aim of mastery isn't reaching legendary, but sustaining it." - Mrs Omoyeni Oluwakemi 