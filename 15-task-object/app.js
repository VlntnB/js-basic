const toDoList = {
  tasks: [
 {
    id: 1,
    priority: 1,
    title: "Помыть посуду",
},
{
    id: 2,
    priority: 2,
    title: "Убрать посуду",
},
],
addTask: function (task) {
    let id = 1;
    let priority = 1;
    if (this.tasks.length > 0) {
        id = this.tasks[this.tasks.length - 1].id + 1;
        priority = this.tasks[this.tasks.length - 1].priority + 1;
    }
    this.tasks.push({
        ...task,
    });
},
updateTask: function (id, task) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        ...task,
    };
},
removeTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
},
sortTasks: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
},
}
toDoList.addTask({id:3, priority: 2, title: "Пойти в магазин" });
console.log(toDoList.tasks);
toDoList.addTask({id:4, priority: 3, title: "Отдохнуть" });
console.log(toDoList.tasks);
toDoList.updateTask(1, { priority: 1, title: "Уборка" });
console.log(toDoList.tasks);
toDoList.updateTask(2, { priority: 5, title: "Убрать посуду"});
console.log(toDoList.tasks);
toDoList.removeTask(2);
console.log(toDoList.tasks);
toDoList.sortTasks();
console.log(toDoList.tasks);
