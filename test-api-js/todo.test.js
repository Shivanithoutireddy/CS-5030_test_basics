

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todos", ()=>{
        todo_service.add_todo({"id":3,"title":"shivani","done":true});        
        expect(todo_service.get_todos().todo.length).toEqual(4);
    })

    test("update_todo",()=>{
        const expected = {"id":1,"title":"PSD",done: true}
        todo_service.update_todo(id=1,todo={"id":1,"title":"PSD",done: true})
        expect(todo_service.get_todos().todo.length).toEqual(4);
        const actual = (todo_service.get_todos().todo).find(i=>i["id"]===1)
        expect(actual).toMatchObject(expected)
    })

    test("delete_todos", ()=>{
        todo_service.delete_todo(1);
        expect(todo_service.get_todos().todo.length).toEqual(3);
    })

});