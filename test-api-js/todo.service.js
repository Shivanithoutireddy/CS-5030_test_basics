class todoservice{
    todo_data = {
        "todo":[{
            "id":0,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos["todo"].push(todo)
    }

    delete_todo(id){
        this.modifiedTodos = this.todos["todo"].filter(i=>i["id"]!==id)
        this.todos["todo"] = this.modifiedTodos
    }

    update_todo(id, todo){
        this.targetIndex = this.todos["todo"].findIndex(i=>i["id"]===id)
        this.todos["todo"][this.targetIndex] = todo
    }
}

const a = new todoservice();
a.add_todo({"id":6,"title":"dummy","done":true})
a.update_todo(6,{"id":5,"title":"sunny","done":false})
a.delete_todo(5,{"id":5,"title":"sunny","done":false})
console.log(a.get_todos())

module.exports= todoservice;