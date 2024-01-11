import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'; // Import Spacer for better spacing

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  const Tasks=()=>{
    return 
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Property Plateau</h1>
        </Link>
        <nav>

        {user && (
            <Button colorScheme="teal" size="md" mr="2" onClick={Tasks}>
              Tasks
            </Button>
          )}

          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              {/* you can click on this to remove signup */}
              <Link to="/signup">Signup</Link>
            </div>
          )}

          
        </nav>
      </div>
    </header>
  )
}

export default Navbar