// Problem 6 


interface Profile {
    name : string;
    age : number;
    email : string;
}

 

function  updateProfile(userProfile:Profile, updateUserProfile: Partial<Profile>){
     return {...userProfile , ...updateUserProfile}
};


const riman:Profile = {name:"riman roni", age : 19, email:"rimanroni100@gmail.com"};

const updateRiman = updateProfile(riman, {email:"rimanroni386@gmail.com"});

// console.log(updateRiman);