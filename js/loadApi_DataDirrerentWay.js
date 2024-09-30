// type1 
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(data=> console.log(data))


// type2
// function loadAPIData(){
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(data=> console.log(data))
// }
// loadAPIData()


// type3
// const loadPhone = () => {
//     fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
//     .then(res => res.json())
//     .then(data=> console.log(data))
// }
// loadPhone()

// type4

const loadPhone2= async() =>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data= await res.json();
    console.log(data);
}
loadPhone2()

// // type5 
// try {
//     const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
//     const data= await res.json();
//     console.log(data);
// } catch (error) {
//     console.error('data load error');
// }