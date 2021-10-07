function generateHtml(data) {
  switch (data.choice) {
    case 'Manager':
      return `
                <h3 id="name">${data.name}</h3>
                <h4> ${data.choice}</h4>
                <ul class="list">
                  <li class="list-group">ID: ${data.id}</li>
                  <li class="list-group">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group">Office Number: ${data.officeNumber}</li>
                </ul>
    `;
    case 'Engineer':
      return `
                <h3 id="name">${data.name}</h3>
                <h4>${data.choice}</h4>
                <ul class="list">
                  <li class="list-group">ID: ${data.id}</li>
                  <li class="list-group">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group">GitHub: <a href="http://github.com/${data.github}/">${data.github}</a></li>
                </ul>
      `
    case 'Intern':
      return `
                <h3 id="name">${data.name}</h3>
                <h4><i class="fas fa-user-graduate"></i> ${data.choice}</h4>
                <ul class="list">
                  <li class="list-group">ID: ${data.id}</li>
                  <li class="list-group">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group">School: ${data.school}</li>
                </ul>
      `
  
}}



module.exports = generateHtml;