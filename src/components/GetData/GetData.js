async function GetData() {
let data = fetch('db.json')
    .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);

        return false;
      } else return response.json().then(data => { return data });      
    }).catch(function(err) {
      console.log('Fetch Error :-S', err);
      
      return false;
    });
  return data;
}

export default GetData;

