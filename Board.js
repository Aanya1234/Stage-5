/**
 * Create Archer target
 */
class Board{
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @returns {Object} [object Object]
     */
    constructor(x, y, width, height){ //simple rectangle constructor
        const ops = { isStatic: true }; //ops
        this.body = Bodies.rectangle(x, y, width, height, ops); //create body
        this.width = width; 
        this.height = height;
        this.image = loadImage('../assets/board.png'); //image
        World.add(world, this.body);

    }
    display(){
        const pos = this.body.position; 
        push() 
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height) 
        pop();
    }
}