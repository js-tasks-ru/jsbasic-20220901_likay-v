function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  
	for(let propertyName of friends){
    let li = document.createElement('li');
    console.log(propertyName.firstName);
    li.innerHTML = `${propertyName.firstName} ${propertyName.lastName}`;
    ul.append(li);		
  }
  return ul;
}
