$(document).ready(function()    {
    var friends = ['Marlon', 'Tes', 'Marvin', 'Asim','Alex']
    var locations = ['New Jersey', 'New York', 'Maine', 'Pennsylvania', 'Connecticut', 'Deleware', 'Minnesota', 'North Carolina', 'Florida', 'Georgia']
    var weapons = ['Spiked Brush', 'Knife', 'Grenade Launcher', 'Bad Breath', 'Yellow Snowball','Gun', 'Bow & Arrow','Mace', 'NYC Rats', 'Bad', 'Oversized Toothpick', 'Dynamite', 'Baton','Katana', 'My Angry Ex GF', 'Skunk Bomb', 'Magic Wand', 'Large Rock','CrossBow',' Double Sided Pencil' ]

        for (var i = 1; i<=100;i++) {
            var h3 = $('<h3>Accusation' + i + '</h3>' )
            $('body').append(h3)
        }
            





// End of script
});