function fp_friends_display()
{
  var friendlist = document.getElementById("fp_friends_list");
  if(friendlist.style.display == "none")friendlist.style.display = "";
  else friendlist.style.display = "none";
}