const form = document.querySelector('.tasks');
const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

const tasksName = document.querySelector('.tasks__input-name');
const tasksNumber = document.querySelector('.tasks__input-number');

const priority = document.querySelector('.tasks__select-priority');
const status = document.querySelector('.tasks__select-status');


class Task {
    constructor() {
        this.padding = '10px 15px';
        this.color = '#b4b7ec';
        this.list = list;

        this.name = tasksName;
        this.number = tasksNumber;
        this.priority = priority;

        this.status = status;
        this.start = document.querySelector('.start');
        this.progress = document.querySelector('.progress');
        this.done = document.querySelector('.done ');
    }
    renderTask = () => {
        const task = document.createElement('div');
        task.classList.add('task');


        const taskNum = document.createElement('h3');
        taskNum.classList.add('task__number');
        taskNum.style.margin = '0px';
        taskNum.style.marginRight = '10px';
        taskNum.textContent = `${this.number.value}.`;

        const taskName = document.createElement('h3');
        taskName.classList.add('task__name');
        taskName.style.margin = '0px';
        taskName.textContent = this.name.value;

        const taskPriority = document.createElement('h4');
        taskPriority.classList.add('task__priority');
        taskPriority.style.margin = '0 40px 0 10px';
        taskPriority.textContent = this.priority.value;


        // const statusElement = this.status.value;
        // this[this.status.value].appendChild(task);
        // // console.log(this.status.value);



        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task__delete');
        taskDelete.style.margin = '0px';
        taskDelete.style.height = '35px';
        taskDelete.style.padding = '5px 10px';
        taskDelete.style.borderRadius = '8px';
        taskDelete.style.position = 'relative';
        taskDelete.style.right = '10px';
        taskDelete.style.color = 'white';
        taskDelete.style.backgroundColor = 'rgb(190, 68, 68)';
        taskDelete.textContent = 'Delete';

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('task__delete');
        taskEdit.style.margin = '0 10px 0 0';
        taskEdit.style.height = '35px';
        taskEdit.style.padding = '5px 10px';
        taskEdit.style.borderRadius = '8px';
        taskEdit.style.position = 'relative';
        taskEdit.style.right = '10px';
        taskEdit.style.color = 'white';
        taskEdit.style.backgroundColor = 'rgb(27, 60, 150)';
        taskEdit.textContent = 'Edit';


        task.appendChild(taskNum);
        task.appendChild(taskName);
        task.appendChild(taskPriority);
        task.appendChild(taskEdit);
        task.appendChild(taskDelete);

        const statusElement = this.status.value;
        this[statusElement].appendChild(task);


        taskDelete.addEventListener('click', () => {
            task.remove();
        });
        taskEdit.addEventListener('click', () => {
            this.name.value = taskName.textContent;
            this.number.value = parseFloat(taskNum.textContent) || 0;
            this.priority.value = taskPriority.textContent;
            this.status.value = statusElement;
            btn.textContent = 'edit';
            btn.style.backgroundColor = 'rgb(142, 175, 238)';

            btn.addEventListener('click', () => {
                task.remove();
                btn.textContent = 'add';
                btn.style.backgroundColor = '#f9f9f9';

            });
        });
    }
}

const task1 = new Task();


form.addEventListener('submit', event => {
    event.preventDefault();
    if (tasksName.value.length && tasksNumber.value.length) {
        localStorage[task1.renderTask()];
        tasksName.value = '';
        tasksNumber.value = '';
    } else {
        console.error('Fill in all task information!')
    }
});