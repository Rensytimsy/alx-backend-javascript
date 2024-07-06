//Talking about typed arrays.
/**
*Basically a typed array is a type of object like array that provide read and write functionality to binary data stored in binary form.
* what is binary data => This is a data type that is stored in numeric binary form. (Assume its just a collection of letters and characters from 0 - 1000 +);
* what is a buffer => in simple terms is a chunk of data, more on buffer => it is a temporary storage that stores data transferring between one or more devices.
* The only "con"/disadvantage that comes with buffers is that one cannot acces the data stored without the help of views.
* what are views in typed array => views are the ones responsible in providing reading and reading functio0nalities in a bufferArray or a sharedArray.
* 
*/

//lets work with a typed array
//first step you create a buffer of your choice and the space to be allocated.
let newBuffer = new ArrayBuffer(3);
//The onle problem with the newBuffer is that it can't be accessed at the moment.Because there is no view.
let newView = new Uint8Array(newBuffer);
// console.log(newView);
//As you can see now we have a good view of our buffer and data present which by now there in none.
newView.set([80, 97, 99]);
let newText = new TextDecoder().decode(newView);
console.log(newText); //pac.

//when using Uint16Array() make sure you implement the use of *2 multiple
e.g let newBufferView = new Uint16Array(2); from what i have passed in the parenthese 2 i will be allocated 1 byte of data storage.
let me explain in depth

   1.Uint8Array() => this stores data of 1byte  so like if you pass 8 in the parenteses you will allocate 8bytes of data.

		let buffer = new ArrayBuffer(8);
		let newBufferView = new Uint16Array(buffer);
		console.log(newBufferView); //Uint8Array(8) [0, 0, 0, 0,0, 0, 0, 0]

   2.Uint16Array()=> this stores data of 2byte  so like if you pass 8 in the parenteses you will allocate 4bytes of data.


		let buffer = new ArrayBuffer(8);
		let newBufferView = new Uint16Array(buffer);
		console.log(newBufferView); //Uint16Array(4) [ 0, 0, 0, 0 ]

   3.Uint32Array() => this stores data of 4byte  so like if you pass 8 in the parenteses you will allocate 2bytes of data.

		let buffer = new ArrayBuffer(8);
		let newBufferView = new Uint32Array(buffer);
		console.log(newBufferView); //Uint32Array(4) [ 0, 0 ]

   4.Uint64Array() => this stores data of 2byte  so like if you pass 8 in the parenteses you will allocate 1bytes of data.


		let buffer = new ArrayBuffer(8);
		let newBufferView = new UintArray(buffer);
		console.log(newBufferView); //Uint16Array(4) [ 0 ];





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getListStudents (){
        return [
          { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
        ]
}

function getArrayIds(studentsLists){
    let newStudentsArray = [];
    let students = studentsLists;
    let studentsIds = students.map((pupil) => newStudentsArray.push(pupil.id));
    return newStudentsArray;
}

console.log(getArrayIds(getListStudents()));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




