async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function populateDropdowns() {
  try {
    const courseTypes = await fetchData('https://run.mocky.io/v3/bec62ac8-509c-42b2-b0e8-9768ee67449e');
    const cities = await fetchData('https://run.mocky.io/v3/ba42bb6f-4625-403a-968c-72b8df434a95');

    const courseTypeDropdown = document.getElementById('courseType');
    const cityDropdown = document.getElementById('city');

    courseTypes.forEach(courseType => {
      const option = document.createElement('option');
      option.value = courseType.id;
      option.textContent = courseType.name;
      courseTypeDropdown.appendChild(option);
    });

    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.id;
      option.textContent = city.name;
      cityDropdown.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating dropdowns:', error);
  }
}

function validateForm() {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phoneNumber');

    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!phoneRegex.test(phoneInput.value)) {
      alert('Please enter a valid Turkish phone number.');
      return false;
    }

     window.location.href = 'submit.html';
    return false;
  } catch (error) {
    console.error('Error validating form:', error);
    return false;
  }
}

populateDropdowns();
