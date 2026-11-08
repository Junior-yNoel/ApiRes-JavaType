import type { User } from './interfaces/user.interface';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

let allUsers: User[] = [];

const loadingElement = document.getElementById('loading') as HTMLDivElement;
const errorElement = document.getElementById('error') as HTMLDivElement;
const usersContainer = document.getElementById('users-container') as HTMLDivElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const clearSearchBtn = document.getElementById('clear-search-btn') as HTMLButtonElement;
const resultsStatus = document.getElementById('results-status') as HTMLParagraphElement;

async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error al consultar la API:', error);
    throw error;
  }
}


function renderUsers(users: User[]): void {
  usersContainer.innerHTML = '';

  if (users.length === 0) { 
    usersContainer.innerHTML = '<p class="no-results">No se encontraron usuarios con ese nombre.</p>';
    return; 
  }

  users.forEach((user) => {
    const userCard = document.createElement('article');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p class="username">@${user.username}</p>

      <div class="user-details">
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Teléfono:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank" rel="noopener noreferrer">${user.website}</a></p>
        <p><strong>Empresa:</strong> ${user.company.name}</p>
        <p><strong>Ciudad:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      </div>
    `;

    usersContainer.appendChild(userCard);
  });
}



function handleSearch(searchTerm: string): void {
  const trimmed = searchTerm.trim().toLowerCase();
  clearSearchBtn.hidden = trimmed.length === 0;

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(trimmed)
  );

  renderUsers(filteredUsers);

  if (allUsers.length > 0) {
    if (trimmed.length > 0) {
      resultsStatus.textContent = filteredUsers.length === 1
        ? '1 usuario encontrado'
        : `${filteredUsers.length} usuarios encontrados`;
    } else {
      resultsStatus.textContent = `Mostrando todos los usuarios (${allUsers.length})`;
    }
  }
}

searchInput.addEventListener('input', (event) => {
  handleSearch((event.target as HTMLInputElement).value);
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  handleSearch('');
});


async function initApp(): Promise<void> {
  try {
    allUsers = await getUsers();
    renderUsers(allUsers);
    resultsStatus.textContent = `Mostrando todos los usuarios (${allUsers.length})`;
    loadingElement.style.display = 'none';
    errorElement.hidden = true;
    errorElement.textContent = '';
  } catch (error) {
    loadingElement.style.display = 'none';
    errorElement.hidden = false;
    errorElement.textContent = 'Error al cargar los usuarios. Por favor, inténtelo de nuevo más tarde.';
    console.error(error);
  }
}

void initApp();
