// handleSubmit(event) {
//   event.preventDefault();
//   const { name, email, message } = this.state;
//   // save message in data.json
//   const data = {
//     name,
//     email,
//     message
//   };
//   axios.post('/data', data)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));
//   // show message popup
//   alert("Thanks a lot for reaching me out. I will contact you as soon as possible.");
//   // clear form
//   this.setState({
//     name: '',
//     email: '',
//     message: ''
//   });
// }
