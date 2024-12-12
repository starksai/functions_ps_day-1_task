
function movie(){
    a = {
    hero_name : "Ram Charan",
    movie_name : "Game changer",
    director_name : "Shankar",
    plotof_movie : "Political drama"
}
console.log(a)
}

movie();







//////////////////////////////////////////////////////////   Problem sloving   /////////////////////////////////////////////////////


// 1)Write a program to print Using while loop

// i.1-10

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}


// ii.10-1
let j = 10;
while(j>=1){
    console.log(j);
    j--;
}
// iii.-1 to -10

let k = -1;
while(k>=-10){
    console.log(k);
    k--;
}
// iv.-10 to -1
let l = -10;
while(l<=-1){
    console.log(l);
    l++;
}
// 2) Print even numbers and odd numbers using while loop and take userInput and print sum of even and sum of odd numbers from userInput


let anum = prompt("Enter a number: ");

let a =0;


while(a<anum.length){
    if(Number(anum[a])%2==0){
        console.log(anum[a], "even");
    }
    else{
        console.log(anum[a], "odd");
    }
    a++;
}



