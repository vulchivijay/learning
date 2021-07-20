

async function getUsers() {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let data = await response.json();
    return data;
  }
getUsers().then(data => console.log(data));

or

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    // by default the response comes in the string format, we need to parse the data into JSON
    console.log(JSON.parse(request.response));
  } else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};

var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}

or 


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  success: function(result) {
    console.log(result);
  },
  error: function(error) {
    console.log(error);
  }
});
</script>

or

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  axios
 .get("https://jsonplaceholder.typicode.com/users")
 .then(response => {
   console.log(response.data);
 })
 .catch(error => console.error(error));
</script>
