function fetchData(event) {
  event.preventDefault();
  fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('dataContainer');
      container.innerHTML = ''; // Clear previous data

      console.log(data);
      data.forEach(item => {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('card');

        const productTitle = document.createElement('p');
        productTitle.classList.add('card-title');
        productTitle.innerHTML = "Product Name";

        const imageElement = document.createElement('img');
        imageElement.classList.add('image-element');
        imageElement.src = item.picture;

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('small-desc');

        cardDiv.innerHTML = `
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
          <span style="font-weight: 700;">Geo Tags:</span> ${item.geoTags}<br><br>
        `;

        dataContainer.appendChild(productTitle);
        dataContainer.appendChild(imageElement);
        dataContainer.appendChild(cardDiv);

        container.appendChild(dataContainer);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
