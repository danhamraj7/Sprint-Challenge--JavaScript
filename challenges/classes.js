// 1. Copy and paste your prototype in here and refactor 
//into class syntax.

class CubeboidMaker {
    constructor(attributes) {
        this.length = attributes.length,
            this.width = attributes.width,
            this.height = attributes.height
    }

    volume() {
        return this.length * this.width * this.height;
    }

    // Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}

class CubeboidMakerTwo extends CubeboidMaker {
    constructor(CubeboidMakerTwoAttributes) {
        super(CubeboidMakerTwoAttributes)
        this.length = CubeboidMakerTwoAttributes.length,
            this.width = CubeboidMakerTwoAttributes.width,
            this.height = CubeboidMakerTwoAttributes.height
    }
}

const Quboid = new CubeboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
});

/// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Quboid.volume()); //100
console.log(Quboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called 
//CubeMaker.  
//Find out the formulas for volume and surface area for cubes and
// create those methods
// using the dimension properties from CuboidMaker.  
//Test your work by logging out your 
//volume and surface area.

class CubeMaker extends CubeboidMaker {
    constructor(CubeMakerAttributes) {
        super(CubeMakerAttributes)
        this.length = CubeMakerAttributes.length,
            this.width = CubeMakerAttributes.width,
            this.newHeight = CubeMakerAttributes.height
    }


    volume() {
        return this.length * this.length * this.length;
    }

    surfaceArea() {
        return 6 * (this.length * this.length);
    }

}

const cuber = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
})

console.log(cuber.volume());
console.log(cuber.surfaceArea());