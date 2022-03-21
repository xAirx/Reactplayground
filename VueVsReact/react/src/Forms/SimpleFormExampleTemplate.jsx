function Form(props) {
  const [userinput, changeValue] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${userinput}`);
    props.onSubmit(res.data);
    const clean = () => changeValue('');
    clean();
  }
  return (
    <div>
      <div style={{textAlign:"center", fontWeight:"bolder", fontSize:30}}> Add GitHub Users:</div>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={userinput}
          placeholder="GitHub UserName..." required
          onChange={(e) => changeValue(e.target.value)}
        />
        <button>Add User</button>
      </form>
    </div>
  );
}
‎