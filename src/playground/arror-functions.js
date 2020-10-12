
const user = {
    name : "Jimmy Bullard",
    age : 18,
    location : 'London',
    options : [ "One", "Two"],
    displayOptions : function(){
        this.options.forEach((item) => { console.log(item + ' is also an option')})
    },
    displayWithMap(){
        return this.options.map((item) => {
            return item + " option from map";
        })
    }

}

user.displayOptions();
console.log(user.displayWithMap());

const getFirstName = (name) =>{
    return name.split(' ')[0];
}

const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyBy(m){
        return this.numbers.map((n)=> n*m);
    }
}

console.log(multiplier.multiplyBy(2))

const getFname = (x) => x.split(' ')[0];

console.log(getFirstName(user.name));

console.log(getFname(user.name));

const template = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && <p>Age : {user.age}</p>}
    {user.age < 18 ? <p>Age Group : Minor</p> : <p>Age Group : Senior</p>}
    {getLocation(user.location)}
    <p>{user.options.length > 0 ? "Here are your options" : "No Options.js"}</p>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
    </div>
);


function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}
const appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot);