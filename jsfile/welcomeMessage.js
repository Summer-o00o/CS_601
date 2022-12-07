let welcomeMessage = () => {
    let date = new Date();
    let hour = date.getHours();
    if(hour <= 12) {   
        welcome.innerText = "Good Morning!";
    } else if (hour > 12 && hour <= 17) {
        welcome.innerText = "Good Afternoon!";
    } else{
        welcome.innerText = "Good Evening!";
    }
};

welcomeMessage();
