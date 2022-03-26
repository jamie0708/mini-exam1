import React from "react";
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'

function Posts() {
  const navigate = useNavigate()
  const params = useParams()
  const [posts,
    setPosts] = React.useState([])
  React.useEffect(() => {
    const handlePosts = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const data = await res.json()
      setPosts(data)
    }
    handlePosts()
  }, [params.id])
  const userPosts = posts.filter(post => post.userId == params.id)
  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="text-uppercase fst-italic fw-bold">Posts page:</h1>
        <Button onClick={() => navigate(-1)} variant="contained" type="button">{"< "}
          Back</Button>
      </div>
      <ul className="row">
        {userPosts
          ?.length > 0 && userPosts
            ?.map(post => (
              <li className="col-4 g-3" key={post.id}>
                <Card sx={{
                  minWidth: 275
                }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Title: {post.title}
                    </Typography>

                    <Typography
                      sx={{
                      mb: 1.5
                    }}
                      color="text.secondary">
                      Text: {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigate(`/comments/${post.id}`)} size="large">Comments</Button>
                  </CardActions>
                </Card>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Posts;