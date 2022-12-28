const url = 'https://content.guardianapis.com/search';
const apiKey = '8b136398-5680-42d2-99a7-501599c71647';

const query = input.value;
fetch(`${url}?q=${query}&api-key=${apiKey}`)
.then(res => res.json())
.then(data => console.log(data))
