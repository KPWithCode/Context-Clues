$(document).ready(function()    {
    var friends = ['Marlon', 'Tes', 'Marvin', 'Asim','Alex']
    var locations = ['New Jersey', 'New York', 'Maine', 'Pennsylvania', 'Connecticut', 'Deleware', 'Minnesota', 'North Carolina', 'Florida', 'Georgia']
    var weapons = ['Spiked Brush', 'Knife', 'Grenade Launcher', 'Bad Breath', 'Yellow Snowball','Gun', 'Bow & Arrow','Mace', 'NYC Rats', 'Bad', 'Oversized Toothpick', 'Dynamite', 'Baton','Katana', 'My Angry Ex GF', 'Skunk Bomb', 'Magic Wand', 'Large Rock','CrossBow',' Double Sided Pencil' ]

        for (var i = 1; i<=100;i++) {
            var h3 = $('<h3>Accusation' + i + '</h3>' )
            $('body').append(h3)
            
        }
            
function  getAlert (i)   {
    var pickFriend = friends[i % 5]
    var pickLocation = locations[i % 5]
    var pickWeapon = weapons[i % 5]

    function alertLoop()    {
        alert("Accusation" + i +  " : I accuse " + friend + "with the " + weapon + "in" + location + "!")
    }

    return alertLoop
}



// End of script
});