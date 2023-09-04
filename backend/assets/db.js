function updateResponse(item, value) {
    let text = document.getElementById("successapply");
    text.innerText = "Successfully changed " + item + " to: " + value + " !";
    text.className = "successclass";
}
function badResponse(item, value) {
    let text = document.getElementById("successapply");
    text.innerText = "Could not change " + item + " to: " + value + " ! Item was invalid";
    text.className = "errorclass";
}


function applyUpdate(accountId, Item, Value) {

  // update type and validation and stuff
  let type = "amount";
  let required = "int";
  
  if(Item == "level") {
     type = "amount";
     required = "int";
  }
  if(Item == "vbucks") {
     type = "amount";
    required = "int";
  }
  if(Item == "crowns") {
     type = "amount";
    required = "int";
  }
   // update type and validation and stuff to require background
  if(Item == "background") {
     type = "urlBody";
     required = "url";
  }
  if(Item == "gift") {
    type = "giftParams";
    required = "giftParams";
  }
    // check if background url has http or https, (if not, the user just did example.com instead of https://example.com)
  
  if(Item == "background" && !Value.includes("https://") && !Value.includes("http://")) {
    Value = "https://" + Value;
  }

  // Verify accountId is not empty and has exactly 32 characters (useless profile prevention)
  if (accountId === '' || accountId.length !== 32) {
    alert('Please enter a valid account ID.');
    return;
  }

  // Validate value is a number between 1 and 99999
  if (required == "int" && type == "amount") {
    if(isNaN(Value) || Value < 1 || Value > 999999) {
     alert(`Please enter a valid ${Item} amount between 1 and 999999.`);
    }
    return;
  }
  
  // requestbody be accessable outside the if statement.
 let requestBody = null;
 let url = `https://vixenfn.tk/dashboard/${Item}/${accountId}?amount=${Value}`;
  
  if(required == "urlBody") {
    // redefine url and define body to allow auto updating request to other types!
      url = `https://vixenfn.tk/dashboard/${Item}/${accountId}/`;
      requestBody = `{ "${Item}": "${Value}" }`;
  }
  
  if(required == "giftParams") {
      
      // redefine url and define body to allow auto updating request to other types!
      url = `https://vixenfn.tk/dashboard/${Item}/${accountId}/`;
      requestBody = `{ "${Item}": "${Value}" }`;
      
  }
  
  if(required == "int" && type == "amount" && Item.includes(`${Item}=NaN`)) {
    alert(`Please enter a valid ${Item} amount between 1 and 999999.`);
  }
  // make request
  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response if needed
      if(data == "ok") {
        updateResponse("level", level)
      } else if(data == "bad") {
        badResponse("level", level)
      }
      console.log('Response:', data);
    })
    .catch((error) => {
      // Handle errors if any
      console.error('Error:', error);
    });
}

function updateLevel() {
  const levelInput = document.getElementById('level');
  const accountId = document.getElementById('accountId').value.trim();

  // Verify accountId is not empty and has exactly 32 characters
  if (accountId === '' || accountId.length !== 32) {
    alert('Please enter a valid account ID with 32 characters.');
    return;
  }

  const level = parseInt(levelInput.value);

  // Validate level is a number between 1 and 99999
  if (isNaN(level) && level < 1 && level > 99999) {
    alert('Please enter a valid level between 1 and 99999.');
    return;
  }
  
 let url = `https://vixenfn.tk/dashboard/level/${accountId}?amount=${level}`;
  if(url.includes("level=NaN")) {
    alert('Please enter a valid level amount between 1 and 9999999.');
    return;
  }
  
  fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response if needed
      if(data == "ok") {
        updateResponse("level", level)
      } else if(data == "bad") {
        badResponse("level", level)
      }
      console.log('Response:', data);
    })
    .catch((error) => {
      // Handle errors if any
      console.error('Error:', error);
    });
}

function updateCrowns() {
  const crownsInput = document.getElementById('crowns');
  const accountId = document.getElementById('accountId').value.trim();

  // Verify accountId is not empty and has exactly 32 characters
  if (accountId === '' || accountId.length !== 32) {
    alert('Please enter a valid account ID with 32 characters.');
    return;
  }

  const crowns = parseInt(crownsInput.value);

  // Validate level is a number between 1 and 99999
  if (isNaN(crowns) && crowns < 1 && crowns > 99999) {
    alert('Please enter a valid crown amount between 1 and 99999.');
    return;
  }
 let url = `https://vixenfn.tk/dashboard/crowns/${accountId}?amount=${crowns}`;
  if(url.includes("crowns=NaN")) {
    alert('Please enter a valid crown amount between 1 and 9999999.');
    return;
  }
  fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response if needed
      if(data == "ok") {
        updateResponse("crowns", crowns)
      } else if(data == "bad") {
        badResponse("crowns", crowns)
      }
      console.log('Response:', data);
    })
    .catch((error) => {
      // Handle errors if any
      console.error('Error:', error);
    });
}
function updateVbucks() {
  const vbucksInput = document.getElementById('vbucks');
  const accountId = document.getElementById('accountId').value.trim();

  // Verify accountId is not empty and has exactly 32 characters
  if (accountId === '' || accountId.length !== 32) {
    alert('Please enter a valid account ID with 32 characters.');
    return;
  }

  const vbucks = parseInt(vbucksInput.value);

  // Validate vbucks is a number between 1 and 99999
  if (isNaN(vbucks) && vbucks < 1 && vbucks > 9999999) {
    alert('Please enter a valid vbuck amout between 1 and 9999999.');
    return;
  }
  let url = `https://vixenfn.tk/dashboard/vbucks/${accountId}?amount=${vbucks}`;
  if(url.includes("vbucks=NaN")) {
    alert('Please enter a valid vbuck amount between 1 and 9999999.');
    return;
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    
    .then((response) => response.text())
    .then((data) => {
      // Handle the response if needed
      if(data == "ok") {
        updateResponse("vbucks", vbucks)
      } else if(data == "bad") {
        badResponse("vbucks", vbucks)
      }
      console.log('Response:', data);
    })
    .catch((error) => {
      // Handle errors if any
      console.error('Error:', error);
    });
}