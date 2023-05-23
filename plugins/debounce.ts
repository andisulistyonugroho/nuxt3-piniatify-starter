import debounce from 'lodash.debounce'
export default defineNuxtPlugin(()=>{
  return {
    provide:{
      debounce
    }
  }
})