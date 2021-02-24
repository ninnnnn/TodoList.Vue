import Router from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TodoList',
            component: TodoList
        },
        {
            path: '/2',
            name: 'TodoItem',
            component: TodoItem
        }
    ]
})


