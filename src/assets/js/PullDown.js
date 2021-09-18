export class PullDown {
    constructor(idName) {
        this.title_eles = document.querySelectorAll(`.${idName} > .title`)
        this.ul_eles = document.querySelectorAll(`.${idName} > ul`)
        this.init()
    }
    init(){
        for(let i=0;i<this.title_eles.length;i++){
            this.title_eles[i].onclick = ()=>{
                this.ul_eles.forEach((el)=>{el.style.display = "none"})
                if(this.ul_eles[i].style.display == 'none'){
                    this.ul_eles[i].style.display = "block"
                }else{
                    this.ul_eles[i].style.display = "none"
                }
            }
        }
    }
}

