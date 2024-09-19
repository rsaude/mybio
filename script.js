fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById('app');

        // Create Profile Section
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile mb-8';

        const img = document.createElement('img');
        img.src = data.profileImage;
        img.alt = data.name;
        img.className = 'w-32 h-32 rounded-full mx-auto mb-4';

        const name = document.createElement('h1');
        name.className = 'text-2xl font-bold';
        name.textContent = data.name;

        const bio = document.createElement('p');
        bio.className = 'text-gray-600 mt-2';
        bio.textContent = data.bio;

        profileDiv.appendChild(img);
        profileDiv.appendChild(name);
        profileDiv.appendChild(bio);

        // Create Links Section
        const linksDiv = document.createElement('div');
        linksDiv.className = 'links mt-6 flex flex-col space-y-4';

        data.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'link-item flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition';
            a.target = '_blank';

            const icon = document.createElement('img');
            icon.src = link.icon;
            icon.alt = link.name;
            icon.className = 'w-6 h-6 mr-2';

            const span = document.createElement('span');
            span.textContent = link.name;
            span.className = 'font-medium text-gray-700';

            a.appendChild(icon);
            a.appendChild(span);
            linksDiv.appendChild(a);
        });

        app.appendChild(profileDiv);
        app.appendChild(linksDiv);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
