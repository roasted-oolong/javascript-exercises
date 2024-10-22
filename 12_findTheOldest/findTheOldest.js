const getAge = people.sort((firstPerson, secondPerson) => {
    if(!YearOfDeath) {
        YearOfDeath = new Date().getFullYear();
    }
    const ageOfFirstPerson = firstPerson.YearOfBirth - firstPerson.YearOfDeath
    const ageOfSecondPerson = secondPerson.YearOfBirth - secondPerson.YearOfDeath
    return ageOfFirstPerson > ageOfSecondPerson ? 1 : -1;
})

const findTheOldest = people.map(oldest => people.index[0])

{
//sort from oldest to youngest
//oldest should have index of -0
};

// Do not edit below this line
module.exports = findTheOldest;
