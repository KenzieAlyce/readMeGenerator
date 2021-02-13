
function renderLicenseBadge(license) {}


function renderLicenseLink(license) {}

function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
# ${data.instructions}
# ${data.media}
# ${data.github}
# ${data.email}
# ${data.license}
`;
}

module.exports = generateMarkdown;
