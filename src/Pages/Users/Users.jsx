import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'

function Users() {
  const navigate = useNavigate()
  const [users,
    setUsers] = React.useState([]);
  React.useEffect(() => {
    const handleUsers = async() => {
      const res = await fetch('https://reqres.in/api/users?page=1')
      const data = await res.json()
      setUsers([...data.data])
    }
    handleUsers()
  }, []);

  return (
    <div className="container pt-3 pb-5">
      <h1 className="text-uppercase fst-italic fw-bold">Users page:</h1>
      <ul className="row">
        {users.map(user => (
          <li className="col-4 g-3" key={user.id}>
            <Card sx={{
              maxWidth: 345
            }}>
              <CardMedia
                component="img"
                height="350"
                image={user.avatar}
                alt={user.first_name + " " + user.last_name + "'s avatar"}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.first_name + " " + user.last_name}
                </Typography>
                <Typography className="mb-3" variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam
                  quisquam sint dignissimos animi sequi inventore sunt adipisci, fugiat
                  recusandae.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(`/posts/${user.id}`)} size="large">See posts</Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users;