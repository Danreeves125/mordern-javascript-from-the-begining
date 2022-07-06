const data = [
    {
        name: 'Dan Reeves',
        age: 27,
        gender: 'male',
        lookingfor: 'female',
        location: 'Kidderminster',
        image: 'https://randomuser.me/api/portraits/men/82.jpeg'
    },
    {
        name: 'Kathryn',
        age: 28,
        gender: 'female',
        lookingfor: 'female',
        location: 'Kidderminster',
        image: 'https://randomuser.me/api/portraits/women/82.jpeg'
    },
     {
        name: 'Joe Doe',
        age: 28,
        gender: 'male',
        lookingfor: 'male',
        location: 'Kidderminster',
        image: 'https://randomuser.me/api/portraits/men/83.jpeg'
    }
];

const profiles = profileIterator(data);

// Call first profile.
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}" />
    `
    } else {
        document.getElementById('imageDisplay').style.display = 'none';

        document.getElementById('profileDisplay').innerHTML = `
            <div class="alert-info">No more users found</div>
        `;
    }
}

// profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false} : 
            { done: true }
        }
    };
}