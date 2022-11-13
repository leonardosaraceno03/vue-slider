var  app= new Vue(
    {

    
        el: '#app',
        data: {
            imgArray: [
                {photo: "./gantas-vaiciulenas-I_M9K9DkByY-unsplash.jpg"},
                {photo: "./st,small,507x507-pad,600x600,f8f8f8.jpg"},
                {photo: "./svitlana-m1RRmrjHcNE-unsplash.jpg"},
            ],
            position : 0,
        },
        methods: {
            next: function(){
                if(this.position == this.imgArray.length - 1){
                    this.position = 0;
                }else{
                    this.position++;
                }
            },
            previous: function(){
                if(this.position == 0){
                    this.position = this.imgArray.length - 1;
                }else{
                    this.position --;
                }
        }
    }
}
)
