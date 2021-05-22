export const backTopMixin = {
  data(){
    return{
      isbackshow:false,
      tabOffsetTop:0,  
    }
  },
  mounted(){

  },
  methods:{
    //防抖
    debounce(func,delay){
      let timer = null
      return function (){
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
          func()
        }, delay);
      }
    },
    is_isbackshow(a){
      if(a<-600){
        this.isbackshow=true
      }
      else{
        this.isbackshow=false
      }
    },
    
    
    //回到顶部
    backclick(){
      this.$refs.scroll.scrollTo(0,-44)
    },
  }
}
