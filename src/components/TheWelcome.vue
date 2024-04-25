<script setup>
 import {db} from '../firebase.js'
 import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
 import {ref, onMounted} from 'vue'
 import AddOrUpdate from './AddOrUpdate.vue'
const task = ref([])

const show = ref(false)

const data = ref({})

const isNew = ref(true)

 onMounted (async() => {
 let tasksCollection = await getDocs(collection(db, 'tasks'))
 tasksCollection.forEach((task) => {
   tasks.value.push({...task.data(), id:task.id})
 })
 })

 function toggleComponent(docData = {} ,isNewDoc = true) {
  data.value = docData
  isNew.value= isNewDoc
  show.value = !show.value
 }

 async function deleteRecord(id) {
  await deleteDoc(doc(db, 'tasks', id))
 }

</script>

<template>
  <div>
    <add-or-update @close="toggleComponent" v-if="show" :data="data" :isNew="isNew"></add-or-update>
    <button @click="toggleComponent">Add New</button>
    <div v-for="task in tasks" :key="task.id" @click="toggleComponent(task,false)">
        <div>name: {{ task.name }}</div>
        <div>description: {{ task.description }}</div>
        <button @click="deleteRecord(task.id)">Delete</button>
      </div>
  </div>
</template>
