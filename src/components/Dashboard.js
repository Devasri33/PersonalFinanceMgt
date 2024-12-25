const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/accounts')
      .then(res => setAccounts(res.data))
      .catch(err => console.error('Error fetching accounts!', err));
  }, []);

  const addAccount = (newAccount) => setAccounts([...accounts, newAccount]);

  const deleteAccount = (id) => {
    setAccounts(accounts.filter(account => account._id !== id));
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={() => setShowModal(true)}>Add Account</button>
      <AccountList accounts={accounts} deleteAccount={deleteAccount} />
      {showModal && <AddAccountModal addAccount={addAccount} closeModal={() => setShowModal(false)} />}
    </div>
  );
};
