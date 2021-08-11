this.id = "exports";

// console.log(this);
const testObj = {
    firstName: 'Abc',
    f1: function() {
        // this will refer to the caller of f1
        console.log(this);
        console.log(this.firstName);
    },
    f2: () => {
        // this will refer to where the f2 was called
        console.log(this);
        console.log(this.firstName);
    }
};

testObj.f1();
testObj.f2();

/* function f3() {
    const f4 = () => {
        console.log(this);
    }
    f4();
}

f3();

const f4 = () => {
    console.log(this);
}
// f4(); */