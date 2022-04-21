var firstName = 'john';

function fullName(){
    var middleName = 'William';

    function combine(){
        var lastName = 'smith';
        return firstName+middleName+lastName;
    }
    return combine();
}

console.log(fullName());