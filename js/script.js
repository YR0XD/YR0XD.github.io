function showDisease(disease, btn) {
  let html = '';
  if (disease === 'parkinson') {
    html = `
      <div class="upload-section">
        <h2>Parkinson's Disease</h2>
        <p>This AI is designed to help diagnose symptoms of Parkinson's disease. It is 99 percent accurate. To use, speak in a steady voice for about 5 seconds and place your voice in the box below.</p>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <label for="audio-upload" class="file-label">Choose Audio File</label>
          <input id="audio-upload" class="file-input" type="file" accept="audio/*" onchange="document.getElementById('file-name').innerText = this.files[0]?.name || ''">
          <div class="file-name" id="file-name"></div>
          <button class="submit-btn" onclick="alert('Voice submitted! Processing will be added soon.')">Submit</button>
        </form>
      </div>
    `;
  } else if (disease === 'ms') {
    html = `
      <div class="ms-upload-section">
        <h2>Multiple Sclerosis(MS) Disease</h2>
        <p>This AI is designed to help diagnose symptoms of Parkinson's disease. It is 99 percent accurate. To use, speak in a steady voice for about 5 seconds and place your voice in the box below.</p>
        <label for="ms-upload" class="ms-file-label">Choose Image File</label>
        <input id="ms-upload" class="ms-file-input" type="file" accept="image/*" onchange="document.getElementById('ms-file-name').innerText = this.files[0]?.name || ''">
        <div class="ms-file-name" id="ms-file-name"></div>
        <button class="ms-submit-btn" onclick="alert('Image submitted! Processing will be added soon.')">Submit</button>
      </div>
    `;
  } else if (disease === 'brainTumor') {
    html = `
      <div class="bt-upload-section">
        <h2>Brain Tumor Disease</h2>
        <p>This AI is designed to help diagnose symptoms of Parkinson's disease. It is 99 percent accurate. To use, speak in a steady voice for about 5 seconds and place your voice in the box below.</p>
        <label for="bt-upload" class="bt-file-label">Choose Image File</label>
        <input id="bt-upload" class="bt-file-input" type="file" accept=".nii" onchange="document.getElementById('bt-file-name').innerText = this.files[0]?.name || ''">
        <div class="bt-file-name" id="bt-file-name"></div>
        <button class="bt-submit-btn" onclick="alert('Image submitted! Processing will be added soon.')">Submit</button>
      </div>
    `;
  } else if (disease === 'boneLoss') {
    html = `
      <div class="bl-upload-section">
        <h2>Bone Loss Disease</h2>
        <p>This AI is designed to help diagnose symptoms of Parkinson's disease. It is 99 percent accurate. To use, speak in a steady voice for about 5 seconds and place your voice in the box below.</p>
        <label for="bl-upload" class="bl-file-label">Choose Image File</label>
        <input id="bl-upload" class="bl-file-input" type="file" accept="image/*" onchange="document.getElementById('bl-file-name').innerText = this.files[0]?.name || ''">
        <div class="bl-file-name" id="bl-file-name"></div>
        <button class="bl-submit-btn" onclick="alert('Image submitted! Processing will be added soon.')">Submit</button>
      </div>
    `;
  } else if (disease === 'about') {
    html = `
      <div class="about">
        <h2>About Us</h2>
        <p>This AI is designed to help diagnose symptoms of Parkinson's disease. It is 99 percent accurate. To use, speak in a steady voice for about 5 seconds and place your voice in the box below.</p>
    `;
  } else {
    html = `<h2>${disease} page coming soon</h2>`;
  }

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('about').style.display = 'none';

  let buttons = document.querySelectorAll('#disease-nav button');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function showAbout() {
  document.getElementById('main-content').innerHTML = '';
  document.getElementById('about').style.display = 'block';

  let buttons = document.querySelectorAll('#disease-nav button');
  buttons.forEach(b => b.classList.remove('active'));
}
