$(document).ready(function () {
    var friends = ['Marlon', 'Tes', 'Marvin', 'Asim', 'Alex']
    var locations = ['New Jersey', 'New York', 'Maine', 'Pennsylvania', 'Connecticut', 'Deleware', 'Minnesota', 'North Carolina', 'Florida', 'Georgia']
    var weapons = ['Spiked Brush', 'Knife', 'Grenade Launcher', 'Bad Breath', 'Yellow Snowball', 'Gun', 'Bow & Arrow', 'Mace', 'NYC Rats', 'Bad', 'Oversized Toothpick', 'Dynamite', 'Baton', 'Katana', 'My Angry Ex GF', 'Skunk Bomb', 'Magic Wand', 'Large Rock', 'CrossBow', ' Double Sided Pencil']

    for (var i = 1; i <= 100; i++) {
        var h3 = $('<h3>Accusation' + i + '</h3>')
        $('body').append(h3)
        $(h3).click(getAlert(i))
        $(h3).css({
            'cursor': 'pointer'
        });
    }

    function getAlert(i) {
        var pickFriend = friends[i % 5]
        var pickLocation = locations[i % 10]
        var pickWeapon = weapons[i % 20]

        function alertLoop() {
            alert("Accusation" + i + " : I accuse " + pickFriend + " with the " + pickWeapon + " in " + pickLocation + " ! ")
        }

        return alertLoop
    }



    // End of script
});