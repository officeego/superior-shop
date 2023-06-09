const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    marginTop: 2,
    minHeight: '80vh',
  },
  footer: {
    marginTop: 1,
    textAlign: 'center',
    //
    backgroundColor: 'gray',
    paddingBottom: '50px',
    letterSpacing: '4px',
    padding:'10px',
  },
  //
  facebook: {
    color: 'blue',

  },
  instagram: {
  color: '#962fbf',
  letterSpacing: '5px',
  },
  twitter: {
    color: 'black',
  },

  customercare:{
    color: 'wheat',
    display: 'flex',
    justifyContent: 'center',
    // textAlign: 'center',
    backgroundColor: 'darkgray',
    padding: '8px',
    boxShadow: '30px 30px 30px',
    fontWeight: 'bold',
  },
  whatsapp: {
    color: 'green',
    
  },

  //
  appbar: {
    // backgroundColor: '#203040',
    backgroundColor: 'gray',
    // backgroundColor: '#09353d',
    // position:'fixed',
    // zIndex: '1',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  // search
  categorysort:{
    backgroundColor:'gray',
  },
  clossbar:{
    backgroundColor: 'yellow',
    color:'red',
    borderRadius: '50px',
  },
  aboutus:{
    backgroundColor:'red',
   
    flexDirection:'column',
  },

  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    // borderRadius: 1,
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 1,
    color: 'green',
    width: '220px',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: '#f8c040',
    color:'green',
    padding: 1,
    // borderRadius: '0 5px 5px 0',
    borderRadius: 5,
    '& span': {
      color: '#000000',
    },
  },
};

export default classes;
