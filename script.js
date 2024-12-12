document.getElementById('generateButton').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    // Check if seed should be randomized
    let seed = document.getElementById('seed').value;
    const randomSeedChecked = document.getElementById('randomSeed').checked;
    
    if (randomSeedChecked) {
        // Randomize seed between 0 and 10000000000000
        seed = Math.floor(Math.random() * 10000000000000);
    } else {
        seed = parseInt(seed) || 20;  // Default value if empty or NaN
    }

    const model = document.getElementById('model').value;
    const noLogo = document.getElementById('noLogo').checked;
    const enhance = document.getElementById('enhance').checked;
    const privateChecked = document.getElementById('private').checked;

    // Construct the API URL
    let apiUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}`;
    
    apiUrl += `&model=${model}`;
    apiUrl += `&nologo=${noLogo}`;
    apiUrl += `&enhance=${enhance}`;
    apiUrl += `&private=${privateChecked}`;

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = apiUrl;
    link.target = '_blank'; // Open in new tab

    // Append to body (needed for Firefox)
    document.body.appendChild(link);

    // Trigger click on the link
    link.click();

    // Remove the link after triggering
    document.body.removeChild(link);
});
