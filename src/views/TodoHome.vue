<template>
  <div id="app">
    <div class="cord">
      <h1 class="title">Todo List</h1>

      <div class="todo flex">
        <input type="text" class="text-add mgb-15" v-model="todolist">
        <button class="button-add mgb-15" @click="pushadd">追加</button>
      </div>

      <div class="flex mgb-15" v-for="(data,index) in datalist.data" :key="index">
        <input  type="text" class="text-update" v-model="data.list">
        <button class="button-update" @click="pushup(data.id,data.list)">更新</button>
        <button class="button-delete" @click="pushdel(data.id)">削除</button>
      </div>

    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      todolist:""
    }
  },
  methods: {
    // --------------------- //
    //     データの追加      //
    // --------------------- //
    pushadd() {
      axios
        .post("https://limitless-thicket-15861.herokuapp.com/api/list", {
          list: this.todolist
        })
        .then(response => {
          console.log(response);
          this.$router.go()
        })
    },

    // --------------------- //
    //     データの更新      //
    // --------------------- //
    pushup(datalistid,datalist) {
      axios
        .put("https://limitless-thicket-15861.herokuapp.com/api/list/" + (datalistid), {
          list:datalist
        })
        .then(response => {
          console.log(response);
          this.$router.go()
        })
    },

    // --------------------- //
    //     データの削除     //
    // --------------------- //
    pushdel(datalistdel) {
      axios
        .delete("https://limitless-thicket-15861.herokuapp.com/api/list/" + datalistdel)
        .then(response => {
          console.log(response);
          this.$router.go()
        })
    },


    // --------------------- //
    //     データの取得      //
    // --------------------- //
    datalistin(){
      axios.get("https://limitless-thicket-15861.herokuapp.com/api/list").then((response) => {this.datalist =response.data})
    }
  },
  created() {
    this.datalistin();
  },
}
</script>


<style>

/* --------------------- */
/*     共有のスタイル    */
/* --------------------- */

.mgb-15{
  margin-bottom:15px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

button {
  width:20%;
  text-align: center;
  padding: 8px 0 10px;
  border-radius: 5px;
  cursor: pointer;
}



/* --------------------- */
/*     通常のスタイル    */
/* --------------------- */



#app{
  background-color:rgb(128, 7, 209);
  height:100vh;
  position:relative;
}

.cord {
  background-color:white;
  width:35%;
  position:absolute;
  top:50%;
  left:50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;
}

.title {
  font-weight: bold;
  font-size: 24px;
  margin:15px 20px;
  color:black;
}



.text-add{
  width:70%;
  margin-left:15px;
  color:black;
}

.text-update{
  width:40%;
  margin-left:15px;
  color:black;
}




.button-add{
  color:rgb(255, 115, 0);
  background-color:white;
  border-color: rgb(255, 115, 0);
  margin-right:15px;
}

.button-update{
  color:rgb(255, 0, 234);
  background-color:white;
  border-color: rgb(255, 0, 234);
  margin-left:30px;
}

.button-delete{
  color:rgb(0, 255, 128);
  background-color:white;
  border-color: rgb(0, 255, 128);
  margin-right:15px;
}



</style>