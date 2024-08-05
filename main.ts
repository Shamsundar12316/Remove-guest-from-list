
// guest from list

let guest_list: string[] = ["Ali","Fahad","Ahmed","Lal","kiran"]

let not_coming: string = "Ali";
let new_guest: string = "Raj";
guest_list[0] = new_guest;

guest_list.unshift("Alishba");
guest_list.splice(guest_list.length/2,2, "Atif aslam");
guest_list.push("Mavesh");

console.log(`\n\nUnfortunately we are out of space, so have space for two guest only,\n\n`);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();

    console.log(`Dear ${remove_guest}, you are not invited for a dinner tomorrow`);
}

      for(let i=0; i<guest_list.length; i++){
        console.log(`Dear ${guest_list[i]}\n\nyou all are still invited for a dinner tomorrow,\n\nThank you,\n\n`);
      }

      guest_list.splice(0,2);
      console.log(guest_list);