function generateHtml(data) {
  switch (data.getRole()) {
    case 'Manager':
      return `
      <div class="col-md-4 py-2">
            <div class="card-block">
            <div class="d-print-inline-block p-2">
              <div class="card-header bg-primary text-white">
                <h3 id="name">${data.name}</h3>
                <h4><i class="fas fa-mug-hot"></i> ${data.getRole()}</h4>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
    `;
    case 'Engineer':
      return `
      <div class="col-md-4 py-2">
        <div class="card-block">
        <div class="d-print-inline-block p-2">
          <div class="card-header bg-primary text-white">
            <h3 id="name">${data.name}</h3>
            <h4><i class="fas fa-glasses"></i> ${data.getRole()}</h4>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item">GitHub: <a href="http://github.com/${data.github}/">${data.github}</a></li>
            </ul>
          </div>
          </div>
        </div>
    </div>
      `
    case 'Intern':
      return `
      <div class="col-md-4 py-2">
        <div class="card-block">
        <div class="d-print-inline-block p-2">
          <div class="card-header bg-primary text-white">
            <h3 id="name">${data.name}</h3>
            <h4><i class="fas fa-user-graduate"></i> ${data.getRole()}</h4>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item">School: ${data.school}</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
      `
  
}}



module.exports = generateHtml;