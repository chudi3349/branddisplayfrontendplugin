function save(postId) {
  const locationInput = document.getElementById('location');
  const selectedLocation = locationInput.value;

  const data = {
    postId: postId,
    location: selectedLocation,
  };

  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Post saved with location:', selectedLocation);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



function openModal(postId) {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';


  fetch(`http://localhost:3000/${postId}`)
    .then(response => response.json())
    .then(data => {
      myData = data[0];
      const modal = document.getElementById('myModal');
      modal.innerHTML =`
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <form action="" name="formEdit" onsubmit="return editPost(event)" method="put" enctype="multipart/form-data">
          <!-- Form content here -->
          <!-- ... -->
          <input type="file" id="imgEdit" name="imgEdit" accept="image/*" required>
          <ul>
              <p id="myId">${myData.id}</p>
              <li>
                <label for="mediaEdit">Media Type:</label><br>
                <input type="text" id="mediaEdit" name="mediaEdit"  value= "${myData.mediaType}" />
              </li><br>
              <li>
                <label for="dimensionEdit">Dimension:</label><br>
                <input type="text" id="dimensionEdit" name="dimension" value= "${myData.dimension}" />
              </li><br>
              <li>
                <label for="imageEdit">Image Area:</label><br>
                <input type="text" id="imageEdit" name="image_area" value= "${myData.imageArea}" />
              </li><br>
              <li>
                <label for="materialEdit">Material:</label><br>
                <input type="text" id="materialEdit" name="material" value= "${myData.material}" />
              </li><br>
              <li>
                <label for="finishingEdit">Finishing:</label><br>
                <input type="text" id="finishingEdit" name="finishing" value= "${myData.finishing}" />
              </li><br>
              <li>
                <label for="trafficEdit">Traffic Speed:</label><br>
                <input type="text" id="trafficEdit" name="traffic_speed" value= "${myData.trafficSpeed}" />
              </li><br>
              <li>
                <label for="traffic_countEdit">Traffic Count:</label><br>
                <input type="text" id="traffic_countEdit" name="traffic_count" value= "${myData.trafficCount}" />
              </li><br>
              <li>
                <label for="franchiseEdit">Franchise:</label><br>
                <input type="text" id="franchiseEdit" name="franchise" value= "${myData.franchise}" />
              </li><br>
              <li>
                <label for="visibilityEdit">Visibility:</label><br>
                <input type="text" id="visibilityEdit" name="visibility" value= "${myData.visibility}" />
              </li><br>
              <li>
                <label for="approachEdit">Approach:</label><br>
                <input type="text" id="approachEdit" name="approach" value= "${myData.approach}" />
              </li><br>
              <li>
                <label for="illuminationEdit">Illumination:</label><br>
                <input type="text" id="illuminationEdit" name="illumination" value= "${myData.illumination}" />
              </li><br>
              <li>
                <label for="availabilityEdit">Availability:</label><br>
                <input type="text" id="availabilityEdit" name="availability" value= "${myData.availability}" />
              </li><br>
              <li>
                <label for="annualEdit">Annual Rate:</label><br>
                <input type="text" id="annualEdit" name="annual_rate" value= "${myData.annualRate}" />
              </li><br>
              <li>
                <label for="geoEdit">Geo Tags:</label><br>
                <input type="text" id="geoEdit" name="geo_tags" value= "${myData.geoTags}" />
              </li>
            </ul>

            <br>
            <multi-input>
            <label for="location">Display Location:</label>
            <input id="locationEdit" class="select" list="languages">
            <datalist id="languages">
              <option value="Aba"></option>
              <option value="Abakiliki"></option>
              <option value="Abuja"></option>
              <option value="Asaba"></option>
              <option value="Benin"></option>
              <option value="Calabar"></option>
              <option value="Enugu"></option>
              <option value="Lagos"></option>
              <option value="Ogidi"></option>
              <option value="Onitsha"></option>
              <option value="Opi"></option>
              <option value="PH"></option>
              <option value="Uyo"></option>
              <option value="Warri"></option>
              <option value="Yenagoa"></option>
              <option value="Yola"></option>
              <option value="Zaria"></option>
            </datalist>
          </multi-input>
          <input id="myAnchor" type="submit" value="Submit" class="submit-btn" />
        </form>
      </div>
      `
    })

}


function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}


function fetchData() {
  fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('dataContainer');
      container.innerHTML = ''; // Clear previous data

      data.forEach(item => {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('data-container');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imageElement = document.createElement('img');
        imageElement.classList.add('image-element');
        imageElement.src = item.picture;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        cardContent.innerHTML = `
          <span style="font-weight: 700;">Media Type:</span> ${item.mediaType}<br>
          <span style="font-weight: 700;">Dimension:</span> ${item.dimension}<br>
          <span style="font-weight: 700;">Image area:</span> ${item.imageArea}<br>
          <span style="font-weight: 700;">Material:</span> ${item.material}<br>
          <span style="font-weight: 700;">Finishing:</span> ${item.finishing}<br>
          <span style="font-weight: 700;">Traffic Speed:</span> ${item.trafficSpeed}<br>
          <span style="font-weight: 700;">Traffic count:</span> ${item.trafficCount}<br>
          <span style="font-weight: 700;">Franchise:</span> ${item.franchise}<br>
          <span style="font-weight: 700;">Visibility - facing:</span> ${item.visibility}<br>
          <span style="font-weight: 700;">Approach:</span> ${item.approach}<br>
          <span style="font-weight: 700;">Illumination:</span> ${item.illumination}<br>
          <span style="font-weight: 700;">Availability:</span> ${item.availability}<br>
          <span style="font-weight: 700;">Annual Rate:</span> ${item.annualRate}<br>
          <span style="font-weight: 700;">Geo Tags:</span> ${item.geoTags}<br>
          <!-- Rounded switch -->
          <span>
          <p>Available: </p>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
          </span>
        `;

        cardDiv.appendChild(imageElement);
        cardDiv.appendChild(cardContent);

        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');
        cardButtons.innerHTML = `
        <button onclick="save(${item.id})">Save</button>
          <button style="Background-color: Blue" onclick="openModal(${item.id})">Edit</button>
          <button style="Background-color: Red" onclick="deletePost(${item.id})">Delete</button>
        `;

        dataContainer.appendChild(cardDiv);
        dataContainer.appendChild(cardButtons);

        container.appendChild(dataContainer);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



function postForm(event) {
  event.preventDefault();

  // Create a new FormData object
  const formData = new FormData();

  // Get the form field values
  const mediaType = document.forms["form"]["media_type"].value;
  const dimension = document.forms["form"]["dimension"].value;
  const imageArea = document.forms["form"]["image_area"].value;
  const material = document.forms["form"]["material"].value;
  const finishing = document.forms["form"]["finishing"].value;
  const trafficSpeed = document.forms["form"]["traffic_speed"].value;
  const trafficCount = document.forms["form"]["traffic_count"].value;
  const franchise = document.forms["form"]["franchise"].value;
  const visibility = document.forms["form"]["visibility"].value;
  const approach = document.forms["form"]["approach"].value;
  const illumination = document.forms["form"]["illumination"].value;
  const availability = document.forms["form"]["availability"].value;
  const annualRate = document.forms["form"]["annual_rate"].value;
  const geoTags = document.forms["form"]["geo_tags"].value;
  const picture = document.forms["form"]["img"].files[0];
  const locationName = document.getElementById('location').value;

  console.log(locationName);

  // Append the form field values to the FormData object
  formData.append('mediaType', mediaType);
  formData.append('dimension', dimension);
  formData.append('imageArea', imageArea);
  formData.append('material', material);
  formData.append('finishing', finishing);
  formData.append('trafficSpeed', trafficSpeed);
  formData.append('trafficCount', trafficCount);
  formData.append('franchise', franchise);
  formData.append('visibility', visibility);
  formData.append('approach', approach);
  formData.append('illumination', illumination);
  formData.append('availability', availability);
  formData.append('annualRate', annualRate);
  formData.append('geoTags', geoTags);
  formData.append('picture', picture);
  formData.append('locationName', locationName);

  // Send the FormData object via fetch
  fetch('http://localhost:3000/add', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(data => {
      location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


// API edit function
function editPost(event) {
  event.preventDefault();

  // Get the document Id
  const postId = document.getElementById("myId").innerText;

  // Get the form field values
  const mediaType = document.forms["formEdit"]["mediaEdit"].value;
  const dimension = document.forms["formEdit"]["dimensionEdit"].value;
  const imageArea = document.forms["formEdit"]["imageEdit"].value;
  const material = document.forms["formEdit"]["materialEdit"].value;
  const finishing = document.forms["formEdit"]["finishingEdit"].value;
  const trafficSpeed = document.forms["formEdit"]["trafficEdit"].value;
  const trafficCount = document.forms["formEdit"]["traffic_countEdit"].value;
  const franchise = document.forms["formEdit"]["franchiseEdit"].value;
  const visibility = document.forms["formEdit"]["visibilityEdit"].value;
  const approach = document.forms["formEdit"]["approachEdit"].value;
  const illumination = document.forms["formEdit"]["illuminationEdit"].value;
  const availability = document.forms["formEdit"]["availabilityEdit"].value;
  const annualRate = document.forms["formEdit"]["annualEdit"].value;
  const geoTags = document.forms["formEdit"]["geoEdit"].value;
  const picture = document.forms["formEdit"]["imgEdit"].files[0];
  const locationName = document.getElementById('locationEdit').value;

  // Create a new FormData object
  const myformData = new FormData();

  // Append the form field values and image to the FormData object
  myformData.append('mediaType', mediaType);
  myformData.append('dimension', dimension);
  myformData.append('imageArea', imageArea);
  myformData.append('material', material);
  myformData.append('finishing', finishing);
  myformData.append('trafficSpeed', trafficSpeed);
  myformData.append('trafficCount', trafficCount);
  myformData.append('franchise', franchise);
  myformData.append('visibility', visibility);
  myformData.append('approach', approach);
  myformData.append('illumination', illumination);
  myformData.append('availability', availability);
  myformData.append('annualRate', annualRate);
  myformData.append('geoTags', geoTags);
  myformData.append('picture', picture);
  myformData.append('locationName', locationName);

  console.log(myformData);

  fetch(`http://localhost:3000/edit/${postId}`, {
    method: 'PUT',
    body: myformData, // Use the FormData object as the request body
  })
    .then(response => response.text())
    .then(data => {
      alert("Data Updated");
      location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}




// API Delete function
function deletePost(postId) {
  fetch(`http://localhost:3000/delete/${postId}`, {
    method: 'DELETE',
  })
    .then(response => response.text())
    .then(data => {
      console.log('Post deleted successfully:', postId);

      // Reload page after successful deletion
      location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

